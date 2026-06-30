// student Registration
const http=require('http')
const server=http.createServer(function(req,res){
    res.end('student registered successfully')
})
server.listen(3000)