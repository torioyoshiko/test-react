const url = 'http://localhost:3001/result'
const fetchSuccess = 'FETCH_POSTS_SUCCESS'

const getInfo = () => dispatch => fetch(url, {
    method: 'get',
})
    .then(response => response.json())
    .then((data) => {
        dispatch({ type: fetchSuccess, payload: data })
    })
    .catch(error => console.log('Request failed ', error))

export default getInfo;