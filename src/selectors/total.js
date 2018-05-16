
export default (expenses, income) => {
        if (income) {
            return ((income ? income.reduce((acc, income) => {
                return acc + income.amount;
            },0) : 0) - (expenses ? expenses.reduce((acc, expense) => {
                return acc + expense.amount;
            },0) : 0)) / 100;
        } else {
            return (expenses ? expenses.reduce((acc, expense) => {
                return acc + expense.amount;
            },0) : 0) / 100;
        }
};