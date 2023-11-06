import React from 'react';
import styles from './Item.module.css';

const Item = (props) => {

    const {category, title, price, image} = props.data;
    return (
        <div className={styles.container}>
            <img src={image} alt='' className={styles.img}/>
            <p className={styles.category}>Category: {category}</p>
            <p className={styles.title}>{title}</p>
            <p className={styles['price-field']}>price: <span className={styles.price}>{price}$</span></p>
            <button className={styles.btn}>GOT IT</button>
        </div>
    );
}

export default Item;
