import useBaseUrl from '@docusaurus/useBaseUrl' 
import React, {useState} from 'react'

export default function Image ({alt, src}) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div style={{marginBottom: '20px', textAlign: 'center'}}>
      <img 
        alt={alt} 
        className='ZoomableImage'
        height='300px'
        onClick={() => setIsActive(true)}
        src={useBaseUrl(src)}
      />
      {isActive && (
        <img
          className='ImageOverlay'
          onClick={() => setIsActive(false)}
          src={useBaseUrl(src)}
        />
      )}
      <div 
        style={{
          fontStyle: 'italic',
          fontSize: '75%'
        }}
      >{alt}</div>
    </div>
  )
}