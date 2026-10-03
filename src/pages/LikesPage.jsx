import {
  Container,
  Grid,
  GridItem,
  Stack,
  Card,
  Image,
  Text,
  IconButton, Box, Heading, Flex, Button,
} from '@chakra-ui/react'
import { AppBar } from '../components/AppBar.jsx'
import { TabBar } from '../components/TabBar.jsx'
import { LuHeart, LuTrophy, LuX } from 'react-icons/lu'
import { products } from '../data/products.js'
import exampleProductImage from '/src/assets/react.svg'

export const LikesPage = () => {
  return (
    <Stack paddingY={ 4 } gap={ 4 }>
      <AppBar></AppBar>
      <Container maxWidth={ '7xl' }>
        <Flex direction={ 'row' } justifyContent={ 'space-between' }>
          <Heading>찜</Heading>
          <Button
            rounded={ 'full' }
          >
            <LuTrophy></LuTrophy>
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
              <Box
                key={ index }
              >
                <Box
                  position={ 'relative' }
                >
                  <Image
                    width={ '100%' }
                    aspectRatio={ 1 }
                    objectFit={ 'contain' }
                    src={ exampleProductImage }
                  ></Image>
                  <IconButton
                    position={ 'absolute' }
                    bottom={ '2' }
                    right={ '2' }
                    rounded={ 'full' }
                    variant={ 'ghost' }
                  >
                    <LuHeart
                      color={ 'red' }
                      fill={ 'red' }
                    ></LuHeart>
                  </IconButton>
                </Box>
                <Heading>{ product.name }</Heading>
                <Text>{ (product.price).toLocaleString() } 원</Text>
              </Box>
            ))
          }
        </Grid>
        <TabBar/>
      </Container>
    </Stack>
  )
}