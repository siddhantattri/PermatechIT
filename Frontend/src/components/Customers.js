import React from "react";
import CustomerCard from "./CustomerCard";

class Customers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {customers: []}
    }

    getCustomers() {
        fetch("http://localhost:3001/customers").then(response => response.json())
            .then(data => this.setState({customers: data}));
    }

    componentWillMount() {
        this.getCustomers()
    }

    render() {
        return (
            <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}><h2>List of Customers</h2>
                {this.state.customers.map(customer =>
                 <CustomerCard style={{padding:"20px"}} customer={customer}/>)}</div>
        );
    }


}

export default Customers;
