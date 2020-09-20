import { createAsyncAction } from "typesafe-actions";
import { UserInfo } from "../../Model/user";

export const fetchUsers = createAsyncAction(
    'users/FETCH',
    'users/FETCH_SUCCESS',
    'users/FETCH_FAILED'
)<void, UserInfo[], string>()

export default { fetchUsers }