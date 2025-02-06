/*
 * @Description: postcss
 * @Author: liuxiaodan
 * @FilePath: \postcss.config.js
 * @Date: 2025-01-06 15:22:01
 */
export default {
	plugins:{
		autoprefixer:{},
		"postcss-nested":{},
		"postcss-each-variables":{},
		"postcss-each":{
			plugins: {
				beforeEach:{"postcss-for":{}, "postcss-color-mix":{}}
			  }
		}
	} 
	
};
