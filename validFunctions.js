import React from 'react'
import { CityList } from './cityList';

export class ValidFunctions{

    static validateName(value){
        let error;
        if (!value) {
            error = 'Full name is Required';
        } else if (!/^[a-zA-Z]+( [a-zA-Z]+)+$/i.test(value)) {
            error = 'Invalid name ';
        }
        return error;
    }

    static validateOccupation(value){
        let error;
        if (!value) {
            error = 'Occupation is Required';
        }
        return error;
    }

  static validateCity(value) {
    let error;
    if (!value) {
        error = 'City is Required';
    } else if (!CityList.cities.includes(value.toUpperCase())) {
        error = 'Invalid city ';
    }
    return error;
  }

  
}