import React, { useState } from "react";
import { CRow, CCol, CButton, CCard, CCardBody, CCardHeader } from "@coreui/react";
import AddUser from "./AddUser";
import { UserTable } from "./UserTable";

const User = () => {
    const [showForm, setShowForm] = useState<boolean>(false);

    const showModal = () => { 
        setShowForm(true)
    }
    
      const closeModal = () => {
        setShowForm(false)
    }

    return(
        <CRow>
            <AddUser isOpen={showForm} onClose={closeModal} />
            <CCol sm="12">
                <CCard>
                    <CCardHeader>
                        <CRow>
                            <CCol sm="6" className="App-header__title">
                                User List
                            </CCol>
                            <CCol sm="6" className="App-header__button">
                                <CButton color="success" onClick={showModal}>Add User</CButton>
                            </CCol>
                        </CRow>
                    </CCardHeader>
                    <CCardBody>
                        <UserTable />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
}

export default React.memo(User)