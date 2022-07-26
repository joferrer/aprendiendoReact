
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One punch man','Dragon Ball']);

    const onAddCategory = (newCategory)=>{

        if(! categories.includes(newCategory)){

            setCategories([newCategory,...categories]);

        }        
        
    };

  return (
    <>
        <h1>GiftExpertApp</h1>

        <AddCategory onNewCategory = {(category)=>onAddCategory(category)} />

        {
            categories.map(category =>(<GiftGrid key ={category} category={category}/>))
        }
        

        <button onClick={onAddCategory} >Agregar</button>

    </>
  )
}
