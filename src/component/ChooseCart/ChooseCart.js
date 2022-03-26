import React from 'react';

const ChooseCart = ({ chooseCart }) => {
    const { name, img } = chooseCart;
    return (
        <div>

            <img src={img} alt="" />
            <h5>{name}</h5>

        </div>
    );
};

export default ChooseCart;