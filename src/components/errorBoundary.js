import React from 'react'
import styled from 'styled-components'

const StyledBoundaryBox = styled.div`
  background: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`
const Title = styled.h2`
  position: relative;
  padding: 0 10px;
  font-size: 17px;
  color: #0070c9;
  z-index: 1991;
`

const Details = styled.details`
  position: relative;
  padding: 0 10px;
  color: #bb1d1d;
  z-index: 1991;
`

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: info,
    })
  }

  render() {
    if (this.state.hasError) {
      return(
        <StyledBoundaryBox>
          <Title>页面可能存在错误!</Title>
          <Details>
            {this.state.error && this.state.error.toString()}
            <br/>
            {this.state.errorInfo.componentStack}
          </Details>
        </StyledBoundaryBox>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
