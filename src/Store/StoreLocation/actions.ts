import { createAsyncAction, createAction } from "typesafe-actions";
import { StoreLocation } from "../../Model/storelocation";

export const fetchStoreLocations = createAsyncAction(
    'storelocations/FETCH',
    'storelocations/FETCH_SUCCESS',
    'storelocations/FETCH_FAILED'
)<void, StoreLocation[], string>()

export const addStoreLocation = createAsyncAction(
    'storelocations/ADD',
    'storelocations/ADD_SUCCESS',
    'storelocations/ADD_FAILED'
)<void, StoreLocation, string>()

export default { fetchStoreLocations, addStoreLocation }