import React from 'react';

const Cart = ({selectedActors, remaining, totalCost }) => {
    console.log(selectedActors)
    return (
        <div>
            <h2>Total actor : {selectedActors.length}</h2>
            <h5>Remaining : {remaining}</h5>
            <h5>Total Cost : {totalCost}</h5>
            {
               selectedActors.map((actor) => (
                <ol key={actor.id}>{actor.name}</ol>
               ))
            }
            
        </div>
    );
};

export default Cart;