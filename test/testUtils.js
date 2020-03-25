import CheckPropTypes from 'check-prop-types';

/**
 * Return node(s) with the given data-test-attribute
 * @param {ShallowWrpapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test-attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test='${val}']`)
};

/**
 * Test to check whteher a warning is shown for propTypes
 * @param {variable} component - The name of the component being tested
 * @param {object} conformingProps - The props to be tested
 */
export const checkProps = (component, conformingProps) => {
	const propError = CheckPropTypes(
		component.PropTypes,
		conformingProps,
		'prop',
		component.name)
	expect(propError).toBeUndefined();
}