// Income Reducer

const incomeReducerDefaultState = [];

export default (state = incomeReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return [...state, action.income];
    case "REMOVE_INCOME":
      return state.filter((income) => income.id !== action.id);
    case "REMOVE_INCOMES_CHOSEN":
      action.ids.forEach((id) => {
        state = state.filter((income) => income.id !== id);
      });
      return state;
    case "EDIT_INCOME":
      return state.map((income) => {
        if (income.id === action.id) {
          return {
            ...income,
            ...action.updates,
          };
        } else {
          return income;
        }
      });
    case "SET_INCOMES":
      return action.incomes;
    default:
      return state;
  }
};
