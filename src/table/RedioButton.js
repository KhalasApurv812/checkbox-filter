import React from "react";

export default function RedioButton(props) {
  let { quantity, setQuantity, handleSubmit } = props;
  console.log(quantity);

  const changeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="rbtn">
      <div className="form-check" style={{ margin: "2px" }}>
        <label className="form-check-label" form="flexRadioDefault1">
          <h5> please select the Quantitiy :</h5>
        </label>
      </div>
      <div style={{ margin: "2px" }}>
        <input
          type="number"
          value={quantity}
          onChange={(e) => changeQuantity(e)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
