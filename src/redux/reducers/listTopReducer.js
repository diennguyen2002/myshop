

function listTopReducer(state = [], action){
    if(action.type === 'FETCH_TOP_LIST') {
        return action.topList 
    }
    return state;
}

export default listTopReducer;