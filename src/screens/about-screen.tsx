import React from 'react'
import { ScrollView, Box, Text, VStack, Icon, Image, useColorModeValue } from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import NavBar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'



const AboutScreen = () => {
  return (
    <AnimatedColorBox flex={1} bg={useColorModeValue('warmGray.50','warmGray.900')} w="full" >
      <Masthead title="About this app" image={require('../assets/about-masthead.png')}>
        <NavBar />
      </Masthead>
      <ScrollView borderTopLeftRadius="20px" borderTopRightRadius="20px" bg={useColorModeValue('warmGray.50','primary.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
       <VStack flex={1} space={4} >
        <Box alignItems="center" >
          <Image source={require('../assets/andying.jpg')}
            borderRadius="full"
            resizeMode="cover"
            w={120}
            h={120}
            alt="author"
          />
         </Box>
         <Text fontSize="md" w="full">This is a React Native tutorial built in the YouTube Channel called zerotone.</Text>
         <LinkButton colorScheme="red" size="lg" borderRadius="full"  href="https://www.youtube.com/channel/UCQ5UGCw389_clzi-3Grq8Tg" leftIcon={
            <Icon as={Feather} name="youtube" size="sm" opacity={0.5} />}
          >
           Go to YouTube channel
          </LinkButton>

         <LinkButton colorScheme={useColorModeValue('blue','darkBlue')} size="lg" borderRadius="full"  href="https://twitter.com/andyliliking" leftIcon={
            <Icon as={Feather} name="twitter" size="sm" opacity={0.5} />}
          >
          @andyliliking
          </LinkButton>

         <Text fontSize="md" w="full">Are you looking for a Sofeware Company? Check out my Company called Zerotone!</Text>
         <LinkButton colorScheme="purple" size="lg" borderRadius="full"  href="http://zerotone.xyz" leftIcon={
            <Icon as={Feather} name="external-link" size="sm" opacity={0.5} />}
          >
          http://zerotone.xyz
          </LinkButton>
      </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )

}

export default AboutScreen
