import * as React from "react"
import {
  ChakraProvider,
  Center,
  theme,
  Heading,
  VStack,
} from "@chakra-ui/react"
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Center p={10}>
      <VStack>
        <Heading as="h1">Fitness tracker</Heading>
        <Logo />
      </VStack>
    </Center>
  </ChakraProvider>
)
