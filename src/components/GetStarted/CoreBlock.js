import React, { PureComponent } from 'react'
import { withNamespaces } from 'react-i18next'
import Search from '../../images/getStarted/get-started-search.svg'

import './GetStarted.scss'
import Button from '../Button'

class CoreBlock extends PureComponent{

    render(){
        const { t } = this.props

        return(
            <>
                <div className='downloadBlock'>
                    <img src={Search} alt='search_icon' className="icon-card" />
                    <h3>{t('Core block Index & analytics')}</h3>
                    <p>{t('Our Core block index is a web tool that provides you with detailed information about Core blocks, addresses, transactions and more')}</p>
                    <div className="button-container">
                        <Button
                          theme='ghost'
                          size='small'
                          hover={false}
                          href={'/'}
                          type='router'
                          text={t('browse transactions')}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default withNamespaces()(CoreBlock)
