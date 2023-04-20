import { Alert, AlertTitle, Button } from '@mui/material'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import back from "../assets/image/my-account.jpg"
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { insertUser } from '../store/slices/postUserSlice';
import schemaRegister from "./schemaRegister"
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import  { getUsers } from '../store/slices/getUsersSlice';
import { useNavigate, Link } from 'react-router-dom';
import InputField from '../components/input';

function Register() {
  const dataUsers = useSelector((state)=>state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [alert,setAlert] =useState(false)
  useEffect(() => { 
    dispatch(getUsers())
 },[dispatch]);
  const {
    reset, register, handleSubmit, setError, watch, formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schemaRegister)});

  const onSubmit = (data) => {
    if (dataUsers.length > 0) {
      dataUsers.map((item) =>{
        if(item.email === data.email){
            setAlert(true)
        } else {
          dispatch(insertUser(data))
          navigate('/login');
        }
      })
    } else {
      dispatch(insertUser(data))
      navigate('/login');
    }
  };
  return (
        <section className="register">
                <div className="backImg">
                    <img src={back} alt="" />
                    <div className="text">
                        <h4>Register</h4>
                        <h2>My ACcount</h2>
                    </div>
                </div>
                    {alert&& 
                      <Alert severity="error">This name already exists — check it out!</Alert>
                    }

              <div className="box_container">
                <div className="boxItems">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <label className="mb-2">Email Address:</label>
                    <InputField 
                      errors={errors}
                      type="text"
                      placeholder='Enter your email'
                      name="email"
                      {...register('email')}
                    />
                    <label className="mb-2">User Name:</label>
                    <InputField 
                      errors={errors}
                      type="text"
                      placeholder='Enter your name'
                      name="user name"
                      {...register('user_name')}
                    />
                    <label className="mb-2">Password:</label>
                    <InputField 
                      errors={errors}
                      type="password"
                      placeholder='Enter your password'
                      name="password"
                      {...register('password')}
                    />
                    <label className="mb-2">Confirm Password:</label>
                    <InputField 
                      errors={errors}
                      type="password"
                      placeholder='Enter your password'
                      name="confirm_password"
                      {...register('confirm_password')}
                    />
                    <Button type="submit" className='reg mt-3' variant='contained'>Register</Button>
                  </Form>
                  <div className="text-end">
                    <Link to='/login'>Login</Link>
                  </div>
                </div>
              </div>
        </section>
  )
}

export default Register