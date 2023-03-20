import React, { useState } from 'react'

export default function ListForm({ handleSubmit, submitLabel, handleCancel, hasCancelButton = false, initialText = '' }) {
  const [text, setText] = useState(initialText)
  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit(text)
    setText('')
  }

  return (
    <form onSubmit={onSubmit}>
      <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <button type='submit'>{submitLabel}</button>
      {hasCancelButton && (
        <button type='button' onClick={handleCancel}>cancel</button>
      )}

    </form>
  )
}
