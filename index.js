
const fs = require('fs');
const pug = require('pug');
const yaml = require('js-yaml');
const fn = pug.compileFile('index.pug', {pretty: true});

fs.writeFileSync('zh/index.html', fn(yaml.load(fs.readFileSync('locals/zh.yml', 'utf8'))));
fs.writeFileSync('en/index.html', fn(yaml.load(fs.readFileSync('locals/en.yml', 'utf8'))));
fs.writeFileSync('ja/index.html', fn(yaml.load(fs.readFileSync('locals/ja.yml', 'utf8'))));
