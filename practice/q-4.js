// create a report file
const fs =require('fs')
fs.writeFileSync('report.txt','annual reportcard generated successfully',function(err){
    if(err)
        console.log(err)
    else
        console.log('done')
})
fs.readFile('report.txt','utf-8',function(err,data){
    if(err)
        console.error(err)
    else
        console.log(data)
})
