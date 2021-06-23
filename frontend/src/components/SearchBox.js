import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import '../css/searchbox.css'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <input type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className=' searchsize'
      />
      <Button type='submit' variant='outline-canagold' className='p-2'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
