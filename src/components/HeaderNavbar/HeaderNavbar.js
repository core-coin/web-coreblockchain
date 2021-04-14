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
  Col,
} from 'reactstrap'
import _ from 'lodash'
import { withNamespaces, Trans, i18nIsDynamicList } from 'react-i18next'
import i18n from 'i18next'

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

const ResourcesMedia = [
  {
    title: 'sometitleKey',
    description: 'somedescriptionKey',
    href: 'somelink',
  },
  {
    title: 'sometitleKey1',
    description: 'somedescriptionKey',
    href: 'somelink',
  },
]

class HeaderNavbar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
    }
  }
  static propTypes = {
    translate: object,
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

  render() {
    const { t, i18nIsDynamicList } = this.props
    const { isMenuOpen } = this.state
    const isMobile = window.innerWidth <= 768
    const list = Array.from(t('menuItemList', { returnObjects: true }))

    return (
      <div className="headerNavbar">
        <Container>
          <Row>
            <Col>
              <Navbar expand="md">
                <div>
                  <NavbarBrand href="/">
                    <img src={Logo} alt="Core Chain" />
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
                        <Col className="headerNavbar_sidebar__header">
                          <NavbarBrand href="/">
                            <img src={Logo} alt="Core Chain" />
                          </NavbarBrand>
                          <a onClick={this.onCloseSidebar}>
                            <Close />
                          </a>
                        </Col>
                        {/* {t('menuItemList', { returnObjects: true }).map((item, index) => (
                          <Trans
                            i18nKey={item.label}
                            defaults={item.label}
                            components={[
                              <li key={index} className="nav-item">
                                <a className="nav-link" href={item.link}>
                                  one
                                </a>
                              </li>,
                            ]}
                          >
                            <Nav navbar i18nIsDynamicList>
                              <li key={index} className="nav-item">
                                <a className="nav-link" href={item.link}>
                                  one
                                </a>
                              </li>
                            </Nav>
                          </Trans>
                        ))}  */}

                        <div className="headerNavbar_sidebar__search">
                          <Button
                            text={t('language')}
                            theme="ghosMAt"
                            size="extraSmall"
                            hover={false}
                            href="/language"
                            type="router"
                            onClick={this.onCloseSidebar}
                          />
                        </div>
                        <Button
                          mobileFullWidth
                          theme="green"
                          text={t('get started')}
                          type="router"
                          href="/get-started"
                        />
                      </Container>
                    </div>
                  </div>
                ) : (
                  <div className="headerNavbar_flex">
                  <Nav navbar >
                      {list.map((item, index) => (
                        <Trans
                          i18nKey={item.label}
                          defaults={item.label}
                          // components={[<li key={index} className='nav-item'><a className='nav-link' href={item.link}>one</a></li>]}
                        >
                          <li key={item.link} className="nav-item">  
                            <a className="nav-link" href={item.link}>
                              one
                            </a>
                          </li>
                        </Trans>
                      ))}
                     
                    </Nav> 
                    <div className="headerNavbar_left">
                      <Button
                        icon={SearchIcon}
                        theme="ghost"
                        size="extraSmall"
                        hover={false}
                        href="/search"
                        type="router"
                      />

                      <Button
                        icon={LanguageIcon}
                        theme="ghost"
                        size="extraSmall"
                        hover={false}
                        href="/language"
                        type="router"
                      />
                      <Button
                        theme="green"
                        text={t('get started')}
                        type="router"
                        href="/get-started"
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
