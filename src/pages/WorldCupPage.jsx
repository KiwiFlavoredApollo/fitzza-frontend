import React from 'react';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Image,
    Table,
    Tbody,
    Tr,
    Th,
    Td,
    HStack,
    Center,
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

export default function WorldCupPage() {
    const handleSelect = (productName) => {
        alert(`'${productName}'을(를) 선택하셨습니다! 다음 라운드로 이동합니다.`);
    };

    return (
        <Center bg="gray.100" minH="100vh">
            <Box
                w="100%"
                maxW="480px"
                bg="white"
                minH="100vh"
                display="flex"
                flexDirection="column"
                p={4}
                boxShadow="md"
                position="relative"
            >
                {/* 상단 네비게이션 */}
                <Flex justify="space-between" align="center" mb={3}>
                    <IconButton
                        icon={<ChevronLeftIcon boxSize={6} />}
                        variant="ghost"
                        aria-label="뒤로 가기"
                    />
                    <Text fontSize="lg" fontWeight="bold" color="gray.800">
                        월드컵
                    </Text>
                    <IconButton
                        icon={<Text fontSize="lg">🏠</Text>}
                        variant="ghost"
                        aria-label="홈으로"
                    />
                </Flex>

                {/* 안내 서브 텍스트 */}
                <Text textAlign="center" fontSize="sm" color="gray.500" mb={6}>
                    마음에 드는 상품을 선택해 주세요
                </Text>
            </Box>
        </Center>
    );
}