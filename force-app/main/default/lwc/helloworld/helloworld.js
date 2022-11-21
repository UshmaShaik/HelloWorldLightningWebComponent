import { LightningElement } from 'lwc';

export default class Helloworld extends LightningElement {

    greeting = 'Amazon Enterprises';

    changeHandler(event) {

        this.greeting = event.target.value;

    }

    greeting = '$2050000';

    changeHandler(event) {

        this.greeting = event.target.value;

    }

}