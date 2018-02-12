var shins = require('shins');
var fs = require('fs')
var markdown = fs.readFileSync(__dirname + '/docs/markdown.md','utf8')
var options = {};
options.minify = false;
options.customCss = false;
options.inline = false;
options.unsafe = false; // setting to true turns off markdown sanitisation
options.source = '/docs/markdown.md'; // used to resolve relative paths for included files
console.log(markdown)
shins.render(markdown, options, function(err, html) {
  let writeStream = fs.createWriteStream('docs/index.html')
  writeStream.write(html, 'utf8');
  console.log(err)
});
