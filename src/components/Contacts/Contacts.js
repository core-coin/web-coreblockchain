import React, { PureComponent } from 'react'
import { number, string } from 'prop-types'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import { withNamespaces, Trans } from 'react-i18next'

import Cube from '../SvgIcon/icons/Cube'
import Cryptohub from '../SvgIcon/icons/Cryptohub'
import Github from '../SvgIcon/icons/Github'
import Discord from '../SvgIcon/icons/Discord'
import Twitter from '../SvgIcon/icons/Twitter'
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
        const { t, blockTime, algorithm, difficulty } = this.props

        return(
            <div className='contacts'>
                <Container>
                    <Row>
                        <Col sm='12' lg='5' className='contacts_left hidden-xs'>
                            <h2>{t('Get in touch')}</h2>
                            <div className='contacts_left__block'>
                                <p>{t('Contact')}</p>
                                <a href='mailto:contact@coreblockchain.cc'>contact@coreblockchain.cc</a>
                            </div><div className='contacts_left__block'>
                            <p>{t('Development')}</p>
                            <a href=''>{t('Developer Portal')}</a>
                            <a href=''>{t('Core Improvement Proposals')}</a>
                            <a href=''>{t('Core Talk')}</a>
                        </div><div className='contacts_left__block'>
                            <p>{t('Useful links')}</p>
                            <a href=''>{t('Open-source License')}</a>
                            <a href=''>{t('Report bug')}</a>
                            <a href=''>{t('tradeMark')}</a>
                            <a href=''>{t('Brand identity')}</a>
                        </div>
                            <div className='contacts_left__icons'>
                                <a href=''><Cube /></a>
                                <a href=''><Cryptohub /></a>
                                <a href=''><Github /></a>
                                <a href=''><Discord /></a>
                                <a href=''><Twitter /></a>
                            </div>
                        </Col>
                        <Col sm='12' lg='7' xl={{ size: 6, offset: 1 }} className='contacts_right'>
                            <h3 className='preTitle'>{t('Random-Y')}</h3>
                            <h1 className='title'>
                                <Trans i18nKey='core mining'>
                                    core <em>mining</em>
                                </Trans>
                            </h1>
                            <p className='description'>{t('We optimize the mining algorithm to be more focused on small devices //IoT// and connected to mesh network ecosystem. Meshnet is Blockchain topology - connecting nodes and transmit various data into established and new devices.')}</p>
                            <div className='contacts_right__info'>
                                <div className='contacts_right__info-block'>
                                    <p>{t('Block time')}</p>
                                    <span>{blockTime} H/s</span>
                                </div>
                                <div className='contacts_right__info-block'>
                                    <p>{t('Algorithm')}</p>
                                    <span>{algorithm}</span>
                                </div>
                                <div className='contacts_right__info-block'>
                                    <p>{t('Difficulty')}</p>
                                    <span>{difficulty} TH/s</span>
                                </div>
                            </div>
                            <div className='contacts_right__button'>
                                <Button
                                    theme='green'
                                    download
                                    size='normal'
                                    text={t('download miner')}
                                    href=''
                                />
                                <Button
                                    theme='ghost'
                                    size='normal'
                                    text={t('Build hardware')}
                                    href=''
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
