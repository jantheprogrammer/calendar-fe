import React, {useState, useEffect} from 'react'
import {Layout, Menu} from 'antd'
import {Redirect} from 'react-router-dom'
import {useLocation} from 'react-router'

import Namedays from './Namedays'

const {Header, Content, Sider} = Layout

function MyLayout({children}) {
  const [route, setRoute] = useState('/overview')
  const [redirect, setRedirect] = useState(false)

  let location = useLocation()

  useEffect(redirect => {
    if (redirect) {
      setRedirect(false)
    }
  }, [])

  return (
    <Layout style={{minHeight: '100vh'}}>
      {redirect && <Redirect to={`/${route}`} />}
      <Sider>
        <Namedays />
        <Menu
          theme='dark'
          defaultSelectedKeys={[location.pathname.substring(1)]}
          mode='inline'
          onClick={e => {
            setRoute(e.key)
            setRedirect(true)
          }}
        >
          <Menu.Item key='overview'>Overview</Menu.Item>
          <Menu.Item key='birthdays'>Birthdays</Menu.Item>
          <Menu.Item key='next'>Next</Menu.Item>
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
