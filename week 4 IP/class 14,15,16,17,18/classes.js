// person.test();
// person.login(); //Method
// console.log("hello".toUpperCase());
// console.log(this);
// Method chaining
// person.login().updatelogin().updatelogin().logout():
// .logout();
// console.log(person.count);

// ES6 Class keyword
// ES5 Prototypes
// console.log({name: 'Audi'});
class Person{
    constructor(name, email, count=0){
        this.name = name;
        tjos.email = email;
        this.count=count;

    }
    login(){
        console.log(this.name. 'has logged in')
    }
    logout{}{
        console.log(this.name. 'has logged out')
    }

}

// new keyword:creating an instance of Person class

let person1 = new Person("John", "john@wick.com");
let person2 = new Person("Jay", "jay@z.com");
let person3 = new Person("Jake", "jake@tyler.com", 20);

person1.login();
person2.login();
console.log(typeof person3);

// Number

let rollNo = new Number(10);
console.log(typeof rollNo, typeof 10);

let nm = new String("samiksha");
console.log(nm.toUpperCase());

let obj = new Object({ name: "anushka" });
console.log(obj);