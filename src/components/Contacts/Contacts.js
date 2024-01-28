import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import { withNamespaces, Trans } from 'react-i18next'

import Button from '../Button'

import './Contacts.scss'

class Contacts extends PureComponent{

    static propTypes = {
        algorithm: string,
        difficulty: string,
    }

    static defaultProps = {
        algorithm: 'RandomY',
        difficulty: "333",
    }

    render(){
        const { t, algorithm, difficulty } = this.props

        return(
            <div className='contacts'>
                <Container>
                    <Row className='contacts_row'>
                        <Col sm='12' lg='7' xl={{ size: 6, offset: 1 }} className='contacts_right'>
                            <h3 className='preTitle'>{t('Get involved in Core Mining')}</h3>
                            <h1 className='title'>
                                <Trans i18nKey='core mining'>
                                    core <em>mining</em>
                                </Trans>
                            </h1>
                            <p className='description'>{t('PoDE (Proof of Distributed Efficiency): Our innovative mining algorithm PoDE based on eco-friendly energy consumption, promoting environmental sustainability while maintaining high network efficiency.')}</p>
                            <div className='contacts_right__info'>
                                {/*<div className='contacts_right__info-block'>*/}
                                {/*    <p>{t('Block time')}</p>*/}
                                {/*    <span>{blockTime} H/s</span>*/}
                                {/*</div>*/}
                                <div className='contacts_right__info-block'>
                                    <p>{t('Algorithm')}</p>
                                    <span>{algorithm}</span>
                                </div>
                                <div className='contacts_right__info-block'>
                                    <p>{t('Network Difficulty')}</p>
                                    <span>{difficulty}h/s</span>
                                </div>
                            </div>
                            <div className='contacts_right__button'>
                                <Button
                                    theme='green'
                                    size='normal'
                                    text={t('Download Miner')}
                                    type={'href'}
                                    href='https://github.com/catchthatrabbit/coreminer'
                                />
                                <Button
                                    theme='ghost'
                                    size='normal'
                                    text={t('Start Mining')}
                                    type={'href'}
                                    href='https://blog.coreblockchain.net/mining'
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withNamespaces()(Contacts)
