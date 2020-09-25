import useBaseUrl from '@docusaurus/useBaseUrl' 
import React from 'react'

const imgStyle = {
  border: '1px solid #eee',
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
  margin: '15px 15px 0 15px'
}

export default function Image ({alt, src}) {
  return (
    <p>
      <div style={{textAlign: 'center'}}>
        <img 
          alt={alt} 
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
    </p>
  )
}