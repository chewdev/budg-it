import React from 'react';

export default class PageListItem extends React.Component {
    setPage = () => {
        this.props.setExpensePage(this.props.pageNumber);
    }

    determineClasses = () => {
        let classes = "";
        classes += this.props.isExpenseList ? "page-list__item" : "page-list__item-income";
        classes += this.props.pageNumber === this.props.currPage ? " page-list__item--focus" : "";
        classes += this.props.pageNumber === this.props.currPage && !this.props.isExpenseList ? " page-list__item-income--focus" : "";
        return classes;
    }
    render(props) {
        return(<button className={this.determineClasses()} onClick={this.setPage}>{this.props.pageNumber}</button>);
    }
};

//this.props.isExpenseList ? "page-list__item" : "page-list__item-income"