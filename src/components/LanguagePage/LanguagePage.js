import React, { PureComponent } from 'react'
import { object, string, func } from 'prop-types'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import { withNamespaces } from 'react-i18next'

import AnimatedArrow from '../AnimatedArrow'

import './LanguagePage.scss'

class LanguagePage extends PureComponent{

    static propTypes = {
        translate: object,
        language: string,
        setLanguage: func,
    }

    renderLanguageBlock = (language) => (

        <Col xs='12' sm='4' lg='4' key={language.code}>
            <div className='languagePage_block' 
            onClick={() => {this.props.setLanguage(language.code)}}
           >
                <div className='before'></div>
                <div className='languagePage_block__text'>
                    <p>{language.englishName}</p>
                    <span>{language.nativeName}</span>
                </div>
            </div>
        </Col>
    )

    render(){
        
        const { translate: { LANGUAGE_PAGE }, t } = this.props     

        return(
            <div className='languagePage'>
                <Container>
                    <Row>
                        <Col xs='12' sm='12' lg='10'>
                            <h1 className='title'>{t('Language Support')}</h1>
                            <p className='description'>{t('We are serving all people Worldwide, any language any nationality. Please, contribute to translations to make this vision a reality.')}</p>
                        </Col>
                        <Col xs='12' sm='12' md='12' xl='10'>
                            <h3>{t('Select your language')}:</h3>
                            <Row>
                                {LANGUAGE_PAGE.languages.map(this.renderLanguageBlock)}
                            </Row>
                        </Col>
                        <Col xs='12'sm='12' md='12' xl='10' className='languagePage_program'>
                            <h3>{t('Translation Program')}</h3>
                                <p className='description'>{t('Core Blockchain translators are always translating pages in as many languages as possible. To see what they\'re working on right now or to sign up or to join them.')}</p>
                            <AnimatedArrow text={t('Translation Program')} url='/language-program'/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withNamespaces()(LanguagePage)