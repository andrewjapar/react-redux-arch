import * as actions from './actions';
import { ActionType, getType } from 'typesafe-actions';
import { UserInfo } from '../../Model/user';

type UserAction = ActionType<typeof actions>

export interface UserState {
    isLoading: boolean;
    users: UserInfo[];
    showErrorMessage: boolean;
}

const initState: UserState = {
    isLoading: false,
    users: [],
    showErrorMessage: false
}

export default function reducer(
    state: UserState = initState,
    action: UserAction
): UserState {
    switch(action.type) {
        case getType(actions.fetchUsers.request): 
            return {
                ...state,
                isLoading: true,
            }
        
        case getType(actions.fetchUsers.success):
            return {
                ...state,
                isLoading: false,
                users: action.payload
            }

        default:
            return state
    }
}