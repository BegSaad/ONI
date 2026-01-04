import { View, Text,Image,FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { navigationStrings } from '../../utils';
import { en } from '../../translations';
import { images } from '../../themes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from "../../themes/colors"; 

const Home = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textcontainer}>
           <Text style={styles.texthead}>{en.home.header}</Text>
        </View>
       
       <View style={styles.imagecontainer}>
       

        <Image


         source={images.face}/>
         <Text style={styles.text}>0</Text>

      
         
       </View>
        
         


        
      </View>

      <View style={styles.mainimage}>
        <Image
         source={images.patient}
         />

      </View>

      

   <View>
  <TouchableOpacity
    onPress={() => navigation.navigate(navigationStrings.countersaad)}
    style={styles.buttonContainer}
  >
    <Text style={styles.buttonTextis}>
      {en.home.record}
    </Text>
  </TouchableOpacity>
</View>

<View style={styles.pastRecordContainer}>
  <Text style={styles.pastRecordTitle}>{en.home.past}</Text>

  {/* <FlatList
    data={pastRecords}
    keyExtractor={(item) => item.id}
    renderItem={renderRecordItem}
    showsVerticalScrollIndicator={false}
    ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
  /> */}
</View>


    </SafeAreaView>
  );
};

export default Home;
