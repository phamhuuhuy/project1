import * as api from "../api";

export const getPosts = () => async (dispatch) =>{
    try {
        const {data} = await api.fetchPosts()
        dispatch({type: 'FETCH_DATA', payload: data})
    } catch (error) {
        console.log(error.messages)
    }
}