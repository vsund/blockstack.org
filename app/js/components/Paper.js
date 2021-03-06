import { Component, PropTypes } from 'react'
import {Link}           from 'react-router'

class Paper extends Component {
  static propTypes: {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    publication: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    index: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="m-b-3">
        <h4 className="m-b-1">
          {this.props.index+1}. {this.props.title}
        </h4>
        <p className="m-b-0">
          {this.props.authors}
        </p>
        <p className="m-b-1">
          {this.props.publication} - {this.props.date}
        </p>
        <p className="m-b-1">
          <Link to={this.props.url} target="_blank"
                className="btn btn-sm btn-outline-primary">
            PDF
          </Link>
        </p>
      </div>
    )
  }
}

export default Paper




