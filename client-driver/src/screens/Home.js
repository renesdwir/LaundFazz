import {
  NativeBaseProvider,
  Input,
  Icon,
  Image,
  Radio,
  Button,
  Badge,
  Stack,
  TextArea,
  Text,
  Pressable,
  Box,
  VStack,
  Center,
  Divider,
  ScrollView,
  HStack,
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GET_STAFFTRANSACTION } from "../../config/queries";
import { useQuery } from "@apollo/client";
import { useState, useEffect, useCallback } from "react";
// import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
const moment = require("moment");

function Home({ navigation }) {
  const { loading, error, data, refetch } = useQuery(GET_STAFFTRANSACTION, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "network-only",
  });

  // useEffect(() => {
  //     refetch()
  //     console.log('1111');
  // }, [])

  useFocusEffect(
    useCallback(() => {
      refetch();
      // console.log(data);
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  useFocusEffect(
    useCallback(() => {
      refetch();
      // console.log(data);
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  if (loading) return null;
  if (error) return null;

  let list = data.getStaffTransactions.filter((e) => {
    return e.status === "onProgress";
  });

  return (
    <NativeBaseProvider>
      <VStack safeArea>
        <Box mt="3">
          <Box
            alignItems="center"
            alignSelf="center"
            w="100%"
            h="40"
            bg="info.500"
            _text={{}}
          >
            <Center mt="5">
              <Image
                source={{
                  uri: "https://cdn.discordapp.com/attachments/961924831002099712/965423805021446194/logo.png",
                }}
                alt="Alternate Text"
                w="80"
                h="24"
              />
            </Center>
            ;
            {/* <HStack>
                            <Text fontSize={30} fontWeight="extrabold" mt="5" color="light.50" > Laund</Text>
                            <Text fontSize={30} fontStyle="italic" mt="5" color="yellow.400" > Fazz</Text>
                        </HStack> */}
          </Box>
          <Input
            placeholder="Search ID"
            alignSelf="center"
            w="96"
            top="32"
            fontSize="2xl"
            position="absolute"
            variant="filled"
            width="100%"
            borderRadius="5"
            py="3"
            px="2"
            borderWidth="3"
            borderColor="muted.200"
            InputLeftElement={
              <Icon
                ml="3"
                size="6"
                color="muted.500"
                as={<Ionicons name="ios-search" />}
              />
            }
          />
        </Box>

        <Center>
          <ScrollView
            maxW="96"
            h="2xl"
            top="8"
            _contentContainerStyle={{
              px: "100px",
              mb: "4",
              minW: "72",
            }}
          >
            {list.map((transaction) => {
              return (
                <VStack
                  key={transaction.id}
                  space={4}
                  alignItems="center"
                  safeArea
                >
                  <Pressable
                    onPress={() =>
                      navigation.navigate("Action", { transaction })
                    }
                  >
                    <Box w="96" h="40" bg="info.500" rounded="2xl" shadow={3}>
                      <Text left="7" mt="3" fontWeight="bold" color="light.50">
                        ID: Transaction#{transaction.id}
                      </Text>
                      <Divider mt="2" thickness="5" bg="yellow.400"></Divider>
                      <HStack left="6" mt="3">
                        <Button size="sm" m="1" variant="outline">
                          <Text color="light.50">
                            Pickup :{" "}
                            {transaction.pickupDate !== null
                              ? moment(transaction.pickupDate).format(
                                  "DD/MM/YYYY"
                                )
                              : "-"}
                          </Text>
                        </Button>
                        <Button size="sm" m="1" variant="outline">
                          <Text color="light.50">
                            Delivery :{" "}
                            {transaction.deliveryDate !== null
                              ? moment(transaction.deliveryDate).format(
                                  "DD/MM/YYYY"
                                )
                              : "-"}
                          </Text>
                        </Button>
                      </HStack>

                      <HStack left="6" mt="3">
                        <Text mt="2" mr="4" fontWeight="bold" color="light.50">
                          Total Price :{" "}
                        </Text>
                        <Badge size="sm" mt="1" bg="#facc15">
                          <Text fontWeight="bold" color="light.50">
                            Rp {transaction.totalPrice.toLocaleString()}
                          </Text>
                        </Badge>
                      </HStack>
                    </Box>
                  </Pressable>
                </VStack>
              );
            })}
          </ScrollView>
        </Center>
      </VStack>
    </NativeBaseProvider>
  );
}

export default Home;
