import * as React from 'react';
import { Formik } from 'formik';
import { Alert, Keyboard, Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Button, TextInput, Appbar } from 'react-native-paper';
import { Field } from "formik";
import * as yup from "yup";

// Radio input
const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type="radio"
        value={id} // could be something else for output?
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className={classNames("radio-button")}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

// Radio group
const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label,
  className,
  children
}) => {
  const classes = classNames(
    "input-field",
    {
      "is-success": value || (!error && touched), // handle prefilled or user-filled
      "is-error": !!error && touched
    },
    className
  );

  return (
    <div className={classes}>
      <fieldset>
        <legend>{label}</legend>
        {children}
        {touched && <InputFeedback error={error} />}
      </fieldset>
    </div>
  );
};

const initialValues = {
  fullName: '' , 
  occupation: '', 
  birthDate: '', 
  city: '', 
  radioGroup: ''
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
          <Formik 
            initialValues={ initialValues } 
            onSubmit={values => {
                Alert.alert(JSON.stringify(values, null, 2));
                Keyboard.dismiss();
              }
            }>
            {({ handleChange, handleSubmit, values }) => (
              <View>
              <TextInput style={styles.textField}
                onChangeText={handleChange('fullName')}
                value={values.fullName}
                label="Full Name"
              />
              <TextInput style={styles.textField}
                onChangeText={handleChange('occupation')}
                value={values.occupation}
                label="Occupation"
              />
              <TextInput style={styles.textField}
                onChangeText={handleChange('birthDate')}
                value={values.birthDate}
                label="Birth Date"
              />
              <TextInput style={styles.textField}
                onChangeText={handleChange('city')}
                value={values.city}
                label="City"
              />
            <RadioButtonGroup
              id="radioGroup"
              label="Gender"
              value={values.radioGroup}
            >
              <Field
                component={RadioButton}
                name="radioGroup"
                id="radioOption1"
                label="Male"
              />
              <Field
                component={RadioButton}
                name="radioGroup"
                id="radioOption2"
                label="Female"
              />
              <Field
                component={RadioButton}
                name="radioGroup"
                id="radioOption3"
                label="Other"
              />
            </RadioButtonGroup>
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
  textField: {
    marginBottom: 16,
  },

});
