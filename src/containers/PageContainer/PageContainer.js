import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
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
import Slogan from '../../images/core-blockchain-slogan.jpg'
import TwitterImage from '../../images/core-blockchain-twitter.jpg'

import { isMobile, isSd, numberToString, toStringDateTime, siFormat, numberFormat, toXCBPrice, ago } from '../../utils'
import axios from 'axios'

class PageContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: isMobile(),
      isSd: isSd(),
      statistics: {
        blockchainHeight: "",
        networkHashrate: "",
        networkDifficulty: "",
        blockTime: "",
        blockReward: "",
      }
    }
  }
    static propTypes = {
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
      axios.get('https://eu-api.catchthatrabbit.com/v2/api/stats', {headers: {"Access-Control-Allow-Origin": "*"}})
        .then(res => {
          const networkDifficultyData = res.data.nodes[0].difficulty
          const  blockTimeData = res.data.nodes[0].blocktime

          const statisticsData =  {
              blockchainHeight: numberToString(numberFormat(parseInt(res.data.nodes[0].height))),
              networkHashrate: numberToString(siFormat((networkDifficultyData / blockTimeData).toFixed(2), 2)),
              networkDifficulty: siFormat(parseInt(res.data.nodes[0].difficulty), 2),
              blockTime: numberToString(ago(toStringDateTime(res.data.stats.lastBlockFound))),
              blockReward: numberToString(numberFormat(toXCBPrice(parseInt(res.data.blockReward)))),
          }
          this.setState({ statistics:  statisticsData })
        })
      window.addEventListener('resize', this.updateIsMobile);
      window.addEventListener('resize', this.updateIsSd);
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.updateIsMobile);
      window.removeEventListener('resize', this.updateIsSd);
    }

    render() {
        const {
            language,
            t,
        } = this.props

        return(
            <>
              <MetaTags>
                <title>
                  {t('Core Blockchain')}
                </title>
                <meta name="description" content="A New Sense of Integrity" />
                <meta name="keywords" content="core,blockchain,xcb,xce,xab,new,sense,of,integrity,smart,contract,network,open-source,open,source,mainnet,devin" />
                <meta name="wallet:xcb" content="cb57bbbb54cdf60fa666fd741be78f794d4608d67109" />
                <meta property="og:title" content="Core Blockchain" />
                <meta property="og:description" content="A New Sense of Integrity" />
                <meta property="og:image" content={Slogan} />
                <meta property="og:type" content="website" />
                <meta property="twitter:title" content="Core Blockchain" />
                <meta property="twitter:description" content="A New Sense of Integrity" />
                <meta property="twitter:image" content={TwitterImage} />
                <meta property="twitter:card" content="summary" />
              </MetaTags>
                <HeroHeader language={language} id="overview"/>
                {this.state.isMobile ? <OffersMobile /> : <Offers />}
                {this.state.isMobile || this.state.isSd ? <TabsSlider data={TargetIndustries} /> : <Tabs data={TargetIndustries}  />}
                <Solutions id="learn" />
                <Developers  id="developers" />
                <NodeCoverage
                    blockchainHeight={this.state.statistics.blockchainHeight}
                    networkHashrate={this.state.statistics.networkHashrate}
                    networkDifficulty={this.state.statistics.networkDifficulty}
                    blockTime={this.state.statistics.blockTime}
                    blockReward={this.state.statistics.blockReward}
                    id="enterprise"
                />
                <Contacts
                    difficulty={this.state.statistics.networkDifficulty}
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
