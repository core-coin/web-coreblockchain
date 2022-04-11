import React, { PureComponent } from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
} from 'reactstrap'
import { withNamespaces } from 'react-i18next'
import {Link} from  'react-router-dom'
import { string } from 'prop-types'

import Logo from '../../images/logo.webp'
import Button from '../Button'
import Menu from '../SvgIcon/icons/Menu'
import Close from '../SvgIcon/icons/Close'
import Language from '../SvgIcon/icons/Language'
import { isMobile, isSd } from '../../utils'

import './HeaderNavbar.scss'
import i18next from 'i18next'

const LanguageIcon = <Language />

const body = document.body
const scrollUp = 'scroll-up'
const scrollDown = 'scroll-down'
let lastScroll = 0

class HeaderNavbar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
      isMobile: isMobile(),
      isSd: isSd()
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

  updateIsMobile = () => {
    this.setState({isMobile:isMobile()});
  };
  updateIsSd = () => {
    this.setState({isSd:isSd()});
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateIsMobile);
    window.addEventListener('resize', this.updateIsSd);
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
    window.removeEventListener('resize', this.updateIsMobile);
    window.removeEventListener('resize', this.updateIsSd);
  }

  onOpenSidebar = (e) => {
    e.preventDefault()
    this.setState({
      isMenuOpen: true,
    })
    document.body.style.overflow = 'hidden'
  }

  onCloseSidebar = (e) => {
    e.preventDefault()
    this.setState({
      isMenuOpen: false,
    })
    document.body.style.overflow = ''
  }
  closeSidebar = () => {
    this.setState({
      isMenuOpen: false,
    })
    document.body.style.overflow = ''
  }

  renderNavbar = (item, index) => (

      <li key={index} className='nav-item'>
        <Link className='nav-link' to={`/${this.props.language}/${item.link}`} onClick={this.closeSidebar}>
          {item.label}
        </Link>
      </li>

  )

  render() {
    const { t, language } = this.props
    const { isMenuOpen } = this.state
    const list = Array.from(i18next.t('menuItemList', { returnObjects: true }))

    return (
      <div className='headerNavbar'>
        <Container fluid>
          <Row>
            <div className='navbar_col'>
              <Navbar expand='md' className="navbar-custom">
                <div>
                  <Link className='navbar-brand' to={`/${language}`}>
                    <img src={Logo} alt='Core Chain' />
                  </Link>
                </div>
                {this.state.isMobile || this.state.isSd ? (
                  <div>
                    <a className="hamburger-button" onClick={this.onOpenSidebar} href='/'>
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
                        <Link to={`/${language}`} className='navbar-brand' onClick={this.closeSidebar}>
                          <img src={Logo} alt='Core Chain' />
                        </Link>
                          <a onClick={this.onCloseSidebar} href='/'>
                            <Close />
                          </a>
                        </Col>
                        <Nav navbar >
                          {list.map(this.renderLink)}
                        </Nav>
                        <div className='headerNavbar_sidebar__button'>
                          <Button
                            mobileFullWidth
                            text={t('language')}
                            theme='ghost'
                            size='small'
                            hover={false}
                            href={`/${language}/language`}
                            type='router'
                            onClick={this.closeSidebar}
                          />
                        </div>
                        <div className='headerNavbar_sidebar__button'>
                          <Button
                            mobileFullWidth
                            theme='green'
                            text={t('get started')}
                            type='router'
                            href={`/${language}/get-started`}
                            onClick={this.closeSidebar}
                          />
                        </div>
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
            </div>
          </Row>
        </Container>
      </div>
    )
  }
}

export default withNamespaces()(HeaderNavbar)
