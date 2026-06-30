// welcme Api
const http=require('http')
const server=http.createServer(function(req,res){
    res.end('welcome to abc technologies')
})
server.listen(3000)