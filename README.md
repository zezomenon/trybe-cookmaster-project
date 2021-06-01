# Projeto Cookmaster - Trybe

Projeto desenvolvido durante o curso de Desenvolvimento Web Full Stack - Trybe, como forma de avaliação dos conhecimentos adquiridos durante o módulo de Back-end.

# Habilidades

- Entender o que há por dentro de um token de autenticação;

- Gerar tokens a partir de informações como login e senha;

- Autenticar rotas do Express, usando o token JWT;

- Fazer upload de arquivos em APIs REST;

- Salvar arquivos no servidor através de uma API REST;

- Consultar arquivos do servidor através de uma api REST.

---

## O que foi desenvolvido

Um app utilizando a arquitetura MSC (Models, Service e Controllers).

Neste projeto:

É possível fazer o cadastro e login de pessoa usuária, onde apenas esse usúario poderá acessar, modificar e deletar as receitas que cadastrou.

É possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou `CRUD`, pros mais íntimos 😜).

É possível realizar qualquer tipo de alteração no banco de dados (como cadastro, edição ou exclusão de receitas) desde que esteja autenticado (`JWT`)

Além disso, as pessoas usuárias podem ser clientes ou administradores. Os clientes apenas poderão disparar ações nas receitas que eles mesmo criaram. Já um administrador pode disparar qualquer ação em qualquer receita.

É possível adicionar uma imagem à uma receita, utilizando o upload de arquivos fornecido pelo `multer`.

---

##  Todos os endpoints estão no padrão REST

- Verbos HTTP adequados para cada operação.

- Os endpoints sempre retornam uma resposta, havendo sucesso nas operações ou não.

- Retorna o status correto (recurso criado, erro de validação, autorização, etc).

---

## Tecnologias utilizadas

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- [JWT](https://jwt.io/)

- [Express](https://expressjs.com/pt-br/)

- [Multer](https://www.npmjs.com/package/multer)

- [Git](https://git-scm.com/)

- [Node.js](https://nodejs.org/en/)

- [MongoDB](https://www.mongodb.com/)
