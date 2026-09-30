import { Button, Container, Flex, Stack, Card, Text, Image, IconButton, Box, Grid } from '@chakra-ui/react'
import { AppBar } from '../components/AppBar.jsx'
import { TabBar } from '../components/TabBar.jsx'
import { products } from '../data/products.js'
import exampleProductImage from '/src/assets/react.svg'
import { LuX } from 'react-icons/lu'

export const ShoppingCartPage = () => {
  return (
    <Box position="relative" minH="100vh" pb={28} bg="bg">
      <Container maxW="container.xl" mx="auto" py={10} px={5}>
        <Box mb={6}>
          <AppBar />
        </Box>

        <Stack gap={6}>
          <Text textStyle="lg" fontWeight="bold">
            장바구니
          </Text>

          <Grid templateColumns={{ base: '1fr', lg: '3fr 2fr' }} gap={6} alignItems="start">

            <Stack gap={4}>
              {
                products.slice(0, 3).map((product, index) => {
                  return (
                    <Card.Root key={index} variant="subtle" borderWidth="thin" borderColor="border.subtle" bg="bg.panel" position="relative">
                      <Card.Body>
                        <Stack direction="row" align="center" gap={4}>
                          <Image boxSize="24" objectFit="cover" rounded="xl" src={exampleProductImage} />
                          <Stack gap={1}>
                            <Text textStyle="sm" fontWeight="semibold">{product.name}</Text>
                            <Text textStyle="xs" color="fg.muted">{product.price.toLocaleString()} 원</Text>
                          </Stack>
                          <IconButton
                            position="absolute"
                            top={3}
                            right={3}
                            aria-label="삭제"
                            rounded="full"
                            variant="ghost"
                            size="xs"
                          >
                            <Box as={LuX} boxSize={4} />
                          </IconButton>
                        </Stack>
                      </Card.Body>
                    </Card.Root>
                  )
                })
              }
            </Stack>

            <Stack gap={6}>
              <Card.Root borderWidth="thin" borderColor="border.subtle" bg="bg.panel" borderRadius="2xl" p={6}>
                <Card.Body p={0} gap={4}>
                  <Text fontWeight="bold" textStyle="sm">결제 정보</Text>
                  <Flex justify="space-between" align="center">
                    <Text textStyle="sm" color="fg.muted">총 주문금액</Text>
                    <Text textStyle="lg" fontWeight="bold">{(10_000).toLocaleString()} 원</Text>
                  </Flex>
                </Card.Body>
              </Card.Root>

              <Button size="lg" width="full" borderRadius="xl">
                주문하기
              </Button>
            </Stack>

          </Grid>
        </Stack>
      </Container>

      <TabBar />
    </Box>
  )
}