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

    renderLanguageBlock = (language) => (
        <Col xs='12' sm='4' lg='3' key={language.code}>
            <button className='languagePage_block' onClick={() => {this.props.setLanguage(language.code)}}>
                <Check/>
                <div className='languagePage_block__text'>
                    <p>{language.englishName}</p>
                    <span>{language.nativeName}</span>
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
                        <Col xs='12'sm='12' md='12' xl='10' className='languagePage_program'>
                            <h3>{LANGUAGE_PAGE.translationProgram}</h3>
                                <p className='description'>{LANGUAGE_PAGE.translationDescription}</p>
                            <AnimatedArrow text={LANGUAGE_PAGE.translationProgram} url='/language-program'/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}