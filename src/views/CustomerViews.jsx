import { Routes, Route, Outlet } from "react-router-dom";
import { Welcome } from "../components/welcome/Welcome";
import { CustomerNav } from "../components/nav/CustomerNav";
import { TicketList } from "../components/tickets/TicketList";
import { TicketForm } from "../components/forms/TicketForm";
import { CustomerForm } from "../components/forms/CustomerForm";
import { CustomerDetails } from "../components/customers/CustomerDetails";

export const CustomerViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <CustomerNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="tickets">
          <Route index element={<TicketList currentUser={currentUser} />} />
          <Route
            path="create"
            element={<TicketForm currentUser={currentUser} />}
          />
        </Route>
        <Route path="profile">
          <Route
            index
            element={<CustomerDetails currentUser={currentUser} customerId={currentUser.id} />}
          />
          <Route
            path="edit"
            element={<CustomerForm currentUser={currentUser} />}
          />
        </Route>
      </Route>
    </Routes>
  );
};
