import useBaseUrl from '@docusaurus/useBaseUrl' 
import React from 'react'

export default function Image ({alt, src}) {
  return (
    <p>
      <div style={{textAlign: 'center'}}>
        <img alt={alt} src={useBaseUrl(src)} />
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