import { Box, Button, Heading, Stack, VStack, HStack, Input, Text} from '@chakra-ui/react';
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai';
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={'40'} p='16' color={'white'}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size="md" textTransform={'uppercase'} textAlign={['center', 'left']}>
                    Subscribe to get updates
                </Heading>
                <HStack borderBottom={'2px solid white'} py="2">
                    <Input placeholder="Enter Email Here..."
                    border={'none'}
                    borderRadius={'none'}
                    outline={'none'}
                    focusBorderColor={'none'}
                    ></Input>
                    <Button p={"0"} colorScheme={"purple"} variant={"ghost"} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend size={20} />
                    </Button>
                </HStack>
            </VStack>
            <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']} >
            <Heading textTransform={'uppercase'} textAlign={'center'}>VIDEO HUB</Heading>
            <Text>All rights reserved</Text>
            </VStack>
            <VStack w={'full'}>
                <Heading size={"md"} textTransform={"uppercase"}>
                    Social Media
                </Heading>
               
                <Button variant={'link'} colorScheme={'white'}>
                    <a target={'black'} href="https://youtube.com/6packprogrammer"><AiOutlineYoutube size={'40'}/></a>
                </Button>
                <Button variant={'link'} colorScheme={'white'}>
                    <a target={'black'} href="https://instagram.com/meabhisingh"><AiOutlineInstagram size={'40'}/></a>
                </Button>
                <Button variant={'link'} colorScheme={'white'}>
                    <a target={'black'} href="https://github.com/meabhisingh"><AiOutlineGithub size={'40'}/></a>
                </Button>
          
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer