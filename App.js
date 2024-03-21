import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Pressable, Modal } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const newAppointment = () => {
    setShowModal(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Appointment Manager {''}
        <Text style={styles.boldTitle}>Veterinary</Text>
      </Text>

      <Pressable style={styles.button} onPress={newAppointment}>
        <Text style={styles.textButton}>New Appointment</Text>
      </Pressable>

      <Modal animationType='slide' visible={showModal}>
        <Text>Modal</Text>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
    marginTop: 24,
  },
  boldTitle: {
    fontWeight: '900',
    color: '#6D28D9'
  },
  button: {
    backgroundColor: '#6D28D9',
    padding: 16,
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: '400',
    textTransform: 'uppercase',
  }
});
