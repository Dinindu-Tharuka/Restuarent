import { Button, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import restuarent from "../assets/images/restuarent.jpg";
import { COLOURS, SIZES } from "../Generics/constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AdminPanelButton from "./Admin Panel/AdminPanelButton";
import { useEffect } from "react";
import SignOutButton from "./Admin Panel/SidePanel/componants/SignOutButton";
import useUserMe from "../Hooks/User/useUserMe";

const MainPage = () => {
  const { userMe } = useUserMe();

  useEffect(() => {
    if (localStorage.getItem("firstTime") === "true") {
      window.location.reload();
      localStorage.setItem("firstTime", "false");
    }
  }, []);
  return (
    
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
      >
        <Flex width="100vw" height="100vh">
          {/* Background Image */}
          <Image src={restuarent} objectFit="cover" width="100vw" />

          {/* Admin Panel */}
          <Flex position="absolute" left="90vw" top="2vh">
            <HStack>
              {userMe.is_superuser && <AdminPanelButton />}
              <SignOutButton />
            </HStack>
          </Flex>

          <Flex position="absolute" top="45vh" left="10vw">
            <VStack alignItems="start">
              <HStack>
                <Text
                  fontWeight="bold"
                  fontSize={{
                    sm: 50,
                    lg: 70,
                  }}
                  color="white"
                  textShadow="1px 1px #ff0000"
                >
                  Welcome to
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize={{
                    sm: 50,
                    lg: 70,
                  }}
                  color={COLOURS.MAIN_PAGE_YELLOW}
                  textShadow="1px 1px #ff0000"
                >
                  Restuarent
                </Text>
              </HStack>
              <Text
                textColor="white"
                noOfLines={2}
                width="40vw"
                fontFamily="serif"
                fontSize={20}
                textShadow="1px 1px #ff0000"
              >
                Delight in exquisite flavors at our charming restaurant, where
                every bite tells a unique story.
              </Text>
            </VStack>
          </Flex>

          <HStack position="absolute" top="70vh" left="50vw">
            <Button
              size="lg"
              width={{
                lg: "200px",
                sm: "150px",
              }}
              borderRadius={SIZES.MAIN_PAGE_BUTTON_BORDER_RADIOUS}
              variant="outline"
              textColor={COLOURS.MAIN_PAGE_WHITE}
              _hover={{
                bg: COLOURS.MAIN_PAGE_YELLOW,
                textColor: COLOURS.MAIN_PAGE_BLACK,
              }}
            >
              <Link to="/dining">Dining</Link>
            </Button>
            <Button
              size="lg"
              width={{
                lg: "200px",
                sm: "150px",
              }}
              borderRadius={SIZES.MAIN_PAGE_BUTTON_BORDER_RADIOUS}
              variant="outline"
              textColor={COLOURS.MAIN_PAGE_WHITE}
              _hover={{
                bg: COLOURS.MAIN_PAGE_YELLOW,
                textColor: COLOURS.MAIN_PAGE_BLACK,
              }}
            >
              <Link to="/dining/order/T000">Take away</Link>
            </Button>
          </HStack>
        </Flex>
      </motion.div>
  );
};

export default MainPage;
