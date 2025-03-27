import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export default function Recipe() {
  const { resId } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${resId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const recipeData = await response.json();
        setData(recipeData);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    }

    fetchRecipe();
  }, [resId]);
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <span class="loader"></span>;
  }

  return (
    <>
      <Link to={"/"}>
        <p className="icoback">
          <i class="fa-solid fa-arrow-left"></i>
        </p>
      </Link>

      <div className="eachres">
        <section>
          <img className="receipeImg" src={data.image} alt={data.name} />
          <h1>{data.name}</h1>
          <h3>Meal-Type: {data.mealType}</h3>
        </section>
        <section>
          <h2>Ingredients</h2>
          <ul>
            {data.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li> // Add key prop for list items
            ))}
          </ul>
          <h2>Instructions</h2>
          <ul>
            {data.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li> // Add key prop for list items
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
