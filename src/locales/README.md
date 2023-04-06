# Internacionalização

## Sumário
- [Criando os namespaces das locales](#criando-os-namespaces-das-locales)
  - [Componentes](#componentes)
  - [Pages](#pages)
  - [Store](#store)
  - [Global](#global)
  - [Utils](#utils)
## Criando os namespaces das locales
Para mantermos o padrão nas locales é necessário que os
namespaces devam seguir alguns modelos, segue abaixo:

## Componentes
os componentes são criados com o prefixo de cada um após seguido do nome
consiso, segue o exemplo:
  - `catButton`: namespace para um atómo que é um botão.
  - `cmlCard`: namespace para uma molécula que é um card.
  - `cogHeader`: namespace para um organismo que é um header.
  - `ctTutorial`: namespace para um template que é um tutorial.

**Enquanto for algum componente somente do lookinfeel que foi migrado do legado vamos colocar o prefixo `l` na frente. Ex: `lDetailsCardG`**

## Pages
As pages são criados com o prefixo `pg` após seguido do nome
consiso, segue o exemplo:
- `pgDashboard`: namespace para a página do dashboard.

## Store
As stores são criados com o prefixo `rx` após seguido do nome
consiso, segue o exemplo:
- `rxSettings`:  namespace para a store das settings.

## Global
Os globals são criados com o prefixo `gl` após seguido do nome
consiso, segue o exemplo:
- `glButton`: namespace global dos botões.

## Utils
Os utils são criados com o prefixo `ut` após seguido do nome
consiso, segue o exemplo:
- `utHelpFirebase`: namespace com os helpers do firebase.
- `utValid`: namespace com validações.

Caso tenha alguma dúvida consulte a documentação da lib
que estamos utilizando [i18next](https://www.i18next.com/) ou
entre em contato com um dos desenvolvedores.
