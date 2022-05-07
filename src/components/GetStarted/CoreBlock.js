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
                    <h3>{t('Core Block Index & Analytics')}</h3>
                    <p>{t('Core Block Explorer is a web tool that provides detailed information about Core blocks, addresses, and transactions.')}</p>
                    <div className="button-container">
                        <Button
                          mobileFullWidth
                          theme='ghost'
                          size='small'
                          type={'href'}
                          href={'https://blockindex.net/'}
                          text={t('Browse Transactions')}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default withNamespaces()(CoreBlock)
