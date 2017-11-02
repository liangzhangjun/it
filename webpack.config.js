
module.exports = {
    devtool: 'eval-source-map',//��������Source Maps��ѡ����ʵ�ѡ��
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [
          {
              test: /\.json$/,
              loader: "json"
          },
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel',//��webpack��module���ֵ�loaders��������ü���
              query: {
                  presets: ['es2015', 'react']
              }
          }
        ]
    },
    devServer: {
    contentBase: "./public",//���ط����������ص�ҳ�����ڵ�Ŀ¼
    colors: true,//�ն���������Ϊ��ɫ
    historyApiFallback: true,//����ת
    inline: true//ʵʱˢ��
} 
}