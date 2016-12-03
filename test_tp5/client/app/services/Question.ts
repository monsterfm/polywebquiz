export class Question {
    constructor(
        public id : string,
        public domaine: string,
        public question: string,
        public choices: [string, string,string],
        public Correctanswer: string
       
    ) 
    { 
    	
    }

}