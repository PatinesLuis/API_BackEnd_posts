import express from 'express';
import routes from './src/routes/postsRoutes.js';

const app = express();
app.use(express.static("uploads"))
routes(app)


// 4. Iniciando o servidor Express:
//   - Criando uma instância do Express e armazenando-a em 'app'.
//   - Configurando o middleware 'express.json()' para permitir que o Express entenda requisições com corpo em formato JSON.

app.listen(3000, () =>{
    console.log("Servidor escutando...");
});





