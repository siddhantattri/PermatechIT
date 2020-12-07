import React from "react";
import {Card, Button} from "react-bootstrap"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

class CustomerCard extends React.Component {


    render() {
        let {_id, name, v} = this.props.customer;
        return (
            <Card style={{width: '18rem',margin:"8px"}}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Link to={{
                        pathname: "/orders",
                        state: {
                            personsName: name,
                            customerId: _id}
                    }}>
                        <Button variant="primary">See
                        Orders</Button></Link>
                </Card.Body>
            </Card>
        );
    }


}

export default CustomerCard;
