import React from 'react'
import actions from "Store/Nav/actions";
import { useDispatch, connect } from 'react-redux'
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

// sidebar nav config
import navigation from './_nav'
import { RootState } from 'Store'

const mapStateToProps = (state: RootState) => ({
    navState: state.nav,
});

type Props = ReturnType<typeof mapStateToProps>;

const UnconnectedSidebar: React.FC<Props> = ({ navState }) => {
  const dispatch = useDispatch()
  const show = navState.sidebarShow

  const showSidebar = (showSidebar: boolean) => {
    dispatch(actions.showSidebar(showSidebar));
}

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
          name="sygnet"
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

export const TheSidebar = connect(mapStateToProps)(UnconnectedSidebar);