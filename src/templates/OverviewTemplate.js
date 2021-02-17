import React, {PureComponent} from 'react'
import ReactMarkdown from 'react-markdown'
import blogOverview from '../markdown-pages/post-2.md'
import hashtag from 'markdown-it-hashtag'

export default class Template extends PureComponent{
  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      markdown: null,
      hashtag: ''
    }
  }

  componentDidMount() {
    console.log(blogOverview)
    fetch(blogOverview)
      .then(res => res.text())
      .then(markdown => this.setState((state) => ({ ...state, markdown })))
      .catch((err) => console.error(err));
  }


  render(){

    const { markdown } = this.state

    return(
      <ReactMarkdown source={markdown} hashtag={hashtag} />

    )
  }
} 