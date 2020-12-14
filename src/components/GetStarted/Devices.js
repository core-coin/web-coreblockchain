import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'

import AnimatedArrow from '../AnimatedArrow'

import './GetStarted.scss'

export class Devices extends PureComponent {
  static propTypes = {
    translate: object,
    language: string,
  }

  renderList = (item, idx) => {
    return (
      <li key={idx}>
        <p>{item}</p>
      </li>
    )
  }

  render() {
    const { translate } = this.props;

    return (
      <>
        <h1 className='title'>
          {translate.coreMining} <span>{translate.coreMiningHightlight}</span>
        </h1>
        <p className='description'>{translate.coreMiningDescription}</p>
        <div className='downloadBlock cpuMiners'>
          <h3>{translate.CpuMiners.title}</h3>
          <p>{translate.CpuMiners.description}</p>
          <ul>{translate.devicesList.map(this.renderList)}</ul>
          <AnimatedArrow url='' text={translate.CpuMiners.link} />
          <AnimatedArrow url='' text={translate.CpuMiners.linkUnder} />
        </div>
      </>
    )
  }
}
