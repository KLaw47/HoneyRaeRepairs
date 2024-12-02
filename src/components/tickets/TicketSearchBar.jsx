import { useNavigate } from "react-router-dom"
import "./Tickets.css"
export const TicketSearchBar = ({ setShowEmergency, setSearchTerm, setShowOpen, currentUser }) => {
    const navigate = useNavigate()

    
    return(
    <div className="filter-bar">
        {currentUser.isStaff ? 
        <>
            <button className="filter-btn btn-primary" onClick={() => {setShowEmergency(true)}}>
            Emergency
        </button>
        <button className="filter-btn btn-info" onClick={() => {setShowEmergency(false)}}>
            Show All
        </button>
        <input
            className="ticket-search"
            type="text"
            placeholder="Search Tickets"
            onChange={(event) => {
                setSearchTerm(event.target.value)}}
            />
        </> :
        <>
            <button className="filter-btn btn-primary"onClick={() => {navigate("/tickets/create")}}>Create Ticket</button>
            <button className="filter-btn btn-info" onClick={() => {setShowOpen(true)}}>Open Tickets</button>
            <button className="filter-btn btn-secondary" onClick={() => {setShowOpen(false)}}>All tickets</button>
        </>} 
        
    </div>
    )
}