import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleUser } from "../../services/userService";
import { Link } from "react-router-dom"
import "./Customers.css"

export const CustomerDetails = ({ currentUser, customerId: propCustomerId }) => {

    const { customerId: paramCustomerId } = useParams();
    const customerId = propCustomerId || paramCustomerId;
    const [ customer, setCustomer ] = useState(null)

    useEffect(() => {
        getSingleUser(customerId).then((data) => {
            console.log("Fetched Customer Data:", data)
            const customerObj = data[0]
            setCustomer(customerObj)
        }
        )
    }, [customerId])

    if (!customer) {
        return <div>Loading customer details...</div>;
    }
    
    return(
        <section className="customer">
            <header className="customer-header">{customer?.user?.fullName}</header>
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
            {/* here i am conditionally rendering an edit button, because the flow for customers is different to employees. */}
            {currentUser?.id === customer.user?.id && ( 
                <div className="edit-button-container">
                    <Link to="/profile/edit">
                        <button className="btn btn-primary">Edit Profile</button>
                    </Link>
                </div>
            )}
        </section>
    )
}