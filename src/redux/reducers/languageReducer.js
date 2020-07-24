
function languageReducer(state = 'vietnamese', action){
    if(action.type === 'FETCH_LANGUAGE' || action.type === 'PUT_LANGUAGE'){
        return action.language
    }
    return state;
}

export default languageReducer;