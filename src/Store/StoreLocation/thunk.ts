import { Dispatch } from 'redux';
import actions from './actions';
import axios from 'axios';

export const fetchStoreLocation = () => async (
    dispatch: Dispatch
  ) => {

    dispatch(actions.fetchStoreLocations.request());

    return axios.get("https://jsonplaceholder.typicode.com/users").then(function (response) {
        dispatch(actions.fetchStoreLocations.success(response.data))    
    }).catch(function (error) {
        dispatch(actions.fetchStoreLocations.failure("ERRRORORO"))
    })
}
