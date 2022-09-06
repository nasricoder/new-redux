import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/Actions";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const AddTask=()=>{
    const dispatch = useDispatch()
    const [description,setDescription] = useState('')
    const handelAdd=()=>{
        description == '' ? alert('Empty Field') : dispatch(addTask({id: Math.random(),description,isDone: false})) 
        setDescription('') }
    return(
        <>
        
     
     <InputGroup className="mb-3">
        <Form.Control
          value={description}  type='text' onChange={(e)=> setDescription(e.target.value)} 
        />
        <Button variant="dark" onClick={handelAdd} > ADD </Button> 
      </InputGroup>
     
        </>
    )
}

export default AddTask