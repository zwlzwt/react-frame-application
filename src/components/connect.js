import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { StoreContext } from './provider'

const dummyState = {}

class ConnectConsumer extends Component {
  static propTypes = {
    context: PropTypes.shape({
      dispatch: PropTypes.func.isRequired,
      getState: PropTypes.func.isRequired,
      subscribe: PropTypes.func.isRequired,
    }),
    children: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { context } = this.props
    this.unsubscribe = context.subscribe(() => {
      this.setState(dummyState)
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { context } = this.props
    const passProps = this.props
    return this.props.children(context.getState(), context.dispatch)
  }
}

const Connect = ({ children }) => (
  <StoreContext.Consumer>
    {(context) => (
      <ConnectConsumer context={context}>
        {children}
      </ConnectConsumer>
    )}
  </StoreContext.Consumer>
)

export default Connect
