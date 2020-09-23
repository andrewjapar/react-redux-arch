import React, { useState } from "react";
import { CContainer, CRow, CCol, CButton } from "@coreui/react";
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
        <CContainer>
            <AddUser isOpen={showForm} onClose={closeModal} />
            <CRow className="App-header">
                <CCol sm="12" className="App-header__button">
                    <CButton color="success" onClick={showModal}>Add User</CButton>
                </CCol>
            </CRow>
            <CRow>
                <CCol sm="12">
                    <UserTable />
                </CCol>
            </CRow>
        </CContainer>
    );
}

export default React.memo(User)