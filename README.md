# NODE-API CRUD COMPLET
Back-end desenvolvido para criar, ler, editar e deletar frases!

Banco de dados: MySQL
Cliente: DBeaver 22.2.0

Rotas:
POST /phrases - Inseri uma nova frase com o body (author, txt).
GET /phrases - Retorna todas às frases inseridas na db.
GET /phrases/:id - Retorna a frase selecionada através do ID enviado.
PUT /phrase/:id - Realiza o update em uma frase através do ID enviado.
DEL /phrase/:id - Deleta a frase que o ID foi enviado.

Extra:
GET /phrase/random - Retorna uma frase aleatória.

### Pré-requisitos globais:
`npm i -g nodemon typescript ts-node`

### Instalação
`npm install`

### Para rodar o projeto
`npm run start-dev`
