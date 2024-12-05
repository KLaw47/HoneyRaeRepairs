export const getAllTickets = () => {
    return fetch(`${import.meta.env.VITE_API_URL}/serviceTickets?_embed=employeeTickets`).then((res) => res.json())
};

export const createEmployeeTicket = (employeeTicket) => {
    return fetch(`${import.meta.env.VITE_API_URL}/employeeTickets`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(employeeTicket)
    })
}

export const closeTicket = (ticket) => {
    return fetch(`${import.meta.env.VITE_API_URL}/serviceTickets/${ticket.id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(ticket),
    })
}

export const deleteTicketById = (ticketId) => {
    return fetch(`${import.meta.env.VITE_API_URL}/serviceTickets/${ticketId}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
        },
    })
}

export const createTicket = (ticket) => {
    return fetch(`${import.meta.env.VITE_API_URL}/serviceTickets`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(ticket)
    })
}