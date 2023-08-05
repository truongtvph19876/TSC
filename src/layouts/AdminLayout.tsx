import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { Layout, Menu, MenuProps, theme} from 'antd';
import { AdminFooter, AdminHeader } from '../components';
const { Content, Sider  } = Layout;

/**
 * config left sidebar
 */

const menuItems: MenuProps['items'] = [
	{
		key: 'product',
		label: "Product",
		children: [
			{key: 'product/list', label: 'Product List'},
			{key: 'product/add', label: 'Product Add'}
		]
	},
	{
		key: 'categories',
		label: "Categories"
	},
	{
		key: 'users',
		label: "Users"
	},
];


export const AdminLayout = () => {
	const { token: { colorBgContainer }, } = theme.useToken();
	const navigate = useNavigate();

  	return (
    <>
    <Layout>
		{/**
		 * Admin Header Component
		 */}
      	<AdminHeader />
      	
		{/**
		 * Main content here
		 */}
      	<Content style={{ padding: '0 50px' }}>
    		<Layout style={{ padding: '24px 0', background: colorBgContainer }}>
				{/**
				 * left sidebar
				 */}
    		    <Sider style={{ background: colorBgContainer }} width={200}>
    		      	<Menu 
					onClick={({ key })=> {navigate(key)}}
					mode='inline'
					defaultOpenKeys={['product/list']}
					items={menuItems}>

					</Menu>
    		    </Sider>
				 {/**
				  * Content Component
				  */}
    		    <Content style={{ padding: '0 24px', minHeight: 280 }}>
					<Outlet/>
				</Content>

    		  </Layout>
    	</Content>

		 {/**
		  * Admin Footer Component
		  */}
		<AdminFooter/>

    </Layout>
    </>
  	)
}
