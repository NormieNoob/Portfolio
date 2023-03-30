import React from 'react'
import Link from 'next/link'

function Icons({icon, url}) {
  return (
    <Link className='icon' href={`${url}`} passHref={true} target="_blank">
        {icon}
    </Link>
  )
}

export default Icons
