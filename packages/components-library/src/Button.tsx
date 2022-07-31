import type { ButtonProps } from '@chakra-ui/react'
import { Button as ChakraButton } from '@chakra-ui/react'

export function Button(props: ButtonProps) {
  return <ChakraButton {...props} />
}
