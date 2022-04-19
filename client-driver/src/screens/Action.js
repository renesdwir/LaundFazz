
import { NativeBaseProvider, useToast, Input, Heading, TextArea, FormControl, Link, Button, HStack, Icon, Text, Pressable, Box, VStack, Center, Divider, ScrollView } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons';
import { GET_TRANSACTIONDETAIL, PUT_STATUS } from "../../config/queries"
import { useQuery, useMutation } from '@apollo/client';
import { useFocusEffect } from '@react-navigation/native';
import { useEffect, useCallback } from 'react';
const moment = require('moment');
function Action({ route, navigation }) {
    const { transaction } = route.params
    const toast = useToast();
    const { loading, error, data, refetch } = useQuery(GET_TRANSACTIONDETAIL, {
        variables: {
            "getStaffTransactionByIdId": transaction.id
        },
    });

    useFocusEffect(
        useCallback(() => {
            refetch()
            return () => {
                // Do something when the screen is unfocused
                // Useful for cleanup functions
            };
        }, []))

    const [putstatus] = useMutation(PUT_STATUS);

    if (loading) return null;
    if (error) return null;

    const handlerUpdate = async (id) => {
        await putstatus({ variables: { putTransactionId: id } })
        // toast.show({
        //     description: "Hello world"
        // })
        navigation.navigate("History")
    }
    return (
        <NativeBaseProvider>
            <VStack safeArea>
                <Box mt="3">
                    <Box alignItems="center" alignSelf="center" w="100%" h="24" bg="info.500" _text={{
                    }}>
                        <HStack>
                            <Text fontSize={30} fontWeight="extrabold" mt="5" color="light.50" > Laund</Text>
                            <Text fontSize={30} fontStyle="italic" mt="5" color="yellow.400" > Fazz</Text>
                        </HStack>
                    </Box>
                </Box>
                <Center mt="5" w="100%">
                    <Box w="96" h="auto" bg="info.500" rounded="3xl" shadow={3}>
                        <Text left="7" mt="3" fontWeight="bold" color="light.50">ID: Transaction#{data.getStaffTransactionById.id}</Text>
                        <Divider mt="2"></Divider>
                        <HStack left="6" mt="2" >
                            <Button size="sm" m="1" variant="outline">
                                <Text color="light.50">Pickup : {data.getStaffTransactionById.pickupDate !== null ? moment(data.getStaffTransactionById.pickupDate).format('DD/MM/YYYY') : '-'}</Text>
                            </Button>
                            <Button size="sm" m="1" variant="outline">
                                <Text color="light.50">Delivery : {data.getStaffTransactionById.deliveryDate !== null ? moment(data.getStaffTransactionById.deliveryDate).format('DD/MM/YYYY') : '-'}</Text>
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
                                {
                                    data.getStaffTransactionById.Products.map(item => {
                                        return (
                                            <Button key={item.id} size="sm" ml="1" mr="1" variant="outline">
                                                <Text fontWeight="bold" color="light.50">{item.name}</Text>
                                            </Button>
                                        )
                                    })
                                }
                                {/* <Button size="sm" ml="1" mr="1" variant="outline">
                                    <Text fontWeight="bold" color="light.50">BedCover</Text>
                                </Button>
                                <Button size="sm" ml="1" mr="1" variant="outline">
                                    <Text fontWeight="bold" color="light.50">Dress</Text>
                                </Button>
                                <Button size="sm" ml="1" mr="1" variant="outline">
                                    <Text fontWeight="bold" color="light.50">Sneaker</Text>
                                </Button> */}
                            </HStack>
                        </ScrollView>


                        <HStack left="6" mb="5" mt="5" >
                            <Text mt="2" mr="4" fontWeight="bold" color="light.50">Total Price : </Text>
                            <Button size="sm" variant="outline">
                                <Text fontWeight="bold" color="light.50">Rp {data.getStaffTransactionById.totalPrice}</Text>
                            </Button>
                        </HStack>

                    </Box>
                    <Box safeArea p="2" py="8" w="90%" maxW="290">
                        <Heading size="lg" alignSelf="center" fontWeight="600" color="info.700" _dark={{
                            color: "warmGray.50"
                        }}>
                            Maps
                        </Heading>


                        <Button mt="2" bg="yellow.400">
                            <Text fontWeight="bold" color="light.50"> Navigate </Text>
                        </Button>

                        <Button bg="yellow.400" onPress={() => handlerUpdate(data.getStaffTransactionById.id)} mt="2"  >
                            <Text fontWeight="bold" color="light.50"> Laundry Done </Text>
                        </Button>


                        <Button mt="2" onPress={() => navigation.navigate("Chat")} bg="yellow.400">
                            <Text fontWeight="bold" color="light.50"> Chat </Text>
                        </Button>


                    </Box>
                </Center>

            </VStack>
        </NativeBaseProvider>
    )
}

export default Action