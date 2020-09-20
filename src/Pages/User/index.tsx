import React, { useEffect } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { RootState } from "Store";
import { fetchUsers } from 'Store/Users/thunk';

const mapStateToProps = (state: RootState) => ({
    users: state.user,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      fetchUsers
    },
    dispatch
  );

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const ListUser: React.FC<Props> = ({ fetchUsers, users }) => {

    useEffect(() => {
        if (users.users.length === 0) {
            fetchUsers()
        }
    }, [fetchUsers, users.users]);

    return (

        <span className="test">
            {users.users.map(user => (
                user.email
            ))}
        </span>    
    );
};

export const UserPage = connect(mapStateToProps, mapDispatchToProps)(ListUser);