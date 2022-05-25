import React, { PureComponent } from 'react'
import {
    Col
} from 'reactstrap'
import { string } from 'prop-types'
import { withNamespaces } from 'react-i18next'

class PrivacyPolicy extends PureComponent{
	static propTypes = {
		language: string,
	}

    render(){
        const { t } = this.props

        return(
            <Col md='12'>
                <h2><strong>{t('Privacy Policy')}</strong></h2>
                <p>{t('At coreblockchain.cc, accessible from coreblockchain.cc, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that are collected and recorded by coreblockchain.cc and how we use it.')}</p>
                <p>{t('If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.')}</p>
                <p>{t('This Privacy Policy applies only to our online activities and is valid for visitors of our website with regards to the information that they shared and/or collected at coreblockchain.cc. This policy is not applicable to any information collected offline or via channels other than this website.')}</p>
                <h2>{t('Consent')}</h2>
                <p>{t('By using our website, you hereby consent to our Privacy Policy and agree to its terms.')}</p>
                <h2>{t('Information We Collect')}</h2>
                <p>{t('The personal information that you are asked to provide and the reasons why you are asked to provide it will be made clear to you at the point we ask you to provide your personal information.')}</p>
                <p>{t('If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.')}</p>
                <h2>{t('How we use your information')}</h2>
                <p>{t('We use the information we collect in various ways to')}:</p>
                <ul>
                    <li>{t('Provide, operate, and maintain our website')}</li>
                    <li>{t('Improve, personalize, and expand our website')}</li>
                    <li>{t('Understand and analyze how you use our website')}</li>
                    <li>{t('Develop new products, services, features, and functionalities')}</li>
                    <li>{t('Communicate with you, either directly or through one of our partners, including the customer service, to provide you with updates and other information related to the website, and for marketing and promotional purposes')}</li>
                    <li>{t('Send you emails')}</li>
                    <li>{t('Find and prevent fraud')}</li>
                </ul>
                <h2>{t('Log Files')}</h2>
                <p>{t('coreblockchain.cc follows a standard procedure of using log files. These files log visitors in when they visit websites. All hosting companies do this and are a part of hosting services\' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and in some cases the number of clicks. These are not linked to any information that is personally identifiable. The purpose of gathering the information is to analyze trends, administer the site, track users\' movement on the website, and gather demographic information.')}
                </p>
                <h2>{t('Cookies and Web Beacons')}</h2>
                <p>{t('Like any other website, coreblockchain.cc uses \'cookies\'. These cookies are used to store information that includes visitors\' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users\' experience by customizing our web page content based on visitors\' browser type and/or other information.')}</p>
                <h2>{t('Advertising Partners Privacy Policies')}</h2>
                <p>{t('You may consult this list to find the Privacy Policy for each of the advertising partners of coreblockchain.cc.')}</p>
                <p>{t('Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on coreblockchain.cc, which are sent directly to users\' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on the websites you visit.')}</p>
                <p>{t('Note that coreblockchain.cc has no access to or control over these cookies that are used by third-party advertisers.')}</p>
                <h2>{t('Third-Party Privacy Policies')}</h2>
                <p>{t('coreblockchain.cc/\'s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.')}</p>
                <p>{t('You can choose to disable cookies through your individual browser options. To get more detailed information about cookie management with specific web browsers, visit the browsers\' respective websites.')}</p>
                <h2>{t('CCPA Privacy Rights (Do Not Sell My Personal Information)')}</h2>
                <p>{t('Under the CCPA, among other rights, consumers have the right to')}:</p>
                <ul>
                    <li>{t('Request that a business that collects a consumer\'s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.')}</li>
                    <li>{t('Request that a business delete any personal data about the consumer that the business has collected.')}</li>
                    <li>{t('Request that a business that sells a consumer\'s personal data, not sell the consumer\'s personal data.')}</li>
                    <li>{t('If you make a request, we have a month to respond to you. If you would like to exercise any of these rights, please contact us.')}</li>
                </ul>

                <h2>{t('GDPR Data Protection Rights')}</h2>
                <p>{t('We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following')}:</p>
                <ul>
                    <li>{t('The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.')}</li>
                    <li>{t('The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.')}</li>
                    <li>{t('The right to erasure – You have the right to request that we erase your personal data, under certain conditions.')}</li>
                    <li>{t('The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.')}</li>
                    <li>{t('The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.')}</li>
                    <li>{t('The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.')}</li>
                    <li>{t('If you make a request, we have a month to respond to you. If you would like to exercise any of these rights, please contact us.')}</li>
                </ul>
                <h2>{t('Children\'s Information')}</h2>
                <p>{t('Another part of our priorities is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.')}</p>
                <p>{t('coreblockchain.cc does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.')}</p>
            </Col>
        )
    }
}

export default withNamespaces()(PrivacyPolicy)
