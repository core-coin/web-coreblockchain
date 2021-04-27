import React, { PureComponent } from 'react'
import { number, object, string, func } from 'prop-types'
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
            translate,
            language,
            setLanguage,
        } = this.props

        const isMobile = window.innerWidth <= 500;

        return(
            <>
                <HeroHeader language={language} translate={translate} setLanguage={setLanguage}/>
                {isMobile? <OffersMobile language={language} translate={translate}/> : <Offers language={language} translate={translate}/>}
                <Tabs language={language} translate={translate}/>
                <Solutions language={language} translate={translate}/>
                <Developers language={language} translate={translate}/>
                <NodeCoverage
                    totalTransactions={totalTransactions}
                    totalBlocks={totalBlocks}
                    blocktime={blocktime}
                    marketCap={marketCap}
                    price={price}
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