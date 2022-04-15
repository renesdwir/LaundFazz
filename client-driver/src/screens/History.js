
import { NativeBaseProvider, Input, Modal, Icon, Divider, HStack, Heading, Button, Text, Pressable, Box, VStack, Center, ScrollView } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';


function History({ navigation }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <NativeBaseProvider >
            <VStack safeArea>
                <Box mt="3">
                    <Box alignItems="center" alignSelf="center" w="100%" h="24" bg="darkBlue.800" _text={{
                    }}>
                        <Text fontSize={30} mt="5" fontWeight="extrabold" color="light.50" > History </Text>
                    </Box>
                    <Input placeholder="Search ID" alignSelf="center" w="96" top="70" fontSize="2xl" position="absolute" variant="filled" width="100%" borderRadius="5" py="3" px="2" borderWidth="3" borderColor="muted.200" InputLeftElement={<Icon ml="3" size="6" color="muted.500" as={<Ionicons name="ios-search" />} />} />
                </Box>

                <Center>
                    <ScrollView maxW="96" top="12" h="xl" _contentContainerStyle={{
                        px: "70px",
                        mb: "4",
                        minW: "72"
                    }}>
                        <VStack space={4} alignItems="center" safeArea>
                            <Pressable onPress={() => setShowModal(true)}>
                                <Box w="96" h="20" bg="darkBlue.800" rounded="3xl" shadow={3}>
                                    <Text left="7" mt="3" fontWeight="bold" color="light.50">ID: Transaction#123123123</Text>
                                    <Text left="7" mt="3" fontWeight="bold" color="light.50">Delivered Date : 07/05/2022</Text>
                                </Box>
                            </Pressable>
                            <Pressable onPress={() => setShowModal(true)}>
                                <Box w="96" h="20" bg="darkBlue.800" rounded="3xl" shadow={3}>
                                    <Text left="7" mt="3" fontWeight="bold" color="light.50">ID: Transaction#123123123</Text>
                                    <Text left="7" mt="3" fontWeight="bold" color="light.50">Delivered Date : 07/05/2022</Text>
                                </Box>
                            </Pressable>
                            <Pressable onPress={() => setShowModal(true)}>
                                <Box w="96" h="20" bg="darkBlue.800" rounded="3xl" shadow={3}>
                                    <Text left="7" mt="3" fontWeight="bold" color="light.50">ID: Transaction#123123123</Text>
                                    <Text left="7" mt="3" fontWeight="bold" color="light.50">Delivered Date : 07/05/2022</Text>
                                </Box>
                            </Pressable>
                        </VStack>
                    </ScrollView>
                </Center>
            </VStack>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content h="auto" w="96">
                    <Modal.CloseButton />
                    <Modal.Header>
                        <Text fontWeight="bold" color="darkBlue.800">Detail</Text>
                    </Modal.Header>
                    <Modal.Body>
                        <Box right="4" w="96" h="auto" bg="darkBlue.800" shadow={3}>
                            <Text left="7" mt="3" fontWeight="bold" color="light.50">ID: Transaction#123123123</Text>
                            <Divider mt="2"></Divider>
                            <HStack left="6" mt="2" >
                                <Button size="sm" m="1" variant="outline">
                                    <Text color="light.50">Pickup : 06/05/2022</Text>
                                </Button>
                                <Button size="sm" m="1" variant="outline">
                                    <Text color="light.50">Delivery : 07/05/2022</Text>
                                </Button>
                            </HStack>
                            <Text left="6" mt="2" mr="4" fontWeight="bold" color="light.50">Location :</Text>
                            <Box borderWidth="1" borderRadius="sm" borderColor="light.50" left="6" mt="2" w="80">
                                <Text fontSize="sm" m="2" color="light.50">Jl. Balai Kota, Kesawan, Kec. Medan Bar., Kota Medan, Sumatera Utara 20231</Text>
                            </Box>
                            <Text left="6" mt="2" mr="4" fontWeight="bold" color="light.50">Product List :</Text>

                            <ScrollView horizontal="true" _contentContainerStyle={{
                                mb: "4",
                                minW: "md"
                            }} >
                                <HStack left="6" mt="2">
                                    <Button size="sm" ml="1" mr="1" variant="outline">
                                        <Text fontWeight="bold" color="light.50">BedCover</Text>
                                    </Button>
                                    <Button size="sm" ml="1" mr="1" variant="outline">
                                        <Text fontWeight="bold" color="light.50">Dress</Text>
                                    </Button>
                                    <Button size="sm" ml="1" mr="1" variant="outline">
                                        <Text fontWeight="bold" color="light.50">Sneaker</Text>
                                    </Button>
                                </HStack>
                            </ScrollView>
                            <HStack left="6" mb="5" mt="5" >
                                <Text mt="2" mr="4" fontWeight="bold" color="light.50">Total Price : </Text>
                                <Button size="sm" variant="outline">
                                    <Text fontWeight="bold" color="light.50">Rp 100.000</Text>
                                </Button>
                            </HStack>

                        </Box>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button variant="outline" bg="darkBlue.800" onPress={() => {
                                setShowModal(false);
                            }}>
                                <Text fontWeight="bold" color="light.50">Back</Text>
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </NativeBaseProvider >
    )
}

export default History