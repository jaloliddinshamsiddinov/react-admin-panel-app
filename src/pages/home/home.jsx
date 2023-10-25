import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Nothing } from './components/nothing'
import { TodoUi } from './components/todo-ui'
import { useTodoApi } from '../../service/todo'

const { addTodo, getAll, deleteTodo } = useTodoApi();


export const Home = () => {
    let toggle = JSON.parse(localStorage.getItem("test"))
    return (
        <Main>
            {toggle ? <TodoUi /> : <Nothing />}
        </Main>
    )
}

const Main = styled.main`
`
// console.log(toggle + "----home");