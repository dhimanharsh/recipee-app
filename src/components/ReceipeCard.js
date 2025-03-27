import React from "react";
import { Link } from "react-router";
export default function ReceipeCard({ sep }) {
  return (
    <>
    <section className="productCard">
        <img className="productImage" src={sep.image}></img>
        <h2 className="productTitle">{sep.name}</h2>
        <label>{sep.cuisine}</label>
         <Link to={`receipe/${sep.id}`} className="productBtn">
          <i className="fa-solid fa-utensils"></i>See Receipe
        </Link>
        </section>
    </>
  );
}

// important 
// export const Stock = (Cards) => {
//   return (props) => {
//     return (
//       <>
//         <label className="indian">Indian</label>
//         <Cards {...props}></Cards>
//       </>
//     );
//   };
// };



