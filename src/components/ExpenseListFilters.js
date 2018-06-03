import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, setExpensePage, setIncomePage } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
        if (this.props.incomePage !== 1) {
            this.props.setIncomePage(1);
        }
        if (this.props.expensePage !== 1) {
            this.props.setExpensePage(1);
        }
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
        if (this.props.incomePage !== 1) {
            this.props.setIncomePage(1);
        }
        if (this.props.expensePage !== 1) {
            this.props.setExpensePage(1);
        }
    };
    onSortChange = (e) => {
        if (e.target.value === "amount") {
            this.props.sortByAmount(); 
        } else if (e.target.value === "date") {
            this.props.sortByDate();
        }
        if (this.props.incomePage !== 1) {
            this.props.setIncomePage(1);
        }
        if (this.props.expensePage !== 1) {
            this.props.setExpensePage(1);
        }
    };
    render() {
       return (
            <div>
                <div className="content-container">
                    <div className="input-filters">
                        <div className="input-filters__item">
                            <input 
                                type="text"
                                className="text-input"
                                placeholder="Search descriptions" 
                                value={this.props.filters.text} 
                                onChange={this.onTextChange}
                            />
                        </div>
                        <div className="input-filters__item">
                            <select
                                className="select" 
                                value={this.props.filters.sortBy} 
                                onChange={this.onSortChange}
                            >
                                <option value="date">Date</option>
                                <option value="amount">Amount</option>
                            </select>
                        </div>
                        <div className="input-filters__item">
                            <DateRangePicker
                                startDate={this.props.filters.startDate}
                                endDate={this.props.filters.endDate}
                                onDatesChange={this.onDatesChange}
                                focusedInput={this.state.calendarFocused}
                                onFocusChange={this.onFocusChange}
                                showClearDates={true}
                                numberOfMonths={1}
                                isOutsideRange={() => false}
                            />
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        expensePage: state.filters.expensePage,
        incomePage: state.filters.incomePage
    };
};

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setIncomePage: (num) => dispatch(setIncomePage(num)),
    setExpensePage: (num) => dispatch(setExpensePage(num))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);