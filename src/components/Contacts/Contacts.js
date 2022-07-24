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
                            <h3 className='preTitle'>{t('How to get involved?')}</h3>
                            <h1 className='title'>
                                <Trans i18nKey='core mining'>
                                    core <em>mining</em>
                                </Trans>
                            </h1>
                            <p className='description'>{t('Core Blockchain represents a blockchain revolution as the first-ever next-generation Proof of Work, referred to as the Proof of Distributed Efficiency //PoDE//, in the world. Distributed Efficiency refers to transactions being confirmed on a network in any location. Using energy that could be waste energy, grid energy, or any other form of energy production, and or a combination thereof is not only environmentally friendly but also self-sustainable.')}</p>
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
                                    text={t('Build Hardware')}
                                    type={'href'}
                                    href='https://www.thingiverse.com/groups/blockchain/things'
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
