import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import useCategories from "../../../../Hooks/Product/Category/useCategories";
import Foods from "./Foods";
import Beverages from "./Beverages";
import { useParams } from "react-router-dom";
import AddCategoryMode from "./Form/AddCategoryMode";
import UserMeContext from "../../../../Contexts/UserMe";
import useUserMe from "../../../../Hooks/User/useUserMe";

const Categories = () => {
  const { data: categories } = useCategories();
  const { table } = useParams();
  const { userMe } = useUserMe()
  return (
    <UserMeContext.Provider value={userMe}>
      <>
        <Box
          position="absolute"
          left={{ lg: "60vw", base: "45vw" }}
          zIndex={10}
        >
         {userMe.is_superuser && <AddCategoryMode />}
        </Box>
        <Tabs>
          <TabList>
            <Tab>Food</Tab>
            <Tab>Beverages</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Container
                overflow="auto"
                maxWidth="100%"
                maxHeight="78vh"
                minHeight="78vh"
              >
                <Foods categories={categories} table={table} />
              </Container>
            </TabPanel>
            <TabPanel>
              <Container
                overflow="auto"
                maxWidth="100%"
                maxHeight="78vh"
                minHeight="78vh"
              >
                <Beverages categories={categories} table={table} />
              </Container>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </>
    </UserMeContext.Provider>
  );
};

export default Categories;
