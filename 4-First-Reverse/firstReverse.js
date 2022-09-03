export const firstReverse = (str) => {
    return str.split("").reverse().join("")
};


// Kullanacağımız methodlar:
//  *1. split() methodu, bir String nesnesini belirtilen bir ayırıcıya göre parçalara ayırır ve bu parçaları bir dizi olarak döndürür.
//  *2. .reverse() methodu, bir dizi içindeki sıralamayı tersine çevirir. İlk öğe son öğe olur ve son öğe ilk öğe olur.
//  *3. .join() methodu, bir dizi içindeki tüm öğeleri birleştirir ve bir dize (string) oluşturur.

/*
    TR:
  * Uzun yol:
    const strArray = str.split("");
    const reversedArray = strArray.reverse();
    const reversedString = reversedArray.join("");
    return reversedString;

  * Kısa yol:
    return str.split("").reverse().join("");

-----------------------------------------------------
    ENG:
  * Long way:
    const strArray = str.split("");
    const reversedArray = strArray.reverse();
    const reversedString = reversedArray.join("");
    return reversedString;

  * Short way:
    return str.split("").reverse().join("");

-----------------------------------------------------
    DE:
  * Lange Weg:
    const strArray = str.split("");
    const reversedArray = strArray.reverse();
    const reversedString = reversedArray.join("");
    return reversedString;

  * Kurzer Weg:
    return str.split("").reverse().join("");
    
-----------------------------------------------------
*/

/*
TR:
TODO: Yönerge:
    *|-> 1. Öncelikle, str parametresini split() methodu ile parçalara ayırıyoruz.
      *|-> 2. Daha sonra, parçalara ayırdığımız str parametresini reverse() methodu ile tersine çeviriyoruz.
        *|-> 3. Tersine çevirdiğimiz str parametresini join() methodu ile birleştiriyoruz.
          *|-> 4. Daha sonra, return ile birleştirdiğimiz str parametresini döndürüyoruz.

----------------------------------------------------------- 
ENG:
TODO: Instructions:

    *|-> 1. First, we split the str parameter with the split() method.
      *|-> 2. Then, we reverse the str parameter with the reverse() method.
        *|-> 3. We then join the reversed str parameter with the join() method.
          *|-> 4. Finally, we return the joined str parameter.

-----------------------------------------------------------
DE:
TODO: Anweisung:
    *|-> 1. Zuerst teilen wir den str-Parameter mit der split()-Methode.
      *|-> 2. Dann drehen wir den str-Parameter mit der reverse()-Methode um.
        *|-> 3. Wir fügen dann den umgedrehten str-Parameter mit der join()-Methode zusammen.
          *|-> 4. Schließlich geben wir den zusammengefügten str-Parameter zurück.

-----------------------------------------------------------
*/


/*
    ENG:
TODO: Rules:
    Have the function firstReverse(str) take the str parameter being passed and
    return the string in reversed order. 
     
     ? For example: 
    if the input string is "Hello World and Coders" then your program 
    should return the string "sredoC dna dlroW olleH".

----------------------------------------------------------------------------
    TR:
TODO:  Kurallar:
    firstReverse(str) fonksiyonunu str parametresini alıp,
    tersine çevirip return edin.
    
    ? Örneğin:
    Eğer input string "Hello World and Coders" ise,
    programınızın return etmesi gereken string "sredoC dna dlroW olleH" olmalı.

----------------------------------------------------------------------------
    DE: 
TODO: Rules:
    firstReverse(str) Funktion nehmen den str Parameter und
    geben Sie die Zeichenfolge in umgekehrter Reihenfolge zurück.
    
    ? Zum Beispiel:
    Wenn die Eingabezeichenfolge "Hello World and Coders" ist, sollte Ihre
    Programm die Zeichenfolge "sredoC dna dlroW olleH" zurückgeben.

----------------------------------------------------------------------------
*/