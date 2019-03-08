String.prototype.replaceChars = function (character, replacement) {
    var str = this;
    var a;
    var b;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == character) {
            a = str.substr(0, i) + replacement;
            b = str.substr(i + 1);
            str = a + b;
        }
    }
    return str;
}

function search(query) {
    switch (query.substr(0, 1)) {   
        case "y":
            query = query.substr(2);
            window.location =
                "https://www.youtube.com/results?search_query=" +
                query.replaceChars(" ", "+");
            break;

        case "w":
            query = query.substr(2);
            window.location =
                "https://en.wikipedia.org/w/index.php?search=" +
                query.replaceChars(" ", "%20");
            break;

        case "n":
            query = query.substr(2);
            window.location =
                "https://www.nyaa.si/?f=0&c=1_2&q=" +
                query.replaceChars("+", "%2B");
            break;

        case "m":
            query = query.substr(2);
            window.location =
                "https://myanimelist.net/search/all?q=" +
                query.replaceChars(" ", "%20");
            break;

        case "p":
            query = query.substr(2);
            window.location =            
                "https://id.pinterest.com/search/pins/?q=" +
                query.replaceChars(" ", "%20");
            break;

        case "r":
            query = query.substr(2);
            window.location =            
                "https://www.reddit.com/search?q=" +
                query.replaceChars(" ", "%20");
            break;
               
        case "k":
            query = query.substr(2);
            window.location =            
                "https://kbbi.kemdikbud.go.id/entri/" +
                query.replaceChars(" ", "%20");
            break;

        case "t":
            query = query.substr(2);
            window.location =            
                "https://translate.google.com/#view=home&op=translate&sl=en&tl=id&text=" +
                query.replaceChars(" ", "%20");
            break;
               

        default:
            window.location = "https://www.google.fr/search?q=" +
                query.replaceChars("", "+");
    }
}

window.onload = function () {
    // search
    searchinput = document.getElementById("searchbox");
    searchinput.focus();
    
    // $(window).focus(() => {
    //     searchinput.focus();
    // })

    if (!!searchinput) {
        searchinput.addEventListener("keypress", function (a) {
            var key = a.keyCode;
            if (key == 13) {
                var query = this.value;
                search(query);
            }
        });
    }
    // jump to search when tab is pressed
    var search_sqr = document.getElementById("search_sqr");

}


 // dd
//
// To add a ssnew search provider, paste the following between the last "break;" and "default:" (Line 39 & 40)
//
//         case "-a":
//          query = query.substr(3);
//          window.location =
//             "https://en.website.com/" +
//             query.replaceChars(" ", "%20");
//          break;
//
// -a on ln68 should be replaced with a "-letter" of your choice. You can also change it to !a, .a, /a etc.
// https://en.website.com/ on ln70 should be replaced with the search page of the website. To find this, make a few searches on your website. 
//Try to identify where your search is in the URL. If you're not sure, post in the thread and someone should help you out
//
// You can use the above two to modify an existing rule
//
// If you wish to change the number of characters in a "case", you need to change the line below, changing query.substr() to n+1, n being the number of characters.
// This ensures that when you search for something, the whole of your idenfier and the space between the identifier and query are removed.