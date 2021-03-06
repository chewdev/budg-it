import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class BudgForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : props.income ? props.income.description : '',
            note: props.expense ? props.expense.note : props.income ? props.income.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : props.income ? (props.income.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : props.income ? moment(props.income.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            // Set error state to 'Please provide description and amount (required values)
            this.setState(() => ({ error: 'Please provide a description and an amount' }));
        } else {
            // Clear error
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }
    render() {
        return (
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input
                        type="text"
                        className="text-input"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        className="text-input"
                        placeholder="Amount"
                        maxLength="15"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false }
                    />
                    <textarea
                        className="textarea"
                        placeholder="Add a note (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <div>
                        <button 
                            className={this.props.buttonText.includes("Expense") ? "btn btn--expense" : "btn btn--income"}
                        >
                            {this.props.buttonText}
                        </button>
                    </div>
                </form>
        )
    }
};