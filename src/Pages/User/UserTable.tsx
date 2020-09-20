import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { RootState } from "Store";
import { fetchUsers } from 'Store/Users/thunk';
import { Table } from 'semantic-ui-react';

const mapStateToProps = (state: RootState) => ({
    users: state.user,
});

type Props = ReturnType<typeof mapStateToProps>;

const UnconnectedUserTable: React.FC<Props> = ({ users }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (

        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Website</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
            {users.users.map((user, index) => (
                <Table.Row key={index}>
                    <Table.Cell>{user.name}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>{user.website}</Table.Cell>
                </Table.Row>
            ))}
            </Table.Body>
        </Table>    
    );
};

export const UserTable = connect(mapStateToProps)(UnconnectedUserTable);