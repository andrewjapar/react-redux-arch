import React, { useState } from 'react';
import { UserTable } from 'Pages/User/UserTable';
import AddUser from 'Pages/User/AddUser';
import './App.scss';
import { CContainer, CCol, CCardHeader, CButton, CHeader, CRow } from '@coreui/react';

function App() {

  const [showForm, setShowForm] = useState<boolean>(false);

  const showModal = () => {
    setShowForm(true)
  }

  const closeModal = () => {
    setShowForm(false)
  }

  return (
    <CContainer>
      <AddUser isOpen={showForm} onClose={closeModal} />
      <CRow className="App-header">
        <CCol sm="6">
          <h1 className="display-5">List User</h1>
        </CCol>
        <CCol sm="6" className="App-header__button">
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

export default App;
