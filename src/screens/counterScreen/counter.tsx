import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  
  Modal,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
const steps = [
  'Choose a time when you are least distracted or when you typically feel the fetus move.',
  'Get comfortable. Lie on your left side or sit with your feet propped up.',
  'Place your hands on your belly.',
  'Start a timer or watch the clock.',
  'Count each kick. Keep counting until you get to 10 kicks / flutters / swishes / rolls.',
  'Once you reach 10 kicks, jot down how many minutes it took.',
];

const counter = ({ navigation }: any) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  // ⏱ Timer logic
  useEffect(() => {
    let interval: any = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  const handleCount = () => {
    if (!isRunning) setIsRunning(true);
    setCount(prev => prev + 1);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Record DFM</Text>

        <TouchableOpacity onPress={() => setShowInfo(true)}>
          <Icon name="info-outline" size={22} />
        </TouchableOpacity>
      </View>

      {/* INFO CARD */}
      <View style={styles.infoCard}>
        <Text style={styles.infoText}>
          Stop recording after{'\n'}10 kicks
        </Text>
      </View>

      {/* TIMER */}
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{formatTime()}</Text>
      </View>

      {/* STOP BUTTON */}
      <TouchableOpacity style={styles.stopButton} onPress={handleStop}>
        <View style={styles.stopIcon} />
      </TouchableOpacity>

      {/* SAVE BUTTON */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>

      {/* FOOTER TEXT */}
      <Text style={styles.footerText}>
        What if I am not getting{'\n'}
        <Text style={styles.footerUnderline}>enough kicks?</Text>
      </Text>

      {/* TAP AREA TO COUNT */}
      <TouchableOpacity
        style={styles.tapArea}
        onPress={handleCount}
        activeOpacity={1}
      />

      {/* INFO MODAL */}
      <Modal visible={showInfo} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowInfo(false)}
            >
              <Icon name="close" size={18} />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>
              Steps to count fetal kicks
            </Text>

            <FlatList
              data={steps}
              keyExtractor={(_, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <View style={styles.stepItem}>
                  <Text style={styles.stepIndex}>{index + 1}.</Text>
                  <Text style={styles.stepText}>{item}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default counter;
