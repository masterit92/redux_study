/*elslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue);

webpack(webpackConfig).run((err, stats) => {
  if(err){
    console.log(err.bold.red);
    return 1;
  }
  const jsonStates = stats.toJson();

  if(jsonStates.hasErrors){
    return jsonStates.errors.map(error => console.log(error.red));
  }

  if(jsonStates.hasWarnings){
    console.log('Webpack generated the following warnings: '.bold.yellow);
    jsonStates.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  console.log('Your app has been compoled in production mode and writen to /dist. It\'s ready to roll!'.green);
  return 0;
});

