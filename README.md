# postcss-px2rem-custom
这是基于postcss与px2rem的一个扩展，旨在自定义文件的转换方案。
可以传入一个数组，分别指定不同文件使用不同的转换值。
## 使用
在`vue.config.js`中配置
```
  css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('px2rem-postcss-custom')([{
                        'remUnit': 20,
                        'include': /cube-ui/i
                    },
                        {
                        'remUnit': 40,
                        'exclude': /cube-ui/i
                    }])
                ]
            }
        }
    }
```

## License

MIT
