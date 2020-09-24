import React from "react";
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import actions from "Store/Users/actions";
import { UserInfo } from "Model/user";
import { CModal, CModalHeader, CModalBody, CModalFooter, CButton } from "@coreui/react";
import InputField from "./InputField";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const defaultValue: UserInfo = {
    name: '',
    website: '',
    address: '',
    email: '',
};

const AddUser: React.FC<Props> = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();

    const submitUser = (user: UserInfo) => {
        dispatch(actions.addUser(user));
        onClose()
    }

    return (

        <CModal
        show={isOpen}
        onClose={onClose}>
            <Formik
            enableReinitialize
            initialValues={defaultValue}
            onSubmit={(values: UserInfo) => submitUser(values)}
            >
                <Form>
                    <CModalHeader closeButton>Modal title</CModalHeader>
                    <CModalBody>
                        <InputField
                            type="text"
                            id="name"
                            name="name"
                            label="Full Name"
                            placeholder="Enter Full Name.."
                            autoComplete="name"
                        />
                        <InputField
                            type="email"
                            id="email"
                            name="email"
                            label="Email"
                            placeholder="Enter Email.."
                            autoComplete="email"
                        />
                        <InputField
                            type="text"
                            id="webiste"
                            name="website"
                            label="Website"
                            placeholder="Enter Website.."
                            autoComplete="website"
                        />
                    </CModalBody>
                    <CModalFooter>
                        <CButton
                            type="submit"
                            color="secondary"
                            >Submit
                        </CButton>
                    </CModalFooter>
                </Form>
            </Formik>
        </CModal>
    )
}

export default AddUser;