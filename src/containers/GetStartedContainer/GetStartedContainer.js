import React, { PureComponent } from 'react'
import GetStarted from '../../components/GetStarted'
import MetaTags from 'react-meta-tags'
import Slogan from '../../images/core-blockchain-slogan.jpg'
import TwitterImage from '../../images/core-blockchain-twitter.jpg'

class GetStartedContainer extends PureComponent {
    static propTypes = {}

    static defaultProps = {}

    render() {

        const { t } = this.props

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
                {`
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js%27);
                  fbq('init', '310638287807412');
                  fbq('track', 'PageView');
                  `}
              </script>
              <noscript><img height="1" width="1" style="display:none" alt=""
                             src="https://www.facebook.com/tr?id=310638287807412&ev=PageView&noscript=1"
              /></noscript>
            </MetaTags>
				    <GetStarted />
          </>
        )
    }
}

export default GetStartedContainer