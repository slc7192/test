// module.exports = {
//     chainWebpack: config => {
//       const oneOfsMap = config.module.rule("scss").oneOfs.store;
//       oneOfsMap.forEach(item => {
//         item
//           .use("sass-resources-loader")
//           .loader("sass-resources-loader")
//           .options({
//             // 公用scss
//             resources: "./src/style/assets/base.scss"
//           })
//           .end();
//       });
//     }
//   };
module.exports = {
    css: {
      loaderOptions: {
         sass: {
             prependData:`@import "./src/assets/base.scss";` 
             // sass 版本 9 中使用 additionalData 版本 8 中使用 prependData  
             }
         }
     }
 }