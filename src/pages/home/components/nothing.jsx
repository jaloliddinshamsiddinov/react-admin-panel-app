import React from 'react'
import styled from 'styled-components'
import Noting from "../../../assets/img/nothing.png"
import { Button } from '@mui/material'
import { COLORS } from '../../../config/colors'
import { Link } from 'react-router-dom'


export const Nothing = () => {

    return (
        <NothingBlock>
            <h4>Вы пока не создали ни одного товара</h4>
            <img style={{maxWidth:"100%"}} src={Noting} alt="nothing found" />
            <Link to={"/create"}><Button className='create'>Создать первый товар</Button></Link>
        </NothingBlock>
    )
}

const NothingBlock = styled.div`
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .create {
        color: ${COLORS.white};
        text-align: center;
        font-size: 15px;
        font-weight: 800;
        border-radius: 6px;
        background: ${COLORS.plngGuoLuGreen};

        &:hover {
            background-color: ${COLORS.exodusFruit};
        }
    }
`