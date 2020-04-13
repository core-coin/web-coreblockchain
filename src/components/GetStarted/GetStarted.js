import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import { CoreSoftware } from './CoreSoftware'
import { CoreNetwork } from './CoreNetwork'
import { CoreMiners } from './CoreMiners'

import './GetStarted.scss'

export default class GetStarted extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            activeLink: 'get_started',
            headersList: [],
            linksList: [],
            textToCopy: '',
        }
    }

    static propTypes = {
        translate: object,
        language: string,
    }

    renderLinks = (links, index) => (
        <li key={index} className={this.state.activeLink === links.link ? 'active' : ''}>
            <a href={'#'+links.link}>{links.label}</a>
        </li>
    )

    collectHeightMap = () => {
        let headers = document.querySelectorAll('.hiddenBlock')
        let headersMap = []
        for (let header of headers) {
            let headerHeight = header.offsetTop + 250
            let headerId = header.id
            headersMap.push([headerHeight, headerId])
        }
        this.setState({
            headersList: headersMap.reverse(),
        })
    }

    updateActiveLink = (offset) => {
        for (let headerInfo of this.state.headersList) {
            if (headerInfo[0] <= offset) {
                let headerId = headerInfo[1]
                this.setState({
                    activeLink: headerId
                })
                return
            }
        }
    }

    onCopyClick = () => {
        this.setState({
            textToCopy: ''
        })
    }

    componentDidMount(){
        this.collectHeightMap()
        window.addEventListener('scroll', () => {
            this.updateActiveLink(window.scrollY)
        })
        this.updateActiveLink(window.scrollY)
    }

    render(){
        const { translate: { GETSTERTED }, language } = this.props

        return(
            <div className='getStarted'>
                <Row className='getStarted_row'>
                    <Col sm='3' md='4' xl='4' className='hidden-xs getStarted_menu'>
                        <div className=''>
                            <ul>{GETSTERTED.menuLinks.map(this.renderLinks)}</ul>
                        </div>
                    </Col>
                    <Col sm='9'md={{ size: 8, offset: 4 }} xl={{ size: 6, offset: 5 }} className='getStarted_content'>
                        <Container>
                            <Row>
                                <Col>
                                    <div className='getStarted_content__block'>
                                        <span id='get_started' className='hiddenBlock'></span>
                                        <CoreSoftware language={language} translate={GETSTERTED}/>
                                    </div>
                                    <div className='getStarted_content__block'>
                                        <span id='core_network' className='hiddenBlock'></span>
                                        <CoreNetwork language={language} translate={GETSTERTED}/>
                                    </div>

                                    <div className='getStarted_content__block'>
                                        <span id='core_foundation' className='hiddenBlock'></span>
                                        <h1 className="title">core_foundation</h1>
                                    </div>

                                    <div className='getStarted_content__block'>
                                        <span id='for_developers' className='hiddenBlock'></span>
                                        <h1 className="title">for_developers</h1>
                                    </div>

                                    <div className='getStarted_content__block'>
                                        <span id='core_mining' className='hiddenBlock'></span>
                                        <CoreMiners language={language} translate={GETSTERTED}/>
                                    </div>

                                    <div className='getStarted_content__block'>
                                        <span id='node_distributions' className='hiddenBlock'></span>
                                        <h1 className="title">node_distributions</h1>
                                    </div>

                                    <div className='getStarted_content__block'>
                                        <span id='faq' className='hiddenBlock'></span>
                                        <h1 className="title">faq</h1>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </div>
        )
    }
}