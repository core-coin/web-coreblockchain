import React, { PureComponent } from 'react'
import { object, string, func, number } from 'prop-types'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import AnimatedArrow from '../AnimatedArrow'

import '../LanguagePage/LanguagePage.scss'

export default class LanguageTranslatePage extends PureComponent{

    static propTypes = {
        translate: object,
        language: string,
        setLanguage: func,
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
        const { translate: { LANGUAGE_PAGE } } = this.props

        return(
            <div className='languagePage'>
                <Container>
                    <Row>
                        <Col xs='12' sm='12' lg='12'>
                            <h1 className='title'>{LANGUAGE_PAGE.translationProgram}</h1>
                            <p className='description translate-description'>{LANGUAGE_PAGE.translationText}</p>
                        </Col>
                        <Col xs='12' sm='12' md='12'>
                            <h3>{LANGUAGE_PAGE.toJoin}</h3>
                           <ol>
                               <li>
                                   <a href='/' className='description'>{LANGUAGE_PAGE.joinListOne}</a>
                                   <p className='description'>{LANGUAGE_PAGE.joinListTwo}</p>
                               </li>
                               <li>
                                   <p className='description'>{LANGUAGE_PAGE.joinListThree}</p>
                                   <p className='description'>{LANGUAGE_PAGE.joinListFour}<a href="/" className='description'>{ LANGUAGE_PAGE.joinListLink }</a></p>
                               </li>
                               <li>
                                   <p className='description'>{LANGUAGE_PAGE.joinListFive}</p>
                                   <p className='description'>{LANGUAGE_PAGE.joinListSix}</p>
                               </li>
                           </ol>
                        </Col>
                        <Col xs='12'sm='12' md='12' className='languagePage_inProgress'>
                            <h3>{LANGUAGE_PAGE.languageInProgress}</h3>
                            <Row>
                                {LANGUAGE_PAGE.languagesInProgress.map(this.renderLanguageInProgress)}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}