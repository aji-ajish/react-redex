import { Row, Col, Container } from "react-bootstrap";
import AddTask from "./components/AddTask";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Container className="mt-5">
      <Navbar />
      <Row className="justify-content-md-center">
        <Col lg="6">
          <AddTask  />
          <TaskList/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
