export const firstFactorial = (num) => {
    let factorialNumber = 1;
    for (let i = 2; i <= num; i++) {
        factorialNumber *= i;
    }
    return factorialNumber
};

// Öncelikle, factorialNumber adında bir let değişkeni oluşturuyoruz ve bunu 1 olarak tanımlıyoruz.
// Neden 1 olarak tanımladık. Çünkü 0! = 1 olduğu için.
// Daha sonra, for döngüsü oluşturuyoruz ve i'yi 2'den başlatıyoruz.
// Neden 2'den başlatıyoruz? Çünkü 1! = 1 olduğu için. Yani, 1'den başlatmak mantıklı değil.
// Fazladan adım eklemeden, 2'den başlatıyoruz.
// Daha sonra, i'yi num'a kadar arttırıyoruz. Tabii bu testte tüm sayıları hesaplayabiliriz.
// Fakat bizden istenen num'ın 1 ile 18 arasında olması. 
// i++ ise for döngüsünün her adımında i'yi 1 arttır demek.
// Daha sonra, factorialNumber değişkenini i'ye eşitliyoruz.
// Bu eşitleme sıradan bir eşitleme değil. Çünkü, *= operatörü ile eşitliyoruz.
// *= operatörü, bir değişkenin değerini kendisine atanan değer ile çarpar.
// Örneğin, factorialNumber *= i; ifadesi, factorialNumber = factorialNumber * i; ifadesine eşittir.
// Daha sonra, return ile factorialNumber değişkenini döndürüyoruz.
// Döndürdüğümüz değer, num'un faktöriyelini veriyor.
// Örneğin, num = 5 ise, 5! = 5 * 4 * 3 * 2 * 1 = 120
// Alkışşşş, bu kadar. Kolay gelsin.


/*
    ENG:
TODO: Rules:
    Using the Javascript Language, have the function firstFactorial(num)
    take the num parameter being passed and return the factorial of it. (ie. 
    if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will
    be between 1 and 18.

    TR:
TODO:  Kurallar:
    Javascript Dili kullanarak, firstFactorial(num) fonksiyonunu num parametresini
    alıp, faktöriyelini döndürün. (örneğin, num = 4 ise, (4 * 3 * 2 * 1) return edin).
    Test için aralık 1 ile 18 arasında olacaktır.

  
    DE: 
TODO: Rules:
    Javascript Language, firstFactorial(num) Funktion nehmen den num Parameter
    und geben Sie das Faktor zurück. (z.B. wenn num = 4, dann (4 * 3 * 2 * 1)).
    Für die Testfälle wird der Bereich zwischen 1 und 18 liegen.

*/