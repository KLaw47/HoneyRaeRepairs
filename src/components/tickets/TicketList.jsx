import "./Tickets.css"
import { useState, useEffect} from "react"
import { getAllTickets } from "../../services/ticketService"
import { Ticket } from "./Ticket"
import { TicketSearchBar } from "./TicketSearchBar"

export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergency, setShowEmergency] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
  
    useEffect(() => {
      getAllTickets().then(ticketsArray => {
        setAllTickets(ticketsArray)
        console.log(ticketsArray)
      })
    }, []) //runs on initial render
    
    useEffect(() => {
        let modifiedTickets = allTickets
        if (showEmergency) {
            modifiedTickets = modifiedTickets.filter(ticket => ticket.emergency);
        }
        if (searchTerm) {
            modifiedTickets = modifiedTickets.filter(ticket =>
                (ticket.description || "").toLowerCase().includes(searchTerm.toLowerCase())
            )
        }
        setFilteredTickets(modifiedTickets)
    }, [showEmergency, allTickets, searchTerm])

  
    return <div className="tickets-container">
      <h2>Tickets</h2>
      <TicketSearchBar setSearchTerm={setSearchTerm} setShowEmergency={setShowEmergency}/>
      <article className="tickets">
        {filteredTickets.map(ticketObj => {
          return <Ticket ticket={ticketObj} key={ticketObj.id}/>
        })}
      </article>
    </div>
}