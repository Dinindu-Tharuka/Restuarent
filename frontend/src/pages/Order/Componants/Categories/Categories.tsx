import {
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

const Categories = () => {
  const { data: categories } = useCategories();
  return (
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
            <Foods categories={categories} />
          </Container>
        </TabPanel>
        <TabPanel>
          <Container
            overflow="auto"
            maxWidth="100%"
            maxHeight="78vh"
            minHeight="78vh"
          >
            <Beverages categories={categories} />
          </Container>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Categories;
