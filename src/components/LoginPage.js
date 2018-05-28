import React from 'react';
import { connect } from 'react-redux';
import { startLogin, loginNoUID } from '../actions/auth';

export const LoginPage = ({ startLogin, loginNoUID }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Budg-It</h1>
            <p>Don't wait to get your budget in order. The time to do it is now.</p>
            <button className="btn btn--login" onClick={startLogin}>Login with Google</button>
            <button className="btn btn--no-login" onClick={loginNoUID}>Continue without Login</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    loginNoUID: () => dispatch(loginNoUID())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);