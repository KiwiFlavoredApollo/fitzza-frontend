import {
  Button,
  Container,
  Grid,
  Stack,
  Image,
  GridItem,
  Text,
  IconButton,
  Flex,
  Card,
  Separator, Heading, Box, Icon,
  FileUpload, Input,
  Drawer, FileUploadList, FileUploadItems, Float,
} from '@chakra-ui/react'
import { AppBar } from '../components/AppBar.jsx'
import exampleResultImage from '/src/assets/hero.png'
import examplePersonImage from '/src/assets/react.svg'
import exampleClothesImage from '/src/assets/vite.svg'
import { Footer } from '../components/Footer.jsx'
import { LuPlus, LuUpload, LuX } from 'react-icons/lu'
import { useState } from 'react'

export const TryOnPage = () => {
  const uploads = ['인물', '상의', '하의']

  return (
    <Grid
      templateRows={ 'auto auto minmax(0, 1fr) auto' }
      paddingY={ 4 }
      height={ '100vh' }
      gap={ 4 }
    >
      <AppBar></AppBar>

      <Container maxWidth={ '7xl' }>
        <Heading>입어보기</Heading>
      </Container>

      <Container
        maxWidth={ '5xl' }
        alignContent="center"
      >
        <Grid
          templateColumns={ 'repeat(3, 1fr)' }
          gap={ 4 }
        >
          {
            uploads.map((upload, index) => (
              <FileUpload.Root key={ index }>
                <FileUpload.HiddenInput/>
                <FileUpload.Label>{ upload }</FileUpload.Label>
                <FileUpload.ItemGroup>
                  <FileUpload.Context>
                    { ({ acceptedFiles }) => (
                      <>
                        { acceptedFiles.length === 0 && (
                          <FileUpload.Dropzone width="100%" aspectRatio={ 1 }>
                            <Icon size="md" color="fg.muted">
                              <LuUpload/>
                            </Icon>
                            <FileUpload.DropzoneContent/>
                          </FileUpload.Dropzone>
                        ) }

                        { acceptedFiles.map((file) => (
                          <FileUpload.Item key={ file.name } file={ file }>
                            <FileUpload.ItemPreviewImage/>
                            <FileUpload.ItemDeleteTrigger>
                              <LuX></LuX>
                            </FileUpload.ItemDeleteTrigger>
                          </FileUpload.Item>
                        )) }
                      </>
                    ) }
                  </FileUpload.Context>
                </FileUpload.ItemGroup>
              </FileUpload.Root>
            ))
          }
        </Grid>
      </Container>

      <Footer></Footer>

    </Grid>
  )
}