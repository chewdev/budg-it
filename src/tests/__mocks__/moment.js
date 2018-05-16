// import actual moment library to mock library
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};