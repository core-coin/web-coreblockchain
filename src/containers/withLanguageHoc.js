import React from 'react'
import { object, string, func } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {setLanguage} from '../reducer/actions'
import { withNamespaces } from 'react-i18next'

function mapStateToProps(state) {
  return{
   language: state.index.language,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setLanguage,
}, dispatch)


const withLanguageHoc = (WrappedComponent) => {
  class HOC extends React.Component {
    static propTypes = {
      match: object,
      language: string,
      setLanguage: func,
    }

    componentDidUpdate() {
      const {i18n } = this.props
      let urlLang = this.props.match.params.lang
      let storeLang = this.props.language


      console.log('if', urlLang, storeLang)
      if (urlLang !== storeLang) {
        console.log('change lang to', urlLang)
        i18n.changeLanguage(urlLang)
        this.props.setLanguage(urlLang)
      }
    }

    render() {
      return (
        <WrappedComponent
          {
            ...this.props
          }
          language={this.props.match.params.lang}
        />
      )
    }
  }

  return withNamespaces()(connect(mapStateToProps, mapDispatchToProps)(HOC))
}

export default withLanguageHoc