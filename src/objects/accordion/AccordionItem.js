import React from 'react';
import propTypes from 'prop-types';

class AccordionItem extends React.Component {
  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label }
    } = this;

    return (
      <div
        style={{
          background: isOpen ? '#e27d00' : '#E20016',
          padding: '5px 10px'
        }}
      >
        <div onClick={onClick} style={{ cursor: 'pointer' }}>
          {label}
          <div style={{ float: 'right' }}>
            {!isOpen && <span>&#9650;</span>}
            {isOpen && <span>&#9660;</span>}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              background: '#6db65b',
              marginTop: 10,
              padding: '10px 20px'
            }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

AccordionItem.propTypes = {
  children: propTypes.instanceOf(Object).isRequired,
  isOpen: propTypes.bool,
  label: propTypes.string,
  onClick: propTypes.func,
  style: propTypes.string
};

export default AccordionItem;
