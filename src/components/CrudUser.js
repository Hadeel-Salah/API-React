import React, { useState, useEffect } from "react"
import Form from "./Form"
import Table from "./Table.js"
import { httpHelper } from "../helpers/httpHelper"


const CrudUser = () => {

    const [users, setUsers] = useState(null)
    const url = "http://localhost:5000/users"
    const api = httpHelper()
    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {
        api.get(`${url}?_expand=companies`)
            .then(res => {
                setUsers(res)
            })
            .catch(err => console.log(err))
    }
    const postUser = user => {
        api.post(`${url}`, { body: user })
            .then(res => getUsers())
            .catch(err => console.log(err))
    }

    const updateUser = (id, user) => {
        api.put(`${url}/${id}`, { body: user })
            .then(res => getUsers())
            .catch(err => console.log(err))
    }

    const deleteUser = id => {
        api.del(`${url}/${id}`, {})
            .then(res => getUsers())
            .catch(err => console.log(err))
    }


    if (!users) {
        return null
    }


    return (
        <>
            <h2> New User</h2>
            <Form postUser={postUser} />
            <div className="all-users">
                <h3> All of the users</h3>
                <Table
                    users={users}
                    setUsers={setUsers}
                    postUser={postUser}
                    updateUser={updateUser}
                    deleteUser={deleteUser}
                />



            </div>


        </>
    )
}

export default CrudUser