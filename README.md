# EC021-CoreServer

## Dependencies

- Restify: Framework web service para Node.js utilizado para desenvolver a aplicação RESTful de forma fácilmente escalável.

- Restify-router: Facilita a definição e organização de múltiplas rotas em arquivos separados.

- Mongoose: Ferramenta de modelagem para o MongoDB, utilizada para estabeler a comunicação e gerenciar as requisições ao banco.

- Axios: Cliente HTTP utilizado para estabelecer a comunicação e gerenciar as requisições ao servidor de autenticação.

- Cors: Define meios para que os recursos do servidor possam ser acessados por outra api ou front-end.

- Yup: Utilizado na validação de dados de entrada fornecidos.

- Sentry: Monitoramento e captura de erros.

- Dotenv: Armazenar variáveis de ambiente.


## Dev-Dependencies

- Sucrase: Alternativa "super-fast" ao Babel, responsável por fazer a transpilação do código em módulos do ECMA Script 6 para CommonJS, que tem melhor compatibilidade com os navegadores mais antigos.

- Nodemon: Ferramenta que monitora e reinicia a aplicação sempre que alguma modificação feita for salva.

- As bibliotecas a seguir foram utilizadas para manter a adronização da formatação do código, seguindo as regras do ES6 e style guide da airbnb.
    - Prettier: Formatação do código, configurações adicionais ao eslint.
    - Eslint: Padronização do código seguindo a style guide a seguir.
    - Eslint-config-airbnb-base: Style guide popular utilizada para padronização do código
    - Eslint-config-prettier: Configurações do prettier
    - Eslint-plugin-import: Dependência do eslint
    - Eslint-plugin-prettier: Integração do plugin do prettier ao eslint

## Como Configurar e Executar

### Baixando e Iniciando o Servidor
1. git clone https://github.com/alanfoandrade/EC021-CoreServer.git

1. cd EC021-CoreServer/

1. yarn install

1. yarn start

### Utilizando o Insomnia

1. Importar a workspace do arquivo Insomnia_Workspace.json na pasta raíz do projeto

1. Utilizar a rota Login da pasta Auth para autenticar na aplicação

- As rotas da pasta Memes possibilitam:
    1. Fazer a Criação de novos Memes.
    1. Editar meme pelo Id passado via query.
    1. Listar todos Memes criados.
    1. Exibir um determinado meme pelo Id passado via query.
    1. Excluir Meme pelo Id passado via body.

