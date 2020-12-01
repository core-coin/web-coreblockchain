import React, { PureComponent } from 'react'
import { number, string, object } from 'prop-types'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import './NodeCoverage.scss'
import Luna from '../SvgIcon/icons/Luna'

export default class NodeCoverage extends PureComponent{
    static propTypes = {
        nodesOnline: number,
        totalTransactions: number,
        nodeStatistics: string,
        totalBlocks: number,
        blocktime: number,
        marketCap: number,
        price: number,
        language: string,
        translate: object,
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
        const { totalTransactions, totalBlocks, blocktime, marketCap, price, nodesOnline, translate: { NODECOVERAGE } } = this.props

        return(
            <div className='nodeCoverage'>
                <Container>
                    <Row>
                        <Col sm='12' lg={{ size: 12 }}>
                            <h3 className='preTitle'>{NODECOVERAGE.preTitle}</h3>
                            <h1 className='title'><span>{NODECOVERAGE.prehighlightTitle}</span>{NODECOVERAGE.title} <span>{NODECOVERAGE.highlightTitle}</span></h1>
                            <p className='description'>{NODECOVERAGE.description}</p>
                        </Col>
                        <Col sm='12' lg={{ size: 10, offset: 1 }}>
                            <Row>
                                <Col sm='12' md='6'>
                                    <div className='nodeCoverage_block'>
                                        <h2>{NODECOVERAGE.nodesOnline}</h2>
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
                                       <span>{NODECOVERAGE.nodeStatistics}</span>
                                       <div className='text-center nodeCoverage_block-img'>
                                            <Luna />
                                       </div>
                                       </div>
                                    </div>
                                </Col>
                                <Col sm='12' md='6'>
                                    <div className='nodeCoverage_block'>
                                        <h2>{NODECOVERAGE.lastPerformance}</h2>
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
                                                {NODECOVERAGE.blocktime}
                                                <span>{blocktime} sec.</span>
                                            </li>
                                            <li>
                                                {NODECOVERAGE.marketCap}
                                                <span>€ {marketCap}</span>
                                            </li>
                                            <li>
                                                {NODECOVERAGE.price}
                                                <span>€ {price}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}