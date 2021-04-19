import React, { PureComponent } from 'react'
import { number, string, object } from 'prop-types'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import { withNamespaces, Trans } from 'react-i18next'

import Luna from '../SvgIcon/icons/Luna'
import Button from '../Button'
import './NodeCoverage.scss'


class NodeCoverage extends PureComponent{
    static propTypes = {
        nodesOnline: number,
        totalTransactions: number,
        nodeStatistics: string,
        totalBlocks: number,
        blocktime: number,
        marketCap: number,
        price: number,
    }

    static defaultProps = {
        nodesOnline: 100,
        totalTransactions: 548.076,
        totalBlocks: 8.266707,
        blocktime: 5,
        marketCap: 100000000,
        price: 0.01,
    }

    renderDigit = (item, index) => (
        <div className='nodeCoverage_block__cards-card' key={index}>
            <span>{item}</span>
        </div>
    )

    render(){
        const { t, totalTransactions, totalBlocks, blocktime, marketCap, price, nodesOnline } = this.props

        return(
            <div className='nodeCoverage'>
                <Container>
                    <Row>
                        <Col sm='12' lg={{ size: 12 }}>
                            <h3 className='preTitle'>{t('Core Network reach')}</h3>
                            <h1 className='title'>
                                <Trans i18nKey='Planet covered by Blockchain'>
                                <em>Planet</em> covered by <em>Blockchain</em>
                                </Trans>
                            </h1>
                            <p className='description'>{t('Core Blockchain can operate on various platforms and environments - including mesh networks, satellite streams, mobile internet connection and more.')}</p>
                        </Col>
                        <Col sm='12' lg={{ size: 10, offset: 1 }}>
                            <Row>
                                <Col sm='12' md='6'>
                                    <div className='nodeCoverage_block'>
                                        <h2>{t('Boid Hop Reach')}</h2>
                                        <div className='nodeCoverage_block__cards'>
                                            {nodesOnline.toString().split('').map(Number).map(this.renderDigit)}
                                            <div className='nodeCoverage_block__cards-card'>
                                                <span>k</span>
                                            </div>
                                            <div className='nodeCoverage_block__cards-card'>
                                                <span>m</span>
                                            </div>
                                        </div>
                                       <div className='text-center'>
                                       <span>{t('Network Powered by')}:</span>
                                       <div className='text-center nodeCoverage_block-img'>
                                            <Luna />
                                       </div>
                                       </div>
                                    </div>
                                </Col>
                                <Col sm='12' md='6'>
                                    <div className='nodeCoverage_block'>
                                        <h2>{t('Statistics')}</h2>
                                        <ul>
                                            <li>
                                                {t('Total transactions')}:
                                                <span>{totalTransactions}</span>
                                            </li>
                                            <li>
                                                {t('Total blocks')}:
                                                <span>{totalBlocks}</span>
                                            </li>
                                            <li>
                                                {t('Block time')}:
                                                <span>{blocktime} sec.</span>
                                            </li>
                                            <li>
                                                {t('Market cap')}:
                                                <span>€ {marketCap}</span>
                                            </li>
                                            <li>
                                                {t('Price')}:
                                                <span>€ {price}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col className='text-center'>
                                    <Button
                                        theme='green'
                                        size='normal'
                                        text={t('Transaction Explorer')}
                                        href=''
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withNamespaces()(NodeCoverage)