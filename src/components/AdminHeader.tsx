import React from 'react'
import { Layout} from 'antd';
const { Header } = Layout;

export const AdminHeader = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo" />
    </Header>
  )
}
