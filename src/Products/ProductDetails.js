import React from 'react';
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import carProducts from './carProducts.json';
import SideNav from '../Component/SideNav';

const ProductDetails = () => {
  
    const {id} = useParams();
    let product = [];
    product = carProducts.find(product => String(product.id) === id) ?? 0;  

    let productDetail;
    if(product){
        productDetail =  (
            <section key={id} className="details-section">  
                <img src={product.img_url} alt=""></img>  
                <div>  
                    <h3>{product.brand}</h3>  
                    <p>{product.description}</p>  
                </div>  
                <div>  
                    <h3>Variance</h3>  
                    <p>Full Spec: {product.variance['high-spec']}</p>  
                    <p>Low Spec: {product.variance['low-spec']}</p>  
                </div>  
            </section>  
        );

    }else{
        productDetail = (
            <section className="details-section">  
                <div>
                    <h1>INVALID PRODUCT ID</h1>
                </div>
            </section>  
        );
    }

    return (
        <div className="dashboard d-flex">
        <div>
            <SideNav/>
        </div>
        <div style={{flex:"auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
            <div style={{height:"100%"}}>
                <Container>
                    {productDetail}
                </Container> 
            </div>
        </div>
    </div>

    );

}

export default ProductDetails;