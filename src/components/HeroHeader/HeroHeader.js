import React, { PureComponent } from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import { string } from 'prop-types'
import { withNamespaces, Trans } from 'react-i18next'
import Button from '../Button'
import Arrow from '../SvgIcon/icons/Arrow'
import MouseIcon from './MouseIcon'

import './HeroHeader.scss'

class HeroHeader extends PureComponent{
	static propTypes = {
		language: string,
	}

    render(){
        const { t, language } = this.props

        return(
            <div className='heroHeader'>
                <Container fluid className='heroHeader_container'>
                    <Row className='heroHeader_bg'>
                        <Col sm='12' lg={{ size: 10, offset: 1 }} xl={{ size: 6, offset: 3 }}>
                        <h1 className='title'>
                        <Trans i18nKey='A New Sense of Integrity'>
                            A New Era of <em>Blockchain Innovation</em>
                        </Trans>
                        </h1>
                        </Col>
                        <Col sm='12' lg={{ size: 8, offset: 2 }} xl={{ size: 6, offset: 3 }}>
                            <p className='description'>{t('Revolutionizing blockchain with unparalleled security and decentralized financial solutions, Core Blockchain stands as a beacon of integrity and innovation in the global digital economy. Our platform redefines the blockchain landscape by offering an unstoppable, open-source network that transcends traditional financial boundaries and defining a new internet-of-value.')}</p>
                        </Col>
                        <Col sm={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }} xl={{ size: 6, offset: 3 }} className='text-center'>
                            <Button
                                theme='green'
                                size='normal'
                                text={t('Get started')}
                                type='router'
                                href={`/${language}/get-started`}
                            />
                            <Button
                                theme='ghost'
                                size='normal'
                                text={t('Learn more')}
                                type={'href'}
                                href={'https://blog.coreblockchain.net/'}
                            />
                        </Col>
                        <Col sm='12' md='12' className='hidden-xs'>
                            <MouseIcon />
                            <div className='heroHeader_icon'>
                                <Arrow />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withNamespaces()(HeroHeader)
