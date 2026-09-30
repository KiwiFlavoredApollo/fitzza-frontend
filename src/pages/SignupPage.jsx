import React, { useState } from 'react';
import {
  Card,
  Button,
  Container,
  Input,
  Heading,
  Text,
  Stack,
  Field,
  GridItem,
  Grid,
  IconButton,
  Box,
  Center
} from '@chakra-ui/react';
import { LuHouse } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { AppBar } from '../components/AppBar.jsx';
import { TabBar } from '../components/TabBar.jsx';

export default function SignupPage() {
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
  });

  const [ errorMessage, setErrorMessage ] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.nickname) {
      setErrorMessage('모든 항목을 입력해주세요.');
      return;
    }

    if (formData.password !== formData.passwordConfirm) {
      setErrorMessage('비밀번호가 일치하지 않습니다.');
      return;
    }

    setErrorMessage('');
    console.log('회원가입 요청 데이터:', formData);
    alert('회원가입 검증 완료! (콘솔창을 확인하세요)');
  };

  return (
    <Box position="relative" minH="100vh" pb={28} bg="bg">
      <Container maxW="container.xl" mx="auto" py={10} px={5}>
        <Box mb={6}>
          <AppBar />
        </Box>

        <Center w="100%" minH="65vh">
          <Box w="100%" maxW="md">
            <Card.Root variant="subtle" borderWidth="thin" borderColor="border.subtle" bg="bg.panel" borderRadius="2xl" p={6} boxShadow="md">
              <Card.Body>
                <Stack gap={6} as="form" onSubmit={handleSubmit} align="center">
                  <Grid templateColumns="auto 1fr auto" alignItems="center" w="100%">
                    <GridItem></GridItem>
                    <GridItem textAlign="center">
                      <Heading size="lg">회원가입</Heading>
                    </GridItem>
                    <GridItem textAlign="right">
                      <IconButton
                        rounded="full"
                        variant="ghost"
                        onClick={() => navigate("/")}
                        aria-label="홈으로 이동"
                      >
                        <Box as={LuHouse} boxSize={5} />
                      </IconButton>
                    </GridItem>
                  </Grid>

                  <Field.Root required w="100%">
                    <Field.Label textAlign="center" display="block">이메일</Field.Label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      borderRadius="xl"
                      borderWidth="thin"
                      borderColor="border.subtle"
                      textAlign="center"
                    />
                  </Field.Root>

                  <Field.Root required w="100%">
                    <Field.Label textAlign="center" display="block">닉네임</Field.Label>
                    <Input
                      type="text"
                      name="nickname"
                      value={formData.nickname}
                      onChange={handleChange}
                      placeholder="사용하실 닉네임을 입력하세요"
                      borderRadius="xl"
                      borderWidth="thin"
                      borderColor="border.subtle"
                      textAlign="center"
                    />
                  </Field.Root>

                  <Field.Root required w="100%">
                    <Field.Label textAlign="center" display="block">비밀번호</Field.Label>
                    <Input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="비밀번호를 입력하세요"
                      borderRadius="xl"
                      borderWidth="thin"
                      borderColor="border.subtle"
                      textAlign="center"
                    />
                  </Field.Root>

                  <Field.Root required w="100%">
                    <Field.Label textAlign="center" display="block">비밀번호 확인</Field.Label>
                    <Input
                      type="password"
                      name="passwordConfirm"
                      value={formData.passwordConfirm}
                      onChange={handleChange}
                      placeholder="비밀번호를 다시 입력하세요"
                      borderRadius="xl"
                      borderWidth="thin"
                      borderColor="border.subtle"
                      textAlign="center"
                    />
                  </Field.Root>

                  {errorMessage && (
                    <Text color="red.500" textStyle="sm" textAlign="center">
                      {errorMessage}
                    </Text>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    width="full"
                    borderRadius="xl"
                  >
                    가입하기
                  </Button>
                </Stack>
              </Card.Body>
            </Card.Root>
          </Box>
        </Center>
      </Container>

      <TabBar />
    </Box>
  );
}