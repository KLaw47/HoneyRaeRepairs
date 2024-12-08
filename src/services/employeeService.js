

export const getEmployees = () => {
    return fetch(`${import.meta.env.VITE_API_URL}/employees?_expand=user`).then((res) => res.json())
};

export const updateEmployee = (employee) => {
    return fetch(`${import.meta.env.VITE_API_URL}/employees/${employee.id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(employee),
    })
}

export const createEmployee = (employee) => {
    return fetch(`${import.meta.env.VITE_API_URL}/employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    }).then((res) => res.json())
  }