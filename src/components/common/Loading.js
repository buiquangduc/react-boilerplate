import React from 'react'
import ReactLoading from 'react-loading'

const defaultConfig = {
  type: 'bars',
  color: 'red',
  width: 150,
  height: 150
}

const Loading = (props) => {
  const config = {
    ...defaultConfig,
    ...props
  }

  return (
    <div className="loading-container">
      <ReactLoading {...config} />
    </div>
  )
}

export default Loading
