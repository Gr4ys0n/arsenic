self.__uv$config = {
        prefix: '/static/uv/service/',
        bare: 'https://nodiddydogwasatthediddyparty.global.ssl.fastly.net/bare/',
        encodeUrl: Ultraviolet.codec.base64.encode,
        decodeUrl: Ultraviolet.codec.base64.decode,
        handler: '/static/uv/handler.js',
        bundle: '/static/uv/bundle.js',
        config: '/static/uv/config.js',
        sw: '/static/uv/fr.sw.js',
};
