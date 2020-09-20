import React from "react";
import { useDispatch } from 'react-redux';
import { Modal, Form, Checkbox, Button } from "semantic-ui-react";
import actions from "Store/Users/actions";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const AddUser: React.FC<Props> = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();

    const submitUser = () => {
        dispatch(actions.addUser({
            name: "Sujono Chen",
            email: "starcokz@gmail.com",
            address: "Test123",
            website: "coks.xom"
        }));
        onClose()
    }

    return (
        <Modal 
        onClose={onClose}
        open={isOpen}>
            <Modal.Header>Add User</Modal.Header>
            <Modal.Content>
            <Form>
                <Form.Field>
                    <label>Full Name</label>
                    <input placeholder='Full Name' />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' />
                </Form.Field>
                <Form.Field>
                    <label>Website</label>
                    <input placeholder='Website' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
            </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button
                content="Submit"
                labelPosition='right'
                icon='checkmark'
                onClick={() => submitUser()}
                positive />
            </Modal.Actions>
        </Modal>
    )
}

export default AddUser;