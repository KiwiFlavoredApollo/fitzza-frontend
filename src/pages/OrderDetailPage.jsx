import {
  Box,
  Card,
  Circle,
  Flex,
  Heading,
  HStack,
  Image,
  Separator,
  Stack,
  Text,
  Container,
  Grid,
  GridItem
} from "@chakra-ui/react"
import {
  LuChevronLeft,
  LuCheck,
  LuFileText,
  LuPackage
} from "react-icons/lu"
import { AppBar } from "../components/AppBar.jsx"
import { TabBar } from "../components/TabBar.jsx"

export const OrderDetail = () => {
  return (
    <Box position="relative" minH="100vh" pt={24} pb={28} bg="bg">
      <Box position="fixed" top={0} left={0} right={0} zIndex={10} bg="bg" px={5} py={4}>
        <Container maxW="7xl" mx="auto" px={0}>
          <AppBar />
        </Container>
      </Box>

      <Container maxW="5xl" mx="auto" px={5}>
        <Stack gap={6}>
          {/* 상단 네비게이션 및 타이틀 영역 (Grid 분리) */}
          <Grid templateColumns="auto 1fr" alignItems="center" gap={2}>
            <GridItem cursor="pointer" onClick={() => window.history.back()}>
              <Box as={LuChevronLeft} boxSize={6} />
            </GridItem>
            <GridItem>
              <Heading textStyle="lg">주문 상세</Heading>
            </GridItem>
          </Grid>

          <Text textStyle="xs" color="fg.muted" mt={-2}>
            주문번호 FZ260916001
          </Text>

          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={6} alignItems="start">

            <Stack gap={6}>
              <Card.Root variant="subtle" borderWidth="thin" borderColor="border.subtle" bg="bg.panel">
                <Card.Body>
                  <Grid templateColumns="80px 1fr" gap={4} alignItems="center">
                    <GridItem>
                      <Image
                        src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop"
                        alt="올 블렌드 니트"
                        boxSize={20}
                        objectFit="cover"
                        rounded="md"
                      />
                    </GridItem>
                    <GridItem>
                      <Stack gap={1}>
                        <Text fontWeight="semibold" textStyle="sm">
                          올 블렌드 니트
                        </Text>
                        <Text textStyle="xs" color="fg.muted">
                          아이보리 / M
                        </Text>
                        <Text textStyle="xs" color="fg.muted">
                          수량 1개
                        </Text>
                      </Stack>
                    </GridItem>
                  </Grid>
                </Card.Body>
              </Card.Root>

                <Card.Root variant="subtle" borderWidth="thin" borderColor="border.subtle" bg="bg.panel" colorPalette="orange">
                <Card.Body gap={4}>
                  <Text fontWeight="bold" textStyle="sm">배송 현황</Text>
                  <Grid templateColumns="repeat(4, 1fr)" gap={2} textAlign="center">
                    <GridItem>
                      <Stack align="center" gap={1}>
                        <Circle size={6} bg="colorPalette.solid" color="white"><Box as={LuCheck} boxSize={3}/></Circle>
                        <Text textStyle="2xs" color="fg.muted">발송 완료</Text>
                      </Stack>
                    </GridItem>
                    <GridItem>
                      <Stack align="center" gap={1}>
                        <Circle size={6} bg="colorPalette.solid" color="white"><Box as={LuCheck} boxSize={3}/></Circle>
                        <Text textStyle="2xs" color="fg.muted">입고 완료</Text>
                      </Stack>
                    </GridItem>
                    <GridItem>
                      <Stack align="center" gap={1}>
                        <Circle size={6} bg="colorPalette.solid" color="white"><Box boxSize={2} bg="white" rounded="full"/></Circle>
                        <Text textStyle="2xs" fontWeight="bold">배송 중</Text>
                      </Stack>
                    </GridItem>
                    <GridItem>
                      <Stack align="center" gap={1}>
                        <Circle size={6} bg="bg.muted" color="fg.muted">📦</Circle>
                        <Text textStyle="2xs" color="fg.muted">배송 완료</Text>
                      </Stack>
                    </GridItem>
                  </Grid>
                </Card.Body>
              </Card.Root>
              <Card.Root variant="subtle" borderWidth="thin" borderColor="border.subtle" bg="bg.panel">
                <Card.Body gap={2}>
                  <Text fontWeight="bold" textStyle="sm" mb={1}>배송지</Text>
                  <Text textStyle="sm" fontWeight="medium">김예시</Text>
                  <Text textStyle="xs" color="fg.muted">010-****-1234</Text>
                  <Text textStyle="xs" color="fg.muted">서울시 OO구 OO로 00</Text>
                  <Text textStyle="xs" color="fg.muted">예시 아파트 101동 101호</Text>
                </Card.Body>
              </Card.Root>
            </Stack>

            <Stack gap={6}>
              <Card.Root variant="subtle" borderWidth="thin" borderColor="border.subtle" bg="bg.panel" colorPalette="orange">
                <Card.Body gap={3}>
                  <Text fontWeight="bold" textStyle="sm" mb={1}>결제 내역</Text>
                  <Grid templateColumns="1fr auto" textStyle="xs" gap={2}>
                    <GridItem color="fg.muted">상품 금액</GridItem>
                    <GridItem textAlign="right">300,000원</GridItem>

                    <GridItem color="fg.muted">쿠폰 할인</GridItem>
                    <GridItem textAlign="right" color="red.500">- 10,000원</GridItem>

                    <GridItem color="fg.muted">적립금 사용</GridItem>
                    <GridItem textAlign="right" color="red.500">- 7,000원</GridItem>

                    <GridItem color="fg.muted">배송비</GridItem>
                    <GridItem textAlign="right">+ 3,000원</GridItem>
                  </Grid>

                  <Separator my={1}/>

                  <Grid templateColumns="1fr auto" alignItems="center">
                    <GridItem fontWeight="bold" textStyle="sm">총 결제 금액</GridItem>
                    <GridItem fontWeight="bold" textStyle="md" color="colorPalette.solid" textAlign="right">286,000원</GridItem>
                  </Grid>
                </Card.Body>
              </Card.Root>

              <Card.Root variant="subtle" borderWidth="thin" borderColor="border.subtle" bg="bg.panel">
                <Card.Body gap={3}>
                  <Stack gap={0} mb={1}>
                    <Text fontWeight="bold" textStyle="sm">취소 및 반품 안내</Text>
                    <Text textStyle="2xs" color="fg.muted">가능 여부와 비용을 확인해 주세요.</Text>
                  </Stack>
                  <Grid templateColumns="1fr auto" py={1} alignItems="center" cursor="pointer">
                    <GridItem>
                      <HStack gap={2}>
                        <Box as={LuFileText}/>
                        <Text textStyle="sm">취소 안내</Text>
                      </HStack>
                    </GridItem>
                    <GridItem color="fg.muted">&gt;</GridItem>
                  </Grid>
                  <Grid templateColumns="1fr auto" py={1} alignItems="center" cursor="pointer">
                    <GridItem>
                      <HStack gap={2}>
                        <Box as={LuPackage}/>
                        <Text textStyle="sm">반품 안내</Text>
                      </HStack>
                    </GridItem>
                    <GridItem color="fg.muted">&gt;</GridItem>
                  </Grid>
                </Card.Body>
              </Card.Root>
            </Stack>

          </Grid>
        </Stack>
      </Container>

      <Box position="fixed" bottom={0} left={0} right={0} zIndex={10} bg="bg">
        <TabBar />
      </Box>
    </Box>
  )
}