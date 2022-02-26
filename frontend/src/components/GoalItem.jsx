import { useDispatch } from "react-redux";
import { deleteGoal, updateGoal } from "../features/goals/goalSlice";

const GoalItem = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="goal">
      <div>{new Date(props.goal.createdAt).toLocaleString("en-IN")}</div>
      <h2>{props.goal.text}</h2>
      <div className="container">
        <button
          className="close"
          onClick={() => {
            dispatch(deleteGoal(props.goal._id));
          }}
        >
          X
        </button>
        <button
          className="upd"
          onClick={() => {
            dispatch(updateGoal(props.goal._id));
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default GoalItem;
