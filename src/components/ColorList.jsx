import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";

const ColorList = props => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    // check if the array of color objects is not empty
    if (props.colors.length !== 0) {
      // maps array of color objects to array of color objects with the following properties: color, weight and type
      let newColorList = props.colors.map(colorObject => {
        return {
          color: colorObject.hex,
          weight: colorObject.weight,
          type: colorObject.type
        };
      });
      setColorList(newColorList);
    }
    // clean up to set up the colorList to its initial value (empty array)
    return () => {
      setColorList([]);
    };
  }, [props.colors]); //after first rendering and whenever colors  prop changes

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        padding: "20px",
        gap: "20px",
        justifyItems: "center",
        marginBottom: "200px"
      }}
    >
      {colorList.length !== 0 &&
        colorList.map(colorItem => {
          return <SingleColor key={nanoid()} {...colorItem} />;
        })}
    </div>
  );
};

export default ColorList;
