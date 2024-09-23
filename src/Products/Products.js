import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import carProducts from './carProducts.json';
import Image from 'react-bootstrap/Image';
import { useNavigate } from "react-router-dom";
import SideNav from '../Component/SideNav';

const Products = () => {

    const navigate = useNavigate();

    return (
        <div className="dashboard d-flex">
            <div>
                <SideNav/>
            </div>
            <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
                <div style={{height:"100%"}}>
                    <Container>
                        <Table striped="columns">
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Price Range</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carProducts.map((item, i) => (
                                    <tr key={i}>
                                        <td> <button key={item.id} onClick={() => navigate(`${item.id}`)}>{item.brand}</button></td>
                                        <td><p style={{ overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, 
                                                    WebkitBoxOrient: "vertical", textOverflow:"ellipsis", padding:"0px" }}>{item.description}</p></td>
                                        <td><Image src={item.img_url} thumbnail /></td>
                                        <td>{item.variance['low-spec']} - {item.variance['high-spec']}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Container>
                </div>
            </div>
        </div>
       
    );
}

export default Products;