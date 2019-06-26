import React from 'react';
import PageLayout from '../components/PageLayout';
import Accordion from '../objects/accordion/Accordion';
import AccordionItem from '../objects/accordion/AccordionItem';

const accordion = props => {
	return (
		<PageLayout>
			<div>This is the accordion page</div>
			{/* <Accordion data={data} />   */}

			<Accordion multitabs={false}>
				<AccordionItem title={'Are alligators active at night?'}>
					<p>
						No matter how inviting the water, it makes sense to avoid it during
						times when alligators are most active. They typically feed at dusk
						and through the night, and may still be active at dawn.
					</p>
				</AccordionItem>
				<AccordionItem title={'Can alligators survive freezing weather?'}>
					<p>
						When it gets cold in the winter, alligators slow down. ...
						Alligators can even survive freezing conditions. They have been
						known to rise to the surface if the water is about to freeze, with
						their nostrils above the surface. This allows them to breathe
						through the ice as it forms.
					</p>
				</AccordionItem>
				<AccordionItem title={'What do you do if you see an alligator?'}>
					<p>
						If you happen to lock eyes with an alligator on land, forget running
						in a zigzag. Run away as fast as you can in a straight line.
						Alligators will typically chase a human only to defend their
						territory.
					</p>
				</AccordionItem>
				<AccordionItem
					title={'How do you tell if an alligator is in the water?'}>
					<p>
						Also, look for a slide area, stretching from the bank into the pond
						water. These two easily discernible signs indicate an alligators
						presence. During the summer months, alligators have their nesting
						periods, placing nests around the edges of ponds.
					</p>
				</AccordionItem>
				<AccordionItem title={'What are alligators afraid of?'}>
					<p>
						In fact, alligators are inclined to be afraid of humans. However,
						feeding alligators causes them to lose their natural fear of humans.
						... According to statute 372.667, it is a misdemeanor to feed
						alligators or crocodiles.
					</p>
				</AccordionItem>
			</Accordion>
		</PageLayout>
	);
};

export default accordion;
