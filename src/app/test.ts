import { Joueur } from './joueur';

export class Test {
    user : string;
    note: number;
}

export class ResultResponse {
    question : Array<number>;
    result : number;
    goodAnswer: boolean
}

export class Question {
    operator1 : number;
    operator2: number;
    result : number;
}


