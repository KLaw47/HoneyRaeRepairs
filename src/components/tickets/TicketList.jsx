import "./Tickets.css"
import { useState, useEffect} from "react"
import { getAllTickets } from "../../services/ticketService"
import { Ticket } from "./Ticket"
import { TicketSearchBar } from "./TicketSearchBar"

export const TicketList = ({ currentUser }) => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergency, setShowEmergency] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [showOpen, setShowOpen] = useState(false)

    const getAndSetTickets = () => {
      getAllTickets().then(ticketsArray => {
        if (currentUser.isStaff) {
          setAllTickets(ticketsArray)
        } else {
          const customerTickets = ticketsArray.filter(ticket => ticket.userId === currentUser.id)
          setAllTickets(customerTickets)
        }
      })
    }
  
    useEffect(() => {
      getAndSetTickets()
    }, [currentUser]) //runs on initial render
    
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

    useEffect(() => {
      let filteredTickets = allTickets
      if (showOpen) {
        filteredTickets = filteredTickets.filter(ticket =>!ticket.dateCompleted)
        console.log("Filtered open tickets:", filteredTickets);
      }
      setFilteredTickets(filteredTickets)
    }, [showOpen, allTickets])

  
    return <div className="tickets-container">
      <h2>Tickets</h2>
      <TicketSearchBar setSearchTerm={setSearchTerm} setShowEmergency={setShowEmergency} setShowOpen={setShowOpen} currentUser={currentUser}/>
      <article className="tickets">
        {filteredTickets.map(ticketObj => {
          return <Ticket ticket={ticketObj} key={ticketObj.id} currentUser={currentUser} getAndSetTickets={getAndSetTickets}/>
        })}
      </article>
    </div>
}