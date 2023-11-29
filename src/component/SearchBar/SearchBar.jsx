import { Button } from 'react-bootstrap';
import React from 'react'
import { Form } from 'react-bootstrap';
import styles from './SearchBar.module.scss';

export const SearchBar = () => {
  return (
    <>
        <Form className='form'>
        <Form.Group className={`d-flex ${styles.serachContainer}`}>
            <Form.Control type='text' placeholder='Enter City...' className={styles.searchInput}></Form.Control>
            <Button variant='primary' className={styles.button}>Search</Button>
        </Form.Group>
        </Form>
    </>
  )
}
