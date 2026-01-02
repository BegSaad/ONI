import { View, Text,Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { navigationStrings } from '../../utils';
import { en } from '../../translations';

const Home = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{en.home.header}</Text>
         


        
      </View>

      <Text
        onPress={() => navigation.navigate(navigationStrings.countersaad)}

        >
          Go to Counter
        </Text>
    </SafeAreaView>
  );
};

export default Home;
