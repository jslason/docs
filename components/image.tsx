import useBaseUrl from '@docusaurus/useBaseUrl' 
import React from 'react'

export default function Image ({alt, path}) {
  return (
    <div>
      <img alt={alt} src={useBaseUrl(`/img${path}`)} />
      <div 
        style={{
          textAlign: 'center',
          fontStyle: 'italic'
        }}
      >{alt}</div>
    </div>
  )
}