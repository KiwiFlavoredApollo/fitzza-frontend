import { Box, Card, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react"
import { LuChevronLeft } from "react-icons/lu"

export const OrderDetail = () => {
  return (
    <Box maxW="sm" mx="auto" bg="bg.subtle" minH="100vh" p="4">

      <HStack mb="4" justify="space-between">
        <HStack gap="2">
          <LuChevronLeft size="24" />
          <Heading size="md">주문 상세</Heading>
        </HStack>
      </HStack>

      <Text textStyle="xs" color="fg.muted" mb="3">
        주문번호 FZ260916001
      </Text>

      <Card.Root variant="subtle" mb="4">
        <Card.Body>
          <HStack gap="4" align="flex-start">
            <Image
              src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=300&q=80"
              alt="올 블렌드 니트"
              boxSize="80px"
              objectFit="cover"
              rounded="md"
            />
            <Stack gap="1">
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
          </HStack>
        </Card.Body>
      </Card.Root>

      <Card.Root variant="subtle" mb="4">
        <Card.Body gap="4">
          <Text fontWeight="bold" textStyle="sm">배송 현황</Text>
          <Flex justify="space-between" align="center" position="relative" px="2">

            <Stack align="center" gap="1">
              <Circle size="6" bg="orange.500" color="white"><LuCheck size="12" /></Circle>
              <Text textStyle="2xs" color="fg.muted">발송 완료</Text>
            </Stack>
            <Stack align="center" gap="1">
              <Circle size="6" bg="orange.500" color="white"><LuCheck size="12" /></Circle>
              <Text textStyle="2xs" color="fg.muted">입고 완료</Text>
            </Stack>
            <Stack align="center" gap="1">
              <Circle size="6" bg="orange.500" color="white"><Box boxSize="2" bg="white" rounded="full" /></Circle>
              <Text textStyle="2xs" fontWeight="bold">배송 중</Text>
            </Stack>
            <Stack align="center" gap="1">
              <Circle size="6" bg="bg.muted" color="fg.muted">📦</Circle>
              <Text textStyle="2xs" color="fg.muted">배송 완료</Text>
            </Stack>
          </Flex>
        </Card.Body>
      </Card.Root>

      <Card.Root variant="subtle" mb="4">
        <Card.Body gap="2">
          <Text fontWeight="bold" textStyle="sm">배송지</Text>
          <Text textStyle="sm" fontWeight="medium">김예시</Text>
          <Text textStyle="xs" color="fg.muted">010-****-1234</Text>
          <Text textStyle="xs" color="fg.muted">서울시 OO구 OO로 00</Text>
          <Text textStyle="xs" color="fg.muted">예시 아파트 101동 101호</Text>
        </Card.Body>
      </Card.Root>

      <Card.Root variant="subtle" mb="4">
        <Card.Body gap="3">
          <Text fontWeight="bold" textStyle="sm">결제 내역</Text>
          <HStack justify="space-between" textStyle="xs">
            <Text color="fg.muted">상품 금액</Text>
            <Text>300,000원</Text>
          </HStack>
          <HStack justify="space-between" textStyle="xs">
            <Text color="fg.muted">쿠폰 할인</Text>
            <Text color="red.500">- 10,000원</Text>
          </HStack>
          <HStack justify="space-between" textStyle="xs">
            <Text color="fg.muted">적립금 사용</Text>
            <Text color="red.500">- 7,000원</Text>
          </HStack>
          <HStack justify="space-between" textStyle="xs">
            <Text color="fg.muted">배송비</Text>
            <Text>+ 3,000원</Text>
          </HStack>
          <Separator my="1" />
          <HStack justify="space-between">
            <Text fontWeight="bold" textStyle="sm">총 결제 금액</Text>
            <Text fontWeight="bold" textStyle="md" color="orange.500">286,000원</Text>
          </HStack>
        </Card.Body>
      </Card.Root>

      <Card.Root variant="subtle">
        <Card.Body gap="3">
          <Stack gap="0">
            <Text fontWeight="bold" textStyle="sm">취소 및 반품 안내</Text>
            <Text textStyle="2xs" color="fg.muted">가능 여부와 비용을 확인해 주세요.</Text>
          </Stack>
          <HStack justify="space-between" py="1" cursor="pointer">
            <HStack gap="2">
              <LuFileText />
              <Text textStyle="sm">취소 안내</Text>
            </HStack>
            <Text color="fg.muted">&gt;</Text>
          </HStack>
          <HStack justify="space-between" py="1" cursor="pointer">
            <HStack gap="2">
              <LuPackage />
              <Text textStyle="sm">반품 안내</Text>
            </HStack>
            <Text color="fg.muted">&gt;</Text>
          </HStack>
        </Card.Body>
      </Card.Root>
    </Box>
  )
}