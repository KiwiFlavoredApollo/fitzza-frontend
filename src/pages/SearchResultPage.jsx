import { Card, Container, Grid, GridItem, IconButton, Image, Input, InputGroup, Text, Box } from '@chakra-ui/react'
import { AppBar } from '../components/AppBar.jsx'
import { TabBar } from '../components/TabBar.jsx'
import { LuHeart, LuSearch } from 'react-icons/lu'
import { products } from '../data/products.js'
import exampleProductImage from '../assets/hero.png'
import { useNavigate } from 'react-router-dom'

export const SearchResultPage = () => {
  const navigate = useNavigate();

  return (
    <Box position="relative" minH="100vh" pb={28} bg="bg">
      <Container maxW="container.xl" mx="auto" py={10} px={5}>
        <Grid gap={6}>
          <GridItem mb={2}>
            <AppBar />
          </GridItem>

          <GridItem>
            <InputGroup startElement={<Box as={LuSearch} boxSize={5} color="fg.muted" />}>
              <Input
                placeholder="검색어를 입력해주세요"
                borderRadius="xl"
                borderWidth="thin"
                borderColor="border.subtle"
                py={5}
              />
            </InputGroup>
          </GridItem>

          <GridItem>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4}>
              {
                products.map((product, index) => {
                  return (
                    <GridItem key={index}>
                      <Card.Root
                        variant="subtle"
                        borderWidth="thin"
                        borderColor="border.subtle"
                        bg="bg.panel"
                        borderRadius="2xl"
                        overflow="hidden"
                        cursor="pointer"
                        position="relative"
                        _hover={{ borderColor: 'fg.muted' }}
                        onClick={() => navigate('/products/1')}
                      >
                        <IconButton
                          position="absolute"
                          top={3}
                          right={3}
                          aria-label="찜하기"
                          rounded="full"
                          variant="ghost"
                          size="xs"
                          zIndex={2}
                        >
                          <Box as={LuHeart} boxSize={4} />
                        </IconButton>
                        <Image src={exampleProductImage} w="100%" h="48" objectFit="cover" />
                        <Card.Body p={4} gap={1}>
                          <Text textStyle="sm" fontWeight="semibold">{product.name}</Text>
                          <Text textStyle="xs" color="fg.muted">{product.price.toLocaleString()} 원</Text>
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

      <TabBar />
    </Box>
  )
}