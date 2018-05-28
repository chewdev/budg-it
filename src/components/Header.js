import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startLogout, logout } from '../actions/auth';
import { withRouter } from 'react-router';
import { setExpenses } from '../actions/expenses';
import { setIncomes } from '../actions/income';

export class Header extends React.Component {
    static propTypes = {
        history: PropTypes.object.isRequired
    }

    render() {
        return (
            <header className="header">
                <div className="content-container">
                    <div className="header__content">
                        <Link className="header__title" to='/dashboard'>
                            <h1>Budg-It</h1>
                        </Link>
                        {this.props.uid !== 'anon' ? (
                            <button className="btn btn--logout" onClick={this.props.startLogout}>Logout</button>
                        ) : (
                            <button className="btn btn--logout" onClick={this.props.logout}>Return To Login</button>
                        )
                        }
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        uid: state.auth.uid
    };
};

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()).then(() => dispatch(setExpenses([]))).then(() => dispatch(setIncomes([]))),
    logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));