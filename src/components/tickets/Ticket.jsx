import "./Tickets.css";
import { useEffect, useState } from "react";
import { getEmployees } from "../../services/employeeService";
import { closeTicket, createEmployeeTicket, deleteTicketById } from "../../services/ticketService";

export const Ticket = ({ ticket, currentUser, getAndSetTickets }) => {
  const [employees, setEmployees] = useState([]);
  const [assignedEmployee, setAssignedEmployee] = useState({});

  useEffect(() => {
    getEmployees().then((employeesArr) => {
      setEmployees(employeesArr);
    });
  }, []);

  useEffect(() => {
    const foundEmployee = employees.find(
      (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
    );
    setAssignedEmployee(foundEmployee);
  }, [employees, ticket]);

  const handleClaim = () => {
    const claimEmployee = employees.find(employee => employee.userId === currentUser.id)
    const newEmployeeTicket = {
        employeeId: claimEmployee.id,
        serviceTicketId: ticket.id
    }
    createEmployeeTicket(newEmployeeTicket).then(() => {
        getAndSetTickets()
    })
  }

  const handleClose = () => {
    const closedTicket ={
        id: ticket.id,
        userId: ticket.userId,
        description: ticket.description,
        emergency: ticket.emergency,
        dateCompleted: new Date(),
    }

    closeTicket(closedTicket).then(() => {
        getAndSetTickets()
    })
  }

  const handleDelete = () => {
    deleteTicketById(ticket.id).then(() => {
        getAndSetTickets()
    })
  }


  return (
    <section className="ticket">
      <header className="ticket-info">#{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">assignee</div>
          <div>
            {assignedEmployee ? assignedEmployee.user?.fullName : "None"}
          </div>
        </div>
        <div>
          <div className="ticket-info">Emergency:</div>
          <div>{ticket.emergency ? "yes" : "no"}</div>
        </div>
        <div className="btn-container">
          {/* if logged in user is employee, and no employeeticket associated, button to claim exists */}
          {currentUser.isStaff && !assignedEmployee && (
            <button className="btn btn-secondary" onClick={handleClaim}>Claim</button>
          )}
          {/* if logged in user is employee, and employee is assigned, and no date completed button to close exists */}
          {!ticket.dateCompleted && assignedEmployee?.userId === currentUser.id && (
            <button className="btn btn-warning" onClick={handleClose}>Close</button>
          )}
          {/* if logged in user is customer, then render buttons to delete */}
          {currentUser.isStaff === false && (
            <button className="btn btn-warning" onClick={handleDelete}>Delete</button>
          )}
        </div>
      </footer>
    </section>
  );
};
