import { Injectable } from '@angular/core';
import { userInfo } from 'os';

@Injectable()
export class GymServices {
    logMessages:Array<{person: String,message: String,createdAt:Date}>;    
    constructor() { 
        this.logMessages = []
    }

    addAccessItem(person: String,message: String) {
        var createdAt=new Date()
        //var createdAt=date.getDate()
        this.logMessages.push({person, message, createdAt})
        //console.log(this.logMessages)
        return this.logMessages
    }

    getAccessLog() {
        console.log(`Count is now ${this.logMessages}`);
        return this.logMessages
    }
}