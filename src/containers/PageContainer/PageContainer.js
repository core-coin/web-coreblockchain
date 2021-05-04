import React, { PureComponent } from 'react'
import { number, object, string, func } from 'prop-types'

import HeroHeader from '../../components/HeroHeader'
import NodeCoverage from '../../components/NodeCoverage'
import Developers from '../../components/Developers'
import Solutions from '../../components/Solutions'
import Tabs from '../../components/Tabs'
import Offers from '../../components/Offers'
import OffersMobile from '../../components/Offers/OffersMobile'
import Contacts from '../../components/Contacts'

class PageContainer extends PureComponent {
    static propTypes = {
        blockTime: number,
        networkHashrate: number,
        difficulty: number,
        nodesOnline: number,
        totalTransactions: number,
        totalBlocks: number,
        blocktime: number,
        marketCap: number,
        price: number,
        translate: object,
        language: string,
        setLanguage: func,
    }

    static defaultProps = {}

    render() {
        const {
            totalTransactions,
            totalBlocks,
            blocktime,
            marketCap,
            price,
            blockTimer,
            networkHashrate,
            difficulty,
        } = this.props

        const isMobile = window.innerWidth <= 500;

        return(
            <>
                <HeroHeader />
                {isMobile? <OffersMobile /> : <Offers />}
                <Tabs />
                <Solutions />
                <Developers />
                <NodeCoverage
                    totalTransactions={totalTransactions}
                    totalBlocks={totalBlocks}
                    blocktime={blocktime}
                    marketCap={marketCap}
                    price={price}

                />
                <Contacts
                    blockTime={blockTimer}
                    networkHashrate={networkHashrate}
                    difficulty={difficulty}
                />
            </>
        )
    }
}


export default PageContainer