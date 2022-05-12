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
      axios.get('https://eu-api.catchthatrabbit.com/v2/api/stats')
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
                <meta property="wallet:xcb" content="cb57bbbb54cdf60fa666fd741be78f794d4608d67109" />
                <meta property="og:title" content="Core Blockchain" />
                <meta property="og:description" content="A New Sense of Integrity" />
                <meta property="og:image" content={Slogan} />
                <meta property="og:type" content="website" />
                <meta property="twitter:title" content="Core Blockchain" />
                <meta property="twitter:description" content="A New Sense of Integrity" />
                <meta property="twitter:image" content={TwitterImage} />
                <meta property="twitter:card" content="summary" />
                <script>
                  {`!function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js%27);
                fbq('init', '310638287807412');
                fbq('track', 'PageView');`}
                </script>
                <script>
                  {` !function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js%22,t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','t2_mhpuy0r6');rdt('track', 'PageVisit');`}
                  </script>
                <noscript><img height="1" width="1" style={{display: "none"}} alt="facebook"
                               src="https://www.facebook.com/tr?id=310638287807412&ev=PageView&noscript=1"
                /></noscript>
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
