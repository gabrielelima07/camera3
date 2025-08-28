import { Link, Stack, router, useLocalSearchParams, useRouter} from "expo-router";

import {Alert, Image, StyleSheet} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import ObscuraButton from "@/components/ObscuraButton";

import { saveToLibraryAsync } from "expo-media-library";

export default function MediaScreeen(){
    //pega os parametros da url/rota(ex: media e type)
    //media: caminho do arquivo
    //type: tipo de midia
    const {media, type} = useLocalSearchParams();

    console.log(media, type);

    return (

        <ThemedView style={styles.container}>
            {
                type === "photo" ? (
                    <Image
                         source={{url: `file://${media}`}}
                         style={{width: "100%", height: "80%", resizeMode:"contain"}}
                         />
                ) : null
            }

            <ObscuraButton
            title= "Salvar na galeria"
            containerStyle={{ alignSelf: "center"}}
            onPress={async () => {
                saveToLibraryAsync(media as string);

                Alert.alert("Salvo na galeria!");

                router.back();


            }}

            />

            <Link href="/" style={styles.link}>
                <ThemedText type="link"> Deletar e voltar a tela inicial</ThemedText>
                </Link>
        </ThemedView>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,

    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
        alignSelf: "center"
    },
});