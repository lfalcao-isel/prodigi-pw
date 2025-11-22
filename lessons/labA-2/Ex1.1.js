function showProperties(obj) {
    for(const p in obj) {
       console.log(p + ":" + typeof obj[p])
       //console.log(p)
    }

    // for(const p of obj.keys()) {
    //    //console.log(p + ":" + typeof obj[p])
    //    console.log(p)
    // }
}


const o = {
}

o.a =  1 
o.b =  'Thor', 
o.c =  [1,2,3], 
o.d = {x: 10}
o.e = true
o.f = { x: 1, y: { f: "FFF", g: [1,2,3]}}



//o.a = 2     // Dot notation
o['a'] = 2  // subscript notation

showProperties(o)

console.log("--------------------")
const anotherO = {x:1, y: "AAA", y: function() {}, z: []}
showProperties(anotherO)