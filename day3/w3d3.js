// class Governor {
//     static currentGovernor = {  //static proprietes for the governor
//         fullname: "teo Marcelo",
//         party: "Liberal",
//         age : 28,
//         Residency : "Illinois",
//     }

//     static CurrentGovernor() { // static method to know the actual governor
//         return Governor.currentGovernor;
//     }
//     static ElectionYear(year) { // static method to know the election year
//         return year % 4 === 0; // each Governor gover for 4 years 
//     }
//     static GovernorAge(age) { // static method to know the age and elgibilty to Govern
//         if(age > 21){
//             return ('He/She can becomes a Governor');
//         }
//         else{
//             return ('He/She Not Eligible to Govern');
//         }

//     }
// }

// // Test the static methods and properties

// // Get the current Governor
// const currentGovernor = Governor.CurrentGovernor();
// console.log(`Current Governor: ${currentGovernor.fullname}`);

// // Check if it's an election year
// const year = 2024;
// const ElectionYear = Governor.ElectionYear(year);
// console.log(`Is ${year} an election year? ${ElectionYear}`);

// // Check if is over 21 years old
// const age = 28 ;
// const GovernorAge = Governor.GovernorAge(age);
// console.log(`He/She ${currentGovernor.age} years old, ${GovernorAge}`);




// class Person {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }

//     personalInfo() {
//         return `my name is ${this.name}, and I am ${this.age}-year-old, ${this.gender}.`;
//     }

//     greet() {
//         return `Bonjour from ${this.name}!`;
//     }

//     workDays() {
//         return `${this.name} work days : from Monday throu Friday.`;
//     }
// }
// // Create a PostalWorker class that inherits from person
// class PostalWorker extends Person {
//     constructor(name, age, gender, employeeId) {
//         super(name, age, gender);
//         this.employeeId = employeeId;  // new proprety for class poslalWorker
//     }

//     drivers(VehiculeType) {    // new method for class postalWorker
//         return `I am ${this.name} Driver with employee ID ${this.employeeId}. I am driving ${VehiculeType}.`;
//     }
// }
// // Create a Chef class that inherits from person
// class Chef extends Person {
//     constructor(name, age, gender, speciality) {
//         super(name, age, gender);
//         this.speciality = speciality; // new proprety for class chef
//     }

//     chefCooker(dishName) {   // new method for class Chef
//         return `${this.name}, a chef cooker : ${this.speciality} is my speciality, I am preparing ${dishName}.`;
//     }
// }

// // Create two PostalWorkers and two Chefs
// const postalWorker1 = new PostalWorker("John", 35, "male", "P12345");
// const postalWorker2 = new PostalWorker("Nicky", 25, "female", "P12346");

// const chef1 = new Chef("Toni", 44, "male", "Italian cuisine");
// const chef2 = new Chef("Jeremy", 53, "male", "French cuisine");

// // Test methods for all individuals
// console.log(postalWorker1.personalInfo());
// console.log(postalWorker1.greet());
// console.log(postalWorker1.drivers('a Van'));
// console.log(postalWorker1.workDays());
// console.log("------------------------------------------------------");
// console.log();

// console.log(postalWorker2.personalInfo());
// console.log(postalWorker2.greet());
// console.log(postalWorker2.drivers('a Big Track'));
// console.log(postalWorker2.workDays());
// console.log("------------------------------------------------------");
// console.log();

// console.log(chef1.personalInfo());
// console.log(chef1.greet());
// console.log(chef1.chefCooker("Italian Pasta"));
// console.log(chef1.workDays());
// console.log("------------------------------------------------------");
// console.log();

// console.log(chef2.personalInfo());
// console.log(chef2.greet());
// console.log(chef2.chefCooker("Crème Brûlée"));
// console.log(chef2.workDays());
// console.log("------------------------------------------------------");
// console.log();


class BankAccount {     // calss called BankAccount
    constructor(ownerName, initialBalance, acctNum) {
        this.ownerName = ownerName;
        this.balance = initialBalance;
        this.acctNum = acctNum;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount ;
            return "Deposited $" + amount + ". New balance: $" + this.balance;
        } else {
            return 'Invalid deposit amount.';
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return + amount + ".New balance: $" +this.balance;
        } else {
            return 'Insufficient funds.';
        }
    }
}

class CheckingAccount extends BankAccount {
    constructor(ownerName, initialBalance, acctNum, overdraftEnabled) {
        super(ownerName, initialBalance, acctNum);
        this.overdraftEnabled = overdraftEnabled;
    }

    withdraw(amount) {
        if (this.overdraftEnabled || amount <= this.balance) {
            this.balance -= amount;
            return `Withdrawn $${amount}. New balance: $${this.balance}`;
        } else {
            return 'Insufficient funds. or overdraftEnabled';
        }
    }
}

class SavingsAccount extends BankAccount {
    withdraw(amount) {
        return "Withdrawals are not allowed in a savings account.";
    }
}

// Example usage:

const account1 = new CheckingAccount("Jhon", 7000, 23499890);
const account2 = new CheckingAccount("Mat", 500, 78511342);
const account3 = new SavingsAccount("Laura", 2000, 43788598);

console.log("Owner Name:", account1.ownerName);
console.log("Balance:$", account1.balance);
console.log("Account Number:", account1.acctNum);
console.log(account1.withdraw(1200));  // Valid withdrawal 
console.log("------------------------------------------------------");
console.log();

console.log("Owner Name:", account2.ownerName);
console.log("Balance: $", account2.balance);
console.log("Account Number:", account2.acctNum);
console.log(account2.withdraw(700));   // Insufficient funds
console.log("------------------------------------------------------");
console.log();

console.log("Owner Name:", account3.ownerName);
console.log("Balance: $", account3.balance);
console.log("Account Number:", account3.acctNum);
console.log(account3.withdraw(500));   // Withdrawals disallowed in savings


// console.log(account1.deposit(500)); //check deposit if working