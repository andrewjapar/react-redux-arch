import { ActionType, getType } from 'typesafe-actions';
import * as actions from './actions';

type NavAction = ActionType<typeof actions>

export interface NavState {
    sidebarShow: boolean;
}

const initState: NavState = {
    sidebarShow: true,
}

export default function reducer(
    state: NavState = initState,
    action: NavAction
): NavState {
    switch(action.type) {
        case getType(actions.showSidebar): 
            return {
                sidebarShow: action.payload
            }
        
        default:
            return state
    }
}