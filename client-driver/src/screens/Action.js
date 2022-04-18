import {
  NativeBaseProvider,
  useToast,
  Input,
  Heading,
  TextArea,
  FormControl,
  Link,
  Button,
  HStack,
  Icon,
  Text,
  Pressable,
  Box,
  VStack,
  Center,
  Divider,
  ScrollView,
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  GET_TRANSACTIONDETAIL,
  PATCH_LOCATION,
  PUT_STATUS,
} from "../../config/queries";
import { useQuery, useMutation } from "@apollo/client";
import { useFocusEffect } from "@react-navigation/native";
import { useEffect, useCallback, useState, useRef } from "react";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";

const LOCATION_TASK_NAME = "LOCATION_TASK_NAME";
let foregroundSubscription = null;

// Define the background task for location tracking
TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
  if (error) {
    console.error(error);
    return;
  }
  if (data) {
    // Extract location coordinates from data
    const { locations } = data;
    const location = locations[0];
    if (location) {
      console.log("Location in background", location.coords);
    }
  }
});

function Action({ route, navigation }) {
  const position = useRef(null);
  const interval = useRef(null);
  const count = useRef(0);
  const { transaction } = route.params;
  const toast = useToast();
  const { loading, error, data, refetch } = useQuery(GET_TRANSACTIONDETAIL, {
    variables: {
      getStaffTransactionByIdId: transaction.id,
    },
  });
  const [putstatus] = useMutation(PUT_STATUS);
  const [patchPosition] = useMutation(PATCH_LOCATION);

  const startForegroundUpdate = async () => {
    const { granted } = await Location.getForegroundPermissionsAsync();
    if (!granted) {
      console.log("location tracking denied");
      return;
    }

    foregroundSubscription?.remove();

    foregroundSubscription = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.BestForNavigation,
      },
      (location) => {
        position.current = location.coords;
      }
    );
  };

  const stopForegroundUpdate = () => {
    foregroundSubscription?.remove();
    position.current = null;
  };

  useFocusEffect(
    useCallback(() => {
      console.log("masuk");
      refetch();

      const requestPermissions = async () => {
        const foreground = await Location.requestForegroundPermissionsAsync();
        if (foreground.granted)
          await Location.requestBackgroundPermissionsAsync();
      };
      requestPermissions();
      startForegroundUpdate();
      interval.current = setInterval(() => {
        const { longitude = "", latitude = "" } = position?.current || {};
        const { longitude: lonCustomer = "", latitude: latCustomer = "" } =
          data.getStaffTransactionById;
        patchPosition({
          variables: { longitude: longitude + "", latitude: latitude + "" },
        });
        const distance =
          ((+longitude - +lonCustomer) ** 2 +
            (+latitude - +latCustomer) ** 2) **
          0.5;
        console.log(longitude + "", latCustomer + "");

        console.log(distance);
        count.current += 1;
        if (count.current > 10) {
          stopForegroundUpdate();
          clearInterval(interval.current);
          count.current = 0;
        }
      }, 2000);
      return () => {
        stopForegroundUpdate();
        clearInterval(interval.current);
      };
    }, [])
  );

  if (loading) return null;
  if (error) return null;

  const handlerUpdate = async (id) => {
    await putstatus({
      variables: {
        putTransactionId: id,
        status: "done",
        deliveryDate: new Date(),
      },
    });
    toast.show({
      description: "Hello world",
    });
    navigation.navigate("History");
  };

  return (
    <NativeBaseProvider>
      <VStack safeArea>
        <Box mt="3">
          <Box
            alignItems="center"
            alignSelf="center"
            w="100%"
            h="24"
            bg="darkBlue.800"
            _text={{}}
          >
            <HStack>
              <Text
                fontSize={30}
                fontWeight="extrabold"
                mt="5"
                color="light.50"
              >
                {" "}
                Laund
              </Text>
              <Text
                fontSize={30}
                fontStyle="italic"
                mt="5"
                color="darkBlue.200"
              >
                {" "}
                Fazz
              </Text>
            </HStack>
          </Box>
        </Box>
        <Center mt="5" w="100%">
          <Box w="96" h="auto" bg="darkBlue.800" rounded="3xl" shadow={3}>
            <Text left="7" mt="3" fontWeight="bold" color="light.50">
              ID: Transaction#{data.getStaffTransactionById.id}
            </Text>
            <Divider mt="2"></Divider>
            <HStack left="6" mt="2">
              <Button size="sm" m="1" variant="outline">
                <Text color="light.50">
                  Pickup : {data.getStaffTransactionById.pickupDate}
                </Text>
              </Button>
              <Button size="sm" m="1" variant="outline">
                <Text color="light.50">
                  Delivery : {data.getStaffTransactionById.deliveryDate}
                </Text>
              </Button>
            </HStack>
            <Text left="6" mt="2" mr="4" fontWeight="bold" color="light.50">
              Location :
            </Text>
            <Box
              borderWidth="1"
              borderRadius="sm"
              borderColor="light.50"
              left="6"
              mt="2"
              w="80"
            >
              <Text fontSize="sm" m="2" color="light.50">
                Jl. Balai Kota, Kesawan, Kec. Medan Bar., Kota Medan, Sumatera
                Utara 20231
              </Text>
            </Box>
            <Text left="6" mt="2" mr="4" fontWeight="bold" color="light.50">
              Product List :
            </Text>
            <ScrollView
              horizontal="true"
              _contentContainerStyle={{
                mb: "4",
                minW: "md",
              }}
            >
              <HStack left="6" mt="2">
                {data.getStaffTransactionById.Products.map((item) => {
                  return (
                    <Button
                      key={item.id}
                      size="sm"
                      ml="1"
                      mr="1"
                      variant="outline"
                    >
                      <Text fontWeight="bold" color="light.50">
                        {item.name}
                      </Text>
                    </Button>
                  );
                })}
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

            <HStack left="6" mb="5" mt="5">
              <Text mt="2" mr="4" fontWeight="bold" color="light.50">
                Total Price :{" "}
              </Text>
              <Button size="sm" variant="outline">
                <Text fontWeight="bold" color="light.50">
                  Rp {data.getStaffTransactionById.totalPrice}
                </Text>
              </Button>
            </HStack>
          </Box>
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading
              size="lg"
              alignSelf="center"
              fontWeight="600"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
            >
              Maps
            </Heading>

            <Button mt="2" bg="darkBlue.800" onPress={() => {}}>
              Navigate
            </Button>

            <Button
              onPress={() => handlerUpdate(data.getStaffTransactionById.id)}
              mt="2"
            >
              Laundry Done
            </Button>
          </Box>
        </Center>
      </VStack>
    </NativeBaseProvider>
  );
}

export default Action;
