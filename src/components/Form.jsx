import { useState } from "react";
import "./Form.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = props => {
  const [color, setColor] = useState({
    color: "#000000",
    text: ""
  });

  const handleChange = e => {
    // hex value of the color(#......)
    const inputColor = e.target.value;

    setColor({
      color: inputColor,
      text: inputColor
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (color.text.length === 0) {
      return toast.error("please enter a color!");
    }
    props.onHandleSubmit(color.color);
    setColor({
      color: color.color,
      text: ""
    });
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
        limit={3}
      />

      <form onSubmit={handleSubmit}>
        <input
          type="color"
          name="color"
          value={color.color}
          onChange={handleChange}
        />
        <input
          type="text"
          name="text"
          value={color.text}
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
