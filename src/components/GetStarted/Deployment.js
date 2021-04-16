import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'
import { withNamespaces } from 'react-i18next'

import Button from '../Button'
import Chain from '../SvgIcon/icons/Chain'
import DockerComp from '../SvgIcon/icons/DockerComp'
import Bash from '../SvgIcon/icons/Bash'
import Ansible from '../SvgIcon/icons/Ansible'
import './GetStarted.scss'

const ChainIcon = <Chain/>

class Deployment extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            activeTab: '',
        }
    }

    static propTypes = {
        translate: object,
        language: string,
    }

    toggle = tab => {
        if(this.state.activeTab !== tab) {
            this.setState({activeTab: tab})
        }
    }

    getIcon = (title) => {
      const iconMap = {
        'Ansible': <Ansible/>,
        'Bash': <Bash/>,
        'Docker Comp': <DockerComp/>,
      }
      return iconMap[title]
    }

    renderTabName = ( tab) => {
        const { activeTab } = this.state

        return(
            <NavItem key={tab.title}>
                <NavLink
                    className={activeTab === tab.title ? 'active' : ''}
                    onClick={() => { this.toggle(tab.title); }}
                >
                    {this.getIcon(tab.title)}
                    {tab.title}
                </NavLink>
            </NavItem>
        )
    }

    render(){
        const { t } = this.props

        const { activeTab } = this.state

        const list = Array.from(t('deployment', { returnObjects: true }))

        return(
            <div className='isoImage'>
                <div className='tabs_header'>
                    <Nav tabs className='tabs-noscroll'>
                        {list.map(this.renderTabName)}
                    </Nav>
                </div>
                <div>
                    <TabContent activeTab={activeTab}>
                        {list.map(( tab, index ) => {
                            return(
                                <TabPane key={index} tabId={tab.title}>
                                    <Button
                                        mobileFullWidth
                                        theme='green'
                                        size='small'
                                        href={tab.openLink}
                                        text={t('Open link')}
                                        icon={ChainIcon}
                                    />
                                </TabPane>
                            )
                        })}
                    </TabContent>
                </div>
            </div>
        )
    }
}

export default withNamespaces()(Deployment)