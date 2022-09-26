import { useState } from 'react'
import { Flex } from '@chakra-ui/react'

import { Sidebar } from './components/Sidebar'


import './App.css'


export function App() {
  return (
    <Flex>
      <Sidebar />
    </Flex>
  )
}
