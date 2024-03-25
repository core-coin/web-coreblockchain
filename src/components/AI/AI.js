import React, { PureComponent } from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import { withNamespaces, Trans } from 'react-i18next'
import i18next from 'i18next'
import Button from '../Button'
import './AI.scss'

class AI extends PureComponent{
    render(){
        return(
            <div className='ai'>
                <Container>
                    <Row>
                        <Col sm='12'>
                            <a id="ai"/>
                            <h3 className='preTitle'>{i18next.t('AI Toolkit')}</h3>
                            <h1 className='title'>
                                <Trans i18nKey='CoreCode AI'>
                                CoreCode <em>AI</em>
                                </Trans>
                            </h1>
                        </Col>
                        <Col sm='12' lg='12' xl='7' className='pane'>
                            <p>{i18next.t("AI can make mistakes, and it shouldn't be used in production without additional checks for user requirements, security, and code reviews. If you agree, click the button below 'Agree & Start'.")}</p>
                            <p>{i18next.t("We are continuously improving this AI toolkit, and any feedback or corrections will be very welcome.")}</p>
                            <p>
                                {i18next.t("Please follow these steps to send us a knowledge base contribution:")}
                                <ol>
                                    <li>{i18next.t("Describe the improvement or correction.")}</li>
                                    <li>{i18next.t("License the work under the CC0 license and state this in the email.")}</li>
                                    <li>{i18next.t("Send us the email by clicking the 'Improve knowledge base' button.")}</li>
                                </ol>
                            </p>
                            <p>{i18next.t("We are accepting Actions using OpenAPI related to Core Blockchain. We reserve the right to decline or modify contributions.")}</p>
                            <div>
                                <Button
                                    theme='green'
                                    size='normal'
                                    text={i18next.t("Agree & Start")}
                                    margin='35'
                                    href="https://chat.openai.com/g/g-uZ0mJAwHO-corecode"
                                    type={'href'}
                                />
                                <Button
                                    theme='ghost'
                                    size='normal'
                                    text={i18next.t("Improve knowledge base")}
                                    href="mailto:ai@coreblockchain.net?subject=AI%20Toolkit%20Contribution"
                                    type={'href'}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withNamespaces()(AI)
