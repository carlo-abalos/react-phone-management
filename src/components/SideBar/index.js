import React from 'react';

import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';

import TopBar from '../TopBar';

import {BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import Create from '../../container/Create';
import Read from '../../container/Read';
import Update from '../../container/Update';
import Delete from '../../container/Delete';


import './index.css';


class SideBar extends React.Component{
    state = { visible: false }

    handleButtonClick = () => this.setState({ visible: !this.state.visible })
  
    handleSidebarHide = () => this.setState({ visible: false })
  
    render() {
      const { visible } = this.state
  
      return (
        <div>

          <TopBar toggleSidebar={this.handleButtonClick}></TopBar>
        
          <Router>
            <Sidebar.Pushable as={Segment} id='sidebar'>
                <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={this.handleSidebarHide}
                vertical
                visible={visible}
                width='thin'
                >
                <Link to='/'>
                    <Menu.Item as='a' onClick={this.handleSidebarHide}>    
                        <Icon name='add' />
                        Create
                    </Menu.Item>
                </Link>

                <Link to='/read'>
                    <Menu.Item as='a' onClick={this.handleSidebarHide}>
                        <Icon name='list' />
                        Read
                    </Menu.Item>
                </Link>

                <Link to='/update'>
                    <Menu.Item as='a' onClick={this.handleSidebarHide}>
                        <Icon name='edit' />
                        Update
                    </Menu.Item>
                </Link>

                <Link to='/delete'>
                    <Menu.Item as='a' onClick={this.handleSidebarHide}>
                        <Icon name='delete' />
                        Delete
                    </Menu.Item>
                </Link>

                </Sidebar>
    
                <Sidebar.Pusher>
                <Segment basic>
                    {/* <Header as='h3'>Application Content</Header>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' /> */}
                        <div className='MainContentContainer'>
                            <Route exact path='/' component={Create}></Route>
                            <Route path='/read' component={Read}></Route>
                            <Route path='/update' component={Update}></Route>
                            <Route path='/delete' component={Delete}></Route>
                        </div>
                </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
          </Router>
        </div>
      )
    }
}


export default SideBar;