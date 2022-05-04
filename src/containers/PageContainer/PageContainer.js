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
import TabsSlider from '../../components/Tabs/TabsSlider'
import Offers from '../../components/Offers'
import OffersMobile from '../../components/Offers/OffersMobile'
import Contacts from '../../components/Contacts'
import { TargetIndustries } from '../../mockData'

import { isMobile, isSd } from '../../utils'

class PageContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: isMobile(),
      isSd: isSd()
    }
  }
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

    updateIsMobile = () => {
      this.setState({isMobile:isMobile()});
    };
    updateIsSd = () => {
    this.setState({isSd:isSd()});
  };
    componentDidMount() {
      window.addEventListener('resize', this.updateIsMobile);
      window.addEventListener('resize', this.updateIsSd);
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.updateIsMobile);
      window.removeEventListener('resize', this.updateIsSd);
    }

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

        return(
            <>
              <MetaTags>
                <title>
                  {t('Core Coin is an open source, public Blockchain application platform featuring one of the most secure smart contract functionality.')}
                </title>
              </MetaTags>
                <HeroHeader language={language} id="overview"/>
                {this.state.isMobile ? <OffersMobile /> : <Offers />}
                {this.state.isMobile || this.state.isSd ? <TabsSlider data={TargetIndustries} /> : <Tabs data={TargetIndustries}  />}
                <Solutions id="learn" />
                <Developers  id="developers" />
                <NodeCoverage
                    totalTransactions={totalTransactions}
                    totalBlocks={totalBlocks}
                    blocktime={blocktime}
                    marketCap={marketCap}
                    price={price}
                    id="enterprise"
                />
                <Contacts
                    blockTime={blockTimer}
                    networkHashrate={networkHashrate}
                    difficulty={difficulty}
                    id="community"
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
