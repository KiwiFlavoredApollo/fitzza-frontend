import { useState } from 'react'
import {
  Button,
  Container, Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { LuChevronRight } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
import { AppBar } from '../components/AppBar.jsx'
import { TabBar } from '../components/TabBar.jsx'
import { categories } from '../data/categories.js'

export const CategoryPage = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(categories[0])
  const sections = selected.sections ?? [selected]

  // 임시용 코드, 추후 BE 계약 완료시 수정 필요, TO-DO-NEXT
  const search = (query) => navigate(
    `/search?${ new URLSearchParams({ q: query }) }`)

  return (
    <Stack
      paddingY={ '4' }
      height={ '100vh' }
      gap={ '4' }
    >
      <AppBar maxWidth={ '7xl' }></AppBar>

      <Container maxWidth={ '7xl' }>
        <Heading>카테고리</Heading>
      </Container>

      <Container maxWidth={ '5xl' } flex={ '1' } minHeight={ '0' }>
        <Grid
          templateColumns={ '1fr 3fr' }
          gap={ 4 }
          minHeight={ '0' }
        >
          <GridItem overflowY={ 'auto' }>
            <Stack gap={ 4 }>
              {
                categories.map((category) => (
                  <Button
                    key={ category.name }
                    variant={ selected.name === category.name ? 'subtle' : 'ghost' }
                    justifyContent={ 'flex-start' }
                    borderRadius={ 'full' }
                    onClick={ () => setSelected(category) }
                  >
                    { category.name }
                  </Button>
                ))
              }
            </Stack>
          </GridItem>

          <GridItem overflowY={ 'auto' }>
            <Stack gap={ 4 } paddingRight={ '2' }>
              {
                sections.map((section) => (
                  <Stack key={ section.name } gap={ 4 }>
                    <Button
                      variant={ 'ghost' }
                      width={ 'full' }
                      justifyContent={ 'space-between' }
                      borderRadius={ 'full' }
                      onClick={ () => search(section.name) }
                    >
                      <Heading size={ 'md' }>{ section.name }</Heading>
                      <Icon><LuChevronRight></LuChevronRight></Icon>
                    </Button>
                    <Grid
                      templateColumns={ { base: '1fr', md: '1fr 1fr' } }
                      gap={ 4 }
                    >
                      {
                        section.items.map((item) => (
                          <Button
                            key={ item }
                            variant={ 'ghost' }
                            justifyContent={ 'space-between' }
                            borderRadius={ 'full' }
                            onClick={ () => search(`${ section.name } ${ item }`) }
                          >
                            <Text truncate>{ item }</Text>
                            <Icon><LuChevronRight></LuChevronRight></Icon>
                          </Button>
                        ))
                      }
                    </Grid>
                  </Stack>
                ))
              }
            </Stack>
          </GridItem>
        </Grid>
      </Container>

      <TabBar/>
    </Stack>
  )
}
