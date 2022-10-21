import React from 'react'
import styled from '@emotion/styled'

type TextBoxProps = {
  canInput: boolean
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  value?: string
}

export const TextBox = ({ canInput, value, onChange }: TextBoxProps) => {
  return (
    <TextArea
      readOnly={!canInput}
      value={value}
      onChange={(e) => onChange && onChange(e)}
    />
  )
}

const TextArea = styled.textarea`
  width: 400px;
  height: 100px;
  border: 2px solid #000;
`
