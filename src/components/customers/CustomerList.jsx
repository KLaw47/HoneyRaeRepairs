import { useState, useEffect } from "react";
import { getNonStaffUsers } from "../../services/userService";
import { User } from "../../users/User";
import { Link } from "react-router-dom";
import "./Customers.css";
export const CustomerList = () => {
  const [allCustomers, setAllCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((custArr) => {
      setAllCustomers(custArr);
    });
  }, []);

  return (
     // The `key` prop is used by React to identify each element in the list.
    // It must be on the outermost element returned by the `map()` function.
    // In this case, the `Link` component is the outermost element, so the `key` is applied here
    // instead of the `User` component to ensure proper rendering and avoid linter warnings.
    //also its necessary to use an absolute path here. the leading / in the customers detail path keeps an additional customers from being appended to the path:
    // ie customers/customers/interpolated number
    <div className="customers">
      {allCustomers.map((customerObj) => {
        return (
          <Link key={customerObj.id} to={`/customers/${customerObj.id}` }> 
            <User user={customerObj}  />
          </Link>
        );
      })}
    </div>
  );
};
