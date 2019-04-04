import { Injectable } from '@angular/core';
import { userInfo } from 'os';

@Injectable()
export class GymServices {
    logMessages:Array<{person: String,message: String,createdAt:Date}>;    
    constructor() { }

    addAccessItem(person,message) {
        var createdAt=new Date()
        //var createdAt=date.getDate()

        this.logMessages.push({person, message, createdAt})
        return
    }

    getAccessLog() {
        console.log(`Count is now ${this.logMessages}`);
        return this.logMessages
    }
}