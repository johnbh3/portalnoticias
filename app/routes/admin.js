module.exports = function(application) {
application.get('/formulario_inclusao_noticia',function(req, res){
    res.render("admin/form_add_noticia");
    });

    application.post('/noticias/salvar',function(req, res){
        var noticia = req.body;
       
         req.assert('titulo','Titulo Preenchimento obrigatorio').notEmpty();
         req.assert('resumo','Resumo Preenchimento obrigatorio').notEmpty();
         req.assert('resumo','Resumo devera conter minimo 10 maximo 100 caracteres').len(10, 100);
         req.assert('autor','Autor Preenchimento obrigatorio').notEmpty();
         //req.assert('data_noticia','Data Preenchimento obrigatorio').notEmpty().isDate({format: 'DD-MM-YYYY'});
         req.assert('data_noticia','Data Preenchimento obrigatorio').notEmpty().isISO8601();        
         req.assert('noticia','noticia Preenchimento obrigatorio').notEmpty();

        var erros = req.validationErrors();
            if(erros){
                    res.render("admin/form_add_noticia",{validacao: erros});      
                    return;                    
            }

            var connection = application.config.dbConnection();
            var noticiasModel = new application.app.models.NoticiasDAO(connection);
          

            noticiasModel.salvarNoticia(noticia, function(error,result) {
            //res.render("noticias/noticias",{noticias:result});
            res.redirect('/noticias');
       });
     
       
           
     
            
            });


      

};