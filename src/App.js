import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();
  return (
    <Container>
      <h4>React Hook Form</h4>
      <Form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            {...register("email")}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            {...register("password")}
            type="password"
            placeholder="Enter password"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>ตำแหน่งในสภา</Form.Label>
          <Form.Select {...register("userType")}>
            <option value="1" selected>
              สส.
            </option>
            <option value="2">สว.</option>
            <option value="3">ประธานสภา</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            {...register("remember")}
            type="checkbox"
            label="Remember me"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Text>{data}</Form.Text>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default App;
