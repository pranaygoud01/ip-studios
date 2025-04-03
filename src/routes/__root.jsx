import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import {useRouterState} from "@tanstack/react-router"
export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const router = useRouterState();
  const currentPath = router.location.pathname;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]); 
  return (
    <React.Fragment>
      <NavBar/>
      <Outlet />
      <Footer/>
    </React.Fragment>
  )
}
