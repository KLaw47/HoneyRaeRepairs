export const getEmployees = () => {
    return fetch(`http://127.0.0.1:8088/employees?_expand=user`).then((res) => res.json())
};