
function first() {
    var a= 1
    var name= "raghav"
    var test = true
    var c = null
    var obj = {
        key:"value"
    }
    var arr=["1","2","3",1,"hello",{key:"value"},["a","b"]]
    console.log(arr)
    console.log(typeof(a))
    console.log(typeof(name))
    console.log(typeof(test))
    console.log(typeof(c))
    console.log(typeof(obj))
    console.log(typeof(arr))
}
function second() {
    var a=10
    function hello() {
        var b=20
        console.log(b);
    }
    console.log(a);
    hello()
}

first()
second()
