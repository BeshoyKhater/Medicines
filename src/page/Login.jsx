import { Alert, AlertTitle, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import schemaLogin from "./schemaLogin"
import { yupResolver } from '@hookform/resolvers/yup';
import Loading from '../components/Loading';
import InputField from '../components/input';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store/slices/getUsersSlice';

function Login() {
  const dataUsers = useSelector((state)=>state.users)
  const navigate= useNavigate()
  const dispatch = useDispatch()
  const {
    reset, register, handleSubmit, setError, formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schemaLogin)});
  const [loading, setLoading] = useState(false)
  const [alert,setAlert] =useState(false)

  useEffect(() => {
    dispatch(getUsers())
 },[dispatch]);
  const onSubmit = (data) => {
    if (dataUsers.length > 0) {
        dataUsers?.map((item) =>{
        if(item.user_name === data.userName && item.password === data.paSsword){
          localStorage.setItem("LoginUser", true)
          localStorage.setItem("userId",item.id)
          localStorage.setItem("userName",data.userName)
          navigate("/")
        } else {
          setAlert(true)
        }
      })
    } else {
      setAlert(true)
    }
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

              {alert&& 
                <Alert severity="error">Incorrect email or password</Alert>
              }
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