import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Footer } from '../../components/layout/footer'
import { zodResolver } from "@hookform/resolvers/zod"
import { useTodoApi } from '../../service/todo'

const validationschema = z.object({
  name: z.string().min(3, { message: "oo shit!" }),
  brend: z.string().min(3, { message: "oo nimgaaaaaa" }),
})

export const CreateData = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(validationschema) })


  const { addTodo } = useTodoApi()
  const { add, setAdd } = useState(false)
  const submit = (data) => {
    addTodo(data)
    reset()
    localStorage.setItem("test", JSON.stringify(true))
  }


  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <TextField error={errors?.name} helperText={errors?.name?.message} type="text" {...register("name")} fullWidth label="Название *" />
        <TextField error={errors?.brend} helperText={errors?.brend?.message} type="text" {...register("brend")} label="Бренд *" />
        <TextField error={errors?.kod} helperText={errors?.kod?.message} {...register("kod")} type='text' label="Артикул производителя *" />
        <Button type='submit'>submit</Button>
      </form>
    </>
  )
}

