export const createCustomer = (customer) => {
    return fetch(`${import.meta.env.VITE_API_URL}/customers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    }).then((res) => res.json())
  }