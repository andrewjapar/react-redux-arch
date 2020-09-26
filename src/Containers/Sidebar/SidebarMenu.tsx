import React from 'react'
import { connect } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

import navigation from './_sidebarNav'
import { RootState } from 'Store'

const mapStateToProps = (state: RootState) => ({
    navState: state.nav,
});

type Props = ReturnType<typeof mapStateToProps>;

const UnconnectedSidebarMenu: React.FC<Props> = ({ navState }) => {
  const show = navState.sidebarShow

  return (
    <CSidebar
      show={show}
      >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="cilSettings"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export const SidebarMenu = connect(mapStateToProps)(UnconnectedSidebarMenu);