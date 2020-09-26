import React from 'react'
import actions from "Store/Nav/actions"
import { useDispatch, connect } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import routes from 'routes'
import { RootState } from 'Store'

const mapStateToProps = (state: RootState) => ({
    navState: state.nav,
});

type Props = ReturnType<typeof mapStateToProps>;

const UnconnectedTopbarMenu : React.FC<Props> = ({ navState }) => {
    const dispatch = useDispatch()
    const sidebarShow = navState.sidebarShow

    const showSidebar = () => {
        dispatch(actions.showSidebar(!sidebarShow));
    }
  
    return (
      <CHeader withSubheader>
        <CToggler
          inHeader
          className="ml-md-3 d-lg-none"
          onClick={showSidebar}
        />
        <CToggler
          inHeader
          className="ml-3 d-md-down-none"
          onClick={showSidebar}
        />
        <CHeaderBrand className="mx-auto d-lg-none" to="/">
          <CIcon name="logo" height="48" alt="Logo"/>
        </CHeaderBrand>
  
        <CHeaderNav className="d-md-down-none mr-auto">
          <CHeaderNavItem className="px-3" >
            <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink>
          </CHeaderNavItem>
          <CHeaderNavItem  className="px-3">
            <CHeaderNavLink to="/user">Users</CHeaderNavLink>
          </CHeaderNavItem>
          <CHeaderNavItem className="px-3">
            <CHeaderNavLink>Settings</CHeaderNavLink>
          </CHeaderNavItem>
        </CHeaderNav>
  
        <CSubheader className="px-3 justify-content-between">
          <CBreadcrumbRouter 
            className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
            routes={routes} 
          />
        </CSubheader>
      </CHeader>
    )
  }
  
  export const TopBarMenu = connect(mapStateToProps)(UnconnectedTopbarMenu);