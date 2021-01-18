const path = require('path'); //solução para buscar caminhos

module.exports = {
    entry: './app-src/app.js', //ponto inicial onde o webpack vai modulo por módulo atras de todas as dependencias, gerando um pacote com as dependencias
    output: {// onde será criado o pacote com as dependencias
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') // caminho do pacote, __dirname: diretório atual, 'dist': será concatenado ao diretório atual
    }
}