// 1)Rectangle adında bir class yaradın.
// Rectangle class-ına calculateArea() adlı bir metod daxil edin. Bu metod width və 
// height dəyərlərini istifadə edərək düzbucaqlının sahəsini hesablayacaq və geri qaytaracaq.

// Rectangle class-ına calculatePerimeter() adlı başqa bir metod daxil edin.
// Bu metod width və height dəyərlərini istifadə edərək düzbucaqlının perimetrini hesablayacaq və geri qaytaracaq.

// Reactangle sinifinin instanceni yaradın və onun sahəsini və perimetrini hesablayın.

// Nümunə:
// class Rectangle {
// constructor(width, height) {
// this.width = width;
// this.height = height;
// }


// calculateArea() {
// ...
// }

// calculatePerimeter() {
// ...
// }
// }
// const myRectangle = new Rectangle(5, 10);

// console.log("Area of the rectangle:", myRectangle.calculateArea()); // 50
// console.log("Perimeter of the rectangle:", myRectangle.calculatePerimeter()); // 30

        // SOLUTION:

// class Rectangle {
// constructor(width, height) {
// this.width = width;
// this.height = height;
// }


// calculateArea() {
//     return this.width * this.height; 
// }

// calculatePerimeter() {
//     return 2 * (this.width + this.height);
// }
// }
// const myRectangle = new Rectangle(5, 10);


// console.log("Area: ", myRectangle.calculateArea()); 
// console.log("Perimeter: ", myRectangle.calculatePerimeter()); 





// 2)
// BankAccount Class-ı Yaratmaq:

// BankAccount adlı bir class yaradın.
// Bu class-da aşağıdakı xüsusiyyətlər olsun:
// accountNumber (hesab nömrəsi) — Hesabın nömrəsi (string).
// balance (balans) — Hesabın balansı (rəqəm, ilkin olaraq 0 olaraq təyin edilsin).
// Metodlar:

// deposit(amount): Bu metod, istifadəçiyə hesabına müəyyən məbləği əlavə etməyə imkan verəcək.
// Şərt: Əgər əlavə ediləcək məbləğ müsbət deyilsə (sıfır və ya mənfi), xəta mesajı verilməlidir.
// withdraw(amount): Bu metod, istifadəçiyə hesabından müəyyən məbləği çıxarmağa imkan verəcək.
// Şərt 1: Çıxarılacaq məbləğ müsbət olmalıdır.
// Şərt 2: Hesabda kifayət qədər vəsait yoxdursa, xəta mesajı verilməlidir.
// Şərt 3: Əgər çıxarılacaq məbləğ sıfır və ya mənfi olarsa, xəta mesajı verilməlidir.
// Nümunələrin Yaradılması:

// BankAccount class-ından iki nümunə yaradın:
// Birinci hesab üçün:
// Hesab nömrəsi: "101"
// İlkin balans: 1000
// İkinci hesab üçün:
// Hesab nömrəsi: "102"
// İlkin balans: 500
// Əməliyyatlar:

// Hesab 101 (Alice):
// 500 məbləği əlavə etsin.
// 200 məbləği çıxarsın.
// Hesab 102 (Bob):
// 100 məbləği çıxarsın.
// 700 məbləği əlavə etsin.
// Əməliyyatların Nəticələri:

// Hər iki hesab üzrə əməliyyatları yerinə yetirəndən sonra hər birinin balansını çap edin.
// Əgər əməliyyat düzgün yerinə yetirilməyibsə, müvafiq xəta mesajını göstərmək vacibdir.

// Nümunə:
// class BankAccount {
// constructor(accountNumber, balance = 0) {
// ...
// }

// deposit(amount) {
// ...
// }

// withdraw(amount) {
// ...
// }
// }

// const account1 = new BankAccount('101', 1000); // Hesab 101: Alice ilə 1000 balans
// const account2 = new BankAccount('102', 500); // Hesab 102: Bob ilə 500 balans


// account1.deposit(500); // Alice 500 əlavə edir
// account1.withdraw(200); // Alice 200 çıxarır


// account2.withdraw(100); // Bob 100 çıxarır
// account2.deposit(700); // Bob 700 əlavə edir


        // SOLUTION

// class BankAccount  {
//     constructor(accountNumber ,balance ) {
//         this.accountNumber=accountNumber;
//         this.balance=balance;
//     }

//     deposit(amount){
//         if (amount<=0) {
//             throw new Error("Depozit meblegi musbet olmalidir.");
            
//         }else{
//             this.balance+=amount;
//             console.log("Depozit: "+ amount +" Balans: "+ this.balance);
            
//         }
//     }

//     withdraw(amount){
//         if (this.balance<0) {
//             throw new Error("Balans deyeri menfi ola bilmez.");
            
//         }else if(this.balance<amount){
//             throw new Error("Hesabda  kifayet qeder vesait yoxdur.");
            
//         }else{
//             this.balance-=amount;
//             console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
            
//         }
//     }
// }

// const account1 = new BankAccount("101",1000);
// const account2 = new BankAccount("102",500);

// account1.deposit(500);
// account1.withdraw(200);

// account2.deposit(700);
// account2.withdraw(100);

// console.log(`Account101: ${account1.balance}`);
// console.log(`Account102: ${account2.balance}`);
