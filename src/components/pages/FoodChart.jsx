import React, { useState } from "react";
import ExploreMenu from "./Explore/ExploreMenu";
import FoodDisplay from "../FoodDisplay/FoodDisplay";

export const FoodChart = () => {
  const [category,setCategory] = useState("All");
  return(
  <>
    
    <ExploreMenu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category} ></FoodDisplay>
  </>
  )

};