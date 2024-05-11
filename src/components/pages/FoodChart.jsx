import React, { useState } from "react";
import ExploreMenu from "./Explore/ExploreMenu";

export const FoodChart = () => {
  const [category,setCategory] = useState("All");
  return(
  <>
    
    <ExploreMenu category={category} setCategory={setCategory}/>
  
  </>
  )

};