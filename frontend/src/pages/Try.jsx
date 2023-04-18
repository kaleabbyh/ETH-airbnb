import * as React from "react";

const App = () => {
  const [selected, setSelected] = React.useState("");
  const optionHandler = (event) => {
    setSelected(event.target.value);
  };

  const resort = ["Haile resort ", "abcd resort"];
  const hotel = ["abcd hotel", "efg hotel", "hijk hotel"];
  const apartment = ["asd apatment", "kafh apatment", "jgj apatment"];
  let type = null;
  let options = null;

  if (selected === "resort") {
    type = resort;
  } else if (selected === "Hotel") {
    type = hotel;
  } else if (selected === "apartment") {
    type = apartment;
  }

  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }
  return (
    <div
      style={{
        padding: "16px",
        margin: "16px",
      }}
    >
      <form>
        <div>
          <select onChange={optionHandler}>
            <option>Choose...</option>
            <option>resort</option>
            <option>Hotel</option>
            <option>apartment</option>
          </select>
        </div>
        <div>
          <select>{options}</select>
        </div>
      </form>
    </div>
  );
};

export default App;
