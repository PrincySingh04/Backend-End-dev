// deleting old file
const fs=require('fs')
fs.writeFileSync('old.txt','data',function(err){
    if(err)
        console.error(err)
    else
        console.log('done')
})
fs.unlink('old.txt',function(err){
    if(err)
        console.error(err)
    else 
        console.log('done')
})

