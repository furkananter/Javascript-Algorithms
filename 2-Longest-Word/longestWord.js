
export const longestWord = (sen) => {
    const arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ");
    arr.sort((a, b) => {return console.log("b:", b.length) - console.log("a:", a.length)});
    return arr[0];


};
//                          TODO: Explanations: / Açıklamalar: / Kommentare:

//! (Bu dokümantasyonu kullanacaksanız ya da böyle yorum satırlarıyla uğraşıyorsanız 
//! Better Comments eklentisini tavsiye ederim.)

//----------------------------------------------------------------------------------------------------------------------
// 1. Kod Açıklamaları
//----------------------------------------------------------------------------------------------------------------------
    // Üstteki kodun meali şu; 
    // 1. replace(/[^a-zA-Z0-9]/g, " ") ile stringi alıp, ^a-zA-Z0-9 karakterleri dışındaki karakterleri " " ile değiştiriyoruz.
    // bu karakterler nelerdir? harf olmayanlar ya da boşluk olmayanlar varsa bu karakterleri boşluk ile değiştiriyoruz.
//----------------------------------------------------------------------------------------------------------------------
// 2. Kod Açıklamaları
//----------------------------------------------------------------------------------------------------------------------
    //* Sırada kullanılacak metod  = sort metodu.
    //? Sort medotu nasıl çalışıyor? Hemen açıklayalım:
    //? Eğer bir array içinde string bir değer varsa, başka bir değer verilmemişse, sort bu değerlerin baş harflerine göre
    //? alfabetik sırayla sıralar.
    //? Eğer kelimeleri karakter sayılarına göre kullancaksak o zaman sort bir fonksiyon olur. 
    //? Sort kullanıldığı zaman Array'in kendisi de değişir. Önemlidir unutmamak lazımdır.
    // 
//----------------------------------------------------------------------------------------------------------------------
//TODO: Nasıl Çözeceğiz? / How can we solve this? / Wie kann ich das lösen?
//----------------------------------------------------------------------------------------------------------------------
//? TR:
    //? Noktalama işaretlerini kaldırırken regex kullanacağız.
    //? split ile noktalama işaretlerinden arındırdığımız cümlemizi array haline getireceğiz.
    //? Kelimelerin karakter sayısına göre array içinde en yüksek karakter sayılı kelimeyi en öne geçireceğiz.
    // Yani kelimelerin karakter sayılarına göre azalan bir sıralama oluşturacağız.
    // Bunu yaparken de yukarda bahsettiğim gibi sort metodu kullanacağız.


//* ENG: 
    //* When we remove the punctuation marks, we use regex.
    //* We use split to separate the sentence into an array.
    //* We sort the array by the length of the words.
    
//! DE:
    //! Wenn wir die Punktuationen entfernen, dann verwenden wir regex.
    //! Wir verwenden split, um die Satz in ein Array zu teilen.
    //! Wir sortieren das Array nach der Länge der Wörter.

//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------





//                         TODO: Constructions: / Yapılar: / Konstruktionen:
/*
//----------------------------------------------------------------------------------------------------------------------
    ENG:
TODO: Rules:
     - Using the Javascript Language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
     - If there are two or more words that are the same length, return the first word from the string with that length.
     - Ignore punctuation and assume sen will not be empty.

    1. Remove punctuation from the string.
    2. Split the string into an array of words.
    3. Sorting the Array we created with words in descending order according to the number of characters of the words.
    4. Return the first word in the array.

//----------------------------------------------------------------------------------------------------------------------
    TR:
TODO: Kurallar:
        - Javascript dilini kullanarak, sen parametresi gönderilen ve döndürecek olan fonksiyonu yazın.
        - Eğer iki veya daha fazla kelime aynı uzunluğunda varsa, string içindeki ilk bu uzunluğa sahip olan kelimeyi döndürün.
        - Noktalama işaretlerini ve sen boş değilse yoksayın.

    1. Noktalama işaretlerini kaldır.
    2. Cümleyi boşluklardan bölüp , kelimelerle bir array oluşturmak.
    3. Kelimelerle oluşturduğumuz Array'i kelimelerin karakter sayılarına göre azalan bir şekilde sıralamak.
    4. En başta yani, 0. indekste yer alan kelimeyi return etmek.

//----------------------------------------------------------------------------------------------------------------------
    DE: 
TODO: Rules:
        - Mit Javascript Sprache verwenden, die Funktion LongestWord(sen) zu erhalten, die Parameter sen zu übergeben werden.
        - Wenn es zwei oder mehr Wörter mit der gleichen Länge gibt, dann den ersten Wort mit dieser Länge zurückgeben.
        - Ignorieren Sie die Satzzeichen und gehen Sie sicher, dass sen nicht leer ist.

    1. Satzzeichen aus der Zeichenkette entfernen.
    2. Teile den Satz von den Leerzeichen und erstelle eine Reihe von Wörtern.
    3. Sortieren Sie das Array, das wir mit Wörtern in absteigender Reihenfolge erstellen, basierend auf der Anzahl der Zeichen von Wörtern.
    4. Am Anfang, ich meine, 0. gibt das Wort auf dem Index zurück.

//----------------------------------------------------------------------------------------------------------------------
*/