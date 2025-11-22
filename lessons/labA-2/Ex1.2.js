function executeFunctions(funcArray) {
    for(const v of funcArray) {
        //console.log(typeof v)
       if(typeof v === 'function') {
            v() 
       }
    }
}


const f = function(a) { }

const a = { x: 1, y: f}


function sayHi() { console.log('Hi') }

function sayBye() { console.log('Bye') }

function sayAll() {
    sayHi()
    sayBye()
}


executeFunctions([sayHi, "Opps", ,sayBye])
console.log("--------------------")
executeFunctions([1, false, sayAll, "", sayBye])
console.log("--------------------")
executeFunctions([])





