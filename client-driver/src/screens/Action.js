
import { NativeBaseProvider, Input, Heading, FormControl, Link, Button, HStack, Icon, Text, Pressable, Box, VStack, Center, Divider, ScrollView } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons';
function Action() {
    return (
        <NativeBaseProvider>
            <VStack>
                <Center w="100%">
                    <Box safeArea p="2" py="8" w="90%" maxW="290">
                        <Heading size="lg" alignSelf="center" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }}>
                            Maps
                        </Heading>


                        <Button mt="2" bg="darkBlue.800">
                            Navigate
                        </Button>
                        <Button mt="2" bg="darkBlue.800">
                            Laundry Done
                        </Button>

                    </Box>
                </Center>

            </VStack>
        </NativeBaseProvider>
    )
}

export default Action