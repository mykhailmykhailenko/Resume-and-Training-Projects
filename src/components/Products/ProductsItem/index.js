import React from 'react';

const ProductsItem = (props) => {

    const {product: {category, price, title}} = props;

    return (
        <li>{category} -- {title} -- {price}</li>
    );
}

export default ProductsItem;
