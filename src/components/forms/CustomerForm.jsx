import { useNavigate } from "react-router-dom"
import "./Form.css"
import { useEffect, useState } from "react"
import { getSingleCustomer, updateCustomer } from "../../services/customerService"

export const CustomerForm = ({ currentUser }) => {
    const [customer, setCustomer] = useState({})
    const navigate = useNavigate()
    
    useEffect(() => {
        getSingleCustomer(currentUser.id).then(data => {
            const custObj = data[0]
            setCustomer(custObj)
        })
    }, [currentUser])

    const handleSave = (event) => {
        event.preventDefault()
        const editedCust = {
            id: customer.id,
            address: customer.address,
            phoneNumber: customer.phoneNumber,
            userId: customer.userId,
        }
        updateCustomer(editedCust).then(() => {
            navigate("/profile")
        })
    }
    return(
        <>
        {customer && customer.address !== undefined ? (
    // Render the form
    <form className="profile">
        <h2>Update Profile</h2>
        <fieldset>
            <div className="form-group">
                <label>Address:</label>
                <input
                    type="text"
                    value={customer.address}
                    onChange={(event) => {
                        const copy = { ...customer };
                        copy.address = event.target.value;
                        setCustomer(copy);
                    }}
                    required
                    className="form-control"
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label>Phone Number:</label>
                <input
                    type="tel"
                    value={customer.phoneNumber}
                    onChange={(event) => {
                        const copy = { ...customer };
                        copy.phoneNumber = event.target.value;
                        setCustomer(copy);
                    }}
                    required
                    className="form-control"
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <button className="form-btn btn-primary" onClick={handleSave}>
                    Save
                </button>
            </div>
        </fieldset>
    </form>
) : (
    <div>Loading...</div>
)}

    </>
    )
}