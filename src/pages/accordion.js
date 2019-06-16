import React from 'react';
import PageLayout from '../components/PageLayout';
import Accordion from '../objects/accordion/Accordion';

const accordion = props => {
  return (
    <PageLayout>
      <div>This is the accordion page</div>
      <Accordion />
    </PageLayout>
  );
};

export default accordion;
