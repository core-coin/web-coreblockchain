import React, { PureComponent } from 'react'
import { object, string, func } from 'prop-types'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import Check from '../SvgIcon/icons/Check'
import AnimatedArrow from '../AnimatedArrow'

import './LanguagePage.scss'

export default class LanguagePage extends PureComponent{

    static propTypes = {
        translate: object,
        language: string,
        setLanguage: func,
    }

    renderLanguageBlock = (language, index) => (
        <Col xs='12' sm='4' lg='3' key={index}>
            <a className='languagePage_block' onClick={() => {this.props.setLanguage(language.index)}}>
                <Check/>
                <div className='languagePage_block__text'>
                    <p>{language.englishName}</p>
                    <span>{language.nativeName}</span>
                </div>
            </a>
        </Col>
    )

    renderLanguageInProgress = (language, index) => (
        <Col xs='12' sm='4' lg='3' key={index}>
            <a className='languagePage_block big'>
                <div className='languagePage_block__text'>
                    <p>{language.englishName}</p>
                    <span>{language.nativeName}</span>
                    <AnimatedArrow url='' text={this.props.translate.LANGUAGE_PAGE.contribute} />
                </div>
            </a>
        </Col>
    )

    render(){
        const { translate: { LANGUAGE_PAGE } } = this.props

        return(
            <div className='languagePage'>
                <Container>
                    <Row>
                        <Col xs='12' sm='12' lg='10'>
                            <h1 className='title'>{LANGUAGE_PAGE.title}</h1>
                            <p className='description'>{LANGUAGE_PAGE.description}</p>
                        </Col>
                        <Col xs='12' sm='12' md='12' xl='10'>
                            <h3>{LANGUAGE_PAGE.selectLanguage}</h3>
                            <Row>
                                {LANGUAGE_PAGE.languages.map(this.renderLanguageBlock)}
                            </Row>
                        </Col>
                        <Col xs='12'sm='12' md='12' xl='10' className='languagePage_inProgress'>
                            <p className='description'>{LANGUAGE_PAGE.languageInProgress}</p>
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