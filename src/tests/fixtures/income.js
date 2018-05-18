import moment from 'moment';

export default [
    {
        id: '10',
        description: 'Sold Book',
        note: '',
        amount: 2195,
        createdAt: 0
    },
    {
        id: '11',
        description: 'Paycheck',
        note: '',
        amount: 111195,
        createdAt: moment(0).subtract(10, 'days').valueOf()
    },
    {
        id: '12',
        description: 'Co-Worker Repayment',
        note: '',
        amount: 1000,
        createdAt: moment(0).add(12, 'days').valueOf()
    }
];