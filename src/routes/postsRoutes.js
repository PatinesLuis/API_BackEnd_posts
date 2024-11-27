import express from "express"
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost} from "../controllers/postsController.js";
import cors from "cors";

const corsOptions ={
    origin : "http://localhost:8000",
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

 const routes = (app) =>{

    //permite que o servidor interprete requisições com o corpo no formado json
    app.use(express.json());
    app.use(cors(corsOptions));
    //   - A rota '/posts' responde com um array de todos os posts encontrados no banco de dados.
    app.get("/posts", listarPosts);

    //rota para criar um post
    app.post("/posts", postarNovoPost)

    // Rota para upload de imagens (assumindo uma única imagem chamada "imagem")
  app.post("/upload", upload.single("imagem"), uploadImagem); // Chama a função controladora para processamento da imagem

  app.put("/upload/:id", atualizarNovoPost)
}

export default routes;
