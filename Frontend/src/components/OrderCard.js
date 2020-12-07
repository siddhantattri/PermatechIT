import React from "react";
import {Card, Button} from "react-bootstrap"
import {Link, withRouter} from 'react-router-dom'

class OrderCard extends React.Component {


    handleClick = () => this.updateStatus();

    render() {
        let {_id, status, name, customerId, __v} = this.props.order;
        return (
            <Card style={{width: '18rem',margin:"8px"}}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>Placed By: {this.props.customer}</Card.Subtitle>
                    <Card.Text>
                        Status of the order is : {status}
                    </Card.Text>
                    {status === "Processing" &&
                        <Link  to="/customers">
                            <Button variant="success" onClick={this.handleClick}>Update Status</Button>
                        </Link>
                    }
                    <Link to={{
                        pathname: "/order-products",
                        state: {
                            personsName: this.props.customer,
                            orderName:name,
                            orderId: _id}
                    }}>
                        <Button variant="primary">See
                            Products</Button>
                    </Link>

                </Card.Body>
            </Card>
        );
    }

    updateStatus() {
        let {_id, status, name, customerId, v} = this.props.order;
        const options = {
            method: 'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify({id: _id})
        };
        fetch('http://localhost:3001/customers/orders/updateStatus', options).then(el=>this.setState({updated:true}))
    }


}

export default OrderCard;
