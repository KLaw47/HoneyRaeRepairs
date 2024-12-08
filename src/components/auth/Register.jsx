import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { createUser, getUserByEmail } from "../../services/userService";
import { createEmployee } from "../../services/employeeService";
import { createCustomer } from "../../services/customerService";


export const Register = (props) => {
  const [user, setUser] = useState({
    email: "",
    fullName: "",
    isStaff: false,
  });
  let navigate = useNavigate();

  const registerNewUser = (e) => {
    e.preventDefault();

    createUser(user)
      .then((createdUser) => {
        if (createdUser.hasOwnProperty("id")) {
          localStorage.setItem(
            "honey_user",
            JSON.stringify({
              id: createdUser.id,
              staff: createdUser.isStaff,
            })
          );
          if (createdUser.isStaff) {
            const newEmployee = {
              userId: createdUser.id,
              specialty: "",
              rate: 0,
            };
            return createEmployee(newEmployee);
          } else {
            const newCustomer = {
              userId: createdUser.id,
              address: "",
              phoneNumber: "",
            };
            return createCustomer(newCustomer);
          }
        }
      })
      .then(() => {
        navigate("/");
      });
  };

  const updateUser = (evt) => {
    const copy = { ...user };
    copy[evt.target.id] = evt.target.value;
    setUser(copy);
  };

  return (
    <main style={{ textAlign: "center" }}>
      <form className="form-login" onSubmit={(event) => registerNewUser(event)}>
        <h1>Honey Rae Repairs</h1>
        <h2>Please Register</h2>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="text"
              id="fullName"
              className="form-control"
              placeholder="Enter your name"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label>
              <input
                onChange={(evt) => {
                  const copy = { ...user };
                  copy.isStaff = evt.target.checked;
                  setUser(copy);
                }}
                type="checkbox"
                id="isStaff"
              />
              I am an employee{" "}
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <button className="login-btn btn-info" type="submit">
              Register
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  );
};
