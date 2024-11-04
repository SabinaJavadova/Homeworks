// 1. Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən function.
// Misalçün function-a gələn ilk arqumenti 2-ci arqument qədər qüvvətə yüksəldən function - dəyərləri prompt vasitəsi ilə qəbul edib
//  function-a göndərin)

// let eded = prompt("ededi daxil edin: ")
// let quvvet = prompt("quvveti daxil edin: ")

// function quvveteYukseltme(eded,quvvet) {
//     let result = 1;
//     for (let i = 0; i < quvvet; i++) {
//         result*=eded;

//     }
//     return result;
// }
// let result = quvveteYukseltme(eded,quvvet);

// alert( `${eded} ededi ${quvvet}-e quvvetine yukseltdikde: ${result}`);

// 2.Bir funksiya yazın , 3 parametr qəbul etsin.
// Birincisi array olsun ikinci və rəqəm arraydəki elementin hal-hazırda olduğu mövqeni,
//  3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.
// Məsələn:
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// Expected Output:
// [20, 30, 10, 40, 50]

// function replace(arr,index,index2) {
//     const element = arr[index];
//     const newArray = [];

//     for (let i = 0; i < arr.length; i++) {

//         if(i===index2){
//             newArray.push(element);
//         }
//         if(i !==index){
//             newArray.push(arr[i])
//         }
//     }
//     return newArray;
// }
// console.log(replace([1,2,3,4,5],3,0));
// console.log(replace(["a","b","c","d"],3,1));


// 3.Daxil edilən arraydə təkrarlanan elementi silən və yeni array qaytaran funksiya yazın.
// Məsələn:
// console.log(deleteRepeate([1, 2, 2, 3, 4, 4, 5]))
// console.log(deleteRepeate([1, 2, 3, 4, 5]))
// console.log(deleteRepeate([1, -2, -2, 3, 4, -5, -6, -5]))

// Expected Output:
// [1,2,3,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]

// function deleteRepeate(arr) {
//     let newArray =[];
//     for (let i = 0; i < arr.length; i++) {
//         let isrepeat = false;
//         for (let j = 0; j < newArray.length; j++) {
//             if (arr[i]===newArray[j]) {
//                 isrepeat=true;
//                 break;
//             }

//         }
//         if (!isrepeat) {
//             newArray.push(arr[i])
//         }

//     }
//     return newArray
// }
// console.log(deleteRepeate([1,2,3,3,4,5,6,6,7,8]));

// 4.Daxil edilən cümlənin bütün sözlərinin ilk hərfini böyük edərək qaytaran funksiya yazın.

// sentenceCapitalization("a short sentence")
// Expected Output:
// "A Short Sentence"

// function sentenceCapitalization(sentence) {
//     let capitalSentence = ""
//     let NewWord = true;  //flag
//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];
//         if (char=== " ") {
//             capitalSentence+=char;
//             NewWord = true;
//         }else{
//             if (NewWord) {
//                 capitalSentence += char.toUpperCase();
//                 NewWord =false;
//             }else{
//                 capitalSentence += char;
//             }
//         }
//     }
//     return capitalSentence;
// }
// console.log(sentenceCapitalization("a short sentence"));      

//5. Daxil edilən iki arrayi birləşdirən funksiya yazın.
// console.log(concatArray([1,2,3,4,5],[6,7,8,9]))
// Expected Output:
// [1,2,3,4,5,6,7,8,9]

// function concatArray(arr1,arr2) {
//     const concat = [];
//     for (let i = 0; i < arr1.length; i++) {
//         concat.push(arr1[i]);

//     }
//     for (let j = 0; j < arr2.length; j++) {
//         concat.push(arr2[j])

//     }
//     return concat;
// }

// console.log(concatArray([1,2,3,4,5],[6,7,8,9]));

// 6. Daxil edilən cümlədə necə söz olduğun tapan funksiya yazın.

// function calctSentence(sentence) {
//     let count = 0;
//     let isNone = false;
//     for (let i = 0; i < sentence.length; i++) {
//         const char = sentence[i];
//        if (char!== " ") {
//        if (!isNone) {
//         isNone =true;
//         count++;
//        }
//     }else{
//         if (isNone) {

//             isNone=false;
//         }
//     }

//     }
//     return count;
// }
// console.log(calctSentence("salam necesen "));

// 7. Function yazın. Parametr qəbul etsin və bu parametr bir array (ədədlərdən ibraət array) olsun.
//  Funksiya həmin arrayin medianını tapsın.Median ən ortada dayanan ədədi bildirir.
//  Əgər array uzunluğu cütdürsə onda ortadakı 2 ədədin cəminin yarısı median olacaqdır.

// function median(arr) {
//     const length = arr.length;
//     const medianIndex = Math.floor(length / 2);
//     if (length % 2 === 0) {
//         return (arr[medianIndex - 1] + arr[medianIndex]) / 2;
//     } else {
//         return arr[midIndex];
//     }

// }
// console.log(median([3, 1, 4, 2]));

// 8.
// Write a method that returns a duplicate-free array.
// console.log(clearDuplicate([1, 2, 1, 2, 3])); -> [1, 2, 3]
// console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); -> ['a', 2, 'd', 14, 's', false]

// function clearDuplicate(arr) {
//     let result = []
//     let isDublicate ;
//     for (let i = 0; i < arr.length; i++) {
//         isDublicate = false;
//         for (let j = 0; j < result.length; j++) {

//             if (arr[i]==result[j]) {
//                 isDublicate =true;
//                 break;
//             }

//         }
//         if (!isDublicate) {
//             result.push(arr[i])
//         }
//     }
//     return result;
// }
// console.log(clearDuplicate([1, 2, 1, 2, 3]));

// 10.

// const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// countries arrayindəki ölkələrin ilk 3 hərfini (hər bir hərf böyük olmalıdır) yeni arrayda yığın

// output: ["FIN", "DEN", "SWE", "NOR", "ICE"];

// function getThreeLetters(countries) {
//   const toUpper = [];

//   for (let i = 0; i < countries.length; i++) {
//     let firstThree = "";
//     for (let j = 0; j < 3 && j < countries[i].length; j++) {
//       firstThree += countries[i][j].toUpperCase();
//     }
//     toUpper.push(firstThree);
//   }

//   return toUpper;
// }
// console.log(getThreeLetters(["Finland", "Denmark", "Sweden", "Norway", "Iceland"]));
