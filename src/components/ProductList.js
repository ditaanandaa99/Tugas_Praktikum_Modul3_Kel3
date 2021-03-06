import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";

import {ProductConsumer} from './context';
import Clock from "./Clock";

export default class ProductList extends Component {
    
   
    render() {
        return (
            
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <Title name=" group store 3" title="products" />
                    <center><Clock/></center>
                      <div className="row">

                        <ProductConsumer>
                             {value => {
                                 
                                return value.products.map(function (product) {
                                    return <Product key={product.id} product={product} />;
                                });
                            }}
                        </ProductConsumer>
                     </div>
                </div>   
            </div>
        </React.Fragment>    
           
        );
    }
}