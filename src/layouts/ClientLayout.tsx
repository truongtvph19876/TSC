import React from 'react'
import { Header, Footer } from '../components'
import { Outlet } from 'react-router-dom'

export const ClientLayout = () => {
  return (
    <>
      	<header>
          	<Header />
      	</header>
      	<main>
          	<Outlet/>
      	</main>
      	<footer>
          	<Footer />
      	</footer>
    </>
  )
}
