var names = [
    "Yaakov",
    "John",
    "Jen",
    "jason",
    "Paul",
    "frank",
    "Larry",
    "paula",
    "laura",
    "jim"
];

for(var i=0;i<names.length;i++){
    if(names[i].charAt(0)==="j"||names[i].charAt(0)==="J"){
        console.log("Good bye "+names[i]);
    }else{
        console.log("Hello "+names[i]);
    }
}
