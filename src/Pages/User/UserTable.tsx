import React, { useEffect } from "react";
import { CDataTable } from "@coreui/react" 
import { connect, useDispatch } from "react-redux";
import { RootState } from "Store";
import { fetchUsers } from 'Store/Users/thunk';

const mapStateToProps = (state: RootState) => ({
    users: state.user,
});

type Props = ReturnType<typeof mapStateToProps>;

const fields = [
    { key: 'name', _style: { width: '30%'} },
    { key: 'email', _style: { width: '30%'} },
    { key: 'website', _style: { width: '30%'} }
  ]

const UnconnectedUserTable: React.FC<Props> = ({ users }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (

        <CDataTable
        fields={fields}
        items={users.users}
        itemsPerPage={5}
        pagination
        />
    );
};

export const UserTable = connect(mapStateToProps)(UnconnectedUserTable);