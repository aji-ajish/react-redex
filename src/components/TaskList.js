import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./UpdateTask";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTask,removeTaskFromList } from "../slices/TasksSlice";

export default function TaskList() {
const [modalShow,setModalShow]=useState(false)
const {tasksList}=useSelector((state)=>state.tasks)
const dispatch=useDispatch()

  const updateTask = (task) => {
    setModalShow(true)
    dispatch(setSelectedTask(task))
  };
  const deleteTask = (task) => {
        dispatch(removeTaskFromList(task))
  };
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {tasksList&&tasksList.map((task,index)=>{
            return(
                <tr className="text-center" key={task.id}>
            <td>{index+1}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>
              <Button
                variant="info"
                className="mx-3"
                onClick={() => updateTask((task))}>
                <i className="bi bi-pencil-square"></i>
              </Button>
              <Button variant="danger" onClick={() => deleteTask((task))}>
                <i className="bi bi-trash3"></i>
              </Button>
            </td>
          </tr>
            )
        })}
          
        </tbody>
      </Table>
      <MyVerticallyCenteredModal 
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
