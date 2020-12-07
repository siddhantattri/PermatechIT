import React from "react";
import {Card, Button, InputGroup, FormControl} from "react-bootstrap"
import {Link, withRouter} from 'react-router-dom'

class OrderCard extends React.Component {
    constructor(props) {
        super(props);
        this.state={qty:this.props.product.qty}
    }

    handleClick = () => this.updateStatus();
    handleIncrement = () => this.setState({qty:this.state.qty+1});
    handleDecrement = () => this.setState({qty:this.state.qty?this.state.qty-1:0});
    render() {
        let {_id,  name, orderId,productId,qty,date, __v} = this.props.product;

        return (
            <Card style={{width: '18rem',margin:"8px"}}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>Placed By: {this.props.customer}</Card.Subtitle>
                    <Card.Text>
                    Placed on : {date}
                    </Card.Text>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <Button onClick={this.handleDecrement} variant="outline-danger">-</Button>
                        </InputGroup.Prepend>
                        <FormControl value={this.state.qty}/>
                        <InputGroup.Append>
                            <Button onClick={this.handleIncrement} variant="outline-success">+</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <Link to="/customers">
                        <Button variant="success" onClick={this.handleClick}>Update Quantity</Button>
                    </Link>


                </Card.Body>
            </Card>
        );
    }

    updateStatus() {

        let {_id,  name, orderId,productId,qty,date, __v} = this.props.product;
        const options = {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({id: _id,qty:this.state.qty})
        };
        fetch('http://localhost:3001/customers/orders/products/updateQty', options)
    }


}

export default OrderCard;
