export const getNonStaffUsers = () => {
  return fetch(`${import.meta.env.VITE_API_URL}/users?isStaff=false`).then((res) =>
    res.json()
  );
};

export const getStaffUsers = () => {
  return fetch(`${import.meta.env.VITE_API_URL}/users?isStaff=true`).then((res) =>
    res.json()
  );
};

export const getSingleUser = (userId) => {
  return fetch(`${import.meta.env.VITE_API_URL}/customers?userId=${userId}&_expand=user
`).then((res) => res.json());
};

export const getSingleEmployee = (id) => {
  return fetch(`${import.meta.env.VITE_API_URL}/employees?userId=${id}&_expand=user&_embed=employeeTickets`
).then((res) => res.json());
};

export const getUserByEmail = (email) => {
  return fetch(`${import.meta.env.VITE_API_URL}/users?email=${email}`).then((res) =>
    res.json()
  )
}

export const createUser = (customer) => {
  return fetch(`${import.meta.env.VITE_API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  }).then((res) => res.json())
}
