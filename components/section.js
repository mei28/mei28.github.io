import { motion } from 'framer-motion'
import { chakra, shouldFowardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldFowardProp: prop => {
    return shouldFowardProp(prop) || prop === 'transition'
  }
})

const Section = ({ children, delay = 0 }) => (
  <StyledDiv
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </StyledDiv>
)

export default Section
