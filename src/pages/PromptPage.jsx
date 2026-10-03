import {
  Box, Button,
  Card,
  Container, Flex,
  Grid,
  GridItem, Icon, IconButton,
  Input,
  InputGroup,
  Stack,
  Image,
  Text,
  Drawer
} from '@chakra-ui/react'
import { AppBar } from '../components/AppBar.jsx'
import {
  LuArrowUp,
  LuChevronLast,
  LuChevronLeft, LuEllipsis,
  LuMenu,
  LuPlus, LuTrophy,
} from 'react-icons/lu'
import exampleProductImage from '/src/assets/react.svg'

export const PromptPage = () => {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in urna sit amet mi venenatis interdum a vel felis.'

  return (
    <Grid
      templateRows={ 'auto auto 1fr' }
      gap={ 4 }
      paddingY={ 4 }
      height={ '100vh' }
    >
      <AppBar></AppBar>

      <Container maxWidth={ '7xl' }>
        <Stack direction={ 'row' } gap={ 4 }>
          <IconButton variant={ 'ghost' } rounded={ 'full' }>
            <LuMenu></LuMenu>
          </IconButton>
        </Stack>
      </Container>

      <Container maxWidth={ '3xl' }>
        <Grid templateRows={ '1fr auto' } gap={ '4' }>
          <Stack gap={ 12 }>
            <Stack gap={ 4 }>
              <Flex
                justifyContent={ 'end' }
              >
                <Card.Root
                  width={ '80%' }
                  variant={ 'subtle' }
                >
                  <Card.Body>{ text }</Card.Body>
                </Card.Root>
              </Flex>
              <Flex justifyContent={ 'start' } minHeight={ '200px' }>
                <Card.Root
                  width={ '80%' }
                  variant={ 'none' }
                >
                  <Card.Body>
                    <Stack gap={ 4 }>
                      <Grid
                        templateColumns={ 'repeat(3, 1fr)' }
                        height={ '100%' }
                        gap={ 4 }
                        wrap={ 'nowrap' }
                        overflowX={ 'auto' }
                      >
                        {
                          Array.from({ length: 8 }).map((_, index) => (
                            <Image
                              aspectRatio={ 1 }
                              width={ '100%' }
                              objectFit={ 'contain' }
                              src={ exampleProductImage }
                            ></Image>
                          ))
                        }
                        <Flex justifyContent={ 'center' }
                              alignItems={ 'center' }>
                          <Icon boxSize={ 16 }><LuEllipsis></LuEllipsis></Icon>
                        </Flex>
                      </Grid>
                      <Button>
                        <Icon><LuTrophy></LuTrophy></Icon>
                        <Text>월드컵</Text>
                      </Button>
                    </Stack>
                  </Card.Body>
                </Card.Root>
              </Flex>
            </Stack>
            {
              Array.from({ length: 5 }).map((_, index) => (
                <Stack gap={ 4 }>
                  <Flex
                    justifyContent={ 'end' }
                  >
                    <Card.Root
                      width={ '80%' }
                      variant={ 'subtle' }
                    >
                      <Card.Body>{ text }</Card.Body>
                    </Card.Root>
                  </Flex>
                  <Flex justifyContent={ 'start' }>
                    <Card.Root
                      width={ '80%' }
                      variant={ 'none' }
                    >
                      <Card.Body>{ text }</Card.Body>
                    </Card.Root>
                  </Flex>
                </Stack>
              ))
            }
          </Stack>

          <Card.Root
            marginTop={ 4 }
            rounded={ 'full' }
            position={ 'sticky' }
            bottom="calc(env(safe-area-inset-bottom, 0px) + 12px)"
          >
            <Card.Body padding={ 2 }>
              <Grid templateColumns={ 'auto 1fr auto' }>
                <IconButton rounded={ 'full' } variant={ 'ghost' }>
                  <LuPlus></LuPlus>
                </IconButton>
                <Input
                  variant={ 'none' }
                  placeholder={ '무엇을 도와드릴까요' }
                ></Input>
                <IconButton rounded={ 'full' }>
                  <LuArrowUp></LuArrowUp>
                </IconButton>
              </Grid>
            </Card.Body>
          </Card.Root>
        </Grid>
      </Container>
    </Grid>
  )
}