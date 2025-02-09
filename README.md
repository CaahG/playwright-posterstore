<div align="center">
  <img align="right" src="https://github.com/CaahG/playwright-posterstore/blob/usuarioduplicado/Beige%20Brown%20Texture%20Cute%20Cottagecore%20June%202023%20Organizer%20Desktop%20Wallpaper.gif" alt="Imagem" />
</div>

# 🛒 Playwright Posterstore - Automação de Testes de e-Commerce 🧪  

Bem-vindo ao repositório **Playwright Posterstore**! 🎉 Aqui você encontrará uma aplicação prática de testes automatizados desenvolvidos com a poderosa biblioteca **Playwright**. 🚀 Este projeto simula cenários reais de uma loja virtual, garantindo a qualidade e funcionalidade de um e-commerce.  

## 🧩 Funcionalidades Testadas  
🔑 **Login e Logout**: Validação completa do fluxo de autenticação.  
🆕 **Criação de Usuário**: Testes para registro de novos usuários com diferentes combinações de dados.  
🔒 **Senhas e Segurança**: Verificação de regras de senha e proteção contra falhas de segurança.  
🛍️ **Gerenciamento de Produtos**: Adição, remoção e manipulação de itens no catálogo.  
🛒 **Carrinho de Compras e Finalização de Pedido**: Testes de fluxo completo de compras, incluindo cálculo de preços e validações.  

## 💻 Por que Playwright?  
O **Playwright** é uma das ferramentas mais avançadas para testes de aplicações web. Ele suporta múltiplos navegadores, como Chrome, Firefox e Safari, oferecendo estabilidade e desempenho incríveis. 🌐  

## 🛠️ Tecnologias Utilizadas  
- **Playwright**: Para os testes automatizados.  
- **JavaScript/TypeScript**: Linguagens principais do projeto.  
- **Node.js**: Ambiente de execução. 

## Docker
Para executar o projeto localmente com docker, possuimos uma imagem docker já pronta para uso.
Para isso basta clonar o projeto e execute o comando abaixo:

```bash
docker build -t playwright-posterstore .
```

E para executar os testes podemos executar o comando abaixo:

```bash
docker run -it playwright-posterstore sh -c "npx playwright test"
```

Após a execução do comando, acesse a aplicação em `http://localhost:3000`.

 

🌐 **Conecte-se comigo**: Não deixe de conferir outros projetos no meu GitHub e me acompanhar para mais conteúdos sobre automação e desenvolvimento! 🚀  
