# Meu Banco

Aplicação front-end desenvolvida com React e Tailwind CSS, projetada para gerenciar transferências, carteira e serviços financeiros de forma simples e intuitiva.

## Visão Geral

Esta aplicação foi desenvolvida como uma solução intuitiva para gestão de finanças, permitindo o controle de transferências, saldo de carteira e serviços financeiros. Com uma interface moderna e responsiva, a plataforma foi construída utilizando **React** para a construção de componentes dinâmicos e **Tailwind CSS** para uma estilização rápida e personalizada. O objetivo é oferecer uma experiência de usuário agradável e eficiente, proporcionando uma visão clara e acessível das finanças em tempo real.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida.

## Instalação

Para rodar este projeto localmente, siga os seguintes passos:

1. Clone este repositório:

   ```bash
   git clone https://github.com/bruno-miho-dev/meu-banco.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd meu-banco
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

A aplicação estará disponível em `http://localhost:3000`.

## Uso

Após rodar a aplicação localmente, os usuários podem acessar e interagir com as funcionalidades do sistema diretamente pelo navegador. Siga as etapas abaixo para utilizar a aplicação:

**Página de Login:** Ao iniciar a aplicação, o usuário será direcionado para a página de login. Insira suas credenciais para acessar a plataforma. (Deixei aberto para qualquer nome de usuario ou senha).

**Dashboard:** Após o login, o usuário será redirecionado para o Dashboard. Aqui, é possível visualizar uma visão geral da carteira, transferências recentes e outros serviços financeiros disponíveis.

**Carteira:** A página da carteira vai ser implementada.

**Transferências:** A página da carteira vai ser implementada.

**Serviços:** A página da carteira vai ser implementada.

**Configurações:** A página da carteira vai ser implementada.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte maneira:
/public
  index.html              # Arquivo principal da aplicação (contém a estrutura HTML)
  /assets                 # Imagens, ícones e outros arquivos estáticos

/src
  /components             # Componentes reutilizáveis (ex: botões, formulários, etc.)
  /pages                  # Páginas principais da aplicação (ex: Login, Dashboard, etc.)
    Login.jsx             # Página de login
    Dashboard.jsx         # Página principal do Dashboard
    Carteira.jsx          # Página de carteira
    Transferencias.jsx    # Página de transferências
    Servicos.jsx          # Página de serviços
    Configuracoes.jsx     # Página de configurações
  App.js                  # Componente principal da aplicação
  index.js                # Ponto de entrada do React (renderiza o App.js)
  tailwind.config.js      # Arquivo de configuração do Tailwind CSS
  postcss.config.js       # Arquivo de configuração do PostCSS

---
Descrição dos principais diretórios:
/public: Contém o arquivo index.html que serve como ponto de entrada para a aplicação. Qualquer recurso estático, como imagens e ícones, deve ser colocado dentro da pasta /assets.

/src: Contém todo o código-fonte da aplicação:

/components: Onde ficam os componentes reutilizáveis e pequenos blocos da UI, como botões, cabeçalhos, etc.
/pages: Contém as páginas principais da aplicação. Cada página é um componente React que representa uma tela ou seção específica da aplicação.
App.js: Componente principal da aplicação, onde as rotas e lógica de navegação podem ser gerenciadas.
index.js: Ponto de entrada da aplicação React, onde o componente App é renderizado no DOM.
tailwind.config.js: Arquivo de configuração do Tailwind CSS, onde você pode personalizar as cores, tamanhos e outros aspectos do design.

