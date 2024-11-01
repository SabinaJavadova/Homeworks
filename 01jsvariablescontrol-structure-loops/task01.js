// 1) Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.
        // SOLUTION
// let eded = 432;
// let sum = 0;
// let hasil = 1;
// let count = 0;

// for (let i = 0; i < 3; i++) {
//   let reqem = eded % 10;
//   sum += reqem;
//   hasil *= reqem;
//   eded = Math.floor(eded / 10);
//   count++;

// }
// let average = sum / count;

// alert(`Rəqəmlərin cəmi: ${sum}`);
// alert(`Rəqəmlərin hasil: ${hasil}`);
// alert(`Rəqəmlərin ədədi ortası: ${average}`);

// 2) Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.
        // SOLUTION
// let eded = 6;
// console.log(`Verilmish eded: ${eded}`);
// console.log("Bölənlər:");
// for (let i = 1; i <= eded; i++) {
//     if(eded % i==0){
//         console.log(i);

//     }
// }

// 3) Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.
        // SOLUTION
// let eded = 6;
// let count = 0;
// for (let i = 1; i < eded; i++) {
//   if (eded % i == 0) {
//     count++;
//   }
// }
// console.log(count);


// 4) for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
//  0 x 0 = 0
//  1 x 1 = 1
//  2 x 2 = 4
//  3 x 3 = 9
//  4 x 4 = 16
//  5 x 5 = 25
//  6 x 6 = 36
//  7 x 7 = 49
//  8 x 8 = 64
//  9 x 9 = 81
//  10 x 10 = 100

        // SOLUTION
// for (let i = 0; i <= 10; i++) {

//     let hasil = i*i;
//     console.log(`${i}*${i}=${hasil}`);
    
// }

// 6) 0 - 100 arası tək ədədlərin və cüt ədədlərin cəmini tapın
// let evenSum = 0; 
// let oddSum = 0; 
// for (let i = 0; i <=100; i++) {
//     if(i %2 ==0){
//         evenSum+=i;
//     }else if(i %2 ==1){
//         oddSum +=i;
//     }
    
// }
// console.log(`Cut ededlerin cemi: ${evenSum}`);
// console.log(`Tek eddlerin cemi: ${oddSum}`);

// 8) Arraydəki ən böyük və ən kiçik element-ləri tapan  alqoritm yazın. Math objectindən istifadə edə bilməzsiniz.
// Məsələn: [4,2,7,9,3,12,46,32,19];
// Minimum: 2
// Maximum: 46


// let numbers = [4, 2, 7, 9, 3, 12, 46, 32, 19];
// let max = numbers[0];
// let min = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//    if(numbers[i]>max){
//     max=numbers[i];
//    }
//     if(numbers[i]<min){
//         min=numbers[i];
//     }
// }
// console.log("max: "+max);
// console.log("min: "+min);

// 7) Arraydəki   ən böyük və ən kiçik element-lərin ədədi ortasını tapıb qaytaran alqoritm yazın.
//  Math objectindən istifadə edə bilməzsiniz. Məsələn: [4,2,7,9,3,12,46,32,19]; => min: 2, max: 46 => ededi ortasi (46+2)/2 => 24 qaytarmalıdır.

// let array = [4,2,7,9,3,12,46,32,19];
// let max = array[0];
// let min = array[0];
// for (let i = 0; i < array.length; i++) {
//     if (array[i]>max){
//         max= array[i];
//     }
//     if(array[i]<min){
//         min= array[i];
//     }
// }
// console.log("max ve min-in ededi ortasi:" + (max+min)/2);


// 8) let sampleNews = `As software developers, the natural tendency is to start developing applications based on your ownhands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;

// task: sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın.

// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your ownhands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
//  and new features happen.`

//  let count= 0;
//  for (let i = 0; i < sampleNews.length; i++) {
//     if(sampleNews[i]=" "){
//         count++;
//     }
    
//  }
//  console.log(count);
 

// EXTRA:
// #  0 - 100 arası yalnız sadə ədədləri console'da çap edin
// for (let num = 2; num <=100; num++) {
//     let isPrime = true;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
       
//         if (num % i == 0) {
//             isPrime=false;
//             break;
//         }

        
//     }
//     if (isPrime) {
//         console.log(num);
        
//     }
// }

// 14. Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.
// let array = [12,23,43,54,65,67,89,90,90,100];
// let eded= +prompt("ededi yaz: ")
// for (let i = 0; i < array.length; i++) {
//      if(eded== array[i]){
//         alert(array[i] + "ededi arrayde var");
        
//      }else{
//         alert("eded yoxdur")
//         break;
//      }
        
// }

// 15.
//  const students = [
//         { name: "Ali", scores: [90, 85, 92] },
//         { name: "Mammal", scores: [75, 80, 85] },
//         { name: "Camil", scores: [90, 95, 85] },
//         { name: "Davud", scores: [100, 100, 100] }
//    ]; 
// tələbələr array-ində tələbələrin ortalaması ən yüksək olanı, ortalaması 90-dan yuxarı olanları tapan proqram yazın.

// for (let i = 0; i < students.length; i++) {
//         let cem= 0;
//         let ortalama;
//         let skor = [];
//         for (let j = 0; j < (students[i].scores).length; j++) {
//                 cem += students[i].scores[j]
                
//         }
//         ortalama =cem/(students[i].scores).length;
//         // console.log(cem);
//         console.log(`${students[i].name}`+ortalama);
//         if(ortalama>90){
//                 console.log( `${students[i].name}` + "ortalamasi 90dan coxdur." );
                
//         }

        
// }
// 11) Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

// racecar - polidromdur
// hello - polidrom deyil

// let soz = prompt("sozu yaz: ");
// let reverse = "";
// for (let i = soz.length-1; i >= 0; i--) {
//     reverse+= soz[i];

// }

// if(soz == reverse){
//     alert(`polidromdur. ${soz} = ${reverse}`);
// }
// else{
//     alert(`polidrom deyil. ${soz} = ${reverse}`);
// }