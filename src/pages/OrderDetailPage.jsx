"use client"

import { Box, Heading, HStack, IconButton, Text } from "@chakra-ui/react"
import { LuChevronLeft } from "react-icons/lu"

export const Step1Header = () => {
  return (
    <Box maxW="md" mx="auto" bg="bg.muted" minH="100vh" p="4">
      <HStack mb="4" justify="space-between">
        <HStack gap="3">
          <IconButton variant="plain" size="sm" aria-label="뒤로 가기">
            <LuChevronLeft size="24" />
          </IconButton>
          <Heading size="md">주문 상세</Heading>
        </HStack>
      </HStack>
      <Text textStyle="xs" color="fg.muted" mb="4" ps="2">
        주문번호 FZ260916001
      </Text>
    </Box>
  )
}