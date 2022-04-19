import { Center, Heading, Input, Link, FormControl, Button, HStack, Text, VStack, Box, NativeBaseProvider } from 'native-base'

function Login({ navigation }) {
    return (
        <NativeBaseProvider>
            <Center w="100%">
                <Box safeArea p="2" py="8" w="90%" maxW="290" mt="48">
                    <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }}>
                        Welcome
                    </Heading>
                    <Heading mt="1" _dark={{
                        color: "warmGray.200"
                    }} color="coolGray.600" fontWeight="medium" size="xs">
                        Sign in to continue!
                    </Heading>

                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label>Email ID</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input type="password" />

                        </FormControl>
                        <Button mt="2" bg="info.500" onPress={() => navigation.navigate("TabsNav")}>
                            Sign in
                        </Button>
                        <Button mt="2" bg="yellow.400" onPress={() => navigation.navigate("TabsNav")}>
                            Sign Up
                        </Button>
                        {/* <HStack mt="6" justifyContent="center">
                            <Text fontSize="sm" color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                I'm a new user.{" "}
                            </Text>
                            <Link _text={{
                                color: "indigo.500",
                                fontWeight: "medium",
                                fontSize: "sm"
                            }} href="#">
                                Sign Up
                            </Link>
                        </HStack> */}
                    </VStack>
                </Box>
            </Center>
        </NativeBaseProvider>
    )
}

export default Login