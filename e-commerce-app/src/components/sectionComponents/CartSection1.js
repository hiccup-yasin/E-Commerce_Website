import React from 'react';
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Text,
  Stack,
  SimpleGrid,
  Icon,
  Button,
} from '@chakra-ui/react';

export default function Component() {
  const topBg = useColorModeValue('gray.100', 'gray.700');
  const bottomBg = useColorModeValue('white', 'gray.800');
  const Feature = (props) => {
    return (
      <Flex align='center'>
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color={useColorModeValue('brand.500', 'brand.300')}
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
              clipRule='evenodd'
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.span mt={2} color={useColorModeValue('gray.500', 'gray.400')}>
            {props.children}
          </chakra.span>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      boxSize='full'
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      p={10}
      alignItems='center'
      justifyContent='center'
      display={{ base: 'none', md: 'flex' }}
    >
      <Box
        mx='auto'
        textAlign={{ base: 'left', md: 'center' }}
        rounded='md'
        shadow='base'
        w='full'
        bg={bottomBg}
      >
        <Box pt={20} rounded='md' bg={topBg}>
          <Box w='full' px={[10, 4]} mx='auto'>
            <Text
              mb={2}
              fontSize={{ sm: '2xl', lg: '5xl' }}
              fontWeight='bold'
              lineHeight='tight'
              bgClip='text'
              bgGradient='linear(to-r, teal.300, pink.400)'
            >
              Simple transparent pricing
            </Text>
            <chakra.p
              mb={6}
              fontSize={['lg', 'xl']}
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              If you're not satisfied, contact us and we'll refund you within
              the first 20 days.
            </chakra.p>
          </Box>
          <Box bgGradient={`linear(to-b, ${topBg} 50%, ${bottomBg} 50%)`}>
            <Flex
              rounded='md'
              mx={10}
              bg={bottomBg}
              shadow='xl'
              mb='100px'
              textAlign='left'
              direction={{ base: 'column', lg: 'row' }}
            >
              <Stack spacing={8} p='45px' flex='0.7'>
                <Text
                  fontSize={{ sm: '2xl', lg: '3xl' }}
                  fontWeight='bold'
                  lineHeight='tight'
                  bgClip='text'
                  bgGradient='linear(to-r, teal.300, pink.400)'
                >
                  Get a Membership Card
                </Text>
                <chakra.p
                  fontSize={['sm', 'md']}
                  color={useColorModeValue('gray.600', 'gray.400')}
                >
                  One plan for any organization—from startups to Fortune 500s.
                  We offer 50% off of for all students and universities. Please
                  get in touch with us and provide proof of your status.
                </chakra.p>
                <Flex align='center'>
                  <chakra.p
                    fontFamily='body'
                    // whiteSpace='nowrap'
                    fontWeight='semibold'
                    textTransform='uppercase'
                    color='brand.400'
                    fontSize={{ sm: 'sm', lg: '2xl' }}
                    bgClip='text'
                    bgGradient='linear(to-l, teal.300, pink.400)'
                  >
                    What's included
                  </chakra.p>
                  <Flex
                    ml='15px'
                    w='full'
                    borderTopWidth='1px'
                    h='3px'
                    borderTopColor={topBg}
                  />
                </Flex>
                <Flex>
                  <SimpleGrid columns={[1, 2, 1, 2]} spacingY={4}>
                    <Feature>Unlimited Free Shipping</Feature>
                    <Feature>Discounts, Coupons and many more! </Feature>
                    <Feature>Priority In Delivery</Feature>
                    <Feature>Cashbacks up to $200</Feature>
                  </SimpleGrid>
                </Flex>
              </Stack>
              <Stack
                p='45px'
                flex='0.3'
                justify='center'
                align='center'
                bg={useColorModeValue('#F9FAFB', 'gray.900')}
                borderRightRadius='md'
              >
                <Text
                  fontSize='xl'
                  fontWeight='semibold'
                  bgClip='text'
                  bgGradient='linear(to-l, teal.300, pink.400)'
                >
                  Pay once, use anytime
                </Text>
                <Flex
                  align='center'
                  fontSize='5xl'
                  fontWeight={['bold', 'extrabold']}
                  lineHeight='tight'
                >
                  $500
                  <chakra.span
                    ml={2}
                    fontSize='2xl'
                    fontWeight='medium'
                    color={useColorModeValue('gray.500', 'gray.400')}
                  >
                    {' '}
                    USD
                  </chakra.span>
                </Flex>
                <Stack spacing={6}>
                  <Text
                    textDecor='underline'
                    color={useColorModeValue('gray.600', 'gray.400')}
                  >
                    Learn more about our membership
                  </Text>
                  <Button w='300px' colorScheme='brand' py={6}>
                    Get Access
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
