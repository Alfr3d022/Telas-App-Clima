import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" 
        options={{
        headerShown: false,
        statusBarColor: "#6151C3",
        navigationBarColor: "#6151C3"
      }}/>
      <Stack.Screen name="tabs/home" 
        options={{
        headerShown: false,
        statusBarColor: "#000",
        statusBarHidden: true, 
        navigationBarColor: "black"
      }}/>
    </Stack>
  )
}
