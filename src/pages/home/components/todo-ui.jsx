import React, { useState, useEffect } from 'react';
import { useTodoApi } from '../../../service/todo'
import { Button, Table, TextField, colors } from '@mui/material';
import styled from 'styled-components';
import { SearchIcon } from "../../../assets/icon/search"
import { COLORS } from '../../../config/colors';
import { DeleteIcon } from "../../../assets/icon/delete-icon"
import { EditIcon } from "../../../assets/icon/edit-icon"



export const TodoUi = () => {
    const { addTodo, getAll, deleteTodo } = useTodoApi();
    const [data, setData] = useState([]);
    const [ add, setAdd ] = useState(true)

    if (data.length> 0) {
        localStorage.setItem("test", JSON.stringify(true))
        console.log("local---1");
    } else {
        localStorage.setItem("test", JSON.stringify(false))
        console.log("local---2");
    }
    useEffect(() => {
        const getData = async () => {
            const res = await getAll()
            setData(res.data)
        }
        getData()
        console.log(2);
        setAdd(false)
    }, [add]);


    const deleteTodoFunck = (id) => {
        deleteTodo(id)
        setAdd(!add)
        console.log(1);
    }

    return (
        <>
            <Stakc>
                <div className="aboutTovarbox">
                    <div className="aboutTovar">
                        <h3 className='allTovar'>Все товары (5)</h3>
                        <h3 className="err">С ошибками (1)</h3>
                    </div>
                    <div className="search">
                        <Button><SearchIcon /></Button>
                        <Input className='inp' placeholder="Поиск" />
                    </div>
                </div>
                <div className="hr"></div>
                <Table className='tovar_title'>
                    <tr>
                        <td>Наименование</td>
                        <td>Артикул</td>
                        <td>Ozon</td>
                        <td>WB</td>
                        <td>VK</td>
                        {null}
                    </tr>

                    {data.map((item) => {
                        return (
                            <tr>
                                <td className='tableTd'>{item.name}</td>
                                <td className='tableTd'>{item.id}</td>
                                <td className='tableTd'>{item.id}</td>
                                <td className='tableTd'>{item.id}</td>
                                <td className='tableTd'>{item.id}</td>
                                <td className='tableTd crudBtn'>
                                    <Button><EditIcon /></Button>
                                    <Button onClick={() => deleteTodoFunck(item.id)}><DeleteIcon /></Button>
                                </td>
                            </tr>
                        )
                    })}
                    {console.log("html---------")}
                </Table>
            </Stakc >
        </>
    );
}


const Stakc = styled.div`
    /* border: 1px solid red; */

    .aboutTovarbox {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;


        .aboutTovar {
            display: flex;
            gap: 40px;

            .allTovar {
                color: #212121;
                font-size: 16px;
                font-weight: 800;
                line-height: 72%;
                height: 100%;
                border-bottom: 2px solid ${COLORS.exodusFruit};
                padding-bottom: 5px;
            }
            .err {
                color: #A4A4BA;
                font-size: 16px;
                font-weight: 600;
                line-height: 72%;
            }
        }

        .search {
            border-radius: 12px;
            background: #F7F7FF;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .hr {
        width: 100%;
        height: 1px;
        background: #E8E8F1;
    }

    .tovar_title {
        
        tr {
            height: 83px;
            color: #B5B5C3;

            .tableTd {
                color: #212121;
                font-size: 14px;
                font-weight: 800;
                line-height: 72%;
            }
        }
    }
`


const Input = styled.input`
    border: none;
    outline: none;
    width: 250px;
    height: 40px;
    border-radius: 12px;
    background: #F7F7FF;
    color: #A4A4BA;
    font-size: 15px;
    font-weight: 700;
    line-height: 21px; 
`