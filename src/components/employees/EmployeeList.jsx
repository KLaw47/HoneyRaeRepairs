import { useState, useEffect } from "react"
import "./Employees.css"
import { getStaffUsers } from "../../services/userService"
import { User } from "../../users/User"
import {Link} from "react-router-dom";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then(employeesArr => {
            setEmployees(employeesArr)
        }
        )
    }, [])

    return(
        <div className="employees">
           {employees.map((employeeObj => {
            return(
                <Link key={employeeObj.id} to={`/employees/${employeeObj.id}`} >
                    <User user={employeeObj} key={employeeObj.id} />
                </Link>
                
            )
           }
           ))}
        </div>
    )
}