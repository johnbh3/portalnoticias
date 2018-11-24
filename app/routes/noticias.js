//var dbConnection =  require('../../config/dbConnection');

module.exports = function(application) {

  
application.get('/noticias', function(req,res){

  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);
  //new.application.app.models.noticiasModel;

   noticiasModel.getNoticias(function(error,result){
     res.render("noticias/noticias",{noticias:result});
   });
 // connection.query('select * from noticias', function(error,result){
   //    res.render("noticias/noticias",{noticias:result});

       
       });

  
   };



