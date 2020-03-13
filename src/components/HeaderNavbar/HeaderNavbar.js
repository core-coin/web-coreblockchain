import React, { PureComponent } from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col
} from 'reactstrap'

import Language from '../Icon/icons/Language'
import Search from '../Search'
import Button from '../Button'
import { MenuLinks } from '../../constants'

import Logo from '../../images/CoreChain-logo.png'

import './HeaderNavbar.scss'

const LanguageIcon = <Language/>

export default class HeaderNavbar extends PureComponent{

    renderLink = ({link, label}, index) => (
        <NavItem key={index}>
            <NavLink href={link}>{label}</NavLink>
        </NavItem>
    )

    render(){

        return(
            <div className='headerNavbar'>
                <Container>
                    <Row>
                        <Col>
                            <Navbar expand="md">
                                <div>
                                    <NavbarBrand href="/">
                                        <img src={Logo} alt="Core Chain"/>
                                    </NavbarBrand>
                                </div>
                                <div>
                                    <Nav className="mr-auto" navbar>
                                        {MenuLinks.map(this.renderLink)}
                                    </Nav>
                                </div>
                                <div className='headerNavbar_left'>
                                    <Search />
                                    {/*todo component for internationalization*/}
                                    <Button
                                        icon={LanguageIcon}
                                        theme='ghost'
                                        size='extraSmall'
                                        hover={false}
                                    />
                                    <Button text='Developer' />
                                </div>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}