import {  Grid, GridItem } from '@chakra-ui/react'

const AdminMainPage = () => {
  return (
    <Grid templateAreas={`"aside main"`}>
        <GridItem area='aside' width='25vw' height='100vh'>

        </GridItem>
        <GridItem area='main' width='75vw' height='100vh'>

        </GridItem>

    </Grid>
  )
}

export default AdminMainPage