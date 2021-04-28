import React, { PureComponent } from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
} from 'reactstrap'
import { withNamespaces, Trans } from 'react-i18next'
import {Link} from  'react-router-dom'
import { string } from 'prop-types'

import Logo from '../../images/logo.png'
import Button from '../Button'
import Menu from '../SvgIcon/icons/Menu'
import Search from '../SvgIcon/icons/Search'
import Close from '../SvgIcon/icons/Close'
import Language from '../SvgIcon/icons/Language'

import './HeaderNavbar.scss'

const LanguageIcon = <Language />
const SearchIcon = <Search />

const body = document.body
const scrollUp = 'scroll-up'
const scrollDown = 'scroll-down'
let lastScroll = 0

class HeaderNavbar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
    }
  }
	static propTypes = {
		language: string,
	}

  renderLink = ({ link, label }, index) => (
    <NavItem key={index}>
      <NavLink href={link}>{label}</NavLink>
    </NavItem>
  )

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset
      if (currentScroll === 0) {
        body.classList.remove(scrollUp)
        return
      }
      if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        body.classList.remove(scrollUp)
        body.classList.add(scrollDown)
      } else if (
        currentScroll < lastScroll &&
        body.classList.contains(scrollDown)
      ) {
        body.classList.remove(scrollDown)
        body.classList.add(scrollUp)
      }
      lastScroll = currentScroll
    })
  }

  componentWillUnmount() {
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

  renderNavbar = (item, index) => (
  
      <li key={index} className='nav-item'>  
        <Link className='nav-link' to={`/${this.props.language}/${item.link}`}>
          {item.label}
        </Link>
      </li>
    
  )

  render() {
    const { t, language } = this.props
    const { isMenuOpen } = this.state
    const isMobile = window.innerWidth <= 768
    const list = Array.from(t('menuItemList', { returnObjects: true }))

    return (
      <div className='headerNavbar'>
        <Container>
          <Row>
            <Col>
              <Navbar expand='md'>
                <div>
                  <NavbarBrand href='/'>
                    <img src={Logo} alt='Core Chain' />
                  </NavbarBrand>
                </div>
                {isMobile ? (
                  <div>
                    <a onClick={this.onOpenSidebar}>
                      <Menu />
                    </a>
                    <div
                      className={
                        isMenuOpen
                          ? 'headerNavbar_sidebar open'
                          : 'headerNavbar_sidebar'
                      }
                    >
                      <Container>
                        <Col className='headerNavbar_sidebar__header'>
                          <NavbarBrand href='/'>
                            <img src={Logo} alt='Core Chain' />
                          </NavbarBrand>
                          <a onClick={this.onCloseSidebar}>
                            <Close />
                          </a>
                        </Col>
                        <Nav navbar >
                          {list.map(this.renderLink)}
                        </Nav> 
                        <div className='headerNavbar_sidebar__search'>
                          <Button
                            text={t('language')}
                            theme='ghosMAt'
                            size='extraSmall'
                            hover={false}
                            href={`/${language}/language`}
                            type='router'
                            onClick={this.onCloseSidebar}
                          />
                        </div>
                        <Button
                          mobileFullWidth
                          theme='green'
                          text={t('get started')}
                          type='router'
                          href={`/${language}/get-started`}
                        />
                      </Container>
                    </div>
                  </div>
                ) : (
                  <div className='headerNavbar_flex'>
                  <Nav navbar >
                      {list.map(this.renderNavbar)} 
                    </Nav> 
                    <div className='headerNavbar_left'>
                      <Button
                        icon={SearchIcon}
                        theme='ghost'
                        size='extraSmall'
                        hover={false}
                        href={`/${language}/search`}
                        type='router'
                      />

                      <Button
                        icon={LanguageIcon}
                        theme='ghost'
                        size='extraSmall'
                        hover={false}
                        href={`/${language}/language`}
                        type='router'
                      />
                      <Button
                        theme='green'
                        text={t('get started')}
                        type='router'
                        href={`/${language}/get-started`}
                      />
                    </div>
                  </div>
                )}
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default withNamespaces()(HeaderNavbar)
