import React, { PureComponent } from 'react'
import { number, string } from 'prop-types'
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
                               Planet covered by <em>Blockchain</em>
                                </Trans>
                            </h1>
                            <p className='description'>{t('Core Blockchain can operate on various platforms and environments - including mesh networks, satellite streams, mobile internet connection and more.')}</p>
                        </Col>
                        <div className='custom_col'>
                            <div className='custom_row'>
                                <div className="block-container">
                                    <div className='nodeCoverage_block nodeCoverage_block_first'>
                                        <h2>{t('Boid Hop Reach')}</h2>
                                        <p>{t('Boid hop reach represents the Lorem Ipsum dummy text of the printing and typesetting industry It has been the industry\'s standard dummy text')}</p>
                                        <div className='nodeCoverage_block__cards'>
                                            {nodesOnline.toString().split('').map(Number).map(this.renderDigit)}
                                            <div className='nodeCoverage_block__cards-card'>
                                                <span>k</span>
                                            </div>
                                            <div className='nodeCoverage_block__cards-card'>
                                                <span>m</span>
                                            </div>
                                        </div>
                                       <div className='text-center power-by'>
                                       <span>{t('Network Powered by')}:</span>
                                       <div className='text-center nodeCoverage_block-img'>
                                            <Luna />
                                       </div>
                                       </div>
                                    </div>
                                </div>
                                <div className="block-container">
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
                                </div>
                            </div>
                            <Col className='text-center transaction-explorer'>
                                <Button
                                  theme='green'
                                  size='normal'
                                  text={t('Transaction Explorer')}
                                  href=''
                                />
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withNamespaces()(NodeCoverage)
