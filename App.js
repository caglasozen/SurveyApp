import * as React from 'react';
import { Formik } from 'formik';
import { Alert, Keyboard, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { HelperText, RadioButton, Text, Button, TextInput, Appbar } from 'react-native-paper';
import { Field, Form, useField, FieldAttributes, FieldArray } from 'formik';
import { ValidFunctions } from './validFunctions';


export default class MyComponent extends React.Component {
  state = {
    value: 'first',
    buttonDisabled: true,
    nameError: null,
    occupError: null,
    dateError: null,
    cityError: null,
  };

  render() {
    return(
      <View style={styles.container}>
      <View style={styles.content}>
          <Formik accessibilityLabel={ 'FormikForm' } testID={ 'FormikForm' }
            initialValues={{ fullName: '' , occupation: '', birthDate: '', city: '', gender: ''}} 
            onSubmit={values => {
                this.nameError = ValidFunctions.validateName(values.fullName);
                this.occupError = ValidFunctions.validateOccupation(values.occupation);
                this.cityError = ValidFunctions.validateCity(values.city);
                Alert.alert(JSON.stringify(values, null, 2));
                Keyboard.dismiss();
              }
            }>
            {({ handleChange, handleSubmit, values }) => (
              <View>
              <HelperText 
                type="error"
                visible={this.nameError ? true : false}
              >
                Name is invalid!
             </HelperText>
              <TextInput accessibilityLabel={ 'fullNameField' } testID={ 'fullNameField' } style={this.nameError ? styles.error : styles.field} 
                onChangeText={handleChange('fullName')}
                value={values.fullName}
                label="Full Name"
              />
              <HelperText 
                type="error"
                visible={this.occupError ? true : false}
              >
                Occupation is invalid!
             </HelperText>
              <TextInput accessibilityLabel={ 'occupationField' } testID={ 'occupationField' } style={this.occupError ? styles.error : styles.field}
                onChangeText={handleChange('occupation')}
                value={values.occupation}
                label="Occupation"
              />
              <HelperText 
                type="error"
                visible={this.dateError ? true : false}
              >
                Date is invalid!
             </HelperText>
              <TextInput accessibilityLabel={ 'birthDateField' } testID={ 'birthDateField' } style={this.birthDate ? styles.error : styles.field}
                onChangeText={handleChange('birthDate')}
                value={values.birthDate}
                label="Birth Date"
              />
              <HelperText 
                type="error"
                visible={this.cityError ? true : false}
              >
                City is invalid!
             </HelperText>
              <TextInput accessibilityLabel={ 'cityField' } testID={ 'cityField' } style={this.nameError ? styles.error : styles.field}
                onChangeText={handleChange('city')}
                value={values.city}
                label="City"
              />
              <RadioButton.Group accessibilityLabel={ 'radioField' } testID={ 'radioField' }
                onValueChange={handleChange('gender')}
                value={values.gender}
              >
                <View style={styles.radCont}>
                  <Text style={styles.text}>Male</Text>
                  <RadioButton  accessibilityLabel={ 'radioFieldMale' } testID={ 'radioFieldMale' }  value="male" />
                  <Text style={styles.text}>Female</Text>
                  <RadioButton accessibilityLabel={ 'radioFieldFemale' } testID={ 'radioFieldFemale' } value="female" />
                </View>
              </RadioButton.Group>
              {values.fullName !== '' && values.occupation !== '' && values.birthDate !== '' && values.city !== '' && values.gender !== '' &&(
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
    marginBottom: 0,
  },
  text: {
    color: '#868686',
  },
  radCont: {
    marginTop: 16,
    backgroundColor: '#e7e7e7',
  },
});