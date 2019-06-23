import React from 'react';
import PageLayout from '../components/PageLayout';
// import Accordion from '../objects/accordion/Accordion';
import Accordion from '../objects/accordionNEW/Accordion';
import data from '../objects/accordionNEW/Data';

const accordion = props => {
	return (
		<PageLayout>
			<div>This is the accordion page</div>
			{/* 
	 // OLD ACCORDION 
	  <Accordion>
        <div label="Alligator Mississippiensis">
          <p>
            <strong>Common Name:</strong> American Alligator
          </p>
          <p>
            <strong>Distribution:</strong> Texas to North Carolina, United
            States
          </p>
          <p>
            <strong>Endangered Status:</strong> Currently Not Endangered
          </p>
        </div>
        <div label="Alligator Sinensis">
          <p>
            <strong>Common Name:</strong> Chinese Alligator
          </p>
          <p>
            <strong>Distribution:</strong> Eastern China
          </p>
          <p>
            <strong>Endangered Status:</strong> Critically Endangered
          </p>
        </div>
	  </Accordion> */}
			<Accordion data={data} />
		</PageLayout>
	);
};

export default accordion;
