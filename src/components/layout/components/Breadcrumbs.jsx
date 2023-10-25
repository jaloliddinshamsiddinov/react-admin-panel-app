import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import styled from 'styled-components';

export const BasicBreadcrumbs = () => {
  return (
    <div role="presentation">
      <Block>
        <Breadcrumbs aria-label="breadcrumb">
          <Link className='links' underline='none' color="inherit" href="#">Главная</Link>
          <Link className='links' underline='none' color="inherit" href="#">Товары</Link>
        </Breadcrumbs>
      </Block>
    </div>
  );
}


const Block = styled.div`

.links {
    color: #B5B5C3;
    font-family: Mulish;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
  }
`