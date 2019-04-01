function postReducer(state = [], action) {
    if (action.type === 'FETCH_INFO_SUCCESS') {
        return state.concat(action.payload)
    }
    return state
}

export default postReducer
