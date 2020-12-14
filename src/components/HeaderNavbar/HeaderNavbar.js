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

import Logo from '../../images/logo.png'

import Search from '../Search'
import Button from '../Button'
import Menu from '../SvgIcon/icons/Menu'
import Close from '../SvgIcon/icons/Close'
import Language from '../SvgIcon/icons/Language'

import './HeaderNavbar.scss'

const LanguageIcon = <Language/>

const body = document.body
const scrollUp = 'scroll-up'
const scrollDown = 'scroll-down'
let lastScroll = 0

export default class HeaderNavbar extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
        }
    }
    static propTypes = {
        translate: object,
        language: string,
    }

    renderLink = ({link, label}, index) => (
        <NavItem key={index}>
            <NavLink href={link}>{label}</NavLink>
        </NavItem>
    )

    componentDidMount () {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset
            if (currentScroll === 0) {
                body.classList.remove(scrollUp)
                return
            }
            if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
                body.classList.remove(scrollUp)
                body.classList.add(scrollDown)
            } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
                body.classList.remove(scrollDown)
                body.classList.add(scrollUp)
            }
            lastScroll = currentScroll
        })
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', () => {})
    }

    onOpenSidebar = () => {
        this.setState({
            isMenuOpen: true,
        })
    }

    onCloseSidebar = () => {
        this.setState({
            isMenuOpen: false,
        })
    }

    render(){
        const { translate: { MENULINKS, HEROHEADER } } = this.props
        const { isMenuOpen } = this.state

        const isMobile = window.innerWidth <= 768;

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
                                {isMobile ?
                                    <div>
                                        <a onClick={this.onOpenSidebar}><Menu/></a>
                                        <div className={isMenuOpen ? 'headerNavbar_sidebar open' : 'headerNavbar_sidebar'}>
                                            <Container>
                                                <Col className='headerNavbar_sidebar__header'>
                                                    <NavbarBrand href="/">
                                                        <img src={Logo} alt="Core Chain"/>
                                                    </NavbarBrand>
                                                    <a onClick={this.onCloseSidebar}><Close/></a>
                                                </Col>
                                                <Nav navbar>
                                                    {MENULINKS.map(this.renderLink)}
                                                </Nav>
                                                <div className='headerNavbar_sidebar__search'>
                                                    <Search />
                                                    <Button
                                                        icon={LanguageIcon}
                                                        theme='ghost'
                                                        size='extraSmall'
                                                        hover={false}
                                                        href='/language'
                                                        type='router'
                                                        onClick={this.onCloseSidebar}
                                                    />
                                                </div>
                                                <Button 
                                                mobileFullWidth
                                             theme='green'
                                             text={HEROHEADER.actionBtn}
                                             type='router'
                                             href='/get-started'
                                              />
                                            </Container>
                                        </div>
                                    </div>
                                :
                                    <div className='headerNavbar_flex'>
                                        <div>
                                            <Nav navbar>
                                                {MENULINKS.map(this.renderLink)}
                                            </Nav>
                                        </div>
                                        <div className='headerNavbar_left'>
                                            <Search />
                                            <Button
                                                icon={LanguageIcon}
                                                theme='ghost'
                                                size='extraSmall'
                                                hover={false}
                                                href='/language'
                                                type='router'
                                            />
                                            <Button 
                                             theme='green'
                                             text={HEROHEADER.actionBtn}
                                             type='router'
                                             href='/get-started'
                                              />
                                        </div>
                                    </div>
                                }
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
