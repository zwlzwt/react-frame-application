import React from 'react'
import 'antd/lib/Menu/style/css'
import 'antd/lib/Icon/style/css'
import 'antd/lib/button/style/css'
import asyncRoute from './asyncRoute'
import styled from 'styled-components'
import { Menu, Button, Icon } from 'antd'
import Loading from './components/loading'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Contract = asyncRoute(() => import('./pages/contract'), {
  loading: Loading,
})

const FooterStyled = styled.footer`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #dcdcdc;
  padding: 20px;
  color: #999;
  margin-top: 10px;
`

const NavStyled = styled.nav`
  position: relative;
  width: 280px;
  left: 0;
  height: 100vh;
  background: #001529;
`

const SectionStyled = styled.section`
  position: absolute;
  padding: 20px;
  width: calc(100% - 280px);
  top: 0;
  right: 0;
  display: inline-block;
`

const Pstyled = styled.p`
  font-size: 16px;
  text-align: center;
`

const SlideBarRouter = () => (
  <NavStyled>
    <Menu
      theme='dark'
      mode='inline'
    >
      <Menu.SubMenu
        key='sub1'
        title={<span><Icon type='setting'/><span>红色隧道</span></span>}
      >
        <Menu.Item key='1'><Link to='/manage/contract'>红色隧道1</Link></Menu.Item>
        <Menu.Item key='2'><Link to='/manage/supply'>红色隧道2</Link></Menu.Item>
        <Menu.Item key='3'><Link to='/manage/parking'>红色隧道3</Link></Menu.Item>
        <Menu.Item key='4'><Link to='/manage/maintainShops'>红色隧道4</Link></Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key='sub2'
        title={<span><Icon type='setting'/><span>橙色隧道</span></span>}
      >
        <Menu.Item key='5'><Link to='/manage/drivers'>橙色隧道1</Link></Menu.Item>
        <Menu.Item key='6'><Link to='/external/blacklist'>橙色隧道2</Link></Menu.Item>
        <Menu.Item key='7'><Link to='/blacklist/record'>橙色隧道3</Link></Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key='sub3'
        title={<span><Icon type='setting'/><span>黄色隧道</span></span>}
      >
        <Menu.Item key='8'><Link to='/car/pictures'>黄色隧道1</Link></Menu.Item>
        <Menu.Item key='9'><Link to='/car/infos'>黄色隧道2</Link></Menu.Item>
        <Menu.Item key='10'><Link to='/car/imports'>黄色隧道3</Link></Menu.Item>
        <Menu.Item key='11'><Link to='/normal/makeAndModel'>黄色隧道4</Link></Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key='sub4'
        title={<span><Icon type='setting'/><span>绿色隧道</span></span>}
      >
        <Menu.Item key='12'><Link to='/manage/orders'>绿色隧道1</Link></Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key='sub5'
        title={<span><Icon type='setting'/><span>青色隧道</span></span>}
      >
        <Menu.Item key='13'><Link to='/manage/breakRules'>青色隧道1</Link></Menu.Item>
        <Menu.Item key='14'><Link to='/manage/maintain'>青色隧道2</Link></Menu.Item>
        <Menu.Item key='15'><Link to='/manage/insurance'>青色隧道3</Link></Menu.Item>
        <Menu.Item key='16'><Link to='/manage/annualInspection'>青色隧道4</Link></Menu.Item>
        <Menu.Item key='17'><Link to='/manage/settleClaims'>青色隧道5</Link></Menu.Item>
        <Menu.Item key='18'><Link to='/manage/emergencys'>青色隧道6</Link></Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key='sub6'
        title={<span><Icon type='setting'/><span>蓝色隧道</span></span>}
      >
        <Menu.Item key='19'><Link to='/car/trace'>蓝色隧道1</Link></Menu.Item>
        <Menu.Item key='20'><Link to='/car/position'>蓝色隧道2</Link></Menu.Item>
        <Menu.Item key='21'><Link to='/manage/fence'>蓝色隧道3</Link></Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key='sub7'
        title={<span><Icon type='setting'/><span>紫色隧道</span></span>}
      >
        <Menu.Item key='22'><Link to='/manage/soundAnAlarm'>紫色隧道1</Link></Menu.Item>
        <Menu.Item key='23'><Link to='/soundAnAlarm/rules'>紫色隧道2</Link></Menu.Item>
        <Menu.Item key='24'><Link to='/soundAnAlarm/norify'>紫色隧道3</Link></Menu.Item>
        <Menu.Item key='25'><Link to='/soundAnAlarmPerson/manage'>紫色隧道4</Link></Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </NavStyled>
)

const App = () => (
  <Router>
    <main>
      <SlideBarRouter/>
      <SectionStyled>
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Pstyled>欢迎光临，请选择左侧菜单只有一个有东西看看你中不中彩蛋！</Pstyled>}
          />
          <Route
            path='/manage/contract'
            component={Contract}
          />
        </Switch>
        <FooterStyled>©zwl&zwt</FooterStyled>
      </SectionStyled>
    </main>
  </Router>
)

export default App
