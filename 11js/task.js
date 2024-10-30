// task1
//     3 ədəd verilib. Bu 3 ədəd içindən cəmləri ən böyük olan 2 ədədi qaytaran proqram tərtib edin.
// Məsələn: a=1, b=2, c=3 daxil etdikdə cavab bu şəkildə olmalıdır: Big sum result 2 and 3*/

// SOLUTION:

// let a = prompt("a ni daxil et: ");
// let b = prompt("b ni daxil et: ");
// let c = prompt("c ni daxil et: ");

// if (a + b > c) {
//   alert("Big sum result " + a + " and " + b);
// } else if (a + c > b) {
//   alert("big sum result " + a + " and " + c);
// } else if (b + c > a) {
//   alert("big sum result " + b + " and " + c);
// } else {
//   alert("invalid error");
// }

// task2
// 3 ədəd verilib. Bu ədədlərin birləşməsindən yaranan ən böyük və ən kiçik 3 rəqəmli ədədi tapan proqram tərtib edin. Məsələn: a=4, b=5, c=6 daxil etdikdə cavab bu şəkildə olmalıdır:
// Big number: 654
// Little number: 456 */

// let a = prompt("birinci ededi daxil et: ");
// let b = prompt("ikinci ededi daxil et: ");
// let c = prompt("ucuncu ededi daxil et: ");

// let abc = +(a + b + c);
// let bac = +(b + a + c);
// let bca = +(b + c + a);
// let acb = +(a + c + b);
// let cab = +(c + a + b);
// let cba = +(c + b + a);

// //  birinci en boyuk ededi tapib alertde gosterir
// if (abc > bac && abc > bca && abc > acb && abc > cab && abc && cba) {
//   alert("en boyuk eded: " + abc);
// } else if (bac > abc && bac > bca && bac > acb && bac > cab && bac > cba) {
//   alert("en boyuk eded: " + bac);
// } else if (bca > abc && bca > bac && bca > acb && bca > cab && bca > cba) {
//   alert("en boyuk eded: " + bca);
// } else if (acb > abc && acb > bca && acb > bac && acb > cab && acb > cba) {
//   alert("en boyuk eded: " + abc);
// } else if (cab > abc && cab > bca && cab > acb && cab > bac && cab > cba) {
//   alert("en boyuk eded: " + cab);
// } else if (cba > abc && cba > bca && cba > acb && cba > cab && cba > bac) {
//   alert("en boyuk eded: " + cba);
// } else {
//   alert("invalid error");
// }

// // ikinci olaraqda en kiciyini tapib alertde gosterir
// if (abc < bac && abc < bca && abc < acb && abc < cab && abc && cba) {
//   alert("en kicik eded: " + abc);
// } else if (bac < abc && bac < bca && bac < acb && bac < cab && bac < cba) {
//   alert + ("en kicik eded: " + bac);
// } else if (bca < abc && bca < bac && bca < acb && bca < cab && bca < cba) {
//   alert(bca);
// } else if (acb < abc && acb < bca && acb < bac && acb < cab && acb < cba) {
//   alert("en kicik eded: " + abc);
// } else if (cab < abc && cab < bca && cab < acb && cab < bac && cab < cba) {
//   alert("en kicik eded: " + cab);
// } else if (cba < abc && cba < bca && cba < acb && cba < cab && cba < bac) {
//   alert("en kicik eded: " + cba);
// } else {
//   alert("invalid error");
// }

// question1
// katetleri verilen fiqurun duzbucaqli olub olmamasi

// let katet1 = prompt("katet1 i yaz: ");
// let katet2 = prompt("katet2 i yaz: ");
// let hipetonuz = prompt("hipetonuz i yaz: ");

// let ketetlerin_kvadrati = katet1 * katet1 + katet2 * katet2;
// let hipetonuz_kvadrati = hipetonuz * hipetonuz;

// if (ketetlerin_kvadrati == hipetonuz_kvadrati) {
//   alert("duzbucaqli ucbucaqdir.");
// } else {
//   alert("duzbucaqli ucbucaq deyil. ");
// }

// question2
// 3reqemli ededin hansi reqemlerden ibaret oldugunu tapmaq

// let ucreqemli = prompt("3reqemli ededi yazin: ");

// let reqem1 = Math.floor(ucreqemli / 100);
// let reqem2 = Math.floor((ucreqemli % 100) / 10);
// let reqem3 = Math.floor(ucreqemli % 10);

// if(99<ucreqemli<1000){
//     alert(`reqemler: ${reqem1}, ${reqem2}, ${reqem3}`);
// }else{
//     alert("ucreqemli deyil!");
// }

// question3
// let ay = prompt("ayi yaz: ");

// switch (ay) {
//   case "yanvar":
//   case "mart":
//   case "may":
//   case "iyul":
//   case "avqust":
//   case "oktyabr":
//   case "dekabr":
//     alert("31 gun");
//     break;
//   case "fevral":
//     alert("28/29 gun");
//     break;
//   case "aprel":
//   case "iyun":
//   case "sentyabr":
//   case "noyabr":
//     alert("30 gun");
//     break;

//   default:
//     alert("bele bir ay yoxdur.");
//     break;
// }


