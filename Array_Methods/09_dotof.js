let virat_kohli = 8;
let rohit_sharma = 80;
let sirfraz_khan = 50;
let ruturaj_gaikwad = 14;
let ishan_kishan = 23;
let suryakumar_yadav = 36;

let bumra_wicket = 3;
let md_siraj_wicket = 3;
let md_shami_wicket = 4;

let totalScore = virat_kohli + rohit_sharma + sirfraz_khan + ruturaj_gaikwad + ishan_kishan + suryakumar_yadav;
let totalWck = bumra_wicket + md_siraj_wicket + md_shami_wicket;

console.log(Array.of(virat_kohli,rohit_sharma,sirfraz_khan,ruturaj_gaikwad,ishan_kishan,suryakumar_yadav));
console.log("Final Score of Match: " + totalScore); 
console.log("Final wickets of Match: " + totalWck); 

if(virat_kohli > rohit_sharma){
    console.log("Virat Kohli Make Most Run: ",virat_kohli)
} else(
    console.log("Rohit Sherma Make Most Run: ",rohit_sharma)
)