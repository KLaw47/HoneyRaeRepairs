import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getSingleEmployee } from "../../services/userService"

export const EmployeeDetails = () => {

    const {employeeId} = useParams()
    const [employee, setEmployee] = useState({})

    useEffect(() => {
        getSingleEmployee(employeeId).then((data) => {
            const employeeObj = data[0]
            console.log("Employee Data:", data);
            setEmployee(employeeObj)
    })
    }, [employeeId])

return(
    <section className="employee">
        <header className="employee-header">{employee.user?.fullName}</header>
        <div>
            <span className="employee-info">Email :</span>
            {employee.user?.email}
        </div>
        <div>
            <span className="employee-info">Specialty :</span>
            {employee.specialty}
        </div>
        <div>
            <span className="employee-info">Rate :</span>
            {employee.rate}
        </div>
    </section>
)
}