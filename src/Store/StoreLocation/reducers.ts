import * as actions from './actions';
import { ActionType, getType } from 'typesafe-actions';
import { StoreLocation } from "../../Model/storelocation";

type UserAction = ActionType<typeof actions>

export interface StoreLocationState {
    isLoading: boolean;
    storeLocations: StoreLocation[];
    showErrorMessage: boolean;
}

const initState: StoreLocationState = {
    isLoading: false,
    storeLocations: [],
    showErrorMessage: false
}

export default function reducer(
    state: StoreLocationState = initState,
    action: UserAction
): StoreLocationState {
    switch(action.type) {
        case getType(actions.fetchStoreLocations.request): 
            return {
                ...state,
                isLoading: true,
            }
        
        case getType(actions.fetchStoreLocations.success):
            return {
                ...state,
                isLoading: false,
                storeLocations: action.payload
            }

        case getType(actions.addStoreLocation.request): 
            return {
                ...state,
                isLoading: true,
            }

        case getType(actions.addStoreLocation.success):
            return {
                ...state,
                isLoading: false,
                storeLocations: [
                    ...state.storeLocations,
                    action.payload
                ]
            }

        default:
            return state
    }
}