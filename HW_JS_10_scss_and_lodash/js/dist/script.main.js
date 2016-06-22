$(function() {
    $("#second").rlAccordion('single',{

        rlAccordion: "rlAccordion",     // add class in the same level of a parent statement for avoid styles conflict
        signTag: "<span></span>",       // html tag parent signs
        titles: "div",                   // html tag parent of minus and plus, this may replaced also for a class
        titlesChild: "span",            // html child titles and parent signs
        container: "article",               // html tag adjacent sibling of titles
        childNum: 0,                    // number of the children start open
        classOpen: "opened",            // add class to the titles option adjacent sibling
        open: '<img src="img/plus.png">',                 // unicode plus sign
        close: '<img src="img/minus.png">',              // unicode minus sign
        rlOpen: "rl-open",              // class for a plus sign
        rlClose: "rl-close"             // class for a minus sign

    });
    /*$("#thirth").rlAccordion('mix',{

        rlAccordion: "rlAccordion",     // add class in the same level of a parent statement for avoid styles conflict
        signTag: "<span></span>",       // html tag parent signs
        titles: "h3",                   // html tag parent of minus and plus, this may replaced also for a class
        titlesChild: "span",            // html child titles and parent signs
        container: "div",               // html tag adjacent sibling of titles
        childNum: 0,                    // number of the children start open
        classOpen: "opened",            // add class to the titles option adjacent sibling
        open: "&#x2b;",                 // unicode plus sign
        close: "&#x2212;",              // unicode minus sign
        rlOpen: "rl-open",              // class for a plus sign
        rlClose: "rl-close"             // class for a minus sign

    });*/
});