import useBaseUrl from '@docusaurus/useBaseUrl' 
import React from 'react'

export default function Image ({alt, src}) {
  return (
    <div style={{marginBottom: '20px', textAlign: 'center'}}>
      <img 
        alt={alt} 
        className='GrowImage'
        src={useBaseUrl(src)}
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