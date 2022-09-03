export const oddEven = (num) => {
    const number = num.toString().split("").map(iNumb => parseInt(iNumb)).reduce((a, b) => a + b);
    return number % 2 == 0 ? "Even" : "Odd";
};


/*
TODO: Yönerge:
    1. Öncelikle oddEven adında bir arrow function oluşturuyoruz.
    2. Bu fonksiyona num parametresini veriyoruz.
    3. Daha sonra, number adında bir const değişkeni oluşturuyoruz ve bunu kodumuza eşitliyoruz:
   *|-> 4. num'ı string'e çeviriyoruz.
       *|-> 5. string'i split("") ile parçalayıp, map(iNumb => parseInt(iNumb)) ile döngüye sokuyoruz.
           *|-> 6. parseInt(iNumb) ile string'i integer'a çeviriyoruz. (iNumb sadece bir parametre)
               *|-> 7. reduce((a,b) => a + b) ile topluyoruz.
                   *|-> 8. number değişkenini 2'ye bölüyoruz.
                       *|-> 9. eğer number değişkeni 2'ye bölündüğünde kalan 0 ise, "Even" return ediyoruz.
                           *|-> 10. Eğer kalan 0 değilse, "Odd" return ediyoruz.
                                *|-> 11. oddEven(4433), oddEven(373), oddEven(43) fonksiyonunu çağırıyoruz.

!! Kendini alkışla, bu kodu yazdığın için. !!
!! Şimdi biraz dinlen, sonraki challenge'e geçelim. !!
*/

// ------------------------------------------------------------------------------------------------------

/*
TODO: Instruction:
    1. First of all, we create an arrow function called oddEven.
    2. We give the num parameter to this function.
    3. Then, we create a const variable called number and we equal it to our code:
    *|-> 4. We convert num to a string.
        *|-> 5. We split("") the string, and we loop it with map(iNumb => parseInt(iNumb)).
            *|-> 6. We convert the string to an integer with parseInt(iNumb). (iNumb is just a parameter)
                *|-> 7. We add it with reduce((a,b) => a + b).
                    *|-> 8. We divide the number variable by 2.
                        *|-> 9. If the number variable is divided by 2 and the remainder is 0, we return "Even".
                            *|-> 10. If the remainder is not 0, we return "Odd".
                                *|-> 11. We call the oddEven(4433), oddEven(373), oddEven(43) function.

!! Applaud yourself for writing this code. !!
!! Now take a break, let's move on to the next challenge. !!
*/

// ------------------------------------------------------------------------------------------------------

/*
    ENG:
TODO: Rules:
    *1. Create a function that determines whether a number is Oddish or Evenish.
    *2. A number is Oddish if the sum of all of its digits is odd, and a number is 
        Evenish if the sum of all of its digits is even.
    *3. If a number is Oddish, return "Odd". Otherwise, return "Even".
    
    Examples:
        
    oddishOrEvenish(43) ➞ "Odd"
        4 + 3 = 7
        7 % 2 = 1

    oddishOrEvenish(373) ➞ "Odd"
        3 + 7 + 3 = 13
        13 % 2 = 1

    oddishOrEvenish(4433) ➞ "Even"
        4 + 4 + 3 + 3 = 14
        14 % 2 = 0

------------------------------------------------------------------------------------------------------
    TR:
TODO:  Kurallar:
    *1. Bir sayının Tek mi Çift mi olduğunu belirleyen bir işlev oluşturun. 
    *2. Bir sayı, tüm basamaklarının toplamı tek ise tek, tüm basamaklarının toplamı çift ise bir sayıdır.
    *3. Bir sayı tek ise, "Odd" döndürün. Aksi takdirde, "Even" değerini döndürün.
    
    Örnek olarak:
    
    oddishOrEvenish(43) ➞ "Odd"
        4 + 3 = 7
        7 % 2 = 1

    oddishOrEvenish(373) ➞ "Odd"
        3 + 7 + 3 = 13
        13 % 2 = 1

    oddishOrEvenish(4433) ➞ "Even"
        4 + 4 + 3 + 3 = 14
        14 % 2 = 0

------------------------------------------------------------------------------------------------------

    DE:
TODO: Regeln:
    *1. Erstelle eine Funktion, die bestimmt, ob eine Zahl ungerade oder gerade ist.
    *2. Eine Zahl ist eine Zahl, wenn die Summe aller Ziffern ungerade ist, und eine Zahl, wenn die Summe aller Ziffern gerade ist.
    *3. Wenn eine Zahl ungerade ist, gib "Odd" zurück. Andernfalls gib "Even" zurück.
    
    Zum Beispiel:
    
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
