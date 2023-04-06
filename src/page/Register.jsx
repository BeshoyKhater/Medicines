import { Alert, AlertTitle, Button, Link } from '@mui/material'
import React, { useState } from 'react'
import { Form, FormLabel } from 'react-bootstrap'
import back from "../assets/image/my-account.jpg"
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { insertUser } from '../store/slices/postUserSlice';
import schemaRegister from "./schemaRegister"
import { yupResolver } from '@hookform/resolvers/yup';
import Loading from '../components/Loading';
import { useEffect } from 'react';
import { getUsers } from '../store/slices/getUsersSlice';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/input';

//  setLoading(true);
//     const userId = localStorage.getItem('UserId');
//     data.createdBy = userId;
//     data.RegionId = selectRegion?.Id;
//     data.IndustryId = selectIndustries?.Id;
//     /// //////// create offer function
//     if (selectClientYMC) {
//       data.clientId = selectClientYMC?.Id;
//       dispatch(cretePriceOffer({ userId }, data)).then((res) => {
//         setLoading(false);
//         navigate(`/offerDetails/${res.Data}`);
//       }).catch((error) => {
//         setLoading(false);
//         toast.error('Something went wrong');
//       });
//     } else {
//       data.AssignedUserId = userId;

//       dispatch(creteClient({ userId }, data)).then((resClient) => {
//         data.clientId = resClient.Data;
//         dispatch(cretePriceOffer({ userId }, data)).then((res) => {
//           setLoading(false);
//           stetClientId(resClient.Data);
//           setOfferId(res.Data);
//         }).catch((error) => {
//           setLoading(false);
//           toast.error('Something went wrong');
//         });
//       }).catch((error) => {
//         setLoading(false);
//         toast.error('Something went wrong');
//       });
//     }
function Register() {
  const [loading, setLoading] = useState(false)
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const {
    reset, register, handleSubmit, setError, watch, formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schemaRegister)});

  const onSubmit = (data) => {
      setLoading(true);
      dispatch(insertUser(data))
      navigate('/login');
  // dataUsers?.map((item)=>{
  //   if(item.user_name !== data.user_name || item.email !== data.email){
  //     setLoading(false);
  //   } else {
  //       setLoading(false);
  //       <Alert severity="error">
  //                 <AlertTitle>Error</AlertTitle>
  //                 This name already exists — <strong>check it out!</strong>
  //       </Alert>
  //   }
  // })
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

              <div className="box_container">
                <div className="boxItems">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <label className="mb-2">Email Address:</label>
                    <InputField 
                      errors={errors}
                      type="email"
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
              {loading && <Loading />}
        </section>
  )
}

export default Register