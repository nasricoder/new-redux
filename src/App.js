import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <>
       <Navbar bg="primary"  expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <AddTask />
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <TaskList />
      <br/>
      <br/>
      
      
      </>
  );
}

export default App;
