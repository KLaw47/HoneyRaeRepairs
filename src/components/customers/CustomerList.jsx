import { useState, useEffect} from "react"
import { getNonStaffUsers } from "../../services/userService"
import { User } from "../../users/User"
import "./Customers.css"
export const CustomerList = () => {
    const [allCustomers, setAllCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(custArr => {
            setAllCustomers(custArr)
        })
    }, [])

    return(
        <div className="customers">
            {allCustomers.map(customerObj => {
                return(
                    <User user={customerObj} key={customerObj.id}/>
                )
            }
            )}
        </div>
    )
}