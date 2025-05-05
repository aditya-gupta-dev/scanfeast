import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Product() {
    const { id } = useLocalSearchParams()


    const init = async () => {
        try {
            const url = `https://world.openfoodfacts.org/api/v0/product/${id}.json`
            const res = await axios.get(url)

            if(res.status > 300) {
                throw new Error('Error fetching product data');
            } else {
                console.log(res.data);
                
            }
        } catch (error) {
            console.error(error)
        }
    }   

    useEffect(() => {
        init(); 
    }, [])
    return (
        <View>
            <Text>{id}</Text>
        </View>
    )
}