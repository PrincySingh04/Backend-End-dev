
// How node js handles multiple request if it is single threaded
console.log('start')
setTimeout(()=>{
    console.log('hello')
},3000)
console.log('end')


// output--->start 
//            :
//            end
//            :
//           hello  -------> how ?

// it is because node js handovers the long running task to libuv and everything is managed by eventloop 
