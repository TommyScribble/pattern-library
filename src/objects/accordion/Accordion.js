import React from 'react';
import propTypes from 'prop-types';
import AccordionItem from './AccordionItem';

class Accordion extends React.Component {
  static defaultProps = {
    allowMultipleOpen: false
  };

  constructor(props) {
    super(props);

    const openSections = {};

    this.props.children.forEach(child => {
      if (child.props.isOpen) {
        openSections[child.props.label] = true;
      }
    });

    this.state = { openSections };
  }

  onClick = label => {
    const {
      props: { allowMultipleOpen },
      state: { openSections }
    } = this;

    const isOpen = !!openSections[label];

    if (allowMultipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [label]: !isOpen
        }
      });
    } else {
      this.setState({
        openSections: {
          [label]: !isOpen
        }
      });
    }
  };

  render() {
    const {
      onClick,
      props: { children },
      state: { openSections }
    } = this;

    return (
      <div style={{ border: '2px solid #008f68' }}>
        {children.map(child => (
          <AccordionItem
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
          >
            {child.props.children}
          </AccordionItem>
        ))}
      </div>
    );
  }
}

Accordion.propTypes = {
  allowMultipleOpen: propTypes.bool,
  children: propTypes.instanceOf(Object).isRequired
};

export default Accordion;
