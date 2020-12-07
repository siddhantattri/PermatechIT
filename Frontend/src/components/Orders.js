import React from "react";
import OrderCard from "./OrderCard";

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {orders: []}
    }

    getOrders() {
        var {personsName,customerId} = this.props.location.state;
        fetch(`http://localhost:3001/customers/orders?customerId=${customerId}`).then(response => response.json())
            .then(data => {
                 return this.setState({orders: data})});
    }

    componentWillMount() {
        this.getOrders()
    }

    render() {
        var {personsName,customerID} = this.props.location.state;
        return (
            <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <h2>
                    List of Orders
                </h2>


                {this.state.orders.map(order =>
                <OrderCard order={order} customer={personsName}/>)}
                {this.state.orders.length===0 && <span>There are no Orders</span>}
            </div>
        );
    }


}

export default Orders;
