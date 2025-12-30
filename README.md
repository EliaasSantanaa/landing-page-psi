# 🧠 Landing Page - Psicologia

Uma landing page moderna e responsiva desenvolvida para psicólogos que desejam estabelecer sua presença digital profissional. O projeto oferece uma solução completa e personalizável para apresentar serviços de psicologia, com foco em conversão e experiência do usuário.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38bdf8?style=flat-square&logo=tailwind-css)

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Personalização](#-personalização)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Deploy](#-deploy)

## 🎯 Visão Geral

Este projeto é uma landing page completa e otimizada para profissionais de psicologia, desenvolvida com as mais modernas tecnologias web. A aplicação oferece:

- **Design Moderno e Profissional**: Interface limpa e acolhedora
- **Totalmente Responsivo**: Experiência perfeita em todos os dispositivos
- **Performance Otimizada**: Carregamento rápido e SEO otimizado
- **Fácil Personalização**: Estrutura organizada para customização rápida
- **Integração WhatsApp**: Botões de call-to-action diretos para WhatsApp

## ✨ Funcionalidades

### Seções Principais

- **Header**: Menu de navegação fixo e responsivo
- **Hero Section**: Apresentação impactante com call-to-action
- **Sobre Mim**: Apresentação profissional com destaque para formação
- **Serviços**: Carrossel interativo com os serviços oferecidos
- **Depoimentos**: Seção para citações ou mensagens motivacionais
- **Contato**: Formulário integrado para contato direto
- **Footer**: Informações de contato e redes sociais

### Recursos Técnicos

- ⚡ **Server-Side Rendering (SSR)** com Next.js 16
- 🎨 **Design System** personalizado com Tailwind CSS
- 📱 **Mobile-First** e totalmente responsivo
- ♿ **Acessibilidade** seguindo boas práticas
- 🌙 **Suporte a Dark Mode** (com next-themes)
- 📊 **Analytics** integrado (Vercel Analytics)
- 🎭 **Animações suaves** e transições profissionais

## 🛠 Tecnologias

### Core

- **[Next.js 16](https://nextjs.org/)** - Framework React com SSR
- **[React 19](https://react.dev/)** - Biblioteca JavaScript
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática

### Estilização

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis
- **[Lucide React](https://lucide.dev/)** - Ícones modernos

### Formulários e Validação

- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Zod](https://zod.dev/)** - Validação de schemas

### Carrossel

- **[Embla Carousel](https://www.embla-carousel.com/)** - Carrossel de serviços

### UI/UX

- **[class-variance-authority](https://cva.style/)** - Variantes de componentes
- **[clsx](https://github.com/lukeed/clsx)** - Utilitário para classes CSS
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge de classes Tailwind

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js**: versão 20.x ou superior ([Download](https://nodejs.org/))
- **npm**, **yarn**, **pnpm** ou **bun** (gerenciador de pacotes)

Para verificar se o Node.js está instalado:

```bash
node --version
# Deve retornar v20.x.x ou superior
```

## 🚀 Instalação

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/landing-page-psi.git
cd landing-page-psi
```

### 2. Instale as Dependências

Escolha seu gerenciador de pacotes preferido:

```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install

# bun
bun install
```

### 3. Execute o Projeto em Desenvolvimento

```bash
# npm
npm run dev

# yarn
yarn dev

# pnpm
pnpm dev

# bun
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 🎨 Personalização

### Informações Pessoais

#### 1. Hero Section

Edite o arquivo `src/components/hero-section.tsx`:

```tsx
// Linha ~30-35: Altere o título principal
<h1>Transforme sua mente, transforme sua vida</h1>

// Linha ~40-45: Altere a descrição
<p>Psicologia online baseada em evidências científicas...</p>

// Linha ~55: Altere o número do WhatsApp
onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
```

#### 2. Sobre Mim

Edite o arquivo `src/components/about-section.tsx`:

```tsx
// Linha ~18-23: Altere sua apresentação
<p>Sou psicóloga, com especialização em...</p>

// Linha ~35-42: Edite os cards de formação
<h3>Formação Especializada</h3>
<p>Especialização em TCC e pós-graduação...</p>
```

#### 3. Serviços

Edite o arquivo `src/components/services-section.tsx` para adicionar/modificar seus serviços:

```tsx
const services = [
  {
    title: "Seu Serviço",
    description: "Descrição do serviço",
    icon: <CheckCircle />,
  },
  // Adicione mais serviços...
];
```

#### 4. Contato e WhatsApp

Procure por todos os links do WhatsApp e substitua pelo seu número:

```bash
# Busque no projeto
wa.me/5511960247780

# Substitua por
wa.me/5511SEUNUMERO
```

#### 5. Footer

Edite o arquivo `src/components/footer.tsx`:

```tsx
// Altere informações de contato, redes sociais e direitos autorais
```

### Cores e Tema

As cores do projeto são definidas no arquivo `src/app/globals.css`:

```css
:root {
  --primary: 214 100% 50%; /* Cor principal */
  --secondary: 210 40% 96%; /* Cor secundária */
  --accent: 337 89% 65%; /* Cor de destaque */
  /* ... outras variáveis */
}
```

Para alterar as cores:

1. Abra `src/app/globals.css`
2. Modifique as variáveis CSS em `:root`
3. Use [HSL Color Picker](https://hslpicker.com/) para escolher cores

### Fontes

As fontes são configuradas em `src/app/layout.tsx`. Para alterar:

```tsx
import { Geist, Crimson_Pro } from "next/font/google";

// Substitua por suas fontes preferidas do Google Fonts
```

## 📁 Estrutura do Projeto

```
landing-page-psi/
├── public/                      # Arquivos estáticos
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal da aplicação
│   │   ├── page.tsx            # Página inicial (home)
│   │   └── globals.css         # Estilos globais e variáveis CSS
│   │
│   ├── components/
│   │   ├── header.tsx          # Cabeçalho com navegação
│   │   ├── hero-section.tsx    # Seção hero (primeira dobra)
│   │   ├── about-section.tsx   # Seção sobre mim
│   │   ├── services-section.tsx    # Seção de serviços
│   │   ├── services-carousel.tsx   # Carrossel de serviços
│   │   ├── quote-section.tsx       # Seção de citação
│   │   ├── contact-section.tsx     # Formulário de contato
│   │   ├── footer.tsx          # Rodapé
│   │   └── ui/                 # Componentes UI reutilizáveis
│   │       ├── button.tsx      # Componente de botão
│   │       └── card.tsx        # Componente de card
│   │
│   └── lib/
│       └── utils.ts            # Funções utilitárias
│
├── components.json             # Configuração do shadcn/ui
├── tailwind.config.ts          # Configuração do Tailwind CSS
├── tsconfig.json               # Configuração do TypeScript
├── next.config.ts              # Configuração do Next.js
├── package.json                # Dependências e scripts
└── README.md                   # Este arquivo
```

### Descrição dos Componentes

- **Header**: Menu de navegação com smooth scroll
- **Hero Section**: Seção de impacto com CTA para WhatsApp
- **About Section**: Apresentação profissional com cards de destaque
- **Services Section**: Carrossel de serviços oferecidos
- **Quote Section**: Citação ou mensagem motivacional
- **Contact Section**: Formulário com validação
- **Footer**: Informações de contato e links úteis

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento na porta 3000

# Build de Produção
npm run build        # Cria build otimizado para produção

# Produção
npm run start        # Inicia servidor de produção (após build)

# Linting
npm run lint         # Executa ESLint para verificar código
```

## 🚀 Deploy

### Vercel (Recomendado)

A forma mais fácil de fazer deploy é usar a [Vercel Platform](https://vercel.com):

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com/new)
3. Importe seu repositório
4. Configure as variáveis de ambiente (se necessário)
5. Clique em "Deploy"

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/seu-usuario/landing-page-psi)

### Outras Plataformas

O projeto também pode ser deployado em:

- **Netlify**: Conecte seu repositório GitHub
- **Railway**: Deploy automático com Git
- **Render**: Suporte para Next.js
- **AWS Amplify**: Deploy com CI/CD

### Build Manual

```bash
# 1. Crie o build
npm run build

# 2. Teste localmente
npm run start

# 3. Os arquivos de produção estarão em .next/
```

## 📝 Checklist de Personalização

Antes de publicar, certifique-se de personalizar:

- [ ] Título e descrição no Hero Section
- [ ] Número do WhatsApp em todos os botões
- [ ] Informações pessoais na seção Sobre Mim
- [ ] Lista de serviços oferecidos
- [ ] Citação ou frase motivacional
- [ ] Informações de contato no Footer
- [ ] Links de redes sociais
- [ ] Favicon (`public/favicon.ico`)
- [ ] Metadados SEO no `layout.tsx`
- [ ] Cores do tema em `globals.css`

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fork o projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request
