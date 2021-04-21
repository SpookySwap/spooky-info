import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { useDarkModeManager } from '../../contexts/LocalStorage'
import grim from '../../assets/grim_ani.gif'

const Wrapper = styled.div`
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  ${(props) =>
    props.fill && !props.height
      ? css`
          height: 100vh;
        `
      : css`
          height: 180px;
        `}
`


const LocalLoader = ({ fill }) => {
  const [darkMode] = useDarkModeManager()

  return (
    <Wrapper fill={fill}>
      <img style={{ width: '300px' }} src={grim} alt="loading-icon" />
    </Wrapper>
  )
}

export default LocalLoader
