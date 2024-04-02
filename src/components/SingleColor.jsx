import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const SingleColor = props => {
  const handleClick = () => {
    navigator.clipboard
      .writeText(`#${props.color}`)
      .then(() => {
        toast.success(
          `successfully copied the color #${props.color} to the clipboard`
        );
      })
      .catch(error => {
        toast.error("Failed to copy text");
      });
  };

  return (
    <div
      className="singleColor"
      style={{
        backgroundColor: `#${props.color}`,
        padding: "20px",
        textAlign: "center",
        width: "100%",
        height: "250px",
        position: "relative"
      }}
      onClick={handleClick}
    >
      <p
        style={{
          marginBottom: "10px",
          marginTop: "10px",
          color: props.type === "tint" ? "black" : "white"
        }}
      >
        {props.weight}%
      </p>
      <p
        style={{
          color: props.type === "tint" ? "black" : "white",
          fontSize: "larger"
        }}
      >
        {"#" + props.color}
      </p>

      <a href="#">
        {" "}
        <FontAwesomeIcon
          icon={faCopy}
          style={{
            position: "absolute",
            top: "90%",
            left: " 90%"
          }}
        />
      </a>
    </div>
  );
};

export default SingleColor;
