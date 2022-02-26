import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateGoal } from "../features/goals/goalSlice";
import { hideModal } from "../features/modal/updateModalSlice";

const Modal = (props) => {
  const [text, setText] = useState(props.text);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateGoal({ id: props.id, text }));
    dispatch(hideModal());
    setText('');
  };

  return (
    <div className={`modal ${props.visible ? "show-modal" : ""}`}>
      <div className="modal-content">
        <span
          className="close-button"
          onClick={() => {
            dispatch(hideModal());
            setText('');
          }}
        >
          &times;
        </span>
        <h1>Update the goal.</h1>
        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="text">Goal</label>
              <input
                type="text"
                name="text"
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-block" type="submit">
                Update Goal
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Modal;
