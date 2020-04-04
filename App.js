import * as React from 'react';
import { Formik } from 'formik';
import { Alert, Keyboard, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { RadioButton, Text, Button, TextInput, Appbar } from 'react-native-paper';
import { Field, Form, useField, FieldAttributes, FieldArray } from 'formik';
import { ValidFunctions } from './validFunctions';


export default class MyComponent extends React.Component {
  state = {
    value: 'first',
    buttonDisabled: true,
  };

  render() {
    return(
      <View style={styles.container}>
      <View style={styles.content}>
          <Formik accessibilityLabel={ 'FormikForm' } testID={ 'FormikForm' }
            initialValues={{ fullName: '' , occupation: '', birthDate: '', city: '', gender: ''}} 
            onSubmit={values => {
                Alert.alert(ValidFunctions.validateName(values.fullName));
                Alert.alert(ValidFunctions.validateOccupation(values.occupation));
                Alert.alert(ValidFunctions.validateCity(values.city));
                Alert.alert(JSON.stringify(values, null, 2));
                Keyboard.dismiss();
              }
            }>
            {({ handleChange, handleSubmit, values }) => (
              <View>
              <TextInput accessibilityLabel={ 'fullNameField' } testID={ 'fullNameField' } style={styles.field} 
                onChangeText={handleChange('fullName')}
                value={values.fullName}
                label="Full Name"
              />
              <TextInput accessibilityLabel={ 'occupationField' } testID={ 'occupationField' } style={styles.field} 
                onChangeText={handleChange('occupation')}
                value={values.occupation}
                label="Occupation"
              />
              <TextInput accessibilityLabel={ 'birthDateField' } testID={ 'birthDateField' } style={styles.field}
                onChangeText={handleChange('birthDate')}
                value={values.birthDate}
                label="Birth Date"
              />
              <TextInput accessibilityLabel={ 'cityField' } testID={ 'cityField' } style={styles.field} 
                onChangeText={handleChange('city')}
                value={values.city}
                label="City"
              />
              <RadioButton.Group accessibilityLabel={ 'radioField' } testID={ 'radioField' }
                onValueChange={value => this.setState({ value })}
                value={this.state.value}
              >
                <View style={styles.radCont}>
                  <Text style={styles.text}>Male</Text>
                  <RadioButton  accessibilityLabel={ 'radioFieldMale' } testID={ 'radioFieldMale' }  value="male" />
                  <Text style={styles.text}>Female</Text>
                  <RadioButton accessibilityLabel={ 'radioFieldFemale' } testID={ 'radioFieldFemale' } value="female" />
                </View>
              </RadioButton.Group>
              {values.fullName !== '' && values.occupation !== '' && values.birthDate !== '' && values.city !== '' && (
                <Button accessibilityLabel={ 'submitButton' } testID={ 'submitButton' } onPress={handleSubmit} style={styles.button}>Submit</Button>
            )}
              </View>
            )}
          </Formik>
        </View>
    </View>
    )
  }

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
  text: {
    color: '#868686',
  },
  radCont: {
    backgroundColor: '#e7e7e7',
  }

});