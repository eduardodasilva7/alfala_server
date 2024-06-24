import { getLivros, getLivro, postLivro, patchLivro, deletaLivro } from '../controller/livroController.js';
import { Router } from 'express';


const router = Router(); 

router.get('/', getLivros);

router.get('/:id', getLivro);

router.post('/', postLivro);

router.patch("/:id", patchLivro);

router.delete('/:id', deletaLivro);


router.post('/', (req, res) =>{
    res.send('Estou na rota post')
});
router.patch('/', (req, res) =>{
    res.send('Estou na rota patch')
});
router.delete('/', (req, res) =>{
    res.send('Estou na rota delete')
});


export default router;
// GET - Retornar livros 
// POST - Criar um livro
// PATCH - Atualizar um livro 
// DELETE  - Apagar um livro