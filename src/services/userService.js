export const getNonStaffUsers = () => {
    return fetch(`http://127.0.0.1:8088/users?isStaff=false`).then((res) => res.json())
}

export const getStaffUsers = () => {
    return fetch(`http://127.0.0.1:8088/users?isStaff=true`).then((res) => res.json())
}