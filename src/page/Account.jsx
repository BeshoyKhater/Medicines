import { Button, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import image from "../assets/image/input.png"

function Account() {
  const {
    reset, register, handleSubmit, setError, formState: { errors },
  } = useForm({ mode: 'onChange'});
  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    reset({
      user_name: "Beshoy",
      email: "besho@22.com",
      password: "k3213jl3"
    })
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
                  <TextField 
                  label="UserName" 
                  variant="outlined"
                  fullWidth
                  errors={errors}
                  type="text"
                  required
                  margin="normal"
                  placeholder='Enter your name'
                  name="user name"
                  {...register('user_name')}
                  />
                  <TextField 
                  label="Email" 
                  variant="outlined"
                  fullWidth
                  errors={errors}
                  type="text"
                  required
                  margin="normal"
                  placeholder='Enter your email'
                  name="email"
                  {...register('email')}
                  />
                  <TextField 
                  label="Password" 
                  variant="outlined"
                  fullWidth
                  errors={errors}
                  type="password"
                  required
                  margin="normal"
                  placeholder='Enter your password'
                  name="password"
                  {...register('password')}
                  />
                  <div className="text-end mt-5">
                    <Button variant="contained" type="submit">Update</Button>
                  </div>
                </div>
              </div>
            </Row>
          </Form>
        </div>
      </section>
  )
}

export default Account