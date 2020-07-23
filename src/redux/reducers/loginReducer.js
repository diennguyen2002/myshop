
function loginReducer(state = '', action){
    if(action.type === 'PUT_LOGIN' || action.type === 'PUT_LOGOUT'){
        return action.token
    }
    return state;
}

export default loginReducer;