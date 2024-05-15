module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./src'],
                    alias: {
                        components: './src/components',
                        views: './src/views',
                        //config: './src/config',
                        navigation: './src/navigation',
                        utils: './src/utils',
                        store: './src/store',
                        // actions: './src/state/actions',
                        constants: './src/constants',
                        // contexts: './src/state/contexts',
                        // reducers: './src/state/reducers',
                        assets: './src/assets/',
                        // hooks: './src/hooks',
                        // data: './src/data',
                    },
                },
            ],
        ],
    };
};
