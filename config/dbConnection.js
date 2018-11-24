var mysql = require('mysql');
var connMySQL = function(){
  //  console.log('Conexao com bd foi estabelecida');    
    return mysql.createConnection ({
        host : 'mysql.iluminarsistemas.com.br',
        user :  'iluminarsistem02',
        password : 'p4r3q3j2',
        database : 'iluminarsistem02'  
     });
}
module.exports = function(){
  //  console.log ('o autoload carregou o modulo de conexao com banco dados');
    return connMySQL;
} 
     
    