// homeController.js
"use strict";

/**
 * Listing 12.5 (p. 178)
 * 홈 컨트롤러로의 라우팅
 */
exports.getHome =(req,res)=>{ res.render('index',{
    name: "Sarah",
    people: {
        usa:{
            einstein:"Albert Einstenin",
            musk:"Elon Musk",
            Jobs:"steve Jabs"
        },
        korea:{
            psy:"싸이",
            kim:"김민수",
        },
        mexico:{
            jesus:"Jesus Alvarez"
        }
    }
});}
exports.showSignUp = (req,res) =>{
    res.render("contact");
}
exports.postedContactForm = (req,res) =>{
    res.render("thanks");
}
exports.showTrans = (req,res) =>{
    res.render("transportation");
}


