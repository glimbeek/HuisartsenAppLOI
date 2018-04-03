import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

    specialisms: any;
    allergies: any;
    medication: any;

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
        this.specialisms = [
            {title: 'Cardiologie'},
            {title: 'Dermatologie'},
            {title: 'Fysiotherapie'},
            {title: 'Geriatrie'},
            {title: 'Neurologie'},
            {title: 'Oogheelkunde'}
        ]
 
        this.allergies = [
            {title: 'Contactallergie'},
            {title: 'Hooikoorts'},
            {title: 'Huisstofmijt'},
            {title: 'Huisdieren'},
            {title: 'Insectengif'},
            {title: 'Voedselallergie'}
        ]

    }
 
    filterItemsSpecialisms(searchTerm){ 
        return this.specialisms.filter((item) => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });     
    }

    filterItemsAllergies(searchTerm){ 
        return this.allergies.filter((item) => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });     
    }

}
