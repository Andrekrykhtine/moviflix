import express from "express";
import { PrismaClient } from "@prisma/client";

const port = 3000;
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

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
  } catch (error) {
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
  } catch (error) {
    return res.status(500).send({ message: "falha ao atualizar um filme" });
  }

  res.status(200).send(); // retornar o status correto informando que o filme foi atualizado
});

app.delete('/movies/:id', async (req, res) => {
  const id = Number(req.params.id);

  try{
    const movie = await prisma.movie.findUnique({//para ver se o id existe
    where: { id }})

    if (!movie) {//se não exitir
       return res.status(404).send({ message: 'Filme não encontrado' });
    }
      await prisma.movie.delete({ where: { id }});
  
    }catch(error) {//qualque ourto erro
      res.status(500).send({ message: 'Falha ao remover o registro' });
    }
  
res.status(200).send();
});

app.listen(port, () => {
  console.log(`Servidor em execução em http://localhost:${port}`);
});
