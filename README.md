# 🚑 DMG - Remoção e Saúde Mental 24h

![Status](https://img.shields.io/badge/Status-Ativo-brightgreen)
![Framework](https://img.shields.io/badge/Framework-React%2019%20%7C%20Vite-blue)
![Styling](https://img.shields.io/badge/Styling-Tailwind%20CSS%204-06B6D4)
![Animations](https://img.shields.io/badge/Animations-Motion-ff69b4)
![SEO](https://img.shields.io/badge/SEO-Otimizado-orange)
[![License](https://img.shields.io/badge/License-MIT-lightgrey)](LICENSE)

Aplicação web de alta performance para a **DMG**, especializada em remoções psiquiátricas e dependência química. O projeto foi desenvolvido com foco em **SEO avançado**, **acessibilidade (A11y)** e **conversão**, garantindo uma experiência fluida e profissional para situações de emergência.

---

## 🏗️ Arquitetura e Engenharia

### Padrões de Projeto
- **Component-Based Architecture:** Estrutura modular e reutilizável utilizando Functional Components e Hooks.
- **Atomic-ish Design:** Organização clara de componentes de interface (`ui`), serviços e seções da página.
- **Schema-First SEO:** Integração profunda de dados estruturados (JSON-LD) para otimização de Rich Snippets no Google.

### Destaques Técnicos

| Prática | Benefício |
| :--- | :--- |
| **Performance (Vite + React 19)** | **Velocidade.** Carregamento instantâneo e renderização otimizada para Core Web Vitals (LCP, CLS). |
| **SEO Técnico & Semântico** | **Visibilidade.** Implementação de meta tags completas (OG, Twitter), Sitemap.xml, Robots.txt e Schema.org (LocalBusiness, MedicalOrganization, FAQ). |
| **Tailwind CSS 4** | **Escalabilidade.** Estilização moderna via utilitários com suporte nativo a JIT e variáveis CSS dinâmicas. |
| **Motion (Framer Motion)** | **Engajamento.** Micro-interações e animações de scroll que guiam a atenção do usuário de forma orgânica. |
| **Resiliência de Contato** | **Conversão.** Fluxo de atendimento via WhatsApp integrado a formulário de triagem com validação Zod. |
| **Acessibilidade (A11y)** | **Inclusão.** Uso de HTML semântico e atributos ARIA para garantir leitura por tecnologias assistivas. |

---

## 🛠️ Como Executar

### Pré-requisitos

- **Node.js 18+**
- **npm** ou **yarn**

### Comandos de Execução

#### 1. Instalar Dependências
```bash
npm install
```

#### 2. Execução em Desenvolvimento
Inicia o servidor local com Hot Module Replacement (HMR).
```bash
npm run dev
```

#### 3. Build para Produção
Gera os arquivos otimizados e minificados na pasta `/dist`.
```bash
npm run build
```

---

## 📦 Estrutura do Projeto

```
dmg-remocoes/
├── public/                 # Assets estáticos (Sitemap, Robots, Imagens)
├── src/
│   ├── components/         # Componentes React (Seções e UI)
│   │   ├── Header.tsx      # Navegação dinâmica
│   │   ├── Hero.tsx        # CTA principal
│   │   ├── Contact.tsx     # Integração WhatsApp/Form
│   │   └── ...             # Componentes de seção (About, Services, etc)
│   ├── lib/                # Utilitários e helpers (cn, etc)
│   ├── constants.ts        # Variáveis globais e configurações
│   ├── index.css           # Estilos globais e Tailwind config
│   └── App.tsx             # Entry point da aplicação
├── index.html              # Template base com Meta Tags e SEO
├── vite.config.ts          # Configurações do Vite e Tailwind
└── package.json            # Dependências e scripts
```

---

## ⚙️ SEO & Dados Estruturados

A aplicação utiliza o padrão `JSON-LD` injetado no `<head>` para máxima indexação:

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "DMG - Remoção e Saúde Mental",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-19-99643-9275",
    "contactType": "emergency"
  }
}
```

---

## 🤖 Performance (Lighthouse)

Otimizado para atingir scores próximos a 100 em:
1.  **Performance:** Lazy loading de imagens e minificação de assets.
2.  **Accessibility:** Contraste de cores e tags semânticas.
3.  **Best Practices:** Uso de HTTPS e tecnologias modernas.
4.  **SEO:** Headings hierárquicos e metadados completos.

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).
