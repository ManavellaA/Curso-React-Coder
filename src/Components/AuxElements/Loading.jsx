import React from 'react'
import './Loading.css'
const Loading = () => {
  return (
    <div className="loading show row">
        <div className="spin"></div>
        <h3 className="text-center mt-4 text-secondary" >.....Cargando.....</h3>
    </div>
  )
}

export default Loading