import { Button, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import restuarent from "../assets/images/restuarent.jpg";
import { COLOURS, SIZES } from "../Generics/constants";

const MainPage = () => {
  return (
    <Flex width="100vw" height="100vh">
      <Image src={restuarent} objectFit="cover" width="100vw" />
      <Flex position="absolute" top="45vh" left="10vw">
        <VStack alignItems="start">
          <HStack>
            <Text
              fontWeight="bold"
              fontSize={70}
              color="white"
              textShadow="1px 1px #ff0000"
            >
              Welcome to
            </Text>
            <Text
              fontWeight="bold"
              fontSize={70}
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
            Delight in exquisite flavors at our charming restaurant, where every
            bite tells a unique story.
          </Text>
        </VStack>
      </Flex>

      <HStack position="absolute" top="70vh" left="50vw">
        <Button
          size="lg"
          width="10vw"
          borderRadius={SIZES.MAIN_PAGE_BUTTON_BORDER_RADIOUS}
          variant="outline"
          textColor={COLOURS.MAIN_PAGE_WHITE}
          _hover={{
            bg: COLOURS.MAIN_PAGE_YELLOW,
            textColor: COLOURS.MAIN_PAGE_BLACK,
          }}
        >
          Dining
        </Button>
        <Button
          size="lg"
          width="10vw"
          borderRadius={SIZES.MAIN_PAGE_BUTTON_BORDER_RADIOUS}
          variant="outline"
          textColor={COLOURS.MAIN_PAGE_WHITE}
          _hover={{
            bg: COLOURS.MAIN_PAGE_YELLOW,
            textColor: COLOURS.MAIN_PAGE_BLACK,
          }}
        >
          Take away
        </Button>
      </HStack>
    </Flex>
  );
};

export default MainPage;
