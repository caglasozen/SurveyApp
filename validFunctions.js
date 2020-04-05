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

    static validateDate(value) {
        let error;

        var today = new Date();

        var m = value.substring(3,5)-1;		         
        var y = value.substring(value.length - 4, value.length);		        
        var d = value.substring(0, 2);		 
        
        var dt = new Date(y,m,d,0,0,0,0);

        var mon = dt.getMonth() + 1;
        var day = dt.getDate();
        var yr  = dt.getYear() + 1900;
    
        if (( !(mon == (m +1) && yr == y && day == d )) || ( yr < 1920 ) ||( today < dt )) 
            error = 'Invalid Date'; 

        return error;
      }

    static validateCity(value) {
        let error;
        if (!value) {
            error = 'City is Required';
        } else if (!CityList.isCity(value)) {
            error = 'Invalid city ';
        }
        return error;
    }

  
}