import * as React from 'react';
import { Formik } from 'formik';
import { Alert, Keyboard, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { HelperText, RadioButton, Text, Button, TextInput, Appbar } from 'react-native-paper';
import { Field, Form, useField, FieldAttributes, FieldArray } from 'formik';
import { ValidFunctions } from './validFunctions';
import { TextInputMask } from 'react-native-masked-text'

export default class MyComponent extends React.Component {
  state = {
    value: 'first',
    nameError: null,
    occupError: null,
    dateError: null,
    cityError: null,
    userInput: '',
    dt: '',
    datetime: '',
    dateFilled: false,
  };

  render() {
    return(
      <View style={styles.container}>
      <View style={styles.content}>
          <Formik accessibilityLabel={ 'FormikForm' } testID={ 'FormikForm' }
            initialValues={{ fullName: '' , occupation: '', city: '', gender: ''}} 
            onSubmit={values => {
                this.nameError = ValidFunctions.validateName(values.fullName);
                this.occupError = ValidFunctions.validateOccupation(values.occupation);
                this.cityError = ValidFunctions.validateCity(values.city);
                this.dateError = ValidFunctions.validateDate(this.datetime);
                Alert.alert(JSON.stringify(values, null, 2) + 'birthDate' + this.datetime);
                Keyboard.dismiss();
              }
            }>
            {({ handleChange, handleSubmit, values }) => (
              <View>
              <TextInput accessibilityLabel={ 'fullNameField' } testID={ 'fullNameField' } style={this.nameError ? styles.error : styles.field} 
                onChangeText={handleChange('fullName')}
                value={values.fullName}
                label="Full Name"
                maxLength={30}
              />
              <HelperText accessibilityLabel={ 'nameError' } testID={ 'nameError' } 
                type="error"
                visible={this.nameError ? true : false}
              >
                Name is invalid!
             </HelperText>

              <TextInput accessibilityLabel={ 'occupationField' } testID={ 'occupationField' } style={this.occupError ? styles.error : styles.field}
                onChangeText={handleChange('occupation')}
                value={values.occupation}
                label="Occupation"
                maxLength={30}
              />
              <HelperText accessibilityLabel={ 'occupError' } testID={ 'occupError' } 
                type="error"
                visible={this.occupError ? true : false}
              >
                Occupation is invalid!
             </HelperText>

             <View style={styles.field}>
              <TextInputMask accessibilityLabel={ 'birthDateField' } testID={ 'birthDateField' } style={this.dateError ? styles.error : styles.input}
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY'
                }}
                value={this.state.dt}
                onChangeText={text => {
                  this.setState({
                    dt: text
                  });
                  this.datetime = text;
                  if (text.length == 10)
                    this.dateFilled = true;
                }}
                label="Birth Date"
                placeholder = 'dd/mm/yyyy'
                keyboardType = 'numeric'
              />
            </View>
             
              <HelperText accessibilityLabel={ 'dateError' } testID={ 'dateError' } 
                type="error"
                visible={this.dateError ? true : false}
              >
                Date is invalid!
             </HelperText>

              <TextInput accessibilityLabel={ 'cityField' } testID={ 'cityField' } style={this.cityError ? styles.error : styles.field}
                onChangeText={handleChange('city')}
                value={values.city}
                label="City"
                maxLength={30}
              />
              <HelperText accessibilityLabel={ 'cityError' } testID={ 'cityError' } 
                type="error"
                visible={this.cityError ? true : false}
              >
                City is invalid!
             </HelperText>

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
              {values.fullName !== '' && values.occupation !== '' && this.dateFilled && values.city !== '' && values.gender !== '' &&(
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
    borderBottomColor: '#868686',
    borderBottomWidth: 1,
  },
  error: {
    backgroundColor: '#fcacac',
    color: '#868686',
    height: 60,
    borderBottomColor: '#868686',
    borderBottomWidth: 1,
  },
  input: {
    color: '#868686',
    backgroundColor: '#e7e7e7',
    height: 60,
    borderBottomColor: '#868686',
    borderBottomWidth: 1,
  },
});