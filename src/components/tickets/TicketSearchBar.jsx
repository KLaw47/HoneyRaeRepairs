import "./Tickets.css"
export const TicketSearchBar = ({ setShowEmergency, setSearchTerm }) => {
    return(
    <div className="filter-bar">
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
    </div>
    )
}