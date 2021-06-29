import React, { PureComponent } from 'react'
import { object } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Community from '../../components/Community'
import Loading from '../../components/Loading'

class CommunityContainer extends PureComponent {
  static propTypes = {
    mdFiles: object,
  }

  static defaultProps = {}

  render() {
    const {
      mdFiles,
    } = this.props

    if (!mdFiles) {
      return(
        <Loading/>
      )
    }

    return(
      <Community
        mdFiles={mdFiles}
      />
    )
  }
}

function mapStateToProps(state) {
  return{
    mdFiles: state.index.markdownFiles,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(CommunityContainer)
