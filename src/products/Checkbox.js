import React from "react";

export default function Checkbox(props) {
  let { handleChange, categoryItems } = props;
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <p>
          <b>Click on the category you want to show the product</b>
        </p>

        <div style={{ margin: "43px" }}>
          {categoryItems.map((item, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  value={item}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <p className="checkpara">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

/* <input
type="checkbox"
onClick={() => filtercategory("men's clothing")}
/>
<p className="checkpara">Man</p>
<input
type="checkbox"
onClick={() => filtercategory("electronics")}
/>
<p className="checkpara">Electronics</p>
<input type="checkbox" onClick={() => filtercategory("jewelery")} />
<p className="checkpara">Jewelery</p>
<input
type="checkbox"
onClick={() => filtercategory("women's clothing")}
/>
<p className="checkpara">Women</p> */

// import React, { Component } from "react";
// import { render } from "react-dom";

// class App1 extends Component {
//   constructor() {
//     super();
//     this.state = {
//       categories: [
//         { id: 1, value: "Angular" },
//         { id: 2, value: "React" },
//         { id: 3, value: "PHP" },
//         { id: 4, value: "Laravel" },
//       ],
//       checkedItems: new Map(),
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     var isChecked = event.target.checked;
//     var item = event.target.value;

//     this.setState((prevState) => ({
//       checkedItems: prevState.checkedItems.set(item, isChecked),
//     }));
//   }

//   handleSubmit(event) {
//     console.log(this.state);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div>
//         <h1> Examples of Multiple Checkbox in React </h1>

//         <form onSubmit={this.handleSubmit}>
//           {this.state.categories.map((item) => (
//             <li>
//               <label>
//                 <input
//                   type="checkbox"
//                   value={item.id}
//                   onChange={this.handleChange}
//                 />{" "}
//                 {item.value}
//               </label>
//             </li>
//           ))}

//           <br />
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     );
//   }
// }

// export default App1;

// const filtercategory = (cardItem, e) => {
//   console.log("__akn", cardItem);

//   const findcard = data.filter((cardData) => {
//     return cardData.category === cardItem;
//   });
//   console.log("__akfill", findcard);

// let datas = [...filterResult, ...findcard];
// console.log("__ak tets", data);
// console.log(filterResult.concat(...findcard));

// setData(datas);
// };

// const handleChange = (e) => {
//   console.log(data);

//   const ischecked = e.target.checked;
//   const isvalue = e.target.value;

//   if (ischecked) {
//     resultarray = data.filter((Items) => {
//       return Items.category === isvalue;
//     });
//     console.log("__akin", resultarray);
//     let datas = [...filterResult, ...resultarray];

//     setData(datas);
//   } else {
//     // console.log("__akout");
//     setData(data);
//   }
// };

// if (ischecked) {
//   resularray = data.filter((Items) => {
//     return Items.category === isvalue;
//   });
//   console.log("__akin", resularray);
//   resularray.push(isvalue);
//   setCheck(resularray);
// } else {
//   console.log("__akout");
//   setData(data);
// }

// if (resularray.length === 0) {
//   resularray = check.filter((checkvalue) => {
//     return checkvalue.category !== isvalue;
//   });
//   let datavalue = [...filterResult, ...resularray];
//   console.log("__ak test", datavalue);
//   setCheck(datavalue);
// }
