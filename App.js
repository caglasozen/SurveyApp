import * as React from 'react';
import { Formik } from 'formik';
import { Alert, Keyboard, Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Button, TextInput, Appbar } from 'react-native-paper';
import { Field, Form, useField, FieldAttributes, FieldArray } from 'formik';
import * as yup from "yup";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
          <Formik 
            initialValues={{ fullName: '' , occupation: '', birthDate: '', city: '', gender: ''}} 
            onSubmit={values => {
                Alert.alert(JSON.stringify(values, null, 2));
                Keyboard.dismiss();
              }
            }>
            {({ handleChange, handleSubmit, values }) => (
              <View>
              <TextInput style={styles.field}
                onChangeText={handleChange('fullName')}
                value={values.fullName}
                label="Full Name"
              />
              <TextInput style={styles.field}
                onChangeText={handleChange('occupation')}
                value={values.occupation}
                label="Occupation"
              />
              <TextInput style={styles.field}
                onChangeText={handleChange('birthDate')}
                value={values.birthDate}
                label="Birth Date"
              />
              <TextInput style={styles.field}
                onChangeText={handleChange('city')}
                value={values.city}
                label="City"
              />
              <Button onPress={handleSubmit} style={styles.button}>Submit</Button>
              </View>
            )}
          </Formik>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    marginTop: 0,
  },
  content: {
    padding: 16,
    marginTop: 100,
  },
  button: {
    marginTop: 16,
  },
  field: {
    marginBottom: 16,
  },

});
