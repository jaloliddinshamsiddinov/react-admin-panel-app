import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../config/colors'
import { Button } from '@mui/material'

export const Footer = () => {
    return (
        <FooterBlock>
            <Button>adsf</Button>
            <Button>asdf</Button>
        </FooterBlock>
    )
}

const FooterBlock = styled.footer`
    width: 100%;
    height: 80px;
    background-color: ${COLORS.plngGuoLuGreen};
`