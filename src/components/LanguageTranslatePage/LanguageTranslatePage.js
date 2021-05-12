import React, { PureComponent } from 'react'
import { number } from 'prop-types'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import { withNamespaces } from 'react-i18next'

import AnimatedArrow from '../AnimatedArrow'

import '../LanguagePage/LanguagePage.scss'

class LanguageTranslatePage extends PureComponent{

    static propTypes = {
        translationProgress: number,
        reviewProgress: number,
    }

    static defaultProps = {
        translationProgress: 80,
        reviewProgress: 10,
    }

    renderLanguageInProgress = (language) => (
        <Col xs='12' sm='4' lg='3' key={language.englishName}>
            <button className='languagePage_block big'>
                <div className='languagePage_block__text'>
                    <p>{language.englishName}</p>
                    <span>{language.translationProgress}: {this.props.translationProgress}%</span>
                    <span>{language.reviewProgress}: {this.props.reviewProgress}%</span>
                    <AnimatedArrow url='' text={this.props.translate.LANGUAGE_PAGE.contribute} />
                </div>
            </button>
        </Col>
    )

    render(){
        const { t } = this.props
        const list = Array.from(t('languagesInProgress', { returnObjects: true }))

        return(
            <div className='languagePage'>
                <Container>
                    <Row>
                        <Col xs='12' sm='12' lg='12'>
                            <h1 className='title'>{t('Translation Program')}</h1>
                            <p className='description translate-description'>{t('Interested in translating? Get involved! We\'re seeking volunteers to join translation community.')}</p>
                        </Col>
                        <Col xs='12' sm='12' md='12'>
                            <h3>{t('How to join?')}</h3>
                           <ol>
                               <li>
                                   <a href='/' className='description'>{t('Join our translation instance.')}</a>
                                   <p className='description'>{t('You will need to create a Translate account if you don’t already have one.')}</p>
                               </li>
                               <li>
                                   <p className='description'>{t('Find the language you want to translate and select a document.')}</p>
                                   <p className='description'>{t('If translation progress is below 100%, please contribute! Don’t see your language listed?')}<a href="/" className='description'>{t('Open an issue.')}</a></p>
                               </li>
                               <li>
                                   <p className='description'>{t('Once you’ve completed the translation, our professional translation service will review (and potentially edit) the content.')}</p>
                                   <p className='description'>{t('Once the review is complete (i.e. review progress is 100%), we will add it to the website.')}</p>
                               </li>
                           </ol>
                        </Col>
                        <Col xs='12'sm='12' md='12' className='languagePage_inProgress'>
                            <h3>{t('The following language translations are in progress')}:</h3>
                            <Row>
                                {list.map((language) => (
                                    <Col xs='12' sm='4' lg='3' key={language.englishName}>
                                        <button className='languagePage_block big'>
                                            <div className='languagePage_block__text'>
                                                <p>{language.englishName}</p>
                                                {/*<span>{language.translationProgress}: {this.props.translationProgress}%</span>}
                                                {/*<span>{language.reviewProgress}: {this.props.reviewProgress}%</span>*/}
                                                <AnimatedArrow url='https://lang.lol/app/projects/d2eda44e-3714-441a-91f7-fbbf132ed757' text={t('Contribute')} />
                                            </div>
                                        </button>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withNamespaces()(LanguageTranslatePage)