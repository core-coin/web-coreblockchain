import React, { PureComponent } from 'react'
import { number } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Navbar from '../components/HeaderNavbar'
import HeroHeader from '../components/HeroHeader'
import Footer from '../components/Footer'
import NodeCoverage from '../components/NodeCoverage'
import Developers from '../components/Developers'
import Solutions from '../components/Solutions'
import Tabs from '../components/Tabs'
import Offers from '../components/Offers'

class PageContainer extends PureComponent {
    static propTypes = {
        blockTime: number,
        networkHashrate: number,
        difficulty: number,
        nodesOnline: number,
        totalTransactions: number,
        totalBlocks: number,
        volume: number,
        pricePerCoin: number,
        walletAddresses: number,
    }

    static defaultProps = {}

    render() {
        const {
            totalTransactions,
            totalBlocks,
            volume,
            pricePerCoin,
            walletAddresses,
            blockTimer,
            networkHashrate,
            difficulty,
        } = this.props

        return(
            <>
                <Navbar/>
                <HeroHeader/>
                <Offers/>
                <Tabs/>
                <Solutions/>
                <Developers/>
                <NodeCoverage
                    totalTransactions={totalTransactions}
                    totalBlocks={totalBlocks}
                    volume={volume}
                    pricePerCoin={pricePerCoin}
                    walletAddresses={walletAddresses}
                />
                <Footer
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
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(PageContainer)