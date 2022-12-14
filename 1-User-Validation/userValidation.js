export const validateUser = (str) => {
    if(str.length >= 4 && str.length <= 26
        && (/[a-zA-Z]/).test(str.slice(0,1)) // str.charAt(0)
        && (/^\w+$/).test(str) // str.charAt(str.slice(-1))
        && (/[a-zA-Z0-9]/).test(str.slice(-1)) // str.charAt(str.length - 1)

        // * Şimdi Açıklayalım da okuyanlar anlasın. Ben de pekiştireyim.
        // 1. validateUser adında bir fonksiyon yarattım. Bu fonksiyonun içinde bir if else kontrolü yapacağım.
        // 2. Bu fonksiyonuma bir parametre belirledim. Bu parametre görüldüğü üzere (str) bir stringdir.
        // 3. if --> str.length >= 4 && str.length <= 26 demek; 4 ve 26 arasında bir sayı olmalı demektir.
        // 4. if --> /[a-zA-Z]/ .test(str.slice(0,1)) kodu; sondan gidelim. ilk harf bir harf olmalı demektir.
        // 5. /[a-zA-Z]/ bir regex ifadesidir. .test(str.slice(0,1)) regex ifadesi ile str.slice(0,1) kısmını kontrol eder.
        // 6. (...).test kodu testimiz içindir. str.slice(0,1) kısmı 0,1 olması demek, ilk harf'i kontrol et demektir.
        // ! Dikkat ederseniz, hepsi && ile birbirine bağlıdır. Bu da truthy falsy olarak geçer.
        // ! Biri doğru döndürüyorsa diğerine geçer. Bir tanesi false döndürürse geçmez ve else bloğundaki return false döndürür.
        // 7. if --> /^\w+$/ .test(str) kodu; kullanıcı adı sadece bir harf, sayı veya alt çizgi içerebilir demektir.
        // 8. (/[a-zA-Z0-9]/).test(str.slice(-1)) kodu; son harf bir harf veya sayı olmalı demektir.
        // 9. slice(-1) değeri, isterse kullanıcı adı 10000 karakter uzunluğunda olsun her zaman son karakteri döndürür.
    ){
        // Hepsi doğru dönerse return true yapar.
        return true;
    } else {
        // Bir tanesi bile yanlış dönerse return false yapar.
        return false;
}};

/*
    ENG:
    Rules:
     1. Username is between 4 and 25 characters
     2. It must start with a letter
     3. It can only contain letters, numbers and the underscore character.
     4. It cannot end with an underscore character.
     
     If the username is valid then your program should return the string true.

    TR:
     Kurallar:
        1. Kullanıcı adı 4 ile 25 karakter arasında olmalıdır.
        2. Kullanıcı adı ilk harf bir harf olmalıdır.
        3. Kullanıcı adı sadece harf, sayı ve alt çizgi karakterleri içerebilir.
        4. Kullanıcı adının sonunda alt çizgi karakteri olmamalıdır.

    Eğer kullanıcı adı geçerli ise programınız true döndürecektir.

    DE: 
    Rules:
        1. Der Benutzername muss zwischen 4 und 25 Zeichen lang sein.
        2. Der Benutzername muss mit einem Buchstaben beginnen.
        3. Der Benutzername darf nur Buchstaben, Zahlen und den Unterstrich enthalten.
        4. Der Benutzername darf nicht mit einem Unterstrich enden.

    Wenn der Benutzername gültig ist, soll die Programmmeldung true zurückgeben. 
*/