// Task 1.

// # Verilən bir cümlənin bütün hərflərini böyük hərflərə çevirən bir funksiya yazın.convertToUpper("Hello World");
// Nəticə: "HELLO WORLD"

// function convertToUpper(sentence) {
//   return  sentence.toUpperCase();
// }
// console.log(convertToUpper("Hello World"));

// # Verilən bir cümlədəki sözləri tərs sıraya düzmək üçün funksiya yazın.
// function revere(sentence) {
//   console.log(sentence.split("").revere.join
// );

// }
// revere("salam");

// # Daxil edilən cümlədə ən uzun sozu return edən funksiya yazın

// function theLongestWord(sentence) {

//     let words = sentence.split(' ');
//     let newWords = '';
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length>newWords.length) {
//             newWords=words[i];
//         }

//     }
//     return newWords;
// }
// console.log(theLongestWord("salam necesen"));

// # Cümlədəki bir hərfi başqası ilə əvəzləyən və lowerCase edilmiş şəkildə qaytaran bir funksiya yazın.

// replaceCharacter("Salam", "a", "o");

// Nəticə: "solom"

// function replaceCharacter(sentence,let1,let2) {
//   return  sentence.replaceAll(let1,let2).toLowerCase();
// }
// console.log(replaceCharacter("salam","a","o"));

// ARRAY METHODS

// const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// // #add 'Meat' in the beginning of your shopping cart if it has not been already added

// if(!shoppingCart.includes('Meat')){
//     shoppingCart.unshift('Meat')
// }
// console.log(shoppingCart);

// #add Sugar at the end of you shopping cart if it has not been already added

// if (!shoppingCart.includes('Sugar')) {
//     shoppingCart.push('Sugar')
// }
// console.log(shoppingCart);

// #remove 'Honey' if you are allergic to honey

// const newShoppingCart = shoppingCart.filter(item=> item !=='Honey');
// console.log(newShoppingCart);

// if(shoppingCart.includes('Tea')){
//     const index = shoppingCart.indexOf('Tea');
//     if(index!==-1){

//         shoppingCart.splice(index,1,'GreenTea')
//     }
// }

// console.log(shoppingCart);


// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
  
//   #Reverse countries array using reverse() method

// countries.reverse();
// console.log(countries);


// #remove "Canada" and "Denmark", and add "Azerbaijan 
// (splice)

// const indexCanada = countries.indexOf('Canada');
// const indexDenmark = countries.indexOf('Denmark');

// if (indexCanada!==-1){
//     countries.splice(indexCanada,1);
// }

// if (indexDenmark!==-1) {
//     countries.splice(indexDenmark-1,1);
// }
// countries.push('Azerbaijan')
// console.log(countries);



// 3) #Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// const fullStack = frontEnd.concat(backEnd);
// console.log(fullStack)


const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// #Slice out the first 3 companies from the array

// firstThreeCompanies = itCompanies.slice(0,3);
// console.log(firstThreeCompanies);

// #Slice out the last 3 companies from the array

// firstThreeCompanies = itCompanies.slice(-3);
// console.log(firstThreeCompanies);

// #Slice out the middle IT company or companies from the array
// let middleIndex = Math.floor(itCompanies.length/2);
// let middleCompanies;

// if(itCompanies.le4 %2==1){
//     middleCompanies = itCompanies.slice(middleIndex,middleIndex + 1)
// }else{
//     middleCompanies = itCompanies.slice(middleIndex-1,middleIndex+1);
// }
// console.log(middleCompanies);

// #Sort companies array using sort() method
// itCompanies.sort();
// console.log(itCompanies);


// #Change each company name to uppercase one by one and print them out

// for (let i = 0; i < itCompanies.length; i++) {

//     console.log(itCompanies[i].toUpperCase());
    
// }

// #Check if a "Google" company exists in the itCompanies array. If it exist return the company else return a company is not found


    // if(itCompanies.includes("Google")){
    //     console.log("exist in array");
        
    // }else{
    //     console.log("id not found");
        
    // }


    // #Filter out companies which have more than one 'o' without the filter method

    // const oArray = []
    // for (let i = 0; i < itCompanies.length; i++) {
        
    //     if(itCompanies[i].split('o').length-1 >1){
    //         oArray.push(itCompanies[i]);
    //     }
        
    // }

    // console.log(oArray);
    
    // 5) 

    // Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.
    // gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib bir string olaraq return etmelidir.
    //  Meselen -> [1,2] [3,4] '*' gonderilerse output -> 1*2*3*4 string-i olmalidir.

    // function concatArray(arr1,arr2,char) {
    //     const combinade = arr1.concat(arr2);
    //     const result = combinade.join(char);
    //     return result;
    // }

    // let arr1 = [1,2];
    // let arr2 =[3,4];
    // const charr = "*";
    // console.log(concatArray(arr1,arr2,charr));
    