import {
  Card,
  Container,
  Grid,
  GridItem,
  IconButton,
  Image,
  Input,
  InputGroup,
  Text,
} from '@chakra-ui/react'
import { AppBar } from '../components/AppBar.jsx'
import { TabBar } from '../components/TabBar.jsx'
import { LuHeart, LuSearch } from 'react-icons/lu'
import exampleProductImage from '../assets/hero.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../api/axios.js'
import { HttpStatusCode } from 'axios'

export const SearchResultPage = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])

  async function loadSearchedProducts () {
    api.get('/products', {}).then(response => {
      if (response.status !== HttpStatusCode.Ok) {
        return
      }

      setProducts(response.data)
    }).catch(console.error)
  }

  useEffect(() => {
    loadSearchedProducts()
  }, [])

  return (
    <>
      <Container maxWidth={ 'xl' } paddingY={ '4' } paddingBottom="96px">
        <Grid gap={ '4' }>
          <GridItem>
            <AppBar></AppBar>
          </GridItem>
          <GridItem>
            <InputGroup startElement={ <LuSearch></LuSearch> }>
              <Input></Input>
            </InputGroup>
          </GridItem>
          <GridItem>
            <Grid templateColumns={ 'repeat(3, 1fr)' } gap={ '4' }>
              {
                products.map((product, index) => {
                  return (
                    <GridItem>
                      <Card.Root onClick={ () => navigate('/products/1') }>
                        <IconButton
                          position="absolute"
                          top="2"
                          right="2"
                          aria-label="Close"
                          rounded="full"
                          size="xs"
                        >
                          <LuHeart></LuHeart>
                        </IconButton>
                        <Image src={ exampleProductImage }></Image>
                        <Card.Body padding={ '2' }>
                          <Text>{ product.name }</Text>
                          <Text>{ product.price.toLocaleString() } 원</Text>
                        </Card.Body>
                      </Card.Root>
                    </GridItem>
                  )
                })
              }
            </Grid>
          </GridItem>
        </Grid>
      </Container>
      <TabBar/>
    </>
  )
}