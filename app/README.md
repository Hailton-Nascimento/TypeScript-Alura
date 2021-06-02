## Inicia projeto 

[] - "npm init"

## Instalando Type Script

[] - Comando "npm install typescript"
[] - Criar arquivo tsconfig.json com as configurações
{
    "compilerOptions": {
        "target": "es6",
        "outDir": "app/js"
    },
    "include": [
        "app/ts/**/*"
    ]
}
[] - colocar o tsc no package.json incluindo o Script:  

"compile":"tsc"

[] - Executa o compile com o comando "npm run compile"

[] - configurar copilador para executar toda vez que tiver alteração incluindo um scrpit em jackage.json  
        "strat":"tsc -w"

## Evitando que o compilador gere arquivo JS tendo erro no TS.
[] - Para  evitar gerar o arquivo js com erro na  copilação arquivo deve incluir cuma configuração no tsconfig.json

    "noEmitOnError": true    incluir isso no compilerOptios ficando assim  agora 

    {
    "compilerOptions": {
        "target": "es6",
        "outDir": "app/js",
        "noEmitOnError": true        
    },
    "include": [
        "app/ts/**/*"
    ]
}

## Configurando tipagem de dados:

[] - prevenir que ele coloque um tipo genérico nos dados;
    deve se configurar "noImplicitAny": true ficando assim: 

    {
    "compilerOptions": {
        "target": "es6",
        "outDir": "app/js",
        "noEmitOnError": true,
        "noImplicitAny": true
    },
    "include": [
        "app/ts/**/*"
    ]
}

## Usando JQuery no projeto:

Tem que importar e tem  que instalar as types como o comando: 
"npm install @types/jquery --save-dev"



### Sistema de modulos

Vamos alterar o arquivo tsconfig.json e indicar para o TypeScript que ele deve usar o sistema de módulos do System.js:

{
    "compilerOptions": {
        "target": "es6",
        "outDir": "app/js",
        "noEmitOnError": true, 
        "noImplicitAny": true,
        "removeComments": true,
        "module": "system" <====
    },
    "include": [
        "app/ts/**/*"
    ]
}


Por fim, vamos importar o loader utilizá-lo para carregar js/app/js. É a partir dele que os demais serão carregados.

    <div id="negociacoesView"></div>
    <script src="lib/jquery.min.js"></script>

    <script src="lib/system.js"></script>   <====
    <script>
         System.defaultJSExtensions = true;
        System.import('js/app.js').catch(err => console.error(err));
    </script>


    Dentro da pasta alurabank, vamos instalar o lite-server`:

npm install lite-server@2.3.0 --save-devCOPIAR CÓDIGO
Agora, em alurabank/package.json vamos adicionar a chamada do servidor através do script "server":

{
  "name": "alurabank",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc",
    "start": "tsc -w",
    "server": "lite-server --baseDir=app"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jquery": "^2.0.42",
    "lite-server": "^2.3.0",
    "typescript": "^2.3.2"
  }
}



Agora, vamos renomear o script "start" para "watch" e adicionar novamente o script "start" que chamará o módulo concurrently:

{
  "name": "alurabank",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc",
    "watch": "tsc -w",
    "server": "lite-server --baseDir=app",
    "start": "concurrently \"npm run watch\" \"npm run server\""
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jquery": "^2.0.42",
    "concurrently": "^3.4.0",
    "lite-server": "^2.3.0",
    "typescript": "^2.3.2"
  }
}

COPIAR CÓDIGO
Excelente, agora, no terminal, basta executarmos o comando npm start para termos os dois serviços rodando em paralelo em um único terminal.

npm start


Podemos isolar a lógica do nosso teste de performance em um único lugar e aplicá-lo nos métodos que temos interesse sem que tenhamos que modificar sua implementação. Para tal, precisamos ativar em nosso compilador TypeScript a configuração experimentalDecorators. Quando true, permite utilizar decorators, estrutura que atenderá nossa finalidade.

{
    "compilerOptions": {
        "target": "es6",
        "outDir": "app/js",
        "noEmitOnError": true, 
        "noImplicitAny": true,
        "removeComments": true,
        "module": "system",
        "strictNullChecks": true,
        "experimentalDecorators": true
    },
    "include": [
        "app/ts/**/*"
    ]
}