import React, { PureComponent } from 'react'
import { number, string } from 'prop-types'
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
        blockTime: number,
        algorithm: string,
        difficulty: number,
    }

    static defaultProps = {
        blockTime: 200,
        algorithm: 'RandomY',
        difficulty: 333,
    }

    render(){
        const { t, algorithm, difficulty } = this.props

        return(
            <div className='contacts'>
                <Container>
                    <Row className='contacts_row'>
                        <Col sm='12' lg='7' xl={{ size: 6, offset: 1 }} className='contacts_right'>
                            <h3 className='preTitle'>{t('HOW TO GET INVOLVED')}</h3>
                            <h1 className='title'>
                                <Trans i18nKey='core mining'>
                                    core <em>mining</em>
                                </Trans>
                            </h1>
                            <p className='description'>{t('We optimize the mining algorithm to be more focused on small devices //IoT// and connected to mesh network ecosystem Meshnet is Blockchain topology - connecting nodes and transmit various data into established and new devices')}</p>
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
                                    <span>{difficulty} TH/s</span>
                                </div>
                            </div>
                            <div className='contacts_right__button'>
                                <Button
                                    theme='green'
                                    download
                                    size='normal'
                                    text={t('download miner')}
                                    href='https://github.com/catchthatrabbit/coreminer'
                                />
                                <Button
                                    theme='ghost'
                                    size='normal'
                                    text={t('Build hardware')}
                                    href='https://www.thingiverse.com/groups/blockchain'
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
