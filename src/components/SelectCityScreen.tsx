import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export function SelectCityScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => onNavigate('RegisterStep2')} style={styles.backBtn}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Выберите город</Text>
      <Text style={styles.subtitle}>
        Укажите ваш город, чтобы предложения были актуальными для вашего региона
      </Text>

      <TouchableOpacity style={styles.selectBox}>
        <Text style={styles.selectText}>Выберите город</Text>
        <Text style={{ color: '#A0A0A0', fontSize: 12 }}>▼</Text>
      </TouchableOpacity>

      <View style={{ flex: 1 }} />

      <TouchableOpacity style={styles.primaryBtn} onPress={() => onNavigate('Login')}>
        <Text style={styles.btnText}>Продолжить</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', paddingHorizontal: 24, paddingTop: 40, paddingBottom: 24 },
  backBtn: { marginBottom: 20, width: 30 },
  backText: { fontSize: 24 },
  title: { fontSize: 22, fontWeight: '700', textAlign: 'center', marginBottom: 6 },
  subtitle: { fontSize: 14, color: '#757575', textAlign: 'center', marginBottom: 32 },
  selectBox: { height: 52, backgroundColor: '#F5F5F7', borderRadius: 12, paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  selectText: { color: '#A0A0A0', fontSize: 16 },
  primaryBtn: { height: 52, backgroundColor: '#8E24AA', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  btnText: { color: '#FFF', fontSize: 16, fontWeight: '600' },
});