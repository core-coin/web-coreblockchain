import React, { PureComponent } from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import { withNamespaces } from 'react-i18next'
import {Link} from  'react-router-dom'

import AnimatedArrow from '../AnimatedArrow'
import { LanguagesData } from '../../mockData'

import './LanguagePage.scss'
import i18next from 'i18next'

class LanguagePage extends PureComponent{

    render(){

        const { t } = this.props

        return(
            <div className='languagePage'>
                <Container>
                    <Row>
                        <Col xs='12' sm='12' lg='10'>
                            <h1 className='title'>{i18next.t('Language Support')}</h1>
                            <p className='description'>{i18next.t('We are serving all people Worldwide, any language any nationality. Please, contribute to translations to make this vision a reality.')}</p>
                        </Col>
                        <Col xs='12' sm='12' md='12' xl='10'>
                            <h3>{t('Select Your Language')}:</h3>
                            <Row>
                                {LanguagesData.map((language) => (
                                <Col xs='12' sm='4' lg='4' key={language.code}>
                                    <Link className='languagePage_block'
                                    to={`/${language.code}/language`}
                                >
                                        <div className='languagePage_block__text'>
                                            <p>{language.englishName}</p>
                                            <span>{language.nativeName}</span>
                                        </div>
                                    </Link>

                                </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col xs='12' sm='12' md='12' xl='10' className='languagePage_program'>
                            <h3>{t('Translation Program')}</h3>
                            <p className='description'>{t('Core Blockchain translators are always translating pages in as many languages as possible. To see what they\'re working on right now or to sign up or to join them.')}</p>
                            <AnimatedArrow text={t('Translation Program')} url={`https://crowdin.com/project/coreblockchaincc`} targetBlack/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withNamespaces()(LanguagePage)
