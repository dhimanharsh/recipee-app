import React from "react";
import { useState, useEffect } from "react";
import ReceipeCard, { Stock } from "./ReceipeCard";

const Communication = () => {
  const [dataFromApi, setDataFromApi] = useState([]);
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState("");
  //const Instock = Stock(ReceipeCard);
  useEffect(() => {
    async function api() {
      let data = await fetch("https://dummyjson.com/recipes");
      let inReadableForm = await data.json();
      setDataFromApi(inReadableForm.recipes);
      setSearch(inReadableForm.recipes);
    }
    api();
  }, []);
  return dataFromApi.length == 0 ? (
    <span class="loader"></span>
  ) : (
    <>
      {/* veg nonveg function */}
      <div className="veg-non">
        <button
          onClick={() => {
            let rr = search.filter((e) => {
              return (
                !e.name.includes("Chicken") &&
                !e.name.includes("Beef") &&
                !e.name.includes("Kebabs")
              );
            });
            setDataFromApi(rr);
          }}
        >
          Veg
        </button>
        <button
          onClick={() => {
            let sst = search.filter((e) => {
              return (
                e.name.includes("Chicken") ||
                e.name.includes("Beef") ||
                e.name.includes("Kebabs")
              );
            });
            setDataFromApi(sst);
          }}
        >
          non veg
        </button>
      </div>

      {/* search function */}
      <div className="input-field">
        <input
          type="text"
          placeholder="Search Any Receipe"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let flt = search.filter((e) => {
              return e.name.toLowerCase().includes(input.toLowerCase());
            });
            setDataFromApi(flt);
          }}
        >
          search
        </button>
      </div>

      {/* card show */}

      <div className="order-our-best">
        {dataFromApi.map((e, index) => {
          {
            //  return e.cuisine !== "Indian" ? (
            return <ReceipeCard key={index} sep={e}></ReceipeCard>;
            // ) : (
            //   <Instock key={index} sep={e}></Instock>
            // );
          }
        })}
      </div>
    </>
  );
};

export default Communication;
