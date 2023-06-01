interface Adder{
    add(nr: number):void;
    getSum():number;
    reset(): void; // Added reset method to the interface
}

class SimpleAdder implements Adder{
    protected sum:number=0;
    add(nr:number){this.sum+=nr;}
    getSum(): number {
        return this.sum;
    }
    reset() {
        this.sum = 0;
    }
}

export{
    Adder,
    SimpleAdder
}