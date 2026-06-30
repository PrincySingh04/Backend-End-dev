// course management
const fs=require('fs')
const course=['c-1','c-2','c-3','c-4']
fs.writeFile('courses.txt',course.join('\n'),function(err){
    if(err)
        console.error(err)
    else
        console.log('done')
})
fs.readFile('courses.txt','utf-8',function(err,data){
    if(err)
        console.error(err)
    else
        console.log(data)
})
