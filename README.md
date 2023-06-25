# Tocador de Músicas TrybeTunes!

Este é um projeto do TrybeTunes, uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada. Essa aplicação será capaz de:

## Funcionalidades

- Fazer login;
- Pesquisar por uma banda ou artista;
- Listar os álbuns disponíveis dessa banda ou artista;
- Visualizar as músicas de um álbum selecionado;
- Reproduzir uma prévia das músicas deste álbum;
- Favoritar e desfavoritar músicas;
- Ver a lista de músicas favoritas;
- Ver o perfil da pessoa logada;
- Editar o perfil da pessoa logada;

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias:

- React: uma biblioteca JavaScript para criar interfaces de usuário interativas.
- React Router: uma biblioteca que permite a criação de rotas e navegação dentro de uma aplicação React.
- TailWind CSS: um framework CSS que permite estilizar os elementos da aplicação diretamente na marcação de texto.

## Configuração

Siga as etapas abaixo para configurar e executar o projeto em seu ambiente local:

1. Certifique-se de ter o [Node.js](https://nodejs.org) instalado em sua máquina.

2. Clone este repositório para o seu diretório local:

   ```
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

3. Acesse o diretório do projeto:

   ```
   cd nome-do-repositorio
   ```

4. Instale as dependências do projeto:

   ```
   npm install
   ```

5. Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis de ambiente:

   ```
   API_KEY=sua_chave_de_api
   ```

   Certifique-se de substituir `sua_chave_de_api` pela chave de API necessária para acessar a fonte de dados de músicas.

6. Inicie o servidor de desenvolvimento:

   ```
   npm start
   ```

   O servidor será iniciado na porta 3000. Acesse `http://localhost:3000` em seu navegador para visualizar o aplicativo.

## Uso

Após iniciar o aplicativo no navegador, você poderá utilizar as seguintes funcionalidades:

- Na página inicial, você verá uma barra de pesquisa. Digite o nome do artista e/ou o título do álbum para buscar músicas relacionadas.

- Ao realizar uma busca, uma lista de músicas correspondentes será exibida na página. Você pode clicar em uma música para reproduzi-la.

- Para favoritar uma música, clique no ícone de coração ao lado do título da música. A música será adicionada à sua lista de favoritos.

- Para acessar sua lista de favoritos, clique no menu esquerdo em favoritas. A lista de músicas favoritas será exibida.

## Contribuição

Contribuições são bem-vindas! Se você quiser melhorar este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.

2. Crie um branch para a sua feature:

   ```
   git checkout -b minha-feature
   ```

3. Faça as alterações desejadas e faça commit delas:

   ```
   git commit -m 'Minha nova feature'
   ```

