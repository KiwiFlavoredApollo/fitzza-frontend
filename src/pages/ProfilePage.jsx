import { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Flex,
  Heading,
  Button,
  Text,
  Grid,
  Input,
  Stack,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut, FiLogIn } from 'react-icons/fi';
import { AppBar } from '../components/AppBar.jsx';
import { TabBar } from '../components/TabBar.jsx';
import { api } from '../api/axios.js';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [profileData, setProfileData] = useState({
    nickname: '테스트사용자',
    email: 'test@fitzza.com',
    height: '175',
    weight: '68',
    bodyType: '보통',
    preferredFit: '레귤러',
    style: '캐주얼',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await api.get('/profile');
      if (response.data) {
        setProfileData((prev) => ({ ...prev, ...response.data }));
      }
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem('accessToken');
        setIsLoggedIn(false);
        navigate('/signin');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleClearField = (fieldName) => {
    setProfileData({
      ...profileData,
      [fieldName]: '',
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setMessage('');

    if (profileData.height && (isNaN(profileData.height) || profileData.height < 100 || profileData.height > 250)) {
      setMessage('키는 100cm에서 250cm 사이로 입력해주세요.');
      return;
    }

    if (profileData.weight && (isNaN(profileData.weight) || profileData.weight < 30 || profileData.weight > 200)) {
      setMessage('체중은 30kg에서 200kg 사이로 입력해주세요.');
      return;
    }

    try {
      await api.put('/profile', profileData);
      setMessage('프로필이 성공적으로 저장되었습니다.');
      setIsEditing(false);
    } catch (err) {
      setMessage('프로필이 저장되었습니다 (테스트 모드).');
      setIsEditing(false);
    }
  };

  const handleAuthToggle = async () => {
    if (isLoggedIn) {
      try {
        await api.post('/auth/logout');
      } catch (err) {
        console.warn('로그아웃 API 통신 실패, 로컬 토큰만 정리합니다.');
      } finally {
        localStorage.removeItem('accessToken');
        setIsLoggedIn(false);
        alert('로그아웃 되었습니다.');
        navigate('/signin');
      }
    } else {
      navigate('/signin');
    }
  };

  return (
    <Box position="relative" minH="100vh" pt={24} pb={28} bg="bg">
      {/* 상단바 영역 (오른쪽 정렬 및 일정한 간격 적용) */}
      <Box position="fixed" top={0} left={0} right={0} zIndex={10} bg="bg" px={5} py={4}>
        <Container maxW="7xl" mx="auto" px={0}>
          <Flex justify="space-between" align="center">
            <AppBar />
            <HStack gap={2}>
              <IconButton
                aria-label={isLoggedIn ? '로그아웃' : '로그인'}
                variant="ghost"
                rounded="full"
                size="md"
                onClick={handleAuthToggle}
              >
                {isLoggedIn ? <FiLogOut size={20} /> : <FiLogIn size={20} />}
              </IconButton>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="5xl" mx="auto" px={5}>
        <Grid
          templateColumns={{ base: '1fr', lg: '1fr 1.8fr' }}
          gap={6}
          alignItems="start"
        >
          {/* 좌측 패널: 프로필부터 하단 메뉴까지 하나의 통합 박스 */}
          <Box
            borderWidth="thin"
            borderColor="border.subtle"
            borderRadius="2xl"
            p={6}
            bg="bg.panel"
            display="flex"
            flexDirection="column"
            gap={4}
          >
            {/* 프로필 헤더 부분 */}
            <Flex direction="column" align="center" pt={1} pb={1}>
              <Box
                boxSize={20}
                borderWidth="thin"
                borderColor="border.subtle"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="4xl"
                bg="bg.muted"
                mb={3}
              >
                👤
              </Box>
              <Heading textStyle="lg" mt={1} fontWeight="600">
                {profileData.nickname}
              </Heading>
              <Text textStyle="sm" mt={1} color="fg.muted">
                {profileData.email}
              </Text>
            </Flex>

            {/* 프로필 상세/수정 영역 */}
            {!isEditing ? (
              <Box w="100%">
                <Stack gap={2} p={3} borderWidth="thin" borderColor="border.subtle" borderRadius="xl" bg="bg.muted">
                  <Flex justify="space-between"><Text textStyle="xs" color="fg.muted">키</Text><Text textStyle="xs" fontWeight="600">{profileData.height ? `${profileData.height} cm` : '미입력'}</Text></Flex>
                  <Flex justify="space-between"><Text textStyle="xs" color="fg.muted">체중</Text><Text textStyle="xs" fontWeight="600">{profileData.weight ? `${profileData.weight} kg` : '미입력'}</Text></Flex>
                  <Flex justify="space-between"><Text textStyle="xs" color="fg.muted">체형/핏</Text><Text textStyle="xs" fontWeight="600">{profileData.bodyType} / {profileData.preferredFit}</Text></Flex>
                  <Flex justify="space-between"><Text textStyle="xs" color="fg.muted">선호 스타일</Text><Text textStyle="xs" fontWeight="600">{profileData.style}</Text></Flex>
                </Stack>
                <Button mt={3} width="full" variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                  프로필 및 실측 수정
                </Button>
              </Box>
            ) : (
              <Box as="form" onSubmit={handleSave} w="100%">
                <Stack gap={2}>
                  <HStack>
                    <Text textStyle="xs" w="24%">키(cm)</Text>
                    <Input name="height" value={profileData.height} onChange={handleChange} placeholder="100~250" size="xs" />
                    <Button size="xs" variant="ghost" onClick={() => handleClearField('height')}>삭제</Button>
                  </HStack>
                  <HStack>
                    <Text textStyle="xs" w="24%">체중(kg)</Text>
                    <Input name="weight" value={profileData.weight} onChange={handleChange} placeholder="30~200" size="xs" />
                    <Button size="xs" variant="ghost" onClick={() => handleClearField('weight')}>삭제</Button>
                  </HStack>
                  <HStack>
                    <Text textStyle="xs" w="24%">체형</Text>
                    <Input name="bodyType" value={profileData.bodyType} onChange={handleChange} placeholder="체형 입력" size="xs" />
                    <Button size="xs" variant="ghost" onClick={() => handleClearField('bodyType')}>삭제</Button>
                  </HStack>
                  <HStack>
                    <Text textStyle="xs" w="24%">스타일</Text>
                    <Input name="style" value={profileData.style} onChange={handleChange} placeholder="스타일 입력" size="xs" />
                    <Button size="xs" variant="ghost" onClick={() => handleClearField('style')}>삭제</Button>
                  </HStack>
                  {message && <Text color="blue.500" textStyle="xs" textAlign="center">{message}</Text>}
                  <HStack mt={1}>
                    <Button type="submit" size="xs" flex="1">저장</Button>
                    <Button size="xs" variant="outline" flex="1" onClick={() => setIsEditing(false)}>취소</Button>
                  </HStack>
                </Stack>
              </Box>
            )}

            {/* 적립금 및 쿠폰 그리드 */}
            <Grid templateColumns="repeat(2, 1fr)" gap={3}>
              <Box p={3} borderWidth="thin" borderColor="border.subtle" borderRadius="xl" bg="bg.muted" textAlign="center">
                <Text textStyle="xs" color="fg.muted" mb={1}>적립금</Text>
                <Text textStyle="md" fontWeight="600">7,777원</Text>
              </Box>
              <Box p={3} borderWidth="thin" borderColor="border.subtle" borderRadius="xl" bg="bg.muted" textAlign="center">
                <Text textStyle="xs" color="fg.muted" mb={1}>쿠폰</Text>
                <Text textStyle="md" fontWeight="600">11장</Text>
              </Box>
            </Grid>

            {/* 하단 메뉴 그리드 (주문, 이벤트, 커뮤니티, 설정) */}
            <Grid templateColumns="repeat(4, 1fr)" gap={2}>
              {[
                { label: '주문', icon: '📦' },
                { label: '이벤트', icon: '🎉' },
                { label: '커뮤니티', icon: '💬' },
                { label: '설정', icon: '⚙️' },
              ].map((item) => (
                <Button
                  key={item.label}
                  variant="outline"
                  borderWidth="thin"
                  borderColor="border.subtle"
                  borderRadius="xl"
                  height="auto"
                  py={3}
                  px={1}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  bg="bg.muted"
                  _hover={{ bg: 'bg.subtle', borderColor: 'fg.muted' }}
                >
                  <Text fontSize="lg" mb={1}>{item.icon}</Text>
                  <Text textStyle="xs" fontWeight="600" color="fg">{item.label}</Text>
                </Button>
              ))}
            </Grid>
          </Box>

          {/* 우측 패널 (나의 스냅) */}
          <Box
            borderWidth="thin"
            borderColor="border.subtle"
            borderRadius="2xl"
            p={8}
            bg="bg.panel"
            display="flex"
            flexDirection="column"
          >
            <Flex justify="space-between" align="center" mb={6}>
              <Heading textStyle="md" fontWeight="700">
                나의 스냅
              </Heading>
              <Button variant="ghost" size="sm" color="fg.muted">
                전체보기 &gt;
              </Button>
            </Flex>

            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              {['1', '2', '3', '4'].map((num) => (
                <Box
                  key={num}
                  overflow="hidden"
                  borderRadius="xl"
                  borderWidth="thin"
                  borderColor="border.subtle"
                  minH="13rem"
                  bg="bg.muted"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text textStyle="sm" fontWeight="semibold" color="fg.muted">스냅 {num}</Text>
                </Box>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Container>

      <Box position="fixed" bottom={0} left={0} right={0} zIndex={10} bg="bg">
        <TabBar />
      </Box>
    </Box>
  );
}