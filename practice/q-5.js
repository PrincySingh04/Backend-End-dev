// product inventory
const fs=require('fs')
fs.writeFileSync('prod.txt','prod:laptop,price:5500,stock:20',function(err){
    if(err)
        console.error(err)
    else
        console.log('done')
})
fs.readFile('prod.txt','utf-8',function(err,data){
    if(err)
        console.error(err)
    else
        console.log(data)
})
