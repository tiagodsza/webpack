const path = require('path'); //solução para buscar caminhos
const babiliPlugin = require('babili-webpack-plugin') //importação do plugin babili

let plugins = []; //Variável que vai armazenar os plugins

if (process.env.NODE_ENV == 'production')  { //Valdação para inserir o babili se for produção
    plugins.push(new babiliPlugin())
}

module.exports = {
    entry: './app-src/app.js', //ponto inicial onde o webpack vai modulo por módulo atras de todas as dependencias, gerando um pacote com as dependencias
    output: {// onde será criado o pacote com as dependencias
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // caminho do pacote, __dirname: diretório atual, 'dist': será concatenado ao diretório atual
        publicPath: 'dist' //Ele altera o caminho gerado pelo webpack dev server, para poder achar o a pasta dist que está em memória.
    },
    module: { //Onde será configurado o babel-loader
        rules: [
            {
                test: /\.js$/, //Expressão regular para pegar apenas arquivos que terminem com .js
                exclude: /node_modules/, //Quais pastas ele ignora
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: plugins //São inseridos os plugins com chave e valor
}