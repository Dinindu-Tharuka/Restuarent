import {  Grid, GridItem } from '@chakra-ui/react'
import SidePanel from './SidePanel/SidePanel'
import UsersTable from './Main/Users/UsersTable'

const AdminMainPage = () => {
  return (
    <Grid templateAreas={`"aside main"`}>
        <GridItem area='aside' width='25vw' height='100vh'>

          <SidePanel/>

          

        </GridItem>
        <GridItem area='main' width='75vw' height='100vh'>

          <UsersTable/>

        </GridItem>

    </Grid>
  )
}

export default AdminMainPage