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

// ADD_INCOME
export const addIncome = (income) => ({
  type: "ADD_INCOME",
  income,
});

export const startAddIncome = (incomeData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = incomeData;
    const income = { description, note, amount, createdAt };
    const userIncomesRef = ref(database, `users/${uid}/incomes`);
    const newIncomeRef = push(userIncomesRef);

    return set(newIncomeRef, income).then((ref) => {
      dispatch(
        addIncome({
          id: newIncomeRef.key,
          ...income,
        })
      );
    });
  };
};

// REMOVE_INCOME
export const removeIncome = ({ id } = {}) => ({
  type: "REMOVE_INCOME",
  id,
});

export const startRemoveIncome = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const incomeToRemoveRef = ref(database, `users/${uid}/incomes/${id}`);
    return remove(incomeToRemoveRef).then(() => {
      dispatch(
        removeIncome({
          id,
        })
      );
    });
  };
};

export const removeIncomesChosen = (ids = []) => ({
  type: "REMOVE_INCOMES_CHOSEN",
  ids,
});

export const startRemoveIncomesChosen = (ids = []) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    ids.forEach((id) => {
      const incomeToRemoveRef = ref(database, `users/${uid}/incomes/${id}`);
      return remove(incomeToRemoveRef).then(() => {
        dispatch(removeIncome({ id }));
      });
    });
  };
};

// EDIT_INCOME
export const editIncome = (id, updates) => ({
  type: "EDIT_INCOME",
  id,
  updates,
});

export const startEditIncome = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const incomeToUpdateRef = ref(database, `users/${uid}/incomes/${id}`);
    return update(incomeToUpdateRef, updates).then(() => {
      dispatch(editIncome(id, updates));
    });
  };
};

// SET_INCOMES
export const setIncomes = (incomes) => ({
  type: "SET_INCOMES",
  incomes,
});

export const startSetIncomes = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return get(child(ref(database), `users/${uid}/incomes`)).then(
      (snapshot) => {
        const incomes = [];
        snapshot.forEach((childSnapshot) => {
          incomes.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setIncomes(incomes));
      }
    );
  };
};
