var names = [
    "Gandhi",
    "Jhunjhunwala",
    "Mike",
    "Harvey",
    "jonathon",
    "Jamison",
    "Akshay",
    "James"
];

for(var i=0;i<names.length;i++){
    if(names[i].charAt(0)==="j"||names[i].charAt(0)==="J"){
        console.log("Goodbye "+names[i]);
    }else{
        console.log("Hello "+names[i]);
    }
}
