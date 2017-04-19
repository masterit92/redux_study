import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/*elslint-disable no-console */

fs.readFile('src/index.html', 'utf8', (err, makeup) => {
  if(err){
    return console.log(err);
  }
  const $ = cheerio.load(makeup);

  $('head').prepend('<link rel="stylesheet" href="style.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
    if(err){
      return console.log(err);
    }
    console.log('index.html write to /dist'.green);
  });
});
