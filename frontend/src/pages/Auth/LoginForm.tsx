import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../../services/api-client";
import { SIZES } from "../../Generics/constants";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const [accessToken, setAccessToken] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (data: FieldValues) => {
    axiosInstance
      .post("/jwt/create/", data)
      .then((res) => {
        localStorage.setItem("access", res.data.access);
        localStorage.setItem("refresh", res.data.refresh);
        console.log("access", res.data.access);
        localStorage.setItem("firstTime", "true");
        setAccessToken(res.data.access);
      })
      .catch(() => setError("Username or Password Invaild."));
  };
  if (accessToken) return <Navigate to="/" />;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-75">
        {error && <Text>{error}</Text>}
      <Flex flexDir='column'>
        <Input
          {...register("user_name")}
          type="text"
          placeholder="Username"
          marginBottom={5}
          borderColor="black"
          color="white"
          width={SIZES.LOGIN_FORM_INPUT_WIDTH}
        />
        <Input
          {...register("password")}
          type="password"
          placeholder="Password"
          marginBottom={5}
          borderColor="black"
          width={SIZES.LOGIN_FORM_INPUT_WIDTH}
        />
        {error && <Text color="red">{error}</Text>}
        <Button type="submit" bg='#f22827'>Login</Button>
      </Flex>
    </form>
  );
};

export default LoginForm;
