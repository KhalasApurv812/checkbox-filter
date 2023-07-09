import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

export default function ProductList(props) {
  let { data, filterData, checkvalue } = props;

  return (
    <>
      <Row>
        {checkvalue.length === 0 ? (
          <>
            {data.map((newpro) => {
              return (
                <Col className="col-md-3 my-3" key={newpro.id}>
                  <Card sm={1} md={2} lg={3} xl={4}>
                    <Card.Img
                      variant="top"
                      height="200px"
                      src={newpro.image}
                      style={{ objectFit: "contain" }}
                    />
                    <Card.Body>
                      <Card.Title>
                        Title : <p className="para">{newpro.title}</p>
                      </Card.Title>
                      <h6> Rating : {newpro.rating.rate} </h6>
                      <h6> Category : {newpro.category} </h6>
                      <h6> Price : {newpro.price} </h6>
                      <Button variant="primary"> Buy </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </>
        ) : (
          <>
            {filterData.map((newpro) => {
              return (
                <Col className="col-md-3 my-3" key={newpro.id}>
                  <Card sm={1} md={2} lg={3} xl={4}>
                    <Card.Img
                      variant="top"
                      height="200px"
                      src={newpro.image}
                      style={{ objectFit: "contain" }}
                    />
                    <Card.Body>
                      <Card.Title>
                        Title : <p className="para">{newpro.title}</p>
                      </Card.Title>
                      <h6> Rating : {newpro.rating.rate} </h6>
                      <h6> Category : {newpro.category} </h6>
                      <h6> Price : {newpro.price} </h6>
                      <Button variant="primary"> Buy </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </>
        )}
      </Row>
    </>
  );
}
