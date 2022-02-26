import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";
import { showModal } from "../features/modal/updateModalSlice";

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
          onClick={() => dispatch(showModal(props.goal.text))}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default GoalItem;
