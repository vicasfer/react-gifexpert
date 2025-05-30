import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return alert('Ya existe esta categoria');
        setCategories([newCategory, ...categories]);
    }


    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onNewCategory={ onAddCategory } />

            {/* listaddo de Gif */}
            
            {
                categories.map(category => (
                        <GifGrid key={category} category={category}/>
                    )
                )
            }
            
                {/* Gif Item */}
        </>
    )

}