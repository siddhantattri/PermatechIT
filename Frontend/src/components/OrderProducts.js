import React from "react";
import OrderProductsCard from "./OrderProductsCard";

class OrderProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {products: []}
    }

    getOrders() {
        var {personsName,orderName,orderId} = this.props.location.state;
        fetch(`http://localhost:3001/customers/orders/products?orderId=${orderId}`).then(response => response.json())
            .then(data => {
                return this.setState({products: data})});
    }

    componentWillMount() {
        this.getOrders()
    }

    render() {
        var {personsName,orderName,orderId} = this.props.location.state;
        return (
            <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <h2>
                    List of Products
                </h2>


                {this.state.products.map(product =>
                <OrderProductsCard product={product} customer={personsName}/>)}</div>
        );
    }


}

export default OrderProducts;
