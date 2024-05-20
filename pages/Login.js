import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView>
        <View style={{alignItems:'center'}}>
            <Text variant='displaySmall'>Login</Text>
        </View>
        <View style={{margin:20, gap:10}}>
            <View style={{gap:10}}>
                <Text>Email</Text>
                <TextInput mode='outlined'/>
            </View>
            <View style={{gap:10}}>
                <Text>Password</Text>
                <TextInput mode='outlined' secureTextEntry={true}/>
            </View>
        </View>
        <View style={{margin:20}}>
            <Button labelStyle={{color:'white'}} mode="contained-tonal" style={{borderRadius:5, backgroundColor:'#fa3b7e'}} onPress={() => console.log('Pressed')}>
                Login
            </Button>
        </View>
        <View style={{alignItems:'center', gap:5}}>
            <Text variant='bodyMedium' style={{opacity:0.4}}>Don't have an account?</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
                <Text variant='bodyMedium' style={{fontWeight:'bold', opacity:0.8,color:'#fa3b7e'}}>Register</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}
export default Login;