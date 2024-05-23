# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Charlie Challenge

[[English](README.md) | [Portuguese](README.pt.md)]

Este é um projeto Next.js 14 configurado com TypeScript, Tailwind CSS, Axios e Jest.

## Pré-requisitos

Certifique-se de ter o Node.js instalado na sua máquina.

> node: v20.12.2

## Instalação

Clone este repositório:
```bash
git clone https://github.com/seu-usuario/meu-projeto-nextjs.git
```
### Navegue até o diretório do projeto:

```bash
cd challenge-charlie
```

### Instale as dependências:
```bash
npm install
#ou
yarn install
```

### Para iniciar o servidor de desenvolvimento, execute o seguinte comando:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

O projeto estará disponível em http://localhost:3000.

## Scripts Disponíveis
### No diretório do projeto, você pode executar os seguintes scripts:

```bash
> dev: Inicia o servidor de desenvolvimento.
> build: Compila o projeto para produção.
> start: Inicia o servidor de produção.
> lint: Verifica os problemas relacionados ao lint
> test: Executa os testes unitários.
> test:watch: Executa os testes unitários assistido.
```

## Estrutura do Projeto
### A estrutura de pastas do projeto é a seguinte:
```bash
├── app/                 # páginas
├── assets/              # Armazena arquivos estáticos
├── components/          # Componentes reutilizáveis
├── pages/               # Páginas da aplicação
├── services/            # Centraliza as APIs
├── styles/              # Estilos globais e locais
├── types/               # Armazena definições de tipos TypeScript
├── utils/               # Funções utilitárias e helpers
├── .gitignore           # Arquivos a serem ignorados pelo Git
├── jest.config.js       # Configurações do Jest
├── next.config.js       # Configurações do Next.js
├── package.json         # Arquivo de manifesto do projeto
└── tsconfig.json        # Configurações do TypeScript
```
## Tecnologias Utilizadas

```bash
Next.js 14
TypeScript
Tailwind CSS
Axios
Jest
```

## Deploy com Github Actions

Foi utilizado Github Actions para realizar o deploy. Para acessar basta acessar a url: [Charlie Challenge](https://pedrohenrickcs.github.io/challenge-charlie/)

## Docker
Compilar o container
```bash
docker build -t challange-charlie .
```

Rodar aplicação:
```bash
docker run -p 3000:3000 challange-charlie
```

O projeto estará disponível em http://localhost:3000.