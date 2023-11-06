import React, { Component } from 'react';
import ProductsItem from './ProductsItem';
import Spiner from '../Spiner';
import {getData} from '../../api/products'

class Products extends Component {
    constructor (props) {
        super(props)
        this.state = {
            products: [],
            error: null,
            isFetching: true
        }
    }

    componentDidMount = () => {
        this.getProducts();
    }


    getProducts = () => {
        
        getData()
        .then((data) => {
            this.setState({
                products: data
            })
        })
        .catch((error) => {
            this.setState({
                error
            })
        })
        .finally(() => {
            this.setState({
                isFetching: false
            })
        })
    } 

    mapProducts = () => {
        const {products} = this.state;
        return products.map((prodObj) => <ProductsItem product = {prodObj} key = {prodObj.id}/>)
    }
    

    render() {
        const {products, error, isFetching} = this.state;
        return (
            <>
            {error && <div>{error.message}</div>}
            {products && (<ol>
                {this.mapProducts()}
            </ol>)}
            {isFetching && <Spiner />}
            </>
        );
    }
}

export default Products;

