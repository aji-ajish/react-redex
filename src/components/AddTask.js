import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addTaskToList } from "../slices/TasksSlice";
import { useDispatch } from "react-redux";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [description,setDescription ] = useState("");

  const dispatch=useDispatch()

  const addTask = (e) => {
    e.preventDefault();
    dispatch(addTaskToList({ title, description }))
    setTitle('')
    setDescription('')
  };
  return (
    <section className="mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Task Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <div className="text-end">
          <Button variant="primary" type="submit" onClick={addTask}>
            Add Task
          </Button>
        </div>
      </Form>
    </section>
  );
}
