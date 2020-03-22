import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
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

import Search from '../Search'
import Button from '../Button'

import LanguageButtonContainer from '../../containers/LanguageButtonContainer'

import Logo from '../../images/CoreChain-logo.png'

import './HeaderNavbar.scss'


export default class HeaderNavbar extends PureComponent{
    static propTypes = {
        translate: object,
        language: string,
    }

    renderLink = ({link, label}, index) => (
        <NavItem key={index}>
            <NavLink href={link}>{label}</NavLink>
        </NavItem>
    )

    render(){
        const { translate: { MENULINKS } } = this.props
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
                                        {MENULINKS.map(this.renderLink)}
                                    </Nav>
                                </div>
                                <div className='headerNavbar_left'>
                                    <Search />
                                    <LanguageButtonContainer/>
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