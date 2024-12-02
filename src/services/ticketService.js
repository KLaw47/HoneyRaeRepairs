export const getAllTickets = () => {
    return fetch(`http://localhost:8088/serviceTickets?_embed=employeeTickets`).then((res) => res.json())
};

export const createEmployeeTicket = (employeeTicket) => {
    return fetch(`http://localhost:8088/employeeTickets`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(employeeTicket)
    })
}

export const closeTicket = (ticket) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticket.id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(ticket),
    })
}

export const deleteTicketById = (ticketId) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
        },
    })
}

export const createTicket = (ticket) => {
    return fetch(`http://localhost:8088/serviceTickets`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(ticket)
    })
}