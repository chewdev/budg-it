import authReducer from '../../reducers/auth';

test('should set uid of user upon login', () => {
    const uid = '123456abc';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action);
    expect(state).toEqual({ uid });
});

test('should remove uid when logged out', () => {
    const uid = '123456abc';
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid }, action);
    expect(state).toEqual({});
});