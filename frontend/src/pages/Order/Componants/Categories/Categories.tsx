import {
  Box,
  Container,
  IconButton,
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

const Categories = () => {
  const { data: categories } = useCategories();
  const { table } = useParams();

  console.log(table);
  return (
    <>
      <Box position='absolute' left={{ lg: "60vw", base: "45vw" }} zIndex={10}>
        <AddCategoryMode />
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
  );
};

export default Categories;
