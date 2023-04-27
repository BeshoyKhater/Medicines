import { Button } from '@mui/material'
import axios from 'axios';
import React, { useEffect } from 'react'
import { Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import image from "../assets/image/man.jpg"
import InputField from '../components/input';



function Account() {
  const dispatch = useDispatch()
  const {
    reset, register, handleSubmit, setError, formState: { errors },
  } = useForm({ mode: 'onChange'});
  const onSubmit = (data) => {
    console.log(data)
  };

  useEffect(() => {
  const userId = localStorage.getItem("userId")
    axios
    .get(`http://localhost:4000/users/${userId}`)
    .then(data => reset({
          user_name: data.data.user_name,
          email: data.data.email,
          password: data.data.password
        }))
    .catch(error => console.log(error));
  }, [reset]);

  return (
      <section className="account_info">
        <div className="container boxItems">
          <h2 className="mb-4">Account Information</h2>
          <Form onSubmit={handleSubmit(onSubmit)}> 
            <Row className="g-4">
              <div className="col-md-4 col-12">
                <div className="left">
                  <div className="img">
                    <img src={image} alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-12">
                <div className="right">
                    <label className="mb-2">User Name:</label>
                    <InputField 
                      errors={errors}
                      disabled
                      type="text"
                      placeholder='Enter your name'
                      name="user name"
                      {...register('user_name')}
                    />
                    <label className="mb-2">Email:</label>
                    <InputField 
                      errors={errors}
                      disabled
                      type="email"
                      placeholder='Enter your email'
                      name="user email"
                      {...register('email')}
                    />
                    <label className="mb-2">Password:</label>
                    <InputField 
                      errors={errors}
                      disabled
                      type="password"
                      placeholder='Enter your password'
                      name="Password"
                      {...register('password')}
                    />  
                </div>
              </div>
            </Row>
          </Form>
        </div>
      </section>
  )
}

export default Account