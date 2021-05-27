/** @jsx jsx */
import * as React from "react"
import { jsx, css } from "@emotion/core"
import { Loading } from "./Loading"

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

interface AvatarProps {
  className?: string
  name: string
  src?: string
  color?: string
  size?: number
  circle?: boolean
  style?: React.CSSProperties
  loadingStyle?: React.CSSProperties
}

export const Avatar: React.FC<AvatarProps> = props => {
  const {
    name,
    src,
    color,
    className,
    style,
    size,
    circle,
    loadingStyle,
  } = props
  const [existAvatar, setExistAvatar] = React.useState(false)
  const [loading, setLoading] = React.useState(true)

  const onError = React.useCallback(() => {
    setExistAvatar(false)
    setLoading(false)
  }, [])

  const onSuccess = React.useCallback(() => {
    setExistAvatar(true)
    setLoading(false)
  }, [])

  const char =
    name?.charAt(0) ||
    characters.charAt(Math.floor(Math.random() * characters.length))
  const background = color || "hsl(" + Math.random() * 360 + ", 100%, 50%)"

  const avatarStyle = css`
    position: relative;
    width: ${size}px;
    height: ${size}px;
    border-radius: ${circle ? "50%" : "6px"};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    line-height: 1;
    user-select: none;
    background: ${background};

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      text-align: center;
      object-fit: cover;
    }
  `

  return (
    <div css={avatarStyle} className={className} style={style}>
      {src && loading && (
        <Loading
          width={size}
          height={size}
          circle={circle}
          style={loadingStyle}
        />
      )}
      <img
        src={src}
        style={{ display: existAvatar ? "block" : "none" }}
        alt="avatar"
        onLoad={onSuccess}
        onError={onError}
      />
      {((!loading && !existAvatar) || !src) && <span>{char}</span>}
    </div>
  )
}

Avatar.defaultProps = {
  size: 36,
  name: "",
  circle: false,
}
