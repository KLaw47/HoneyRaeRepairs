
import { useNavigate } from "react-router-dom"
import { createTicket } from "../../services/ticketService"
import "./Form.css"
import {useState} from "react"

export const TicketForm = ({ currentUser }) => {
    const navigate = useNavigate()

    const [ticket, setTicket] = useState({
        description: "",
        emergency: false
    })

    const handleSave = (event) => {
        event.preventDefault()
        if (ticket.description) {
            const newTicket = {
                userId: currentUser.id,
                description: ticket.description,
                emergency: ticket.emergency,
                dateCompleted: "",
            }
            createTicket(newTicket).then(() => {
                navigate("/tickets")
            })
        } else {
            window.alert("Description Required")
        }
    }

    return(
        <form>
            <h2>New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label>Description: </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Brief description of issue"
                        onChange={(event) => {
                            const ticketCopy = {...ticket}
                            ticketCopy.description = event.target.value
                            setTicket(ticketCopy)

                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>
                        Emergency:
                        <input
                            type="checkbox"
                            onChange={(event) => {
                                const ticketCopy = {...ticket}
                                ticketCopy.emergency = event.target.checked
                                setTicket(ticketCopy)
                            }}
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-info" onClick={handleSave}>Submit Ticket</button>
                </div>
            </fieldset>
        </form>
    )
}