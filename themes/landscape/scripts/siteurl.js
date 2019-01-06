'use strict';

const config = hexo.config;

hexo.extend.tag.register("site_url",() => {
    return config.url;
});