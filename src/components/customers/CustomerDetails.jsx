import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleUser } from "../../services/userService";
import "./Customers.css"

export const CustomerDetails = () => {

    const { customerId } = useParams()
    const [ customer, setCustomer ] = useState({})

    useEffect(() => {
        getSingleUser(customerId).then((data) => {
            const customerObj = data[0]
            setCustomer(customerObj)
        }
        )
        console.log(customer)
    }, [customerId])
    
    return(
        <section className="customer">
            <header className="customer-header">{customer.user?.fullName}</header>
            <div>
                <span className="customer-info">Email :</span>
                {customer.user?.email}
            </div>
            <div>
                <span className="customer-info">Address :</span>
                {customer.address}
            </div>
            <div>
                <span className="customer-info">Phone :</span>
                {customer.phoneNumber}
            </div>
        </section>
    )
}