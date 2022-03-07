import {
  database,
  ref,
  get,
  child,
  push,
  set,
  remove,
  update,
} from "../firebase/firebase";

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    const userExpensesRef = ref(database, `users/${uid}/expenses`);
    const newExpenseRef = push(userExpensesRef);

    return set(newExpenseRef, expense).then((ref) => {
      dispatch(
        addExpense({
          id: newExpenseRef.key,
          ...expense,
        })
      );
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const expenseToRemoveRef = ref(database, `users/${uid}/expenses/${id}`);
    return remove(expenseToRemoveRef).then(() => {
      dispatch(
        removeExpense({
          id,
        })
      );
    });
  };
};

export const removeExpensesChosen = (ids = []) => ({
  type: "REMOVE_EXPENSES_CHOSEN",
  ids,
});

export const startRemoveExpensesChosen = (ids = []) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    ids.forEach((id) => {
      const expenseToRemoveRef = ref(database, `users/${uid}/expenses/${id}`);
      return remove(expenseToRemoveRef).then(() => {
        dispatch(removeExpense({ id }));
      });
    });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const expenseToUpdateRef = ref(database, `users/${uid}/expenses/${id}`);
    return update(expenseToUpdateRef, updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return get(child(ref(database), `users/${uid}/expenses`)).then(
      (snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setExpenses(expenses));
      }
    );
  };
};
