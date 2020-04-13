import React, { PureComponent } from 'react'
import { number, string, object } from 'prop-types'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import Button from '../Button'
import AnimatedArrow from '../AnimatedArrow'

import './NodeCoverage.scss'

export default class NodeCoverage extends PureComponent{
    static propTypes = {
        nodesOnline: number,
        totalTransactions: number,
        totalBlocks: number,
        volume: number,
        pricePerCoin: number,
        walletAddresses: number,
        language: string,
        translate: object,
    }

    static defaultProps = {
        nodesOnline: 1074,
        totalTransactions: 548.076,
        totalBlocks: 8.266707,
        volume: 8453,
        pricePerCoin: 0.0193,
        walletAddresses: 85.491,
    }

    renderDigit = (item, index) => (
        <div className='nodeCoverage_block__cards-card' key={index}>
            <span>{item}</span>
        </div>
    )

    render(){
        const { totalTransactions, totalBlocks, volume, pricePerCoin, walletAddresses, nodesOnline, translate: { NODECOVERAGE } } = this.props

        return(
            <div className='nodeCoverage'>
                <Container>
                    <Row>
                        <Col sm='12' lg={{ size: 8, offset: 2 }}>
                            <h3 className='preTitle'>{NODECOVERAGE.preTitle}</h3>
                            <h1 className='title'>{NODECOVERAGE.title} <span>{NODECOVERAGE.highlightTitle}</span></h1>
                            <p className='description'>{NODECOVERAGE.description}</p>
                        </Col>
                        <Col sm='12' lg={{ size: 10, offset: 1 }}>
                            <Row>
                                <Col sm='12' md='6'>
                                    <div className='nodeCoverage_block'>
                                        <h2>{NODECOVERAGE.nodesOnline}</h2>
                                        <div className='nodeCoverage_block__cards'>
                                            {nodesOnline.toString().split('').map(Number).map(this.renderDigit)}
                                        </div>
                                        <AnimatedArrow centerMode text='node statistics' url=''/>
                                    </div>
                                </Col>
                                <Col sm='12' md='6'>
                                    <div className='nodeCoverage_block'>
                                        <h4>{NODECOVERAGE.lastPerformance}</h4>
                                        <ul>
                                            <li>
                                                {NODECOVERAGE.totalTransactions}
                                                <span>{totalTransactions}</span>
                                            </li>
                                            <li>
                                                {NODECOVERAGE.totalBlocks}
                                                <span>{totalBlocks}</span>
                                            </li>
                                            <li>
                                                {NODECOVERAGE.volume}
                                                <span>{volume}</span>
                                            </li>
                                            <li>
                                                {NODECOVERAGE.pricePerCoin}
                                                <span>$ {pricePerCoin}</span>
                                            </li>
                                            <li>
                                                {NODECOVERAGE.walletAddresses}
                                                <span>{walletAddresses}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col className='text-center'>
                                    <Button
                                        theme='green'
                                        size='normal'
                                        text={NODECOVERAGE.transactionExplorer}
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