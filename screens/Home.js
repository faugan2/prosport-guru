import {SafeAreaView, Text,Button} from "react-native";
import BottomSheet from "../components/BottomSheet";
import {useState} from "react";

const Home=()=>{
    const [open,set_open]=useState(false);
    const close_sheet=()=>{
        set_open(false);
    }
    return(
        <SafeAreaView>
            
            {open==true && <BottomSheet 
            content={<Button onPress={close_sheet}>Je suis le contenu</Button>}
            />
            }

            <Button title="Open" onPress={e=>set_open(true)} />
        </SafeAreaView>
    );
}

export default Home;