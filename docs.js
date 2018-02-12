var converter = require('widdershins');
var options = {}; // defaults shown
options.codeSamples = true;
//options.language_tabs = [];
//options.loadedFrom = sourceUrl;
//options.user_templates = './user_templates';
options.templateCallback = function(templateName,stage,data) { return data };
options.theme = 'darkula';
options.search = true;
options.sample = true; // set false by --raw
options.schema = true; // set false by --noschema
options.discovery = false;
options.includes = [];
options.summary = false;
options.headings = 2;
converter.convert(apiObj,options,function(err,str){
  // str contains the converted markdown
});
