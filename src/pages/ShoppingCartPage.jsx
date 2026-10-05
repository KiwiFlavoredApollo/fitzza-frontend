import { Button, Container, Grid, Stack, Card, Text, Image, IconButton, Box } from '@chakra-ui/react'
import { AppBar } from '../components/AppBar.jsx'
import exampleProductImage from '/src/assets/react.svg'
import { LuArrowLeft, LuBrackets, LuChevronLeft, LuChevronRight, LuX } from 'react-icons/lu'
import { api } from '../api/axios.js'
import { HttpStatusCode } from 'axios'
import { useEffect, useState } from 'react'

export const ShoppingCartPage = () => {
  const [products, setProducts] = useState([])

  async function loadShoppingCartProducts () {
    api.get('/shopping-cart', {}).then(response => {
      if (response.status !== HttpStatusCode.Ok) {
        return
      }

      setProducts(response.data)
    }).catch(console.error)
  }

  useEffect(() => {
    loadShoppingCartProducts()
  }, [])

  return (
    <Container maxWidth={ 'xl' } height={ '100vh' } paddingY={ '4' }>
      <Stack height={ '100%' } gap={ '4' }>
        <AppBar></AppBar>
        {
          products.slice(0, 3).map((product, index) => {
            return (
              <Card.Root key={ index }>
                <Card.Body>
                  <Stack direction={ 'row' }>
                    <Image width={ '100px' } src={ exampleProductImage }></Image>
                    <Stack direction={ 'column' }>
                      <Text>{ product.name }</Text>
                      <Text>{ product.price.toLocaleString() } 원</Text>
                    </Stack>
                    <IconButton
                      position="absolute"
                      top="2"
                      right="2"
                      aria-label="Close"
                      rounded="full"
                      size="xs"
                    >
                      <LuX></LuX>
                    </IconButton>
                  </Stack>
                </Card.Body>
              </Card.Root>
            )
          })
        }
        <Box>
          <Text>총 주문금액 { (10_000).toLocaleString() } 원</Text>
        </Box>
        <Button>주문하기</Button>
      </Stack>
    </Container>
  )

}