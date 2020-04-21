import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import FooterLogo from '../SvgIcon/icons/FooterLogo'

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
                                <FooterLogo/>
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