import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Customers from "./components/Customers";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Orders from "./components/Orders";
import OrderProducts from "./components/OrderProducts";
import {Nav} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

class App extends React.Component {
    render() {
        return (

            <Router>
                <div className="App">
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Navbar.Brand >Welcome</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/customers">Home</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Route path="/customers" component={Customers}/>
                    <Route path="/orders" component={Orders}/>
                    <Route path="/order-products" component={OrderProducts}/>
                </div>
            </Router>

        );
    }


}

export default App;
