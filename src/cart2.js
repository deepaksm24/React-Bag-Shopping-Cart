import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cart.css';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Cart2() {
    const data = [
        {
            id: 1,
            productImage:
                "https://c1.wallpaperflare.com/preview/680/478/429/online-shopping-lisaswardrobe-handbags-shopping.jpg",
            productName: "Purple leather handbag",
            productdes: " shallow focus Handbag.",
            price: 11999,
            rating: 91,
        },
        {
            id: 2,
            productImage:
                "https://c0.wallpaperflare.com/preview/551/204/973/accessories-bright-clothes-daytime.jpg",
            productName: "Holding Brown Bag",
            productdes: "  Woman Wearing Black ",
            price: 9500,
            rating: 90,
        },
        {
            id: 3,
            productImage:
                "https://c1.wallpaperflare.com/preview/320/881/260/handbag-kopert%C3%B3wka-shopping-haberdashery.jpg",
            productName: "Kopertówka",
            productdes: "  Quilted red bag.",
            price: 7000,
            rating: 80,
        },
        {
            id: 4,
            productImage:
                "https://c0.wallpaperflare.com/preview/803/802/355/accessory-adult-beach-beautiful.jpg",
            productName: "Gray hobo bag",
            productdes: " Woman holding grayhobo bag",
            price: 5955,
            rating: 50,
        },
        {
            id: 5,
            productImage:
                "https://c1.wallpaperflare.com/preview/293/253/161/bag-arm-fashion-style.jpg",
            productName: "brown leather 2-way shoulder bag",
            productdes: " Carrying greenbag",
            price: 18220,
            rating: 95,
        },
        {
            id: 6,
            productImage:
                "https://c4.wallpaperflare.com/wallpaper/100/667/709/flowers-pose-model-roses-wallpaper-preview.jpg",
            productName: "Flower Rose handbag",
            productdes: "Vivid stylish Handbag.",
            price: 64000,
            rating: 91,
        },
        {
            id: 7,
            productImage:
                "https://c0.wallpaperflare.com/preview/200/570/325/accessory-beach-bright-brown-thumbnail.jpg",
            productName: "Beach-Bright",
            productdes: "Wool wheel-focus Handbag.",
            price: 64000,
            rating: 75,
        },
        {
            id: 8,
            productImage:
                "https://c1.wallpaperflare.com/preview/970/664/949/purse-clutch-handbag-fashion.jpg",
            productName: "Miami leather handbag",
            productdes: "Wool wheel-focus Handbag.",
            price: 8999,
            rating: 80,
        },

        {
            id: 9,
            productImage:
                "https://t4.ftcdn.net/jpg/00/26/20/23/240_F_26202355_z22DHj9WtmOI8Snf7zZX8myFwBd0KfTA.jpg",
            productName: "Peach leather handbag",
            productdes: "Wonder Women Handbag.",
            price: 21999,
            rating: 85,
        },
        {
            id: 10,
            productImage:
                "https://t3.ftcdn.net/jpg/02/42/74/30/240_F_242743039_KPbFr5skBR9rpmQRwnydhJRPAlqdS2Ic.jpg",
            productName: "Pink leather handbag",
            productdes: "Super Women Handbag.",
            price: 48999,
            rating: 95,
        },
        {
            id: 11,
            productImage:
                "https://t4.ftcdn.net/jpg/01/08/37/29/240_F_108372954_ucF2ig6L2BOwJgNoTCVrzddJbQ3CH3U2.jpg",
            productName: "Grey Mass handbag",
            productdes: "CatWalk Handbag.",
            price: 18999,
            rating: 85,
        },
        {
            id: 12,
            productImage:
                "https://t4.ftcdn.net/jpg/02/58/76/23/240_F_258762346_rl9FZiKAeYWbaXLpcreN0617bnYdSTm9.jpg",
            productName: "Brown leather handbag",
            productdes: "Style Side Handbag.",
            price: 89999,
            rating: 99,
        },
    ];

    const [count, setCount] = useState(0)



    return (
        <div>
            <Container>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-success m-3" type="button">Cart<span> {count}</span></button>
                </div>
            </Container>

            <div className="py-5">
                <Container className="container px-4 px-lg-5 mt-0">
                    <Row className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {data.map((prod, idx) => <Cards
                            key={prod.id}
                            idx={idx}
                            prod={prod}
                            setCount={setCount}
                            count={count}
                        />)}
                    </Row>
                </Container>

            </div>
        </div>
    );

}

function Cards({ prod, idx, setCount, count }) {

    const [show, setShow] = useState(false);

    function addToCart() {
        setShow(!show)
        setCount(count + 1)
    }

    function removeFromCart() {
        setShow(!show)
        setCount(count - 1)
    }

    return (

        <Col className="col mb-5">

            <Card className="card h-100">


                <Card.Img variant="top" src={prod.productImage} />

                <Card.Body>
                    <Card.Title>{prod.productName}</Card.Title>
                    <Card.Text><i>{prod.productdes}</i></Card.Text>
                    <Card.Text className="h6" > <span className="h5">&#8377; </span>{prod.price}</Card.Text>
                    <Card.Text>{prod.rating}<span className="checked"> ♥</span> </Card.Text>

                    {!show ? <Button
                        variant="primary"
                        className="border border-success rounded-pill"
                        onClick={addToCart}
                    >Add To cart</Button> : ""}


                    {show ? <Button
                        variant="info"
                        className="border border-success rounded-pill"
                        onClick={removeFromCart}
                    >Remove from cart</Button> : ""}

                </Card.Body>



            </Card>

        </Col>

    )
}




export default Cart2;
