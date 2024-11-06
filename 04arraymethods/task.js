let arr = [
    {
      name: "test",
      key: 1,
    },
    {
      name: "task",
      key: 2,
    },
    {
      name: "tanqo",
      key: 3,
    },
    {
      name: "like",
      key: 4,
    },
    {
      name: "task",
      key: 5,
    },
    {
      name: "trust",
      key: 6,
    },
    {
      name: "test",
      key: 7,
    },
    {
      name: "last",
      key: 8,
    },
    {
      name: "tanqo",
      key: 9,
    },
    {
      name: "elephant",
      key: 10,
    },
    {
      name: "love",
      key: 11,
    },
    {
      name: "small",
      key: 12,
    },
    {
      name: "little",
      key: 13,
    },
  ];

  // 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter).

//   let filtered = arr.filter(item=>item.name.startsWith('t'));
//   console.log(filtered);

// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)
// let count = 0;

// arr.forEach(item => {
//   if (item.name.startsWith('t') && item.name.endsWith('t')) {
//     count++;
//   }
// });

// console.log(count)

// 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key
// "lerinin cemini tapin


// sum = 0;
// arr.forEach(element => {
//     if (element.name.startsWith('t')&&element.name.endsWith('t')) {
//         sum+=element.key
//     }
// });

// console.log(sum);

// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

// arr.forEach(element => {
//     if (element.name.endsWith('e')) {
//         element.name="SuperDev"
//     }
// });
// console.log(arr);


// 5) "name"-i en uzun olan obyekti tapin

// let longestName = arr.reduce((curr,longest)=>{
//     if (longest.name.length>curr.name.length) {
//         return curr;
//     }else{
//         return longest;
//     }
// },arr[0]);
// console.log(longestName);


// 6) "name"-i en uzun olan obyektin key'ni tapin
// let longestName = arr.reduce((curr,longest)=>{
//     if (longest.name.length>curr.name.length) {
//         return curr;
//     }else{
//         return longest;
//     }
// },arr[0]);
// console.log(longestName.key);

// 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin.

// let indexKvadrat = arr.reduce((longest,curr,index)=>{
//     if (curr.name.length > arr[longest].name.length) {
//         return index;
//     }
//     return longest;
// },0)

// let kvadrat = indexKvadrat*indexKvadrat;
// console.log(kvadrat);


// 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)
// let longestName = arr.filter((element=>element.name.length===4));
// console.log(longestName);

// 9)  en boyuk "key"
// i olan obyektin "name"-i ni tapin.

// let longestKey = arr.reduce((curr,longest)=>{
//     if (curr.key>longest.key) {
//         return curr.name;
//     }else{
//         return longest.name;
//     }
// })  

// console.log(longestKey);

// 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)i tapin.

// let filtered = arr.filter(item=>{
//     let include =item.name.split('l').length-1;
//     return include>=2;
// })
// console.log(filtered);

// 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.

// let filteredT= arr.filter(item =>{
//    includeT= item.name.split('t').length-1;
//     return includeT>=2;

// })
// console.log(filteredT);


// 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq.

// let filteredKey = arr.filter(item=>{
//     if (item.key>10 &&item.name.startsWith('l')) {
//         return item;
//     }
// })
// console.log(filteredKey);
