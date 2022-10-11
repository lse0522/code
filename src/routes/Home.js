import React from 'react'
import { Button, Alert } from 'react-bootstrap';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
function Home() {
  return (
    <div className='container-sm' style={{ border: '1px solid black' }} >
      <Button variant="primary">Primary</Button>
      <Button type='button' className='btn btn-danger' >Dark</Button>

    </div>
  )
}

export default Home