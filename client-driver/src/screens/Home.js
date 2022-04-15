
import { NativeBaseProvider, Input, Icon, Button, Stack, TextArea, Text, Pressable, Box, VStack, Center, Divider, ScrollView, HStack } from 'native-base'
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
                    <Input placeholder="Search ID" alignSelf="center" w="96" top="70" fontSize="2xl" position="absolute" variant="filled" width="100%" borderRadius="5" py="3" px="2" borderWidth="3" borderColor="muted.200" InputLeftElement={<Icon ml="3" size="6" color="muted.500" as={<Ionicons name="ios-search" />} />} />
                </Box>

                <Center>
                    <ScrollView maxW="96" h="xl" top="8" _contentContainerStyle={{
                        px: "100px",
                        mb: "4",
                        minW: "72"
                    }}>
                        <VStack space={4} alignItems="center" safeArea>
                            <Pressable onPress={() => navigation.navigate("Action")}>
                                <Box w="96" h="40" bg="darkBlue.800" rounded="3xl" shadow={3}>
                                    <Text left="7" mt="3" fontWeight="bold" color="light.50">ID: Transaction#123123123</Text>
                                    <Divider mt="2"></Divider>
                                    <HStack left="6" mt="3" >
                                        <Button size="sm" m="1" variant="outline">
                                            <Text color="light.50">Pickup : 06/05/2022</Text>
                                        </Button>
                                        <Button size="sm" m="1" variant="outline">
                                            <Text color="light.50">Delivery : 07/05/2022</Text>
                                        </Button>
                                    </HStack>

                                    <HStack left="6" mt="3" >
                                        <Text mt="2" mr="4" fontWeight="bold" color="light.50">Total Price : </Text>
                                        <Button size="sm" variant="outline">
                                            <Text fontWeight="bold" color="light.50">Rp 100.000</Text>
                                        </Button>
                                    </HStack>
                                </Box>
                            </Pressable>
                        </VStack>
                    </ScrollView>
                </Center>
            </VStack>
        </NativeBaseProvider >
    )
}

export default Home