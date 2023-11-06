import React from 'react';
import {getData} from '../../api/products';
import useData from '../../hooks/useData';
import Spiner from '../Spiner';
import Item from './Item';
import styles from './ProductLoader.module.css';


function UserLoader (props) {
    
    const {data, isFetching, error} = useData(getData);
    
    const mapProducts = () => {
        return data.map((prodObj) => <Item key={prodObj.id} data = {prodObj} />)
    }

    console.log(data)
   
    return (
        <>
        {error && <div>{error.message}</div>}
        {data && (<div className={styles.container}>
                {mapProducts()}
            </div>)}
        {isFetching && <Spiner />}
        </>
    )
    
}

export default UserLoader;
