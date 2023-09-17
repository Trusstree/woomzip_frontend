"use client"

import { CSSProperties } from "react"

type EditorSaveButtonProps = {
  children:string
  className?: string
  style?: CSSProperties
}

export default function EditorSaveButton(props: EditorSaveButtonProps) {
  const {children, className, style } = props;

  return (
    <button
      className={`${className} btn btn-lg fw-bold`}
      style={{...style}}>
      {children}
    </button>
  )
}