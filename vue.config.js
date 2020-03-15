// создает прокси, чтоб можно было работать с бэком
module.exports = {
    devServer: {
        proxy: 'http://localhost:5000',
    }
};