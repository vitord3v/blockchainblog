import { Box,Text } from '@chakra-ui/react'

const Comments = ({ comment }) => {
    return (
        <Box borderWidht='1px' borderRadius='lg' p={4} my={2}>
            <Text fontWeight='bold'> {comment.author} </Text>
            <Text mt={2}> {comment.text} </Text>
        </Box>
    )
}