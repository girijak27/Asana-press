import { Xyz } from './Xyz'

export class Abc extends Xyz {

    fname;
    protected lname;
    constructor(){
        super();
    }

    sum(){
        console.log(Xyz.findDesignation());
    }

    sum(z, y){

    }
}

