import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const ctx={window:{}};vm.createContext(ctx);
for(const file of ['translations.js','content.js'])vm.runInContext(fs.readFileSync('dist/'+file,'utf8'),ctx);
const {MISSION_LANGUAGES:langs,MISSION_TRANSLATIONS:dict,MISSION_CONTENT:data}=ctx.window;
assert.equal(langs.length,10);
const html=fs.readFileSync('dist/index.html','utf8');
const keys=[...html.matchAll(/data-(?:t|placeholder|alt)="([^"]+)"/g)].map(m=>m[1]);
for(const item of [...data.gallery,...data.posts])for(const [k,v]of Object.entries(item))if(k.endsWith('Key'))keys.push(v);
const allKeys=Object.keys(dict.pl);
for(const lang of langs){assert.equal(Object.keys(dict[lang]).length,allKeys.length);for(const key of [...allKeys,...keys])assert.ok(typeof dict[lang][key]==='string'&&dict[lang][key].length,lang+': '+key);}
for(const src of [...html.matchAll(/(?:src|href)="([^"#?]+)"/g)].map(m=>m[1]).filter(s=>!s.includes(':'))){assert.ok(fs.existsSync('dist/'+src),'Missing '+src);}
for(const item of data.gallery)assert.ok(fs.existsSync('dist/'+item.src),'Missing '+item.src);
for(const item of data.posts)assert.ok(fs.existsSync('dist/'+item.image),'Missing '+item.image);
for(const file of ['app.js','editor.js','theme.js','translations.js','content.js'])new vm.Script(fs.readFileSync('dist/'+file,'utf8'),{filename:file});
assert.equal(Object.keys(data.payments).length,8);assert.ok(!('stripe' in data.payments));
const ids=[...data.gallery,...data.posts].map(x=>x.id);assert.equal(ids.length,new Set(ids).size);
assert.equal((html.match(/data-lang=/g)||[]).length,10);
for(const code of langs)assert.ok(html.includes('data-lang="'+code+'"'));
const css=fs.readFileSync('dist/assets/noto.css','utf8');for(const m of css.matchAll(/url\(([^)]+)\)/g))assert.ok(fs.existsSync('dist/assets/'+m[1]));
console.log(`PASS: ${langs.length} languages, ${allKeys.length} translations per language, all local media and fonts, 8 payment methods, unique content IDs and JavaScript syntax.`);
