var http = require('http');
var server =  http.createServer(function(req,res){
    var categoria = req.url;
     
    if(categoria == '/tecnologia'){
        res.end("<html><body>noticias de tecnologia john</body></html>");}
    
        else if(categoria == '/moda'){
        res.end("<html><body> noticias de modas </body></html>");}    
        
        else if(categoria == '/beleza'){
        res.end("<html><body> noticias de beleza</body></html>");}    
   
        else{
        res.end("<html><body>Portal noticias </body></html>");}    
   
        
    
}).listen(3000,'0.0.0.0');
