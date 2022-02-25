import { useDispatch } from "react-redux"
import {deleteGoal} from '../features/goals/goalSlice'

const GoalItem = (props) => {

  const dispatch = useDispatch();
  return (
    <div className="goal">
      <div>
        {new Date(props.goal.createdAt).toLocaleString('en-IN')}
      </div>
      <h2>{props.goal.text}</h2>
      <button className="close" onClick={() => {
        dispatch(deleteGoal(props.goal._id))
      }}>X</button>
    </div>
  )
}

export default GoalItem