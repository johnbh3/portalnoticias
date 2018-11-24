var app = require('./config/server');
//var rotaNoticias = require('./app/routes/noticias')(app);
//rotaNoticias(app);

//var rotaHome = require( './app/routes/home')(app);
//rotaHome(app);

//var rotaFormuInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);
//rotaFormuInclusaoNoticia(app);
app.listen(3000, function(){
   // console.log("servidor rodando com Express");
    console.log('Servidor ON');
});