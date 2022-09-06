import { useDispatch } from "react-redux";
import { editTask }  from  "../Redux/Actions";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TaskCard = ({task})=>{
    const dispatch = useDispatch()
    return(
        <>
        
        <Card>
     
        <Card.Body>
        <Card.Title>{task.description} </Card.Title>
        <Card.Text>
        {task.isDone? 'true' : 'false'}
        </Card.Text>
        <Button variant="warning" onClick={()=> dispatch(editTask(task.id))}>Done</Button>{' '}
      </Card.Body>
      </Card>
       </>
    )
}
export default TaskCard