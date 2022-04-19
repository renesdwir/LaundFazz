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
  PUT_STATUS,
  PATCH_LOCATION,
} from "../../config/queries";
import { useQuery, useMutation } from "@apollo/client";
import { useFocusEffect } from "@react-navigation/native";
import { useEffect, useCallback, useRef } from "react";
const moment = require("moment");
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
  const arrPath = useRef([
    [107.617256, -6.928938],
    [107.617252, -6.928943],
    [107.61717, -6.929085],
    [107.617129, -6.929189],
    [107.617094, -6.929388],
    [107.61708, -6.929515],
    [107.617073, -6.929898],
    [107.617068, -6.930187],
    [107.617134, -6.93055],
    [107.617161, -6.930642],
    [107.617201, -6.930739],
    [107.617238, -6.930835],
    [107.617284, -6.930925],
    [107.61753, -6.931315],
    [107.617674, -6.931507],
    [107.617951, -6.931803],
    [107.617994, -6.931821],
    [107.61804, -6.931829],
    [107.618125, -6.931812],
    [107.618244, -6.931693],
    [107.61836, -6.931613],
    [107.618509, -6.931546],
    [107.61876, -6.931433],
    [107.619075, -6.931384],
    [107.619257, -6.93138],
    [107.6195, -6.931411],
    [107.619827, -6.931458],
    [107.620048, -6.93154],
    [107.620252, -6.931647],
    [107.620427, -6.931779],
    [107.620728, -6.931996],
    [107.621912, -6.932819],
    [107.622015, -6.932892],
    [107.622893, -6.933519],
    [107.62297, -6.933574],
    [107.623228, -6.933777],
    [107.623408, -6.933914],
    [107.623474, -6.933959],
    [107.623596, -6.934051],
    [107.623698, -6.934127],
    [107.623831, -6.934227],
    [107.624194, -6.934496],
    [107.624566, -6.934775],
    [107.624778, -6.934931],
    [107.625064, -6.934599],
    [107.625215, -6.934303],
    [107.625272, -6.934102],
    [107.625427, -6.933512],
    [107.625528, -6.933544],
    [107.625467, -6.933761],
    [107.6254, -6.933993],
    [107.625369, -6.934119],
    [107.625325, -6.934283],
    [107.62531, -6.934339],
    [107.625295, -6.934375],
    [107.625241, -6.934489],
    [107.625192, -6.93458],
    [107.625145, -6.93467],
    [107.625063, -6.934774],
    [107.624881, -6.935003],
    [107.624223, -6.935633],
    [107.624054, -6.935795],
    [107.623783, -6.936056],
    [107.623726, -6.936112],
    [107.623674, -6.936164],
    [107.6236, -6.936234],
    [107.623511, -6.936307],
    [107.623156, -6.936664],
    [107.623075, -6.936786],
    [107.62301, -6.936854],
    [107.622961, -6.936921],
    [107.622945, -6.936951],
    [107.622939, -6.936984],
    [107.622937, -6.937017],
    [107.622939, -6.93706],
    [107.622964, -6.937123],
    [107.62305, -6.937299],
    [107.6231, -6.937355],
    [107.622845, -6.937593],
    [107.623201, -6.93796],
  ]);

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
        if (count.current > arrPath.current.length - 1) {
          stopForegroundUpdate();
          clearInterval(interval.current);
          count.current = 0;
          return;
        }
        const { longitude = "", latitude = "" } = position?.current || {};
        const { longitude: lonCustomer = "", latitude: latCustomer = "" } =
          data?.getStaffTransactionById || {};
        patchPosition({
          variables: {
            longitude: arrPath.current[count.current][0] + "",
            latitude: arrPath.current[count.current][1] + "",
          },
        });
        console.log(count.current);
        console.log(longitude + "", latitude + "");

        count.current += 1;
      }, 10000);
      return () => {
        stopForegroundUpdate();
        clearInterval(interval.current);
      };
    }, [])
  );

  if (loading) return null;
  if (error) return null;

  const handlerUpdate = async (id) => {
    await putstatus({ variables: { putTransactionId: id } });
    // toast.show({
    //     description: "Hello world"
    // })
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
            bg="info.500"
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
              <Text fontSize={30} fontStyle="italic" mt="5" color="yellow.400">
                {" "}
                Fazz
              </Text>
            </HStack>
          </Box>
        </Box>
        <Center mt="5" w="100%">
          <Box w="96" h="auto" bg="info.500" rounded="3xl" shadow={3}>
            <Text left="7" mt="3" fontWeight="bold" color="light.50">
              ID: Transaction#{data.getStaffTransactionById.id}
            </Text>
            <Divider mt="2"></Divider>
            <HStack left="6" mt="2">
              <Button size="sm" m="1" variant="outline">
                <Text color="light.50">
                  Pickup :{" "}
                  {data.getStaffTransactionById.pickupDate !== null
                    ? moment(data.getStaffTransactionById.pickupDate).format(
                        "DD/MM/YYYY"
                      )
                    : "-"}
                </Text>
              </Button>
              <Button size="sm" m="1" variant="outline">
                <Text color="light.50">
                  Delivery :{" "}
                  {data.getStaffTransactionById.deliveryDate !== null
                    ? moment(data.getStaffTransactionById.deliveryDate).format(
                        "DD/MM/YYYY"
                      )
                    : "-"}
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
              color="info.700"
              _dark={{
                color: "warmGray.50",
              }}
            >
              Maps
            </Heading>

            <Button mt="2" bg="yellow.400">
              <Text fontWeight="bold" color="light.50">
                {" "}
                Navigate{" "}
              </Text>
            </Button>

            <Button
              bg="yellow.400"
              onPress={() => handlerUpdate(data.getStaffTransactionById.id)}
              mt="2"
            >
              <Text fontWeight="bold" color="light.50">
                {" "}
                Laundry Done{" "}
              </Text>
            </Button>

            <Button
              mt="2"
              onPress={() => navigation.navigate("Chat")}
              bg="yellow.400"
            >
              <Text fontWeight="bold" color="light.50">
                {" "}
                Chat{" "}
              </Text>
            </Button>
          </Box>
        </Center>
      </VStack>
    </NativeBaseProvider>
  );
}

export default Action;
