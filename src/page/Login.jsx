import { Button, Link } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import schemaLogin from "./schemaLogin"
import { yupResolver } from '@hookform/resolvers/yup';
import Loading from '../components/Loading';
import InputField from '../components/input';

function Login() {
  const {
    reset, register, handleSubmit, setError, formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schemaLogin)});
  const [loading, setLoading] = useState(false)
  const [login, setLogin] = useState(false)

    useEffect(() => {
        localStorage.setItem("LoginUser", login)
    }, [login])
  const onSubmit = (data) => {
    setLoading(true);
    setLogin(true)
    console.log(data);
  };
  return (
        <section className="register login">
                <div className="backImg">
                    <img src="https://img.freepik.com/premium-photo/data-network-protection-security-hand-press-virtual-screen-enter-username-password-log_109076-298.jpg?w=996" alt="" />
                    <div className="text">
                        <h4>Login</h4>
                        <h2>My ACcount</h2>
                    </div>
                </div>

              <div className="box_container">
                <div className="boxItems">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <label className="mb-2">User Name:</label>
                    <InputField 
                      errors={errors}
                      type="text"
                      placeholder='Enter your name'
                      name="user name"
                      {...register('userName')}
                    />
                    <label className="mb-2">Password:</label>
                    <InputField 
                      errors={errors}
                      type="password"
                      placeholder='Enter your password'
                      name="password"
                      {...register('paSsword')}
                    />
                    <Button type="submit" className='reg mt-3' variant='contained'>Login</Button>
                  </Form>
                  <div className="text-end">
                    <Link to='/register'>Register</Link>
                  </div>
                </div>
              </div>
              {loading&& <Loading />}
        </section>
  )
}

export default Login