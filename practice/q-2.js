// Employee salary
const http=require('http')
const sal=3000;
const bonus=500;
total_sal=sal+bonus;
const server=http.createServer(function(req,res){
    res.end(total_sal.toString())
})
server.listen(5000)
