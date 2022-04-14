
import { NativeBaseProvider, Input, Icon, Text, Pressable, Box, VStack, Center, Divider, ScrollView, HStack } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons';


function Home({ navigation }) {

    return (
        <NativeBaseProvider >
            <VStack safeArea>
                <Box mt="3">
                    <Box alignItems="center" alignSelf="center" w="100%" h="24" bg="darkBlue.800" _text={{
                    }}>
                        <HStack>
                            <Text fontSize={30} fontWeight="extrabold" mt="5" color="light.50" > Laund</Text>
                            <Text fontSize={30} fontStyle="italic" mt="5" color="darkBlue.200" > Fazz</Text>
                        </HStack>
                    </Box>
                    <Input placeholder="Search" alignSelf="center" w="96" top="70" fontSize="2xl" position="absolute" variant="filled" width="100%" borderRadius="5" py="3" px="2" borderWidth="3" borderColor="muted.200" InputLeftElement={<Icon ml="3" size="6" color="muted.500" as={<Ionicons name="ios-search" />} />} />
                </Box>

                <Center>
                    <ScrollView maxW="96" h="full" top="12" _contentContainerStyle={{
                        px: "70px",
                        mb: "4",
                        minW: "72"
                    }}>
                        <VStack space={4} alignItems="center" safeArea>
                            <Pressable onPress={() => navigation.navigate("Action")}>
                                <Center w="96" h="32" bg="darkBlue.800" rounded="3xl" shadow={3}>



                                </Center>
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate("Action")}>
                                <Center w="96" h="32" bg="darkBlue.800" rounded="3xl" shadow={3}>



                                </Center>
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate("Action")}>
                                <Center w="96" h="32" bg="darkBlue.800" rounded="3xl" shadow={3}>



                                </Center>
                            </Pressable>
                        </VStack>
                    </ScrollView>
                </Center>
            </VStack>
        </NativeBaseProvider >
    )
}

export default Home