import React from 'react'
import styled from 'styled-components'
import { COLORS } from "../../config/colors"
import { Button, Container, IconButton } from '@mui/material'
import { BasicBreadcrumbs } from "./components/Breadcrumbs"
import { LogoutIcon } from '../../assets/logout-icon'
import { LogoIcon } from "../../assets/logo-icon"
import { SettingsIcon } from "../../assets/settings-icon"
import { UserIcon } from "../../assets/user-icon"
import { BacketIcon } from "../../assets/backet-icon"
import { PlatejIcon } from "../../assets/platej-icon"
import { Link, Outlet } from 'react-router-dom'

export const Layout = ({ children }) => {
  return (
    <>
      <Div>

        <div className='sideBar'>
          <Button>
            <LogoIcon />
          </Button>
          <div className="sidebar-icons">
            <Link to={"/"}><Button className='sideBarIcons'><SettingsIcon /></Button></Link>
            <Link to={"/nothing"}><Button className='sideBarIcons'><UserIcon /></Button></Link>
            <Link to={"/create"}><Button className='sideBarIcons'><BacketIcon /></Button></Link>
            <Link to={"/nothing"}><Button className='sideBarIcons'><PlatejIcon /></Button></Link>
          </div>
        </div>


        <div className="right-Main">

          <div className="header">
            <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className="tovar">
                <h3 className='headerTitle'>Товары</h3>
                <BasicBreadcrumbs />
              </div>
              <div className="log-out">
                <Button className='header-logout-btn' startIcon={<LogoutIcon />}>Выйти</Button>
              </div>
            </Container>
          </div>

          <Container>
            <div className='r-main_main'>
              <Outlet />
            </div>
          </Container>

        </div>


      </Div>
    </>
  )
}

const Div = styled.div`
  min-width: 100vw;
  display: flex;
  min-height: 100vh;

  .sideBar {
    width: 97px;
    text-align: center;
    background-color: ${COLORS.exodusFruit};
    padding-top: 20px;

    .sidebar-icons {
      height: 200px;
      margin: 38px auto;

      .sideBarIcons {
        width: 50px;
        height: 49px;
        margin: auto;
        &:hover {
          background-color: #6C6DE5;
        }
      }
    }
  }

  .right-Main {
    width: 100%;
    .header {
      display: flex;
      width: 100%;
      height: 80px;
      background-color: ${COLORS.white};
      box-shadow: 0px 5px 40px 0px rgba(33, 33, 33, 0.05);
      margin-bottom: 40px;

      .tovar {

        .headerTitle {
          color: #212121;
          font-size: 18px;
          font-weight: 800;
        }
      }

      .header-logout-btn {
        background-color: ${COLORS.ghostWhite};
        color: #212121;
        font-size: 14px;
          font-weight: 700;
        line-height: 72%;
      }
    }

    .r-main_main {
      width: 100%;
      height: 100%;
      padding: 30px 24px;
      border-radius: 12px;
      background-color: ${COLORS.white};
    }
  }
`