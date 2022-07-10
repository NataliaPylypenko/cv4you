import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const Wrapper = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: ${(props) => (props.isSquare ? '10px' : '50%')};
  background-color: #bfbfbf;
  input {
    display: none;
  }
  label,
  label div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 10rem;
    cursor: pointer;
    border-radius: ${(props) => (props.isSquare ? '10px' : '50%')};
  }
`

const Avatar = ({ isSquare, onClick }) => {
    return  <Wrapper isSquare={isSquare} onClick={onClick}/>
}

Avatar.propTypes = {
    isSquare: propTypes.bool,
}

Avatar.defaultProps = {
    isSquare: false,
}

export default Avatar