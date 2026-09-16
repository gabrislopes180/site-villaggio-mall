# Villaggio Mall — Design system v1.0

Proposta independente para um centro comercial em Bauru. Sistema criado para o escopo de site institucional e diretório de estabelecimentos; identidade ainda sujeita à aprovação da administração.

## Direção visual

Referência: https://pulseopenmall.com.br/. Aproveitar a linguagem de fotografia ampla, abertura imersiva seguida de apresentação tipográfica, títulos em Montserrat, botões pill e seções abertas. Usar conteúdo, fotografias e identidade do Villaggio. Não reproduzir estrutura comercial, textos, imagens nem funcionalidades do Pulse sem necessidade.

Home: fotografia aérea real na abertura; apresentação em fundo claro; experiências por categoria; bloco institucional com fachada real; diretório local demonstrativo; localização e contato pendentes de validação. Animação discreta, sem carrossel automático ou efeitos necessários à leitura.

## Arquivos

- `tokens.css`: fonte única de valores semânticos e escalas.
- `tokens.json`: espelho dos tokens para transferência entre ferramentas.
- `fonts.css` e `montserrat-*.ttf`: Montserrat servida localmente, pesos 400–800, obtida de Google Fonts. Preservar a licença OFL da família na distribuição final.
- `system.css`: componentes e layouts compartilhados.
- `system.js`: interações locais de demonstração.
- `index.html`: catálogo do sistema.
- `home.html`: aplicação à home.
- `comparison.html`: propostas anteriores.

## Cores

| Token | Valor | Uso |
| --- | --- | --- |
| brand-blue | #2B96B3 | Assinatura azul da fachada |
| brand-wine | #7E6572 | Assinatura vinho da fachada |
| brand-brick | #BDABA2 | Referência ao tijolo |
| brand-gray | #D0D2D1 | Neutro da fachada e divisórias |
| background | #F7F5F2 | Fundo predominante |
| surface | #FFFFFF | Cards e sobreposições |
| surface-muted | #EEE8E3 | Superfícies de apoio |
| foreground | #292629 | Texto principal |
| muted-foreground | #625B60 | Texto secundário |
| primary | #176C82 | Ação principal, links e foco |
| primary-hover | #12576A | Hover primário |
| primary-soft | #E2F0F4 | Fundo de ação suave e informação |
| secondary | #69505E | Ação vinho e títulos destacados |
| secondary-hover | #543D49 | Hover vinho |
| secondary-soft | #EEE6EB | Fundo vinho suave |
| input-border | #827B80 | Contorno legível de campos |
| success | #24643E | Confirmações |
| warning | #775400 | Avisos |
| danger | #A32636 | Erros e confirmação destrutiva |

Nunca substituir o azul de ação pelo azul original com texto branco pequeno sem validar contraste. Cor não é o único indicador de erro ou seleção. Os valores de contraste calculados estão no catálogo.

## Tipografia

Uma família: Montserrat. Display 40–80 px responsivo, peso 800, altura de linha 1.04. H1 48 px/800/1.12; H2 32 px/700/1.12; H3 24 px/700/1.12. Introdução 18 px/400/1.6; corpo 16 px/400/1.6; controle 14 px/600/1.4; metadados 12 px. Usar rem e clamp para títulos; ajustar display a 44 px no mobile quando aplicado à home. Letter spacing negativo somente em títulos, nunca a ponto de sobrepor caracteres.

## Espaço, grid e superfícies

Base 4 px. Escala: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64 e 96 px. Conteúdo até 1240 px. Margens 32 px desktop, 24 px mobile. Seções 64–80 px desktop e 48 px mobile. Cards em três colunas acima de 1100 px, duas até 1100 px, uma até 800 px. Campos 8 px de raio; cards e diálogos 16 px; botões e badges pill. Sombras somente em elementos flutuantes. Fotos sem molduras decorativas.

## Componentes e contratos

| Componente | Variantes / estados | Regra |
| --- | --- | --- |
| Button | Primário, vinho, suave, discreto, destrutivo; hover, foco, disabled, loading | Altura 48 px; compacto 44 px; loading bloqueia envio repetido |
| Link | Padrão, hover, foco | Texto descritivo; href real para navegação |
| Input / Textarea / Select | Padrão, foco, disabled, erro | Rótulo persistente; mensagem ligada por aria-describedby |
| Checkbox / Radio / Switch | On, off, foco | Label clicável; radio em grupo; switch somente booleano |
| FilterChip | Selecionado, não selecionado | aria-pressed; atualiza conjunto de resultados |
| Tabs | Selecionada, foco | tablist/tab/tabpanel; setas e Home/End; roving tabindex |
| StoreCard | Carregado, skeleton | Nome, categoria, ação; não inventar dados reais |
| EmptyState | Sem resultados | Explicação curta e ação para limpar filtros |
| Alert | Sucesso, atenção, erro, informação | Ícone opcional; texto obrigatório; retry quando útil |
| Toast | Confirmação curta | Região polite; 4 s na demonstração; erros persistentes em linha |
| Dialog | Informação, confirmação destrutiva | Escape, foco contido, título acessível, retorno ao disparador |
| MobileMenu | Fechado, aberto | aria-expanded; links acessíveis; fecha ao navegar |
| Accordion | Aberto, fechado | details/summary nativos |
| Header / Footer | Desktop, mobile | Marca original, links do escopo, informação validada |

A imagem `logo.png` foi obtida do site oficial e é mantida sem redesenho. Fundo branco compacto garante leitura da marca raster. Solicitar versão vetorial para produção. Fotografias fornecidas pelo responsável do projeto; confirmar direitos de uso comercial.

## Movimento e acessibilidade

150 ms em hover, 250 ms em sobreposições. Respeitar prefers-reduced-motion. Corpo 16 px, controle 14 px. Alvos ≥44 px. Foco de 3 px com offset de 4 px. Texto normal ≥4.5:1, grande ≥3:1; contorno de campo e foco com contraste suficiente contra a superfície. Labels e erros acessíveis; status atualizado por região live; não usar só cor. Dialogs nativos gerenciam foco e Escape. Revisar em 390, 768 e 1440 px, zoom 200%, teclado e leitor de tela antes de produção.

## Implementação em React, Tailwind e shadcn/ui

Esta entrega usa HTML/CSS/JavaScript nativos. Não contém biblioteca React pronta nem pacote shadcn instalado. É a especificação visual e funcional para a implementação posterior.

1. Importar `tokens.css` na folha global; preservar tokens semânticos.
2. Na versão de Tailwind escolhida, mapear background/foreground/primary/secondary/muted/destructive/ring para os tokens; adaptar a sintaxe ao projeto.
3. Personalizar Button, Input, Textarea, Select, Checkbox, RadioGroup, Switch, Tabs, Dialog, Sheet, AlertDialog, Alert e Skeleton de shadcn/ui.
4. Usar Button com `asChild` quando a ação navegar por link.
5. Estruturar componentes base em shared/ui; StoreCard e dados do estabelecimento em entities/establishment se o projeto adotar FSD.
6. Manter busca e categorias fora do componente de apresentação; integrar API ou CMS após definir fonte de conteúdo.
7. Usar Lucide com stroke consistente de 1.5–2 e tamanhos 18–24 px; não usar ícones decorativos em excesso.

## Conteúdo e prontidão

Dados da home são exemplos locais explicitamente identificados. Não há backend, autenticação, envio de formulário, mapa integrado ou contato oficial configurado. Busca e filtros operam apenas nos exemplos. Endereço, horários, estabelecimentos, contatos, história e diferenciais devem ser validados. A identidade não foi aprovada pelo mall. Contrastes foram calculados e referências locais e sintaxe verificadas; não houve auditoria completa nem QA visual em navegador nesta entrega.
