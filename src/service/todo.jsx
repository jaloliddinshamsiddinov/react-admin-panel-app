import React from 'react'
import { api } from './axios'

const headers = {
    "Content-Type": "application/json"
}

export const useTodoApi = () => {
    const addTodo = async (data) => await api.post('/imtihonreact', data, headers)
    const getAll = async () => await api.get("/imtihonreact")
    const deleteTodo = async (id) => await api.delete(`/imtihonreact/${id}`)
    return { addTodo, getAll, deleteTodo }
}
