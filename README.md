<p align="center">
  <img src="https://github.com/Birgiman/fincheck/assets/101602651/0ab0e071-ce8c-426a-8c89-a7c54ac8c95b" id="cover-image" alt="Logo" />  
</p>


---

<div id='introducao'>

O **Fincheck** é uma aplicação voltada para o controle de finanças. Nele você pode gerenciar os seus gastos de uma forma otimizada, através do controle de suas contas bancárias, categorias de gastos e transações. Esse projeto foi desenvolvido utilizando algumas das stacks mais novas do mercado.

Futuramente irei acrescentar novas funcionalidades que você pode conferir no [Roadmap](#roadmap).
</div>

## Tópicos

* [Introdução](#introducao)
* [Instalar e rodar o projeto localmente](#instalacao)
* [Stack utilizada](#stack_utilizada)
* [Demonstração](#demonstração)
* [Roadmap](#roadmap)
* [Aprendizados](#aprendizados)
* [Status](#status)
* [Contatos](#contatos)

<div id='instalacao'>

## Instalando e rodando o projeto localmente:

Para rodar o **Fincheck** em sua máquina é bem simples.

Você precisa ter instalado:

- Node.js v18
- Docker v4.17.1 e utilizar a imagem Postgres (https://hub.docker.com/_/postgres)
- NPM, Yarn ou PNPM para a instalação dos pacotes (projeto desenvolvido com PNPM)

Para a instalação dos pacotes você deve entrar em cada pasta individualmente
e rodar o comando `pnpm install`, pois neste projeto temos o _backend_ e o _frontend_.

Navegue para `../api` e rode no terminal o comando:
```bash
pnpm install
```
Repita esse passo para `../frontend`.

Por padrão, o banco de dados vem totalmente vazio. Então para facilitar vou deixar uma _Collection_ que fiz com o Insomnia, para o gerenciamento completo da aplicação, (CRIAR, LISTAR E DELETAR USUÁRIOS, CONTAS BANCÁRIAS, CATEGORIAS E TRANSAÇÕES)

[Clique aqui para fazer o download](https://github.com/Birgiman/fincheck/files/12162433/Insomnia_fincheck_collection.zip)

> Exemplo: Dentro do Insomnia basta importar a _Collection_ do Fincheck e começar a usar.
Vale lembrar que foi utilizado o token JWT para a autenticação, então eu exportei junto com a _collection_ as variáveis de ambiente. Basta fazer o _signup_ de uma nova conta, copiar e colar o token gerado dento
das variáveis de ambiente, como *accessTokens.User1*. E no Insomnia, na aba de _Auth_, selecionar _Bearer_ e apertar _Crtl + Space_ e selecionar o *User1*. Por padrão todos os tokens tem *validade de 7 dias*.

### Rotas

Lembre-se de alterar as rotas da aplicação nos arquivos:
<div>
	
`\api\src\main.ts` altere o valor de `app.listen()` para a porta que você deseja que o banco rode.

	
`\api\src\main.ts` altere o valor da propriedade `origin` para a rote em que o seu _frontend_ vai rodar.
	

</div>

E mais um detalhe, a porta padrão do _frontend_ foi definida para `:3000`, e da _api_ para `:4000`.

Pronto, agora você está preparado para utilizar esta aplicação.
Para iniciar a _api_ basta rodar `pnpm start:dev` ou `pnpm start:docker` caso o processo do Docker esteja parado no Windows, em sua respectiva pasta.
E para iniciar o _frontend_ basta rodar `pnpm dev` em sua respectiva pasta.  

</div>
<div id='stack_utilizada'>
<h2>Stack utilizada</h2>

<!--**Front-end:**
<ul id="frontend-stack">
	<li>React</li>
	<li>Tailwind</li>
	<li>NextJs</li>
	<li></li>
</ul>
-->
**Back-end:**
<ul id="backend-stack">
	<li>Node.js</li>
	<li>NestJs</li>
	<li>Prisma</li>
	<li>BCryptjs</li>
	<li>Docker</li>
	<li>Postgres</li>
	<li>TypeScript</li>
</ul>

> Em ambos foram utilizados o EditorConfig e Eslint para o desenvolvimento.

</div>

<!-- <div id='demonstração'>
<h2>Demonstração</h2>

Ao entrar na aplicação pela primeira vez, você se encontra-rá na página Home e verá a mensagem indicando a lista vazia de contatos.

1. Na tela inicial você poderá clica no botão "Novo Contato" para que você seja redirecionado a página de criação de contato.

<p align="center">
  <img width="800" height="450" src="https://user-images.githubusercontent.com/101602651/235329103-80044f96-0baa-4375-8df2-70aebcf04e77.png"/>  
</p>

2. Logo em seguida basta preencher os campos com os dados do contato e selecionar uma categoria (se houver).

<p align="center">
  <img width="800" height="450" src="https://user-images.githubusercontent.com/101602651/235329104-35e9f3ba-e06d-4c9b-99ba-b2f016b64d1f.png"/>  
</p>

3. Após clicar em "Cadastrar Contato" você poderá continar cadastrandos novos contatos ou clicar em "Voltar",
   para ser redirecionado à página Home onde verá a sua lista atualizada com cada contato cadastrado.

4. Em cada card de contato você poderá clicar nos botões ha direta para editar ou excluir o contato selecionado.

<p align="center">
  <img width="800" height="450" src="https://user-images.githubusercontent.com/101602651/235329105-268aaabf-a7be-4b7a-9066-096b0986e954.png"/>  
</p>

5. Na página Home você poderá filtrar os contatos por **nome**, **ordem alfabética** e ou **categoria**.

<p align="center">
  <img width="800" height="450" src="https://user-images.githubusercontent.com/101602651/235329106-257f39ed-c37f-43d2-944a-486d93dbfa5c.gif"/>  
</p>

6. Na barra lateral, você pode navager entre as páginas da aplicação e também alterar entre o tema **_dark_** e **_light_**.

<p align="center">
  <img width="800" height="450" src="https://user-images.githubusercontent.com/101602651/235329108-545f437d-3038-42d4-83d9-5fb708a9dfe2.gif"/>  
</p>

</div>

<div id='aprendizados'>
<h2>Aprendizados</h2>

Neste projeto aprendemos a utilizar muito bem o _React_, e principalmente a técnica de _Prop Drilling_ utilizando o pacote "Prop-Types",
como podemos ver neste trecho de código do componente `<ContactsList />` que exibe a lista de contatos na página **Home**:

```javascript
\frontend\src\pages\Home\components\ContactsList\index.js

  ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    category: PropTypes.shape({
      name: PropTypes.string,
    }),
  })).isRequired,
  orderBy: PropTypes.string.isRequired,
  onToggleOrderBy: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  onToggleOrderByCategory: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  isLoadingCategories: PropTypes.bool.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};
```

Além disso o uso de _Styled-Components_ se faz presente durante todas as etapas de estilização deste projeto, como podemos ver aqui:

```javascript
\frontend\src\pages\Home\components\ContactsList\styles.js

import styled from 'styled-components';

export const ListHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;
  display: flex;

  /* ...Resto do código */
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  /* ...Resto do código */
`;
```

Vale lembrar também da criação das rotas utilizando o `node:path`, `express` e `react-router-dom`.

</div>
-->
<div id='roadmap'>
<h2>Roadmap</h2>

- Lançamento da v1.0 🔲
- Versão responsiva 🔲
- Adicionar **nova tela de SOBRE** 🔲
</div>

<div id='status'>
<h2>Status</h2>
<p>
    <img align="left" height="100em" alt="Jim Carrey"
      src="https://user-images.githubusercontent.com/101602651/203405592-5045955d-4107-4e6d-ba53-734873fdeb45.gif">
    <div align="left">
      <br/>
      <i>      🚧Este é um Projeto Full Stack e continua em construção!🚧</i>
    </div>
</p>
</div>

</br>
</br>
</br>

<div id='contatos' align="center">

<h2>Entre em contato comigo!</h2>
	
<a href="https://www.instagram.com/birgiman_eduardo/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
  <a href = "mailto:eduardo.birgiman@outlook.com"><img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/eduardo-birgiman-domingues/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</div>
