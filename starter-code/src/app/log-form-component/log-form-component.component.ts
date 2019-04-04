import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {GymServices} from '../services/gym.services';
@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css'],
  providers:[GymServices]
})
export class LogFormComponentComponent implements OnInit {

//@Output()onAdd=new EventEmitter<any>(person)


  constructor(private gymServices:GymServices ) { }

  ngOnInit() {
  }
  submitForm(myForm){
   // console.log(myForm.valid)
    this.gymServices.addAccessItem(myForm.value.person,myForm.value.message)
  }

}
