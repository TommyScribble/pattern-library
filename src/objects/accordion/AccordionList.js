import React from 'react';
import propTypes from 'prop-types';

const AccordionList = props => {
  // const { listItems } = props;

  const listItems = [
    {
      title: 'test 1',
      content:
        'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum'
    },
    {
      title: 'test2',
      content:
        'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum'
    },
    {
      title: 'test3',
      content:
        'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum'
    },
    {
      title: 'test4',
      content:
        'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum'
    }
  ];

  return listItems.map(listItem => (
    <li key={listItem.title}>
      <button aria-controls={listItem.title} aria-expanded={false}>
        <span>{listItem.title}</span>
        <i />
      </button>
      <div id={listItem.title} hidden>
        <p>{listItem.content}</p>
      </div>
    </li>
  ));
};

AccordionList.propTypes = {
  listItems: propTypes.array
};

export default AccordionList;
