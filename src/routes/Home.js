import React from 'react'
import { Button, Alert } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Button variant="primary">Primary</Button>
      <Button variant="outline-dark">Dark</Button>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </div>
  )
}

export default Home