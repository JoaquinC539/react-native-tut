// import { Tabs } from 'expo-router';
// import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';
// import { ThemeProvider } from '@/providers/ThemeProvider';


// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <ThemeProvider>      
//       <Tabs
//         screenOptions={{
//           tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//           headerShown: false,
//         }}>        
//         <Tabs.Screen
//           name="index"
//           options={{
//             title: 'Home',
//             tabBarIcon: ({ color, focused }) => (
            //   <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="indexold"
//           options={{
//             title: 'Coffee',
//             tabBarIcon: ({ color, focused }) => (
//               <TabBarIcon name={focused ? "cloud-offline" : 'cloud-offline'} color={color} />
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="explore"
//           options={{
//             title: 'Explore',
//             tabBarIcon: ({ color, focused }) => (
//               <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//             ),
//           }}
//         />        
//       </Tabs>
//     </ThemeProvider>
//   );
// }
