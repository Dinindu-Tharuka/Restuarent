import { Button, Card, CardFooter, CardHeader, Heading } from "@chakra-ui/react";
interface Props{
    value:string
}

const CategoryCartItem = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md"> Customer dashboard</Heading>
      </CardHeader>
    
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
    </Card>
  );
};

export default CategoryCartItem;
