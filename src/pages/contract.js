import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Connect from '../components/connect'
import { addStar, reduceStar } from '../action/addAction'


class Contract extends Component {
  static propTypes = {
    onAddStar: PropTypes.func.isRequired,
    onReduceStart: PropTypes.func.isRequired,
    num: PropTypes.number.isRequired,
  }

  handleClick = () => {
    this.props.onAddStar()
  }

  changeClick = () => {
    this.props.onReduceStart()
  }

  render() {
    const { num } = this.props
    return (
      <div>
        <em>Love</em>
        <br />
        <em>DiDi</em>
        <p>{ num }<em>点赞数</em></p>
        <button onClick={this.handleClick}>+</button>
        <button onClick={this.changeClick}>-</button>
      </div>
    )
  }
}

const ConnectContract = () => (
  <Connect>
    {(state, dispatch) => {
      const { addStars: { num } } = state
      const props = {
        num,
        onAddStar: (...args) => dispatch(addStar(...args)),
        onReduceStart: (...args) => dispatch(reduceStar(...args)),
      }
      return (
        <Contract {...props}/>
      )
    }}
  </Connect>
)

export default ConnectContract
