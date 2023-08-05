import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { ClientLayout } from "./layouts/ClientLayout"
import { HomePage } from "./pages/client/HomePage"
import { AdminLayout } from "./layouts/AdminLayout"
import { Product } from "./pages/admin/products/Product"
import { AddProduct } from "./pages/admin/products/AddProduct"
import { NotFoundPage } from "./components/NotFoundPage"
import React, { useContext } from 'react'
import { ProductContext } from "./pages/admin/products/ProductProvider"




function App() {
	const productProvider = useContext(ProductContext);
	
  	return (
    	<>
      		<Router>
				<Routes>
					{/**
					 * Client Router
					 * Home page
					 * Product page
					 * Register
					 * Login
					*/}
				
					<Route path="/" element={<ClientLayout />}>
						<Route index element={<HomePage />}></Route>
					</Route>

					{/**
				 	 * Admin Router
				 	 * Product management
				 	 * Categories management
				 	 * User management
				 	*/}

					<Route path="/admin" element={<AdminLayout />}>
						{/**
					 	* Product management Router
					 	*/}
						<Route path="product">
							<Route index path="list" element={
								<ProductContext.Provider value={productProvider}>
									<Product/>
								</ProductContext.Provider>} />
				 			<Route path="add" element={<AddProduct/>}></Route>
				 			<Route path="update/:id" element={<AddProduct/>}></Route>
						</Route>
						{/**
						 * Categories management Router
						 */}
						 

						 {/**
						  * Users management Router
						  */}
					</Route>
					{/**
					 * Not found Page Router
					 */}
					<Route path='*' element={<NotFoundPage/>}/>
				</Routes>
	  		</Router>
    	</>
  	)
}

export default App
