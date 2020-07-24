function loadingReducer(state = false, action){
    if(action.type === 'PUT_LOADING'){
        console.log('PUT_LOADING')
        console.log(action.isLoading)
        return action.isLoading
    }
    return state;
}

export default loadingReducer;