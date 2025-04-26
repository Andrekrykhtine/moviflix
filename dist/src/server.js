"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("../swagger.json"));
const port = 3000;
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use(express_1.default.json());
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.get("/movies", async (_, res) => {
    const movies = await prisma.movie.findMany({
        orderBy: { title: "asc" },
        include: { genres: true, languages: true },
    });
    res.json(movies);
});
app.post("/movies", async (req, res) => {
    // console.log(`conteudo do body enviado na req: ${req.body}`);
    const { title, genre_id, language_id, oscar_count, release_date } = req.body;
    // verificar se já existe um filme com o mesmo título
    try {
        const movieWithSameTitle = await prisma.movie.findFirst({
            where: {
                title: { equals: title, mode: "insensitive" },
            },
        });
        if (movieWithSameTitle) {
            return res
                .status(409) //conflito com algum outro recurso
                .send({ message: "Já existe um filme com esse título" });
        }
        await prisma.movie.create({
            data: {
                title,
                genre_id,
                language_id,
                oscar_count,
                release_date: new Date(release_date),
            },
        });
    }
    catch (error) {
        return res.status(500).send({ mensagem: "falha ao cadastrar um filme" });
    }
});
app.put("/movies/:id", async (req, res) => {
    //pegar o id do registro que vai ser atualizado
    // console.log(req.params.id);
    const id = Number(req.params.id);
    try {
        const movie = await prisma.movie.findUnique({
            where: {
                id,
            },
        });
        if (!movie) {
            return res.status(404).send({ message: "filme nao encontrado" });
        }
        const data = { ...req.body };
        data.release_date = data.release_date
            ? new Date(req.body.release_date)
            : undefined; //tratando a data que vem no body
        //  console.log(data);
        //pegar os dados do filme que será atualizado e atualizar ele no prisma
        await prisma.movie.update({
            where: {
                id, //qual registro vai ser atualizado
            },
            data: data,
        });
    }
    catch (error) {
        return res.status(500).send({ message: "falha ao atualizar um filme" });
    }
    res.status(200).send(); // retornar o status correto informando que o filme foi atualizado
});
app.delete('/movies/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        const movie = await prisma.movie.findUnique({
            where: { id }
        });
        if (!movie) { //se não exitir
            return res.status(404).send({ message: 'Filme não encontrado' });
        }
        await prisma.movie.delete({ where: { id } });
    }
    catch (error) { //qualque ourto erro
        res.status(500).send({ message: 'Falha ao remover o registro' });
    }
    res.status(200).send({ message: 'Filme excluido com sucesso' });
});
app.get("/movies/:genreName", async (req, res) => {
    //receber o nome do genero pelo parametros da rota
    //console.log(`nome do genero: ${req.params.genreName}`);
    //filtrar os filmes do banco pelo genero 
    try {
        const moviesFilteredByGenreName = await prisma.movie.findMany({
            include: { genres: true, languages: true }, //incluindo o genres e languages na filtragem 
            where: {
                genres: {
                    name: { equals: req.params.genreName, //para o nome do genero ser case insensitive 
                        mode: "insensitive" //aceita tanto maiuscula quanto minuscula
                    }
                }
            }
        });
        //retornar os filmes filtrados na resposta da rota
        res.status(200).send(moviesFilteredByGenreName);
    }
    catch (error) {
        return res.status(500).send({ message: "falha ao filtrar filmes" });
    }
});
app.listen(port, () => {
    console.log(`Servidor em execução em http://localhost:${port}`);
});
