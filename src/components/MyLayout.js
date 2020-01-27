import React from 'react'
import {Layout, Menu, Breadcrumb, Icon} from 'antd'
import Namedays from './Namedays'

const {Header, Content, Sider} = Layout

function MyLayout({children}) {
  return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider>
        <Namedays />
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
          <Menu.Item key='1'>Overview</Menu.Item>
          <Menu.Item key='2'>Birthdays</Menu.Item>
          <Menu.Item key='3'>Next</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header>Calendar Summary</Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default MyLayout
