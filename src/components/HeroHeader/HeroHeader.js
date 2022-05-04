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
                            A New Sense of <em>Integrity</em>
                        </Trans>
                        </h1>
                        </Col>
                        <Col sm='12' lg={{ size: 8, offset: 2 }} xl={{ size: 6, offset: 3 }}>
                            <p className='description'>{t('Core Blockchain is a Worldwide, open-source, unstoppable, and financial Smart Contract network.')}</p>
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
                                href={'https://blog.coreblockchain.cc/'}
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
