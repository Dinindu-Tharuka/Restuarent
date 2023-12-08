import { Flex, HStack, IconButton, Text, VStack } from "@chakra-ui/react";

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { useState } from "react";
import Section_1 from "./Sections/Section_1t";
import Section_2 from "./Sections/Section_2t";
import Section_3 from "./Sections/Section_3t";
import { IoHomeSharp } from "react-icons/io5";
import { COLOURS } from "../../Generics/constants";
import { useNavigate } from "react-router-dom";

const Dining = () => {
  const [page, setPage] = useState(0);
  const floors = ["First Floor", "Second Floor", "Second Floor"];
  const navigate = useNavigate()

  const onClick = ()=>{
    navigate('/')
  }
  return (
    <VStack width="100vw" height="100vh" bg={COLOURS.BACKGROUND_COLOR}>
      <Flex width="100vw" >
        <IconButton
          bg={COLOURS.BACKGROUND_COLOR}
          aria-label=""
          icon={<IoHomeSharp />}
          alignSelf="self-start"
          onClick={onClick}
        />
        <Text
          fontWeight="bold"
          alignSelf="center"
          position="absolute"
          left="50vw"
        >
          {floors[page]}
        </Text>
      </Flex>
      <HStack bg={COLOURS.BACKGROUND_COLOR} height="90vh">
        <IconButton
          bg={COLOURS.BACKGROUND_COLOR}
          aria-label=""
          icon={<GrPrevious />}
          height="100%"
          isDisabled={!(page > 0)}
          onClick={() => setPage(page - 1)}
        />
        {page === 0 && <Section_1 />}

        {page === 1 && <Section_2 />}

        {page === 2 && <Section_3 />}

        <IconButton
          bg={COLOURS.BACKGROUND_COLOR}
          aria-label=""
          icon={<GrNext />}
          isDisabled={!(page < 2)}
          height="100%"
          onClick={() => setPage(page + 1)}
        />
      </HStack>
    </VStack>
  );
};

export default Dining;
