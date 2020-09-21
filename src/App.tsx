import React, { useState } from 'react';
import { UserTable } from 'Pages/User/UserTable';
import AddUser from 'Pages/User/AddUser';
import './App.scss';
import { CContainer, CCol, CButton, CRow, CNav, CNavItem, CNavLink } from '@coreui/react';
import { Route, Switch, Link } from 'react-router-dom';

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
      <CNav variant="pills" className="App-header">
        <CNavItem>
          <CNavLink>
            <Link to="/">Home</Link>
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink>
            <Link to="/user">Useasr</Link>
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink>
            <Link to="/userx">Userx</Link>
          </CNavLink>
        </CNavItem>
      </CNav>
      <Switch>
        <Route path="/" exact />
        <Route path="/user" component={UserTable} />
        <Route path="/userx" component={UserTable} />
      </Switch>
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
