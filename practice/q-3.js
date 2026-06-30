// reading emp data
const fs = require('fs')
fs.writeFile('emp.txt','emp_details',function(err){
    if(err)
        console.error(err)
    else
        console.log('done')
})
fs.readFile('emp.txt','utf-8',function(err,data){
    if(err)
        console.error(err)
    else
        console.log(data)
})

