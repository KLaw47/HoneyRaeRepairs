import { useEffect, useState } from "react";

import { EmployeeViews } from "./EmployeeViews";
import { CustomerViews } from "./CustomerViews";


export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localUser = localStorage.getItem("honey_user")
    const honeyUserObj = JSON.parse(localUser)
    setCurrentUser(honeyUserObj)
  },[])
  return currentUser.isStaff ? (<EmployeeViews currentUser={currentUser}/>) : (<CustomerViews currentUser={currentUser}/>)
};
