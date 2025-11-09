# Meu Ambiente Frontend

Ambiente de desenvolvimento frontend moderno configurado com Node.js, Express, ESLint e Prettier.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 14 ou superior)
- **NPM** (versão 6 ou superior)

Verifique as versões instaladas:

```bash
node --version
npm --version
```

## 🚀 Instalação

### 1. Clone ou baixe este projeto

```bash
git clone <url-do-repositorio>
cd meu-ambiente-frontend
```

### 2. Instale as dependências

Execute o comando abaixo na raiz do projeto:

```bash
npm install
```

Este comando irá instalar todas as dependências listadas no `package.json`:

- **Dependências de produção**: Express
- **Dependências de desenvolvimento**: ESLint, Prettier, Nodemon

### 3. Verifique a instalação

Após a instalação, você deverá ver uma pasta `node_modules` criada no projeto.

## 📜 Scripts Disponíveis

### `npm start`

Inicia o servidor em **modo de produção**.

```bash
npm start
```

- Executa o arquivo `index.js` usando Node.js
- Não recarrega automaticamente ao modificar arquivos
- Ideal para ambiente de produção

---

### `npm run dev`

Inicia o servidor em **modo de desenvolvimento**.

```bash
npm run dev
```

- Usa o **Nodemon** para monitorar mudanças nos arquivos
- Reinicia automaticamente o servidor quando você salva alterações
- Ideal para desenvolvimento ativo

---

### `npm run lint`

Executa a **análise estática de código** com ESLint.

```bash
npm run lint
```

- Verifica problemas de código, padrões e possíveis erros
- Não modifica os arquivos, apenas reporta problemas
- Analisa todos os arquivos `.js` do projeto

Para corrigir automaticamente problemas simples:

```bash
npm run lint:fix
```

---

### `npm run format`

Formata automaticamente todo o código usando **Prettier**.

```bash
npm run format
```

- Aplica formatação consistente em arquivos `.js`, `.json` e `.md`
- Modifica os arquivos diretamente
- Garante estilo de código uniforme em todo o projeto

Para apenas verificar a formatação sem modificar:

```bash
npm run format:check
```

## 🛠️ Ferramentas Utilizadas

### **Express** (Dependência de Produção)

- **Propósito**: Framework web minimalista para Node.js
- **Uso**: Criação de servidores HTTP, APIs REST e aplicações web
- **Por que usar**: Simplifica roteamento, middleware e gerenciamento de requisições/respostas
- **Documentação**: [expressjs.com](https://expressjs.com/)

### **ESLint** (Dependência de Desenvolvimento)

- **Propósito**: Ferramenta de linting para identificar e reportar padrões no código JavaScript
- **Uso**: Análise estática de código para encontrar problemas antes da execução
- **Por que usar**:
  - Detecta erros de sintaxe e lógica
  - Impõe padrões de código consistentes
  - Melhora a qualidade e manutenibilidade do código
- **Documentação**: [eslint.org](https://eslint.org/)

### **Prettier** (Dependência de Desenvolvimento)

- **Propósito**: Formatador de código opinativo (opinionated code formatter)
- **Uso**: Formatação automática de código seguindo regras predefinidas
- **Por que usar**:
  - Elimina discussões sobre estilo de código
  - Economiza tempo com formatação manual
  - Garante consistência visual em toda a base de código
- **Documentação**: [prettier.io](https://prettier.io/)

### **Nodemon** (Dependência de Desenvolvimento - Bonus)

- **Propósito**: Utilitário que monitora mudanças nos arquivos e reinicia automaticamente o Node.js
- **Uso**: Desenvolvimento ágil sem necessidade de reiniciar manualmente o servidor
- **Por que usar**: Aumenta produtividade durante o desenvolvimento
- **Documentação**: [nodemon.io](https://nodemon.io/)

## 📁 Estrutura do Projeto

```
meu-ambiente-frontend/
├── node_modules/          # Dependências instaladas (não commitado)
├── .gitignore            # Arquivos ignorados pelo Git
├── index.js              # Arquivo principal da aplicação
├── package.json          # Configuração do projeto e dependências
├── package-lock.json     # Versões exatas das dependências
└── README.md             # Documentação do projeto
```

## ⚙️ Configuração Adicional

### Configurar ESLint

Crie um arquivo `.eslintrc.json` na raiz do projeto:

```json
{
  "env": {
    "node": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    "no-console": "off",
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "always"]
  }
}
```

### Configurar Prettier

Crie um arquivo `.prettierrc.json` na raiz do projeto:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

## 🔧 Solução de Problemas

### Erro: "comando não encontrado"

Certifique-se de que o Node.js e NPM estão instalados corretamente:

```bash
node --version
npm --version
```

### Erro ao instalar dependências

Tente limpar o cache do NPM:

```bash
npm cache clean --force
npm install
```

### Porta já em uso

Se a porta padrão (geralmente 3000) estiver ocupada, modifique o arquivo `index.js` para usar outra porta.

## 📚 Recursos Adicionais

- [Documentação Node.js](https://nodejs.org/docs/)
- [Documentação NPM](https://docs.npmjs.com/)
- [Guia Express](https://expressjs.com/en/guide/routing.html)
- [Regras ESLint](https://eslint.org/docs/rules/)
- [Opções Prettier](https://prettier.io/docs/en/options.html)

## 📝 Licença

Este projeto está sob a licença MIT.

---

**Desenvolvido como parte do Exercício 2 - Configuração de Ambiente de Desenvolvimento**
