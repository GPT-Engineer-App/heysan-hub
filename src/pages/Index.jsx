import { Container, Text, VStack, Heading, Box, Button, IconButton, Image } from "@chakra-ui/react";
import { FaRocket, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Heysan
          </Heading>
          <Text fontSize="lg">Connecting people, one click at a time.</Text>
        </Box>
        <Image src="https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwdGVhbXxlbnwwfHx8fDE3MTcwNTAyMzh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Heysan Team" borderRadius="md" boxShadow="md" />
        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
          Get Started
        </Button>
        <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" mx={2} />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" mx={2} />
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" mx={2} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
