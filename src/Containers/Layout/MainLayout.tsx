import { CContainer, CFade } from '@coreui/react';
import React from 'react'
import { Route, Switch } from 'react-router-dom';
import routes from 'routes'

const MainLayout = () => {

    return (
        <main className="c-main">
            <CContainer fluid>
                <Switch>
                    {
                        routes.map((route, id) => {
                            return <Route path={route.path}
                                render={ () => (
                                    <CFade>
                                    <route.component />
                                    </CFade>
                                )}
                            /> 
                        })
                    }
                </Switch>
            </CContainer> 
          </main>
    );
}

export default MainLayout