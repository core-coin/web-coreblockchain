import React, { useEffect } from 'react'
import { object, string, func } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useLocation, withRouter } from 'react-router-dom'
import {setLanguage} from '../reducer/actions'
import { withNamespaces } from 'react-i18next'

function mapStateToProps(state) {
  return{
   language: state.index.language,
  }
}

function _ScrollToTop(props) {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

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
      if (urlLang !== storeLang) {
        i18n.changeLanguage(urlLang)
        this.props.setLanguage(urlLang)
      }
    }



    render() {
      return (
        <ScrollToTop>
	        <WrappedComponent
		        {
			        ...this.props
		        }
		        language={this.props.match.params.lang}
	        />
        </ScrollToTop>
      )
    }
  }

  return withNamespaces()(connect(mapStateToProps, mapDispatchToProps)(HOC))
}

export default withLanguageHoc