import React from 'react'
import { Home } from './pages/home'
import { Route, Routes } from 'react-router-dom'
import { Layout } from "./components/layout/layout"
import { CreateData } from "./pages/create/create-data"

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='create' element={<CreateData />} />
          <Route path='*' element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </>
  )
}
