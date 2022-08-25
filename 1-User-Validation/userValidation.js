export const validateUser = (str) => {
    if(str.length >= 4 && str.length <= 26
        && (/[a-zA-Z]/).test(str.slice(0,1)) // str.charAt(0)
        && (/^\w+$/).test(str) // str.charAt(str.slice(-1))
        && (/[a-zA-Z0-9]/).test(str.slice(-1)) // str.charAt(str.length - 1)
    ) {
        return true;
    } else {
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