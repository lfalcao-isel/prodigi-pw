// Named function
fun add(a: Int, b: Int) : Int {
    return a + b
}

// Lambda - aka anonymous function
val sub = { a: Int, b: Int -> a - b }

// Passagem de uma Função como Parametro a outra Funcção
/**
 * It calls the function f and prints the result of the function
 */
fun callAndPrint(f:(Int, Int) -> Int, x: Int, y: Int) {
    val res = f(x, y)
    println(res)
}

fun main() {
    println("4 + 6 = " + add(4,6))
    println("11 - 3 = " + sub(11,3))
    callAndPrint(::add, 4, 6) // > 10
    callAndPrint({a, b -> a * b }, 4, 6) // > 24
}