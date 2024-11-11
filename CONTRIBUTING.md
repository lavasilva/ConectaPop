# Contributing to ConectaPop

Obrigado por considerar contribuir com o ConectaPop! Este guia o ajudará a configurar o ambiente de desenvolvimento e colaborar com o projeto de maneira eficaz.

## 1. Criando sua conta no GitHub

Para começar, crie uma conta no GitHub, caso ainda não tenha uma, seguindo o guia oficial:

<ul>
  <li>
    <a href="https://docs.github.com/pt/get-started/start-your-journey/creating-an-account-on-github">Guia de Criação de Conta no Github</a>
  </li>
</ul>

## 2. Clonando o Repositório

Abra o terminal do Git Bash (ou o terminal de sua preferência).

<ul>
  <li>
    Navegue até o diretório onde deseja clonar o repositório, com o comando:
    <code>cd /c/Users/SeuUsuario/SeuDiretorio</code>
  </li>
  <li>
    Clone o repositório usando o comando:
    <code>git clone https://github.com/lavasilva/ConectaPop.git</code>
  </li>
</ul>

## 3. Configurando o Ambiente de Desenvolvimento

Para configurar o ambiente e executar o projeto localmente, siga as etapas abaixo:

### 3.1 Habilitando execução de scripts (Windows)

Se estiver usando o Windows, você precisará habilitar a execução de scripts no PowerShell:

<code>Set-ExecutionPolicy -Scope CurrentUser Unrestricted</code>

### 3.2 Criando e Ativando um Ambiente Virtual

1. Crie um ambiente virtual com o seguinte comando:

<code>python -m venv venv</code>

2. Ative o ambiente virtual:

<ul>
  <li>No Windows, use o comando:
    <code>venv\Scripts\activate</code>
  </li>
  <li>No MacOS/Linux, use o comando:
    <code>source venv/bin/activate</code>
  </li>
</ul>

### 3.3 Instalando as Dependências

Instale os pacotes necessários usando o arquivo requirements.txt:

<code>pip install -r requirements.txt</code>

### 3.4 Realizando Migrações

1. Crie arquivos de migração baseados nas mudanças existentes:

<code>python manage.py makemigrations Aplicacao</code>

2. Aplique as migrações ao banco de dados:

<code>python manage.py migrate</code>

### 3.5 Executando o Servidor de Desenvolvimento

Para iniciar o servidor local e acessar a aplicação em http://127.0.0.1:8000/, use o comando:

<code>python manage.py runserver</code>

## 4. Trabalhando com o Git

### 4.1 Verificando o Status

Antes de adicionar suas modificações, você pode verificar o status do repositório com:

<code>git status</code>

### 4.2 Adicionando Arquivos Modificados

Adicione os arquivos que foram modificados:

<code>git add .</code>

### 4.3 Fazendo o Commit

Realize o commit das suas alterações:

<code>git commit -m "Descrição clara da mudança"</code>

### 4.4 Enviando as Alterações

Envie suas alterações para o repositório remoto:

<code>git push</code>

### 4.5 Atualizando seu Repositório Local

Para manter seu repositório atualizado com as últimas alterações da main, use:

<code>git pull</code>

## 5. Requisitando Permissão para Commit

Caso você não tenha permissão para realizar commits diretamente, abra uma issue no repositório solicitando acesso. Inclua uma breve descrição do seu interesse no projeto e as áreas em que gostaria de contribuir.

## Solicitação de merge da prod para a main
Para solicitar um merge da branch prod (que está na Azure) para a branch main, siga os passos abaixo:

- Certifique-se de que está na branch prod:


<html lang="pt">

      git checkout prod

</html>

- Atualize a Branch prod:


<html lang="pt">

      git pull origin prod

</html>

- Crie um pull request:
Crie um novo pull request no GitHub solicitando o merge da prod para a main. Inclua uma descrição detalhada das mudanças e qualquer contexto necessário para a revisão.

- Aguarde revisão e aprovação:
Notifique os mantenedores do repositório sobre o pull request para que possam revisar e aprovar as mudanças.

- Merge aprovado:
Após a aprovação, um mantenedor do repositório fará o merge das mudanças na branch main.

Seguindo esses passos, você garantirá que todas as mudanças sejam revisadas e integradas corretamente ao projeto.
