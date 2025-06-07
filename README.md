<h1 align="center">Projeto Cadastro de Usuários</h1>
<p>Este é um projeto de uma interface simples para cadastro de usuários, desenvolvido
<br>
com React no front-end e Node.js no back-end.
<br>
A aplicação é responsiva, adaptando-se perfeitamente a dispositivos desktop e
<br>
mobile, sempre com foco na experiência do usuário e na satisfação do cliente.
<br>
Este projeto foi desenvolvido seguindo as boas práticas e metodologias
<br>
ensinadas na formação de Desenvolvedores DevClub.
</p>

## 🚀 Tecnologias Utilizadas

### 🔧 Backend
- **Node.js**
- **Express**
- **Prisma ORM**
- **dotenv** para gerenciamento de variáveis de ambiente
- API desenvolvida no arquivo `server.js`
- Estrutura de banco de dados configurada na pasta `/prisma`

### 🎨 Frontend
- **React**
- **Vite** como bundler
- **Styled-components** para estilização (ver `styles/GlobalStyles.js`)
- Organização de componentes reutilizáveis em `/components`
- Páginas estruturadas na pasta `/pages`, com destaque para:
  - `Home/index.jsx`: página inicial do cadastro
  - `listUsers`: exibição de usuários cadastrados
- Integração com backend via `services/api.js`
- Assets e imagens organizados na pasta `/assets`

---

## 📱 Responsividade
O layout foi desenvolvido com foco em **responsividade**, garantindo boa experiência tanto em **dispositivos desktop quanto mobile**.

---

## 📁 Estrutura Geral

/backend<br>
├── prisma/<br>
├── server.js<br>
└── .env<br>

/frontend<br>
├── src/<br>
│ ├── assets/<br>
│ ├── components/<br>
│ ├── pages/<br>
│ ├── services/<br>
│ └── styles/<br>
├── public/<br>
└── vite.config.js<br>

<a href="https://cadastro-usuarios-ivory.vercel.app/">CLICK HERE TO SEE THE PROJECT!</a>
<img src="https://raw.githubusercontent.com/crixsanti/cadastro-usuarios/refs/heads/main/cadastro-usuarios.png">
