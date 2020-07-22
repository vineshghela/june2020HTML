import pet from './JS.js';
class dog extends pet{
    constructor(name, tricks) {
        super(name); // Calls the super constructor and assigns the attribute.
        this._tricks = tricks;
      }
      play() {
        console.log(`${this._name} wants to show you his tricks!`);
      }
    
      tricks() {
        console.log(`${this._name} can do a ${this._tricks}`);
      }
      speak() {
        super.speak();
        console.log(`WOOOOOOOOOF`); // Overrides parent function call();
      }
    }
    
    let doggy = new dog("Bark Wahlberg", "Backflip");
    doggy.hungry();
    doggy.speak();


    export default dog;
