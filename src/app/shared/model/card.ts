import { Time } from "../../../../node_modules/@angular/common";

export class Card {
    constructor(
        public key:string,
        public answer: string,
        public createdDate: string,
        public question:string){
    }
}
