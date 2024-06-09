// break/continue ga oid masalalar

// masala 1
// for(let i = 1; i<=50; i++ ){
//     if (i==30){
//         break
//     }
//     console.log(i);
// }

// masala 2
// for(let i =1; i<=50; i++){
//     if(i%5===0){
//         continue
//     }
//     console.log(i);
// }


// masala 3
// for(let i = 1; i<=100; i++ ){
//     if (i==75){
//         break
//     }
//     console.log(i);
// }


// masala 4
// for(let i =1; i<=30; i++){
//     if(i%3===0){
//         continue
//     }
//     console.log(i);
// }




// While hamda do…while yordamida ishlanadigan masalalar


// masala 1
// let i = 1;
// while(i<=20){
//     console.log(i);
//     i++
// }

// masala 2
// let i = 10;
// while(i>=1){
//     console.log(i);
//     i--
// }


// masala 3
// let i = 1;
// while(i<=50){
//     if(i%2===0)
//     console.log(i);
//     i++
// }


// masala 4
// let i = 1;
// while(i<=50){
//     if(i%2===1)
//     console.log(i);
//     i++
// }


// masala 5
// let i = 1;
// let result = 0;
// while(i<=100){
//     result = result+i;

//     i++
// }
// console.log(result);



// masala 6
// let i = 1;
// let result = 0;
// while(i<=10){
//     result = i**2;
//     console.log(result);
//     i++
// }


// masala 7
// let a = +prompt("son kiriting")
// let i = 1;
// while(i<=a){
//     if (a<0)
//     break
//     console.log(i);
//     i++
// }



// masala 8
// let i = 1;
// while(i){
//     if (2**i===1024)
//     break
//     console.log(i);
//     i++
// }


// masala 9
// let a = +prompt("a sonini kiriting")
// let i = 1;
// let r = 1;
// while(i<=a){
//     console.log(r);
//     r *= i;
//     i++
// }

// masala 10
// let i = 1;
// while(i<=20){
//     if(i%3===0)
//     console.log(i);
//     i++
// }



// ### `do...while` sikl operatoriga oid masalalar:

// masala 11
// let i = 1;
// do{
//     console.log(i);
// i++
// }while(i<=10)


// masala 12
// let i = 10;
// do{
//     console.log(i);
// i--
// }while(i>=1)


// masala 13
// let i = 1;
// do{
//     if(i%2===0)
//     console.log(i);
// i++
// }while(i<=100)


// masala 14
// let a= +prompt("a sononi kiriting");
// let i = 1;
// let r= 0;
// do {
//     r = a*a;
//     if (a===0)
//     break
//     console.log(r)
//     break
//     i++
// }
// while(i<=a)


// masala 15
// let a= +prompt("a sononi kiriting");
// let i = 1;
// do {
//     console.log(i)
//     if (a>=10)
//     break    
//     i++
// }
// while(i<=a)


// Umumiy masalalar.


// masala 1
// for (let i = 1; i<=50; i++){
//     if(i%5==0){
//         console.log(i,`5 ga karrali`);
//     }else if(i%7===0){
//         console.log(i,`7 ga karrali`);

//     }
//     if(i%5===0&&i%7===0){
//         console.log(i,`5 va 7 ga karrali`);
//     }
// }

// masala 2
// for (let i = 1; i <= 12; i++) {
//     switch (i) {
//         case 1:
//             console.log(`yanvar`);
//             break
//         case 2:
//             console.log(`fevral`);
//             break
//         case 3:
//             console.log(`mart`);
//             break
//         case 4:
//             console.log(`aprel`);
//             break
//         case 5:
//             console.log(`may`);
//             break
//         case 6:
//             console.log(`iyun`);
//             break
//         case 7:
//             console.log(`iyul`);
//             break
//         case 8:
//             console.log(`avgust`);
//             break
//         case 9:
//             console.log(`sentabr`);
//             break
//         case 10:
//             console.log(`oktabr`);
//             break
//         case 11:
//             console.log(`noyabr`);
//             break
//         case 12:
//             console.log(`dekabr`);
//             break
//         default:
//             console.log(`bunday oy raqami yo'q`)
//             break;
//     }
// }


// masala3
// let i = 1;
// while(i<=100){
//     if(i%2===0){
//         console.log(i)
//     }
//     if(i===77)
//     break
//     i++
// }

// masala 4
// let i = 1;
// while (i <= 7) {
//     switch (i) {
//         case 1:
//             console.log(`dushanba`);
//             break;
//         case 2:
//             console.log(`seshanba`);
//             break;
//         case 3:
//             console.log(`chorshanba`);
//             break;
//         case 4:
//             console.log(`payshanba`);
//             break;
//         case 5:
//             console.log(`juma`);
//             break;
//         case 6:
//             console.log(`shanba`);
//             break;
//         case 7:
//             console.log(`yakshanba`);
//             break;

//         default:
//             console.log(`bunday hafta kuni yo'q`)
//             break;
           
//     }
//     i++
// }


// masala 5
// let a = +prompt(`biror sonni kiriting`)
// let i = 1;
// do{
//     if(a>0){
//         console.log(i,`musbat`)
//     } else if(0!=i) {
//         console.log(i, `manfiy`)
//     } else {
//         console.log(i, ` nol ga teng`)
//     }

// i++
// }while(i<=a)


// masala 6
// let a = +prompt(`hafta kunini kiriting`)
// let i = 1
// do{
//     switch (a) {
//                 case 1:
//                     console.log(`dushanba`);
//                     break;
//                 case 2:
//                     console.log(`seshanba`);
//                     break;
//                 case 3:
//                     console.log(`chorshanba`);
//                     break;
//                 case 4:
//                     console.log(`payshanba`);
//                     break;
//                 case 5:
//                     console.log(`juma`);
//                     break;
//                 case 6:
//                     console.log(`shanba`);
//                     break;
//                 case 7:
//                     console.log(`yakshanba`);
//                     break;
        
//                 default:
//                     console.log(`bunday hafta kuni yo'q`)
//                     break;}
//                     break
//     i++
// }while(i<=a)


// masala 7
// for (let i = 1; i<=100; i++){
//     if(i%3==0&& i%5==0){
//         console.log(i,`FizzBuzz`)
//     } else if (i%3==0){
//         console.log(i,`Fizz`)
//     }
//     else if (i%5){
//         console.log(i,`Buzz`)
//     }
// }

// masala 8
// let a = +prompt(` biror son kiriting`);
// let i = 1;
// while(i<=a){
//     if (i>10 || i%5 ==0){
//         console.log(i)
//     }
//     if (i > 100){
//         break
//     }
//     i++
// }

// masala 9

// let a = +prompt(`biror sonni kiriting`);
// let i = 1;
// do{
//     if(a>1 && a<10){
//         console.log(i)
//     } else if (a==0){
//         break
//     }
//     i++
// }while(i<=a)


// masala 10
// for (let i =1; i<=30; i++){
//     if (i%2==0){
//         switch (i) {
//             case i:
//                 console.log(i,`juft son`)
//                 break;
        
//             default:
//                 break;
//         }
//     } else if (i%2==1) {  switch (i) {
//         case i:
//             console.log(i,` toq son`)
//             break;
    
//         default:
//             break;
//     }
//     }
//     if (i==15){
//         console.log(i,`o'rtacha son`)
//     }
// }


// masala 11

// let a = +prompt(`biror sonni kiriting`);
// let i = 1;
// while(i<=a){
//    if (a>=30){
//     break
//    }
//     if (i%2==0 || i%3==0){
//         console.log(i,`2 yoki 3 ga bo'linadi`)
//     }
//     i++
// }

// masala 12
// let a = +prompt(`biror sonni kiriting`);
// let r;
// do{
//     r=a%10;
//     if (a==0){
//         break
//     }
//     switch (a) {
//         case a:
//             console.log(r);       
//     }
//     a = Math.trunc(a/10);
    
// }while(a>=1);


// masala 13
// for (let i = 1; i<=50; i++){
//     if (i%4 ==0 && i%2==0){
//         console.log(i,`Special Number`);
//     } else{
//   console.log(i);
//     }
// }


// masala 14
// let a = +prompt(`son kiriting`);
// let i = 1;
// while(i<=a){
//     if (i%3==0 || i%7==0){
//         console.log(i)
//     } else if (a==0){
//         break
//     }

//     i++
// }


// masala 15
// let a = +prompt(`son kiriting`);
// let i = 1;
// do{
//     if (a<0){
//         break
//     }
//     if (i>0 && i%10!=0) {
//         console.log(i)
//     }
  
//     i++
// }while(i<=a)