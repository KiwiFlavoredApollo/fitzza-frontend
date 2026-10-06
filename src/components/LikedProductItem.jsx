import { Box, Heading, IconButton, Stack, Image, Text } from '@chakra-ui/react'
import { LuHeart } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const LikedProductItem = ({ product }) => {
  const [isLiked, setIsLiked] = useState(true)
  const navigate = useNavigate()

  function handleProductClick (product) {
    navigate(`/products/${ product.productId }`)
  }

  function handleLikeButtonClick () {
    setIsLiked((isLiked) => !isLiked)
  }

  return (
    <Stack gap={ 4 }>
      <Box
        position={ 'relative' }
        gap={ 4 }
      >
        <Image
          width={ '100%' }
          aspectRatio={ 1 }
          objectFit={ 'contain' }
          src={ product.thumbnailUrl }
          onClick={ () => handleProductClick(product) }
          cursor="pointer"
        ></Image>
        <IconButton
          position={ 'absolute' }
          bottom={ '2' }
          right={ '2' }
          rounded={ 'full' }
          variant={ 'ghost' }
          onClick={ (event) => {
            event.stopPropagation()
            handleLikeButtonClick()
          } }
        >
          <LuHeart
            color={ isLiked ? 'red' : 'black' }
            fill={ isLiked ? 'red' : 'none' }
          ></LuHeart>
        </IconButton>
      </Box>
      <Stack gap={ 0 }>
        <Heading>{ product.name }</Heading>
        <Text>{ (product.price).toLocaleString() } 원</Text>
      </Stack>
    </Stack>
  )
}