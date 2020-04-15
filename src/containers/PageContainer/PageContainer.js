import React, { PureComponent } from 'react'
import { number, func, object, string } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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

        const isMobile = window.innerWidth <= 500;

        return(
            <>
                <HeroHeader language={language} translate={translate}/>
                {isMobile? <OffersMobile language={language} translate={translate}/> : <Offers language={language} translate={translate}/>}
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
                <Contacts
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
       translate: state.index.translate,
       language: state.index.language,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(PageContainer)