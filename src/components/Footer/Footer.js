import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import Logo from '../../images/logo.png'

import './Footer.scss'

export default class Footer extends PureComponent{

    static propTypes = {
        translate: object,
        language: string,
    }

    render(){
        const { translate: { FOOTER } } = this.props

        return(
            <div className='footer'>
                <Container>
                    <Row>
                        <Col>
                            <div className='text-center footer_logo'>
                                <div className='footer_logo-img'>
                                    <img src={Logo} alt="Core Chain"/>
                                </div>
                                <p className='text-center'>{FOOTER.copyRights}</p>
                                <p className='text-center'>{FOOTER.websiteUpdate}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}