export const createCustomer = (customer) => {
    return fetch(`${import.meta.env.VITE_API_URL}/customers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    }).then((res) => res.json())
  }

  export const getSingleCustomer = (id) => {
    return fetch(`${import.meta.env.VITE_API_URL}/customers?userId=${id}&_expand=user`
  ).then((res) => res.json());
  };

  export const updateCustomer = (customer) => {
    return fetch(`${import.meta.env.VITE_API_URL}/customers/${customer.id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(customer),
    })
}