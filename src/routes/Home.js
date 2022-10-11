import React from 'react'
import { Button, Alert } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Button variant="primary">Primary</Button>
      <Button type='button' className='btn btn-danger' >Dark</Button>

    </div>
  )
}

export default Home