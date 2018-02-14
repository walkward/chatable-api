var shins = require('shins');
var fs = require('fs')
var markdown = fs.readFileSync(__dirname + '/docs/markdown.md','utf8')
var options = {};
options.highlighter_theme = 'Atom One Dark'
options.minify = true;
options.customCss = false;
options.inline = true;
options.unsafe = false; // setting to true turns off markdown sanitisation
options.source = '/docs/markdown.md'; // used to resolve relative paths for included files

shins.render(markdown, options, function(err, html) {
  let writeStream = fs.createWriteStream('docs/index.html')
  writeStream.write(html, 'utf8');
  // Log errors if they exist.
  if (err) console.log(err)
});
