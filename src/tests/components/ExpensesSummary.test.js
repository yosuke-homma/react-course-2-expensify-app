import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpenseSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />)
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpenseSummary with multipe expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={2573892374} />)
  expect(wrapper).toMatchSnapshot();
});