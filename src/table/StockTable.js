import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import RedioButton from "./RedioButton";
import { Data } from "./TableData";

export default function StockTable() {
  const [quantity, setQuantity] = useState("");
  const [submit, setSubmit] = useState("");

  const handleSubmit = () => {
    console.log("__ak");
    setSubmit(quantity);
    setQuantity("");
  };

  // const sum = Data.reduce((sum, datas) => sum + datas.Quantity * datas.Price);

  return (
    <div>
      <Container>
        <RedioButton
          quantity={quantity}
          setQuantity={setQuantity}
          handleSubmit={handleSubmit}
        />
        <Table striped bordered hover className="my-5">
          <thead>
            <tr>
              <th>No#</th>
              <th>Company Name</th>
              <th>Quantitiy</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {submit === "" ? (
              <>
                {Data.map((newdata, index) => {
                  return (
                    <tr key={index}>
                      <td>{newdata.id}</td>
                      <td>{newdata.CompanyName}</td>
                      <td>{newdata.Quantity}</td>
                      <td>{newdata.Price}</td>
                      <td>{newdata.Total}</td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <>
                {Data.map((newdata, index) => {
                  return (
                    <tr key={index}>
                      <td>{newdata.id}</td>
                      <td>{newdata.CompanyName}</td>
                      <td>{submit}</td>
                      <td>{newdata.Price}</td>
                      <td>{(submit * newdata.Price).toFixed(2)}</td>
                    </tr>
                  );
                })}
              </>
            )}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                Total :{" "}
                {Data.reduce(
                  (total, item) => total + item.Price * submit,
                  8718.9
                ).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
