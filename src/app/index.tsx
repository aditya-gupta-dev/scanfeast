import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function Home() {
  
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();


  if(permission && permission.granted) {
    return (
    <View className='flex flex-1 items-center justify-center'>
      <Link href="/scan">
        <Text>Scan</Text>
      </Link>
    </View>
    )
  } else {
    return (
      <View className='flex flex-1 items-center justify-center'>
        <TouchableOpacity 
        onPress={requestPermission}
        className='bg-zinc-800 p-4 rounded-2xl'
        >
          <Text className='text-white'>Request Permission</Text>
          
        </TouchableOpacity>

    </View>
    )

    }
}