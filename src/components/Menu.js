import React from "react";
import recipes from "../recipes";

const Menu = () => {

    const handleOrder = (id) => {
        console.log(`Order ${id} clicked`);
    };
    

    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>This weeks specials!</h2>
                <button>Order Menu</button>
            </div>

            <div className="cards">
            {
                recipes.map((recipe) => {
                    return (
                        <div key={recipe.id} className="menu-items">
                            <img src={recipe.image} alt={recipe.title} />
                            <h3>{recipe.title}</h3>
                            <p>{recipe.description}</p>
                            <p>{recipe.price}</p>
                            <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>Order Now</button>
                        </div>
                    );
                })
            }
            </div>
        </div>

    );
};
export default Menu;
