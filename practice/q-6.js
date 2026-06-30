// visitorcount
const http=require('http')
const visitors=150;
const server=http.createServer(function(req,res){
    res.end(`total visitors ${visitors}`)
})
server.listen(3000)
