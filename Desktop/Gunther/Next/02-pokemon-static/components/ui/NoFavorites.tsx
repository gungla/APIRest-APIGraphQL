import { Container, Image, Text } from '@nextui-org/react';

export const NoFavorites = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
      }}>
        <Text h1>No hay favoritos</Text>
        <Image 
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/132.gif'
          width={150}
          height={150}
          css={{
            opacity: 0.4
          }}
       />
      </Container>
  )
}
