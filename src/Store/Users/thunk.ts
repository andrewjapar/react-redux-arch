import { Dispatch } from 'redux';
import actions from './actions';
import axios from 'axios';

export const fetchUsers = () => async (
    dispatch: Dispatch
  ) => {

    dispatch(actions.fetchUsers.request());

    return axios.get("https://jsonplaceholder.typicode.com/users").then(function (response) {
        dispatch(actions.fetchUsers.success(response.data))    
    }).catch(function (error) {
        dispatch(actions.fetchUsers.failure("ERRRORORO"))
    })
}
