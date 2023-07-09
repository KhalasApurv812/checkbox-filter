/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Checkbox from "./Checkbox";
import ProductList from "./ProductList";

export default function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkvalue, setCheckvalue] = useState([]);
  const [filterData, setFilterData] = useState([]);
  console.log(filterData);
  // console.log(data);
  // console.log(filterData);
  // console.log(checkvalue);

  let categoryItems = [...new Set(data.map((Val) => Val.category))];

  let filterdata = [];

  const handleChange = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setCheckvalue([...checkvalue, value]);
    } else {
      setCheckvalue(checkvalue.filter((e) => e !== value));
    }
  };
  useEffect(() => {
    checkvalue.map((item) =>
      data.map((newitem) => {
        if (newitem.category === item) {
          filterdata = [...filterdata, newitem];
        }
      })
    );
    console.log(filterdata);
    setFilterData(filterdata);
  }, [checkvalue]);

  const apiGet = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
    setLoading(true);
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <>
      <Container>
        <Row className="my-5">
          <Col className="col-md-2">
            <div>
              <Checkbox
                categoryItems={categoryItems}
                handleChange={handleChange}
              />
            </div>
          </Col>
          <Col className="col-md-10">
            {loading ? (
              <ProductList
                data={data}
                filterData={filterData}
                checkvalue={checkvalue}
              />
            ) : (
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  margin: "250px",
                }}
              >
                <h1>Loading...</h1>
                <Spinner animation="border" style={{ margin: "10px" }} />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

// import React, { useEffect, useState } from "react";
// import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
// import Checkbox from "./Checkbox";

// export default function Product() {
//   const [data, setData] = useState([]);
//   const [checked, setChecked] = useState({
//     products: data,
//     category: {
//       Men: false,
//       Women: false,
//       Electronics: false,
//       Jewelery: false,
//     },
//   });

//   console.log(data);
//   const [loading, setLoading] = useState(false);

//   const handlechange = (e) => {
//     let { name } = e.target;

//     setChecked((prevstate) => {
//       return {
//         category: {
//           ...prevstate.category,
//           [name]: !prevstate.category[name],
//         },
//       };
//     });
//   };

//   const checkedProducts = Object.entries(checked.category)
//     .filter((category) => category[1])
//     .map((category) => category[0]);
//   const filteredProducts = checked.products.filter(({ category }) =>
//     checkedProducts.includes(category)
//   );

//   const apiGet = async () => {
//     await fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         setData(res);
//       });
//     setLoading(true);
//   };

//   useEffect(() => {
//     apiGet();
//   }, []);

//   return (
//     <>
//       <Container>
//         <Row className="my-5">
//           <Col className="col-md-2">
//             <p>
//               <b>Click on the category you want to show the product</b>
//             </p>
//             <Checkbox
//               id="1"
//               name="Men"
//               title="men's clothing"
//               checked={data.category}
//               handlechange={handlechange}
//             />
//             <Checkbox
//               id="2"
//               name="Women"
//               title="women's clothing"
//               checked={data.category}
//             />
//             <Checkbox
//               id="3"
//               name="Electronics"
//               title="electronics"
//               checked={data.category}
//             />
//             <Checkbox
//               id="4"
//               name="Jewelery"
//               title="jewelery"
//               checked={data.category}
//             />
//           </Col>
//           <Col className="col-md-10">
//             {loading ? (
//               <>
//                 {filteredProducts.length === 0 ? (
//                   <>
//                     {" "}
//                     <Row>
//                       {data.map((newpro) => {
//                         return (
//                           <Col className="col-md-3 my-3" key={newpro.id}>
//                             <Card sm={1} md={2} lg={3} xl={4}>
//                               <Card.Img
//                                 variant="top"
//                                 height="200px"
//                                 src={newpro.image}
//                               />
//                               <Card.Body>
//                                 <Card.Title>
//                                   Title : <p className="para">{newpro.title}</p>
//                                 </Card.Title>
//                                 <h6> Rating : {newpro.rating.rate} </h6>
//                                 <h6> Category : {newpro.category} </h6>
//                                 <h6> Price : {newpro.price} </h6>
//                                 <Button variant="primary"> Buy </Button>
//                               </Card.Body>
//                             </Card>
//                           </Col>
//                         );
//                       })}
//                     </Row>
//                   </>
//                 ) : (
//                   filteredProducts.map((filtdata) => {
//                     return (
//                       <Col className="col-md-3 my-3" key={filtdata.id}>
//                         <Card sm={1} md={2} lg={3} xl={4}>
//                           <Card.Img
//                             variant="top"
//                             height="200px"
//                             src={filtdata.image}
//                           />
//                           <Card.Body>
//                             <Card.Title>
//                               Title : <p className="para">{filtdata.title}</p>
//                             </Card.Title>
//                             <h6> Rating : {filtdata.rating.rate} </h6>
//                             <h6> Category : {filtdata.category} </h6>
//                             <h6> Price : {filtdata.price} </h6>
//                             <Button variant="primary"> Buy </Button>
//                           </Card.Body>
//                         </Card>
//                       </Col>
//                     );
//                   })
//                 )}
//               </>
//             ) : (
//               <div
//                 style={{
//                   textAlign: "center",
//                   display: "flex",
//                   justifyContent: "center",
//                   margin: "250px",
//                 }}
//               >
//                 <h1>Loading...</h1>
//                 <Spinner animation="border" style={{ margin: "10px" }} />
//               </div>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default function Product() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [filter, setFilter] = useState(data);
//   const [checkbox, setCheckbox] = useState(false);

//   let filterresult = [];

//   // console.log(checkbox);
//   console.log("__akn", filterresult);

//   const filtercategory = (cardItem) => {
//     const findcard = data.filter((cardData) => {
//       // console.log("__akn", cardData.category);
//       return cardData.category === cardItem;
//     });
//     console.log("__akfill", findcard);
//     if (!checkbox) {
//       filterresult.concat(cardItem);

//       setFilter([...filterresult, ...findcard]);
//       setCheckbox(true);
//     } else {
//       setFilter(data);
//       setCheckbox(false);
//     }
//   };

//   const apiGet = async () => {
//     await fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((res) => {
//         // console.log(res);
//         setData(res);
//       });
//     setLoading(true);
//   };

//   useEffect(() => {
//     apiGet();
//   }, []);

//   return (
//     <>
//       <Container>
//         <Row className="my-5">
//           <Col className="col-md-2">
//             <div style={{ marginTop: "50px" }}>
//               <p>
//                 <b>Click on the category you want to show the product</b>
//               </p>

//               <div style={{ margin: "43px" }}>
//                 <input
//                   type="checkbox"
//                   onClick={() => {
//                     filtercategory(...filterresult, "men's clothing");
//                   }}
//                 />
//                 <p className="checkpara">Man</p>
//                 <input
//                   type="checkbox"
//                   onClick={() => {
//                     filtercategory(...filterresult, "electronics");
//                   }}
//                 />
//                 <p className="checkpara">Electronics</p>
//                 <input
//                   type="checkbox"
//                   onClick={() => {
//                     filtercategory(...filterresult, "jewelery");
//                   }}
//                 />
//                 <p className="checkpara">Jewelery</p>
//                 <input
//                   type="checkbox"
//                   onClick={() => {
//                     filtercategory(...filterresult, "women's clothing");
//                   }}
//                 />
//                 <p className="checkpara">Women</p>
//               </div>
//             </div>
//           </Col>
//           <Col className="col-md-10">
//             {loading ? (
//               <>
//                 {filterresult.length === 0 ? (
//                   <Row>
//                     {filter.map((newfil) => {
//                       return (
//                         <Col className="col-md-3 my-3" key={newfil.id}>
//                           <Card sm={1} md={2} lg={3} xl={4}>
//                             <Card.Img
//                               variant="top"
//                               height="200px"
//                               src={newfil.image}
//                             />
//                             <Card.Body>
//                               <Card.Title>
//                                 Title : <p className="para">{newfil.title}</p>
//                               </Card.Title>
//                               <h6> Rating : {newfil.rating.rate} </h6>
//                               <h6> Category : {newfil.category} </h6>
//                               <h6> Price : {newfil.price} </h6>
//                               <Button variant="primary"> Buy </Button>
//                             </Card.Body>
//                           </Card>
//                         </Col>
//                       );
//                     })}
//                   </Row>
//                 ) : (
//                   <>
//                     <Row>
//                       {data.map((newpro) => {
//                         return (
//                           <Col className="col-md-3 my-3" key={newpro.id}>
//                             <Card sm={1} md={2} lg={3} xl={4}>
//                               <Card.Img
//                                 variant="top"
//                                 height="200px"
//                                 src={newpro.image}
//                               />
//                               <Card.Body>
//                                 <Card.Title>
//                                   Title : <p className="para">{newpro.title}</p>
//                                 </Card.Title>
//                                 <h6> Rating : {newpro.rating.rate} </h6>
//                                 <h6> Category : {newpro.category} </h6>
//                                 <h6> Price : {newpro.price} </h6>
//                                 <Button variant="primary"> Buy </Button>
//                               </Card.Body>
//                             </Card>
//                           </Col>
//                         );
//                       })}
//                     </Row>
//                   </>
//                 )}
//               </>
//             ) : (
//               <div
//                 style={{
//                   textAlign: "center",
//                   display: "flex",
//                   justifyContent: "center",
//                   margin: "250px",
//                 }}
//               >
//                 <h1>Loading...</h1>
//                 <Spinner animation="border" style={{ margin: "10px" }} />
//               </div>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }
