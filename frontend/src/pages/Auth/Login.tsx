import { Flex, Image } from "@chakra-ui/react";
import food from "../../assets/images/food.jpg";
import LoginForm from "./LoginForm";
import { COLOURS } from "../../Generics/constants";

const Login = () => {
  return (
    <Flex bg={COLOURS.LOGIN_BACKGROUND} height="100vh">
      <Image
        src={food}
        width="50vw"
        height="80vh"
        objectFit="cover"
        position="absolute"
        top="10vh"
        left="10vw"
        borderRadius={50}
      />

      <Flex
        bg='RGBA(255, 255, 255, 0.7)'
        position="absolute"
        width="40vw"
        height="50vh"
        top="25vh"
        left="50vw"
        borderRadius={50}
        alignItems='center'
        justifyContent='center'
        
      >
        <LoginForm />
      </Flex>
    </Flex>
  );
};

export default Login;