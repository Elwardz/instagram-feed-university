# 🖼️ Projeto: Feed de Postagens no Estilo Instagram - Dark Souls Edition

Este projeto foi desenvolvido como parte de uma **atividade prática da faculdade**, com o objetivo de replicar um **feed de postagens no estilo Instagram** utilizando **React**, **Next.js** e **Tailwind CSS**.

---

## 🎯 Objetivo da Atividade

Criar um componente `PostItem` capaz de renderizar postagens com:

- Nome de usuário  
- Avatar  
- Imagem principal da postagem  
- Número de curtidas  
- Descrição com hashtags  
- Botão de curtir funcional (❤️ toggle)

Além disso:

✅ Renderizar dinamicamente os dados  
✅ Estilizar responsivamente com Tailwind CSS  
✅ Utilizar imagens reais e tematização criativa  
✅ **Temática Dark Souls** como diferencial visual

---

## 🧙‍♂️ Personagens Selecionados

- **Artorias of the Abyss**  
- **Gwyn, Lord of Cinder**  
- **Executioner Smough**  

As imagens foram adicionadas à pasta `/public` e renderizadas diretamente no layout.

---

## 🧪 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) – framework moderno para React
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

---


```plaintext
instagram-feed-university/
├── public/              → Imagens dos personagens (Artorias, Gwyn, Smough)
├── src/
│   ├── app/
│   │   └── page.tsx     → Página principal do feed
│   ├── components/
│   │   └── PostItem.tsx → Componente de post reutilizável
│   └── data/
│       └── postData.ts  → Lista com os personagens e dados do post
├── tailwind.config.ts
├── tsconfig.json
└── README.md
---

```
## 💻 Como Executar o Projeto

```bash
# 1. Clone o repositório
git clone https://github.com/Elwardz/instagram-feed-university.git
cd instagram-feed-university

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
