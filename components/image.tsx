import useBaseUrl from '@docusaurus/useBaseUrl' 
import React from 'react'

const imgStyle = {
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
  margin: '15px 0 0'
}

export default function Image ({alt, src}) {
  return (
    <div style={{marginBottom: '20px', textAlign: 'center'}}>
      <img 
        alt={alt} 
        className='GrowImage'
        src={useBaseUrl(src)} 
        style={imgStyle}
      />
      <div 
        style={{
          fontStyle: 'italic',
          fontSize: '75%'
        }}
      >{alt}</div>
    </div>
  )
}