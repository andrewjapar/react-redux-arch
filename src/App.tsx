import React, { useState } from 'react';
import { UserTable } from 'Pages/User/UserTable';
import { Container, Header, Grid, Button } from 'semantic-ui-react';
import AddUser from 'Pages/User/AddUser';

function App() {

  const [showForm, setShowForm] = useState<boolean>(false);

  const showModal = () => {
    setShowForm(true)
  }

  const closeModal = () => {
    setShowForm(false)
  }

  return (
    <Container>
      <AddUser isOpen={showForm} onClose={closeModal} />
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column verticalAlign="middle">
            <Header as='h2'>Header</Header>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Button content='Add User' onClick={showModal} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <UserTable />
    </Container>
  );
}

export default App;
