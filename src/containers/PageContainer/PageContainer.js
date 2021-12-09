import React, { PureComponent } from 'react'
import { number, object, string } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MetaTags from 'react-meta-tags'

import HeroHeader from '../../components/HeroHeader'
import NodeCoverage from '../../components/NodeCoverage'
import Developers from '../../components/Developers'
import Solutions from '../../components/Solutions'
import Tabs from '../../components/Tabs'
import Offers from '../../components/Offers'
import OffersMobile from '../../components/Offers/OffersMobile'
import Contacts from '../../components/Contacts'
import Industries  from '../../mockData/industriesData'

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
            language,
            t,
        } = this.props

        const isMobile = window.innerWidth <= 500;

        return(
            <>
              <MetaTags>
                <title>
                  {t('Core Coin is an open source, public Blockchain application platform featuring one of the most secure smart contract functionality.')}
                </title>
              </MetaTags>
                <HeroHeader language={language}/>
                {isMobile? <OffersMobile /> : <Offers />}
                <Tabs data={Industries}/>
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

function mapStateToProps(state) {
	return{
		language: state.index.language,
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(PageContainer)
