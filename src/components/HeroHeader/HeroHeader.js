import React, { PureComponent } from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import { withNamespaces, Trans } from 'react-i18next'
import Button from '../Button'
import Arrow from '../SvgIcon/icons/Arrow'
import MouseIcon from './MouseIcon'

import './HeroHeader.scss'

class HeroHeader extends PureComponent{

    render(){
        const { t } = this.props

        return(
            <div className='heroHeader'>
                <Container fluid>
                    <Row className='heroHeader_bg'>
                        <Col sm='12' lg={{ size: 10, offset: 1 }} xl={{ size: 6, offset: 3 }}>
                        <h1 className='title'>
                        <Trans i18nKey='The Value Custodian for a Decentralized World'>
                            The Value Custodian for a <em>Decentralized World</em>
                        </Trans>
                        </h1>
                        </Col>
                        <Col sm='12' lg={{ size: 8, offset: 2 }} xl={{ size: 4, offset: 4 }}>
                            <p className='description'>{t('Core Coin is an open source, public Blockchain application platform featuring one of the most secure smart contract functionality.')}</p>
                        </Col>
                        <Col sm={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }} xl={{ size: 6, offset: 3 }} className='text-center'>
                            <Button
                                theme='green'
                                size='normal'
                                text={t('get started')}
                                type='router'
                                href='/get-started'
                            />
                            <Button
                                theme='ghost'
                                size='normal'
                                text={t('learn more')}
                            />
                        </Col>
                        <Col sm='12' md='12' className='hidden-xs'>
                            <MouseIcon />
                            <div className='heroHeader_icon'>
                                <Arrow width={9} height={14}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withNamespaces()(HeroHeader)