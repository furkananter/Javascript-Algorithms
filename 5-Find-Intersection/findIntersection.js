export const findIntersection = (strArr) => {
    // code will be here.

    return strArr
};
// ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
/*
    Instructions:
    1. Yeni bir array tipinde değişken tanımla
    2. split(), replace()
                  |-> replace kullanmamızın sebebi; virgüllerden sonra gelen boşlukları temizlemek.
    3. forEach ile tüm array içerisindeki karakterlerin diğer array içerisinde olup olmadığını kontrol edeceğiz.
    4. Eğer varsa yeni array içerisine push() ile ekleyeceğiz.

    5. Eğer yeni array içerisinde hiç bir eleman yoksa false döndüreceğiz.
    6. Eğer yeni array içerisinde eleman varsa bu elemanların değerlerini string olarak döndüreceğiz.


*/

/*
    ENG:
TODO: Rules:

        Have the function findIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements:
        The first element will represent a list of comma-separated numbers sorted in ascending order,
        the second element will represent a second list of comma-separated numbers (also sorted).
        Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order.
        If there is no intersection, return the string false.
        Example:
        If strArr contains ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"] the output should return "1,4,13" because those numbers appear in both strings.
        The array given will not be empty, and each string inside the array will be of numbers sorted in ascending order and may contain negative numbers.
         
     ? Something

    TR:
TODO:  Kurallar:

        findIntersection(strArr) fonksiyonunu yazın. strArr, 2 öğeli bir dize dizisini içerecek.
        İlk öğe, virgülle ayrılmış sayıları artan sırayla temsil edecek,
        ikinci öğe, ikinci bir virgülle ayrılmış sayı dizisini temsil edecek (aynı zamanda sıralı).
        Amacınız, strArr öğelerindeki sayıları sıralı olarak içeren virgülle ayrılmış bir dize döndürmek.
        Eğer kesişim yoksa, false döndürün.
        Örnek:
        Eğer strArr ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"] içeriyorsa çıktı "1,4,13" olmalıdır çünkü bu sayılar ikinci dizide de mevcut.

    ? Something

    DE: 
TODO: Rules:

        findIntersection(strArr) Funktion schreiben. strArr, ein Array von Strings, die 2 Elemente enthalten.
        Das erste Element wird eine durch Kommas getrennte Liste von Zahlen darstellen, die in aufsteigender Reihenfolge sortiert sind,
        das zweite Element wird eine zweite durch Kommas getrennte Liste von Zahlen darstellen (auch sortiert).
        Ihr Ziel ist es, eine durch Kommas getrennte Zeichenfolge zurückzugeben, die die Zahlen enthält, die in den Elementen von strArr in aufsteigender Reihenfolge auftreten.
        Wenn es keine Schnittmenge gibt, geben Sie die Zeichenfolge false zurück.
        Beispiel:
        Wenn strArr ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"] enthält, sollte die Ausgabe "1,4,13" zurückgeben, da diese Zahlen in beiden Zeichenfolgen vorkommen.
        Das gegebene Array wird nicht leer sein und jeder String innerhalb des Arrays wird aus Zahlen bestehen, die in aufsteigender Reihenfolge sortiert sind und negative Zahlen enthalten können.

    ? Something
*/