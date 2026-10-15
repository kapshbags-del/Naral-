import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ==========================================
// 1. КІРУ ЭКРАНЫ (Login)
// ==========================================
function LoginScreen({ navigation }: any) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backBtn}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Привет, с возвращением!</Text>
      <Text style={styles.subtitle}>Войдите в свой аккаунт</Text>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Номер телефона"
          placeholderTextColor="#A0A0A0"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          placeholderTextColor="#A0A0A0"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.forgotBtn}
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <Text style={styles.forgotText}>Забыли пароль?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.primaryBtn}>
        <Text style={styles.btnText}>Войти</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Еще нет аккаунта? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterStep1')}>
          <Text style={styles.linkText}>Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// ==========================================
// 2. ПАРОЛЬДІ ҚАЛПЫНА КЕЛТІРУ ЭКРАНЫ (Forgot Password)
// ==========================================
function ForgotPasswordScreen({ navigation }: any) {
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Восстановление пароля</Text>
      <Text style={styles.subtitle}>
        Введите ваш номер телефона, чтобы мы отправили код подтверждения
      </Text>

      <TextInput
        style={[styles.input, { marginBottom: 24 }]}
        placeholder="Номер телефона"
        placeholderTextColor="#A0A0A0"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.navigate('OTP')}>
        <Text style={styles.btnText}>Продолжить</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// ==========================================
// 3. SMS КОДТЫ РАСТАУ ЭКРАНЫ (OTP)
// ==========================================
function OTPScreen({ navigation }: any) {
  const code = ['7', '8', '5', '4'];

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Подтвердить номер</Text>
      <Text style={styles.subtitle}>
        Введите код, отправленный на{'\n'}+7 (705) 818 77 55
      </Text>

      <View style={styles.codeRow}>
        {code.map((num, idx) => (
          <View key={idx} style={styles.codeBox}>
            <Text style={styles.codeText}>{num}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() => navigation.navigate('ResetPassword')}
      >
        <Text style={styles.btnText}>Продолжить</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resendBtn}>
        <Text style={styles.resendText}>Отправить код повторно</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// ==========================================
// 4. ЖАҢА ПАРОЛЬ ОРНАТУ ЭКРАНЫ (Reset Password)
// ==========================================
function ResetPasswordScreen({ navigation }: any) {
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Сбросить пароль</Text>
      <Text style={styles.subtitle}>
        Пароль должен отличаться от ранее использованного пароля
      </Text>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          placeholderTextColor="#A0A0A0"
          secureTextEntry
          value={pass}
          onChangeText={setPass}
        />
        <TextInput
          style={styles.input}
          placeholder="Повторите пароль"
          placeholderTextColor="#A0A0A0"
          secureTextEntry
          value={confirmPass}
          onChangeText={setConfirmPass}
        />
      </View>

      <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.btnText}>Продолжить</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// ==========================================
// 5. РЕГИСТРАЦИЯ — 1 ҚАДАМ (Register Step 1)
// ==========================================
function RegisterStep1Screen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Регистрация</Text>
      <Text style={styles.subtitle}>Создайте учетную запись, чтобы продолжить</Text>

      <View style={styles.inputGroup}>
        <TextInput style={styles.input} placeholder="Ваше имя" placeholderTextColor="#A0A0A0" />
        <TextInput
          style={styles.input}
          placeholder="Номер телефона"
          placeholderTextColor="#A0A0A0"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          placeholderTextColor="#A0A0A0"
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() => navigation.navigate('RegisterStep2')}
      >
        <Text style={styles.btnText}>Зарегистрироваться</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Уже есть аккаунт? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Войти</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// ==========================================
// 6. РЕГИСТРАЦИЯ — 2 ҚАДАМ (Register Step 2 - ТОЛТЫРЫЛҒАН)
// ==========================================
function RegisterStep2Screen({ navigation }: any) {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Регистрация</Text>
      <Text style={styles.subtitle}>Создайте учетную запись, чтобы продолжить</Text>

      <View style={[styles.inputGroup, { marginBottom: 16 }]}>
        <TextInput style={styles.input} value="Руслан" />
        <TextInput style={styles.input} value="+7 (700) 888 77 55" />
        <TextInput style={styles.input} value="••••••••" secureTextEntry />
      </View>

      <TouchableOpacity style={styles.checkboxRow} onPress={() => setIsChecked(!isChecked)}>
        <View style={[styles.checkbox, isChecked && styles.checked]}>
          {isChecked && <Text style={styles.checkMark}>✓</Text>}
        </View>
        <Text style={styles.termsText}>
          Создавая учетную запись, вы соглашаетесь с нашими{' '}
          <Text style={{ color: '#8E24AA' }}>Условиями использования</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() => navigation.navigate('SelectCity')}
      >
        <Text style={styles.btnText}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// ==========================================
// 7. ҚАЛА ТАҢДАУ ЭКРАНЫ (Select City)
// ==========================================
function SelectCityScreen({ navigation }: any) {
  return (
    <SafeAreaView style={[styles.container, { paddingBottom: 24 }]}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
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

      <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.btnText}>Продолжить</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// ==========================================
// НАВИГАЦИЯ ЖӘНЕ НЕГІЗГІ APP КОМПОНЕНТИ
// ==========================================
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="RegisterStep1" component={RegisterStep1Screen} />
        <Stack.Screen name="RegisterStep2" component={RegisterStep2Screen} />
        <Stack.Screen name="SelectCity" component={SelectCityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ==========================================
// СТИЛЬДЕР (STYLES)
// ==========================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  backBtn: {
    marginBottom: 20,
    width: 30,
  },
  backText: {
    fontSize: 24,
    color: '#000000',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 20,
  },
  inputGroup: {
    gap: 16,
    marginBottom: 24,
  },
  input: {
    height: 52,
    backgroundColor: '#F5F5F7',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000000',
  },
  forgotBtn: {
    alignSelf: 'flex-end',
  },
  forgotText: {
    color: '#8E24AA',
    fontSize: 14,
    fontWeight: '500',
  },
  primaryBtn: {
    height: 52,
    backgroundColor: '#8E24AA',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    color: '#757575',
    fontSize: 14,
  },
  linkText: {
    color: '#8E24AA',
    fontSize: 14,
    fontWeight: '600',
  },
  codeRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 32,
  },
  codeBox: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: '#F5F5F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeText: {
    fontSize: 20,
    fontWeight: '700',
  },
  resendBtn: {
    alignItems: 'center',
  },
  resendText: {
    color: '#757575',
    fontSize: 14,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#A0A0A0',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#8E24AA',
    borderColor: '#8E24AA',
  },
  checkMark: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  termsText: {
    flex: 1,
    fontSize: 12,
    color: '#757575',
  },
  selectBox: {
    height: 52,
    backgroundColor: '#F5F5F7',
    borderRadius: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectText: {
    color: '#A0A0A0',
    fontSize: 16,
  },
});