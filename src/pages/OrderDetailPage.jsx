import { Box, Card, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react"
import { LuChevronLeft } from "react-icons/lu"

export const OrderDetail = () => {
  return (
    <Box maxW="sm" mx="auto" bg="bg.subtle" minH="100vh" p="4">
      {/* 상단 헤더 */}
      <HStack mb="4" justify="space-between">
        <HStack gap="2">
          <LuChevronLeft size="24" />
          <Heading size="md">주문 상세</Heading>
        </HStack>
      </HStack>

      {/* 주문번호 */}
      <Text textStyle="xs" color="fg.muted" mb="3">
        주문번호 FZ260916001
      </Text>

      {/* 상품 정보 카드 */}
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
    </Box>
  )
}