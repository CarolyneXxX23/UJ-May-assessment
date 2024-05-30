import handlebars from 'vite-plugin-handlebars';
import data from './data.json';

// export default {
//   plugins: [
//     handlebars({
//       context: {}, // replace the curly brackets with data.json
//     }),
//   ],
// };
export default {
  base : '/responsive_cv/',   // <-- add this
  plugins: [handlebars({
      context : data   // add this
  })],
};
