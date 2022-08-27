export const oddEven = (num) => {
    const number = num
    number.toString().split("").map(iNumb => parseInt(iNumb,10)).reduce((a,b) => a + b);
    return number % 2 === 0 ? "Even" : "Odd";
};

oddEven(234);

// Yönerge:
/*
    Bir sayının Tek mi Çift mi olduğunu belirleyen bir işlev oluşturun. 
    Bir sayı, tüm basamaklarının toplamı tek ise tek, tüm basamaklarının toplamı çift ise bir sayıdır. 
    Bir sayı tek ise, "Odd" döndürün. Aksi takdirde, "Even" değerini döndürün. Örnek olarak:

oddishOrEvenish(43) ➞ "Odd"
    4 + 3 = 7
    7 % 2 = 1

oddishOrEvenish(373) ➞ "Odd"
    3 + 7 + 3 = 13
    13 % 2 = 1

oddishOrEvenish(4433) ➞ "Even"
    4 + 4 + 3 + 3 = 14
    14 % 2 = 0

*/

/*
    ENG:
TODO: Rules:
    *1. I'll explain everything soon.
    *2. 
    *3. 
    *4.  
     
     ? Something

    TR:
TODO:  Kurallar:
    *1. Detaylı Açıklayacağım.
    *2. 
    *3. 
    *4. 

    ? Something

    DE: 
TODO: Rules:
    *1.  Warte, bitte.
    *2. 
    *3. 
    *4. 

    ? Something
*/
