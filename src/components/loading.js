import React from 'react'
import PropTypes from 'prop-types'

const Loading = ({ error }) => (
  <div>
    <p>{error ?  error : 'loading...'}</p>
  </div>
)

Loading.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Error)
  ])
}

export default Loading
