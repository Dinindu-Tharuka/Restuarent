import { Button, Input, Text } from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom'
import { useState } from "react";
import axiosInstance from "../../services/api-client";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const [accessToken, setAccessToken]=useState('')
  const [error, setError] = useState('')

  const onSubmit = (data: FieldValues) => {
    axiosInstance
        .post('/jwt/create/', data)
        .then(res => {
            localStorage.setItem('access', res.data.access)
            localStorage.setItem('refresh', res.data.refresh)
            console.log('access', res.data.access)
            localStorage.setItem('firstTime', 'true')
            setAccessToken(res.data.access)
        })
        .catch(()=> setError('Username or Password Invaild.'))

  };
  if (accessToken)
    return <Navigate to='/'/>
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-75">
      <Input
        {...register("user_name")}
        type="text"
        placeholder="Username"
        marginBottom={5}
        borderColor="whiteAlpha.700"
        color='white'
      />
      <Input
        {...register("password")}
        type="password"
        placeholder="Password"
        marginBottom={5}
        borderColor="whiteAlpha.700"
        color='white'
      />
      {error && <Text color='red'>{error}</Text>}
      <Button type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;