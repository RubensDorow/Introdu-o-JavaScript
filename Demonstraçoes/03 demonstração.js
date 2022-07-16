//Solução 01
    function verificaPalindromo(string) {
        if (!string) return "inexistente";
    
        return string.split("").reverse().join("") === string;
    }

    console.log (verificaPalindromo())

//Solução 02
    function verificaPalindromo(string) {
        if (!string) return "inexistente";

        for (let i = 0; i < string.length / 2; i++) {
            if  (string[i] !== string [string.length - 1 - i]) {
            return false;
            }
        }

        return true;
    }

    console.log (verificaPalindromo())