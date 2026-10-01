import { Button, Container, Stack, Image, Grid, GridItem, Box, Text } from '@chakra-ui/react'
import { AppBar } from '../components/AppBar.jsx'
import { TabBar } from '../components/TabBar.jsx'
import exampleResultImage from '/src/assets/hero.png'
import examplePersonImage from '/src/assets/react.svg'
import exampleClotheImage from '/src/assets/vite.svg'

export const TryOnPage = () => {
  return (
    <Box position="relative" minH="100vh" pt={24} pb={28} bg="bg">
      <Box position="fixed" top={0} left={0} right={0} zIndex={10} bg="bg" px={5} py={4}>
        <Container maxW="7xl" mx="auto" px={0}>
          <AppBar />
        </Container>
      </Box>

      <Container maxW="xl" mx="auto" px={5}>
        <Stack gap={6}>

          <Box>
            <Text textStyle="lg" fontWeight="bold">
              가상 피팅
            </Text>
          </Box>

          <Grid templateRows="auto" w="100%">
            <GridItem w="100%">
              <Box
                w="100%"
                h={{ base: "xs", md: "md" }}
                borderRadius="2xl"
                overflow="hidden"
                borderWidth="thin"
                borderColor="border.subtle"
                bg="bg.panel"
                boxShadow="sm"
              >
                <Image src={exampleResultImage} w="100%" h="100%" objectFit="cover" alt="피팅 결과" />
              </Box>
            </GridItem>
          </Grid>

          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4} w="100%">
            <GridItem>
              <Box
                borderWidth="thin"
                borderColor="border.subtle"
                borderRadius="2xl"
                p={4}
                bg="bg.panel"
                textAlign="center"
              >
                <Box w="100%" h="36" borderRadius="xl" overflow="hidden" mb={2} bg="bg.muted" display="flex" alignItems="center" justifyContent="center">
                  <Image src={examplePersonImage} boxSize="20" objectFit="contain" alt="인물 이미지" />
                </Box>
                <Text textStyle="xs" fontWeight="semibold" color="fg.muted">인물 사진</Text>
              </Box>
            </GridItem>

            <GridItem>
              <Box
                borderWidth="thin"
                borderColor="border.subtle"
                borderRadius="2xl"
                p={4}
                bg="bg.panel"
                textAlign="center"
              >
                <Box w="100%" h="36" borderRadius="xl" overflow="hidden" mb={2} bg="bg.muted" display="flex" alignItems="center" justifyContent="center">
                  <Image src={exampleClotheImage} boxSize="20" objectFit="contain" alt="의류 이미지" />
                </Box>
                <Text textStyle="xs" fontWeight="semibold" color="fg.muted">의류 사진</Text>
              </Box>
            </GridItem>
          </Grid>

          <Grid templateRows="auto" w="100%" pt={2}>
            <GridItem w="100%">
              <Button size="lg" width="full" borderRadius="xl">
                입어보기
              </Button>
            </GridItem>
          </Grid>

        </Stack>
      </Container>

      <Box position="fixed" bottom={0} left={0} right={0} zIndex={10} bg="bg">
        <TabBar />
      </Box>
    </Box>
  )
}