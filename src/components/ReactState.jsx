import React, { useEffect, useState } from "react";

export const ReactState = () => {
  const [favoritecolor, setFavoriteColor] = useState("red");
  const [updateFavoriteMassage, setUpdateFavoriteMassage] = useState("");

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setFavoriteColor("Yellow");
    }, 2000);
    return () => clearTimeout(timeoutID);
  }, []);
  useEffect(() => {
    console.log("update favorite massage "+favoritecolor);
    setUpdateFavoriteMassage("The updated favorite is " + favoritecolor);
  }, [favoritecolor]);

  return (
    <div>
      ReactState
      <div>
        <h1>My Favorite Color is {favoritecolor}</h1>
        <div>{updateFavoriteMassage}</div>
      </div>
    </div>
  );
};
