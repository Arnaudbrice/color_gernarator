import { useState } from "react";
import Form from "./components/Form";
import ColorList from "./components/ColorList.jsx";

import Footer from "./components/Footer.jsx";
import Values from "values.js";

const App = () => {
  const [colors, setColors] = useState([]);

  const handleAddColor = color => {
    // create an array of  10 colors object using the values.js library
    const newColors = new Values(color).all(10);
    // {rgb: Array(3), alpha: 1, type: 'tint', weight: 100,hex:"ffffff"}
    console.log(newColors[0]);

    setColors(newColors);
  };

  return (
    <>
      <h2>Color Generator</h2>

      <Form onHandleSubmit={handleAddColor} />
      <ColorList colors={colors} />
      <Footer />
    </>
  );
};
export default App;
