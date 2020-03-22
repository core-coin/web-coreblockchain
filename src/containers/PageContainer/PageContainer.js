import React, { PureComponent } from 'react'
import { number, func, object, string } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Navbar from '../../components/HeaderNavbar/index'
import HeroHeader from '../../components/HeroHeader/index'
import Footer from '../../components/Footer/index'
import NodeCoverage from '../../components/NodeCoverage/index'
import Developers from '../../components/Developers/index'
import Solutions from '../../components/Solutions/index'
import Tabs from '../../components/Tabs/index'
import Offers from '../../components/Offers/index'

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
        translate: object,
        language: string,
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
            translate,
            language,
        } = this.props

        return(
            <>
                <Navbar language={language} translate={translate}/>
                <HeroHeader language={language} translate={translate}/>
                <Offers language={language} translate={translate}/>
                <Tabs language={language} translate={translate}/>
                <Solutions language={language} translate={translate}/>
                <Developers language={language} translate={translate}/>
                <NodeCoverage
                    totalTransactions={totalTransactions}
                    totalBlocks={totalBlocks}
                    volume={volume}
                    pricePerCoin={pricePerCoin}
                    walletAddresses={walletAddresses}
                    language={language}
                    translate={translate}
                />
                <Footer
                    blockTime={blockTimer}
                    networkHashrate={networkHashrate}
                    difficulty={difficulty}
                    language={language}
                    translate={translate}
                />
            </>
        )
    }
}

function mapStateToProps(state) {
    return{
       translate: state.translate,
        language: state.language,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(PageContainer)