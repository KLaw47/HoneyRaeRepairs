export const getNonStaffUsers = () => {
  return fetch(`http://127.0.0.1:8088/users?isStaff=false`).then((res) =>
    res.json()
  );
};

export const getStaffUsers = () => {
  return fetch(`http://127.0.0.1:8088/users?isStaff=true`).then((res) =>
    res.json()
  );
};

export const getSingleUser = (userId) => {
  return fetch(`http://localhost:8088/customers?userId=${userId}&_expand=user
`).then((res) => res.json());
};

export const getSingleEmployee = (id) => {
  return fetch(`http://localhost:8088/employees?userId=${id}&_expand=user&_embed=employeeTickets`
).then((res) => res.json());
};export const getUserByEmail = (email) => {
  return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
    res.json()
  )
}

export const createUser = (customer) => {
  return fetch("http://localhost:8088/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  }).then((res) => res.json())
}
