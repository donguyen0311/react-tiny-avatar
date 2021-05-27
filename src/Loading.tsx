/** @jsx jsx */
import * as React from "react"
import { jsx, css, keyframes } from "@emotion/core"

const defaultBaseColor = "#eee"

const defaultHighlightColor = "#f5f5f5"

const loadingKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`

const loadingStyles = css`
  background-color: ${defaultBaseColor};
  background-image: linear-gradient(
    90deg,
    ${defaultBaseColor},
    ${defaultHighlightColor},
    ${defaultBaseColor}
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 6px;
  display: inline-block;
  line-height: 1;
  width: 100%;
`

interface LoadingProps {
  duration?: number
  className?: string
  width?: number
  height?: number
  circle?: boolean
  style?: React.CSSProperties
}

export const Loading: React.FC<LoadingProps> = props => {
  const {
    duration,
    className,
    width,
    height,
    circle,
    style: customStyle,
  } = props

  let style = {} as React.CSSProperties

  if (width !== null) {
    style.width = width
  }

  if (height !== null) {
    style.height = height
  }

  if (width !== null && height !== null && circle) {
    style.borderRadius = "50%"
  }

  return (
    <span
      className={className}
      css={css`
      ${loadingStyles}
      animation: ${loadingKeyframes} ${duration}s ease-in-out infinite
    `}
      style={{
        ...customStyle,
        ...style,
      }}
    >
      &zwnj;
    </span>
  )
}

Loading.defaultProps = {
  duration: 1.2,
  width: 0,
  height: 0,
  circle: false,
}
