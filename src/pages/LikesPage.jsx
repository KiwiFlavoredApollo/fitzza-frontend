import {
  Container,
  Grid,
  GridItem,
  Stack,
  Card,
  Image,
  Text,
  IconButton, Box, Heading, Flex, Button, Icon, Pagination,
} from '@chakra-ui/react'
import { AppBar } from '../components/AppBar.jsx'
import { TabBar } from '../components/TabBar.jsx'
import { LuHeart, LuTrophy, LuX } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../components/Footer.jsx'
import { api } from '../api/axios.js'
import { useContext, useEffect, useState } from 'react'
import { HttpStatusCode } from 'axios'
import { UserContext } from '../components/UserContext.jsx'
import { LikedProductItem } from '../components/LikedProductItem.jsx'

export const LikesPage = () => {
  const navigate = useNavigate()
  const context = useContext(UserContext)
  const [products, setProducts] = useState([])
  const [loadedPagesCount, setLoadedPagesCount] = useState(1)

  function isLoggedIn () {
    return true
  }

  if (!isLoggedIn()) {
    navigate('/login')
  }

  const loadLikedProductItems = async () => {
    api.get('/likes', {}).then(response => {
      if (response.status !== HttpStatusCode.Ok) {
        return
      }

      setProducts(response.data)
    }).catch(error => console.log(error))
  }

  useEffect(() => {
    loadLikedProductItems()
  }, [])

  return (
    <Grid
      templateRows={ 'auto auto 1fr auto auto' }
      paddingY={ 4 }
      gap={ 4 }
      minHeight={ '100vh' }
    >
      <AppBar></AppBar>

      <Container maxWidth={ '7xl' }>
        <Flex direction={ 'row' } justifyContent={ 'space-between' }>
          <Heading>찜</Heading>
          <Button
            rounded={ 'full' }
            onClick={ () => navigate('/worldcup') }
          >
            <Icon><LuTrophy></LuTrophy></Icon>
            <Text>월드컵</Text>
          </Button>
        </Flex>
      </Container>

      <Container maxWidth={ '5xl' }>
        <Grid
          templateColumns={ { base: 'repeat(3, 1fr)', md: 'repeat(5, 1fr)' } }
          gapX={ 4 }
          gapY={ 12 }
        >
          {
            products.map((product, index) => (
              <LikedProductItem
                key={ index }
                product={ product }
              ></LikedProductItem>
            ))
          }
        </Grid>
      </Container>

      <TabBar></TabBar>

      <Footer></Footer>
    </Grid>
  )
}