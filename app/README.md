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
