import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Field, Grid, GridItem, Heading, Text, Box, Center, Input, InputGroup } from "@chakra-ui/react";
import { LuMail, LuLockKeyhole } from "react-icons/lu";
import { api } from "../api/axios.js";
import { AppBar } from "../components/AppBar.jsx";

export const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const changeHandler = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/auth/login/sample", { email, password });

      const jwtToken = response.data?.accessToken || response.data?.token;

      if (jwtToken) {
        localStorage.setItem("accessToken", jwtToken);
      }

      navigate("/");
    } catch (err) {
      if (err.response?.status === 401) {
        setError("이메일 혹은 비밀번호가 틀렸습니다.");
      } else {
        setError("로그인 중 오류가 발생했습니다.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid templateRows={'auto 1fr'} minHeight="100vh" paddingY={4} bg="bg">
      <AppBar />
      <Container maxW="3xl" mx="auto" px={5}>
        <Center w="100%" minH="65vh">
          <Box w="100%" maxW="lg">
            <Grid as="form" onSubmit={changeHandler} templateRows="auto repeat(2, auto) auto auto" gap={6} alignItems="center">
              <GridItem textAlign="center" w="100%" mb={2}>
                <Heading size="lg">로그인</Heading>
              </GridItem>
              <GridItem w="100%">
                <Field.Root required w="100%">
                  <InputGroup startElement={<Box as={LuMail} boxSize={5} color="fg.muted" />}>
                    <Input
                      type="email"
                      placeholder="이메일"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      variant="outline"
                      size="lg"
                    />
                  </InputGroup>
                </Field.Root>
              </GridItem>
              <GridItem w="100%">
                <Field.Root required w="100%">
                  <InputGroup startElement={<Box as={LuLockKeyhole} boxSize={5} color="fg.muted" />}>
                    <Input
                      type="password"
                      placeholder="비밀번호"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      variant="outline"
                      size="lg"
                    />
                  </InputGroup>
                </Field.Root>
              </GridItem>
              {error && (
                <GridItem textAlign="center">
                  <Text color="red.500" textStyle="sm">{error}</Text>
                </GridItem>
              )}
              <GridItem w="100%" mt={2}>
                <Button type="submit" loading={loading} size="lg" width="full">
                  로그인
                </Button>
              </GridItem>
            </Grid>
          </Box>
        </Center>
      </Container>
    </Grid>
  );
};