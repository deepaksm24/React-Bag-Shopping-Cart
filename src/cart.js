import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cart.css';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cart(){


return(


<div className="py-5">
    <Container className="container px-4 px-lg-5 mt-5">
      <Row className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      <Items1/>
      <Items2/>
      <Items3/>
      <Items4/>
      <Items5/>
      <Items6/>
      <Items7/>
      <Items8/>
      </Row>     
    </Container>
          
</div>

);



}

function Items1() {
    return (
        <Col className="col mb-5">

        <Card className="card h-100">

            <Card.Img variant="top" src="https://c1.wallpaperflare.com/preview/680/478/429/online-shopping-lisaswardrobe-handbags-shopping.jpg" />
            <Card.Body>
                <Card.Title> purple leather handbag</Card.Title>
                <Card.Text>
                    shallow focus Handbag.
                </Card.Text>
                <Card.Text>
                    <span>&#8377;</span> 2999
                </Card.Text>
                <Card.Text>
                    <span>Rating: </span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </Card.Text>
                <Button variant="primary">Add</Button>
            </Card.Body>
        </Card>

        </Col>
    );
}

function Items2() {
    return (
        <Col className="col mb-5">

        <Card className="card h-100">

            <Card.Img variant="top" src="https://c0.wallpaperflare.com/preview/551/204/973/accessories-bright-clothes-daytime.jpg" />
            <Card.Body>
                <Card.Title>Holding Brown Bag</Card.Title>
                <Card.Text>
                Woman Wearing Black 
                </Card.Text>
                <Card.Text>
                    <span>&#8377;</span> 5999
                </Card.Text>
                <Card.Text>
                    <span>Rating: </span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                </Card.Text>
                <Button variant="primary">Add</Button>
            </Card.Body>
        </Card>

        </Col>
    );
}
function Items3() {
    return (
        <Col className="col mb-5">

        <Card className="card h-100">

            <Card.Img variant="top" src="https://c1.wallpaperflare.com/preview/320/881/260/handbag-kopert%C3%B3wka-shopping-haberdashery.jpg" />
            <Card.Body>
                <Card.Title>Kopertówka</Card.Title>
                <Card.Text>
                Quilted red bag.
                </Card.Text>
                <Card.Text>
                    <span>&#8377;</span> 8999
                </Card.Text>
                <Card.Text>
                    <span>Rating: </span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                </Card.Text>
                <Button variant="primary">Add</Button>
            </Card.Body>
        </Card>

        </Col>
    );
}
function Items4() {
    return (
        <Col className="col mb-5">

        <Card className="card h-100">

            <Card.Img variant="top" src="https://c0.wallpaperflare.com/preview/803/802/355/accessory-adult-beach-beautiful.jpg" />
            <Card.Body>
                <Card.Title>Gray hobo bag</Card.Title>
                <Card.Text>
                Woman holding grayhobo bag
                </Card.Text>
                <Card.Text>
                    <span>&#8377;</span> 5235
                </Card.Text>
                <Card.Text>
                    <span>Rating: </span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </Card.Text>
                <Button variant="primary">Add</Button>
            </Card.Body>
        </Card>

        </Col>
    );
}

function Items5() {
    return (
        <Col className="col mb-5">

        <Card className="card h-100">

            <Card.Img variant="top" src="https://c1.wallpaperflare.com/preview/293/253/161/bag-arm-fashion-style.jpg" />
            <Card.Body>
                <Card.Title>brown leather 2-way shoulder bag</Card.Title>
                <Card.Text>
                Carrying greenbag
                </Card.Text>
                <Card.Text>
                    <span>&#8377;</span> 11900
                </Card.Text>
                <Card.Text>
                    <span>Rating: </span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                </Card.Text>
                <Button variant="primary">Add</Button>
            </Card.Body>
        </Card>

        </Col>
    );
}function Items6() {
    return (
        <Col className="col mb-5">

        <Card className="card h-100">

            <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/100/667/709/flowers-pose-model-roses-wallpaper-preview.jpg" />
            <Card.Body>
                <Card.Title>Flower Rose handbag</Card.Title>
                <Card.Text>
                    Vivid stylish Handbag.
                </Card.Text>
                <Card.Text>
                    <span>&#8377;</span> 12999
                </Card.Text>
                <Card.Text>
                    <span>Rating: </span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </Card.Text>
                <Button variant="primary">Add</Button>
            </Card.Body>
        </Card>

        </Col>
    );
}function Items7() {
    return (
        <Col className="col mb-5">

        <Card className="card h-100">

            <Card.Img variant="top" src="https://c0.wallpaperflare.com/preview/200/570/325/accessory-beach-bright-brown-thumbnail.jpg" />
            <Card.Body>
                <Card.Title> purple leather handbag</Card.Title>
                <Card.Text>
                    shallow focus Handbag.
                </Card.Text>
                <Card.Text>
                    <span>&#8377;</span> 6999
                </Card.Text>
                <Card.Text>
                    <span>Rating: </span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                </Card.Text>
                <Button variant="primary">Add</Button>
            </Card.Body>
        </Card>

        </Col>
    );
}
function Items8() {
    return (
        <Col className="col mb-5">

        <Card className="card h-100">

            <Card.Img variant="top" src="https://c1.wallpaperflare.com/preview/970/664/949/purse-clutch-handbag-fashion.jpg" />
            <Card.Body>
                <Card.Title> purple leather handbag</Card.Title>
                <Card.Text>
                    shallow focus Handbag.
                </Card.Text>
                <Card.Text>
                    <span>&#8377;</span> 7999
                </Card.Text>
                <Card.Text>
                    <span>Rating: </span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </Card.Text>
                <Button variant="primary">Add</Button>
            </Card.Body>
        </Card>

        </Col>
    );
}


export default Cart;
