(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{235:function(e,t,n){"use strict";n.r(t);var o={layout:"farmers",head:function(){return{title:"Installation"}},data:function(){return{content:'<section><h1>Farmers.gov Design System setup</h1>\n<hr>\n<h3>Basic Setup</h3>\n<h4>1. Clone the repository into the root directory of your site</h4>\n<p><code>$ git clone https://github.com/USDA-Farmers-gov/Farmers.Gov-Design-System.git</code></p>\n<h4>2. Rename the repo folder to be web friendly</h4>\n<p><code>$ mv Farmers.Gov-Design-System farmers-gov</code></p>\n<h4>3. Include the JS and CSS in the header</h4>\n<pre><code>&lt;script src=&quot;/farmers-gov/dist/farmers.min.js&quot;&gt;&lt;/script&gt;\n&lt;link rel=&quot;stylesheet&quot; media=&quot;all&quot; href=&quot;/farmers-gov/dist/css/main.min.css&quot; /&gt;\n</code></pre>\n<p class="hide-on-site">\n      Design system elements and their markup can be found at <a href="https://usda-farmers-gov.github.io/">https://usda-farmers-gov.github.io/</a>\n</p>\n<hr>\n<h3>Working with precompiled assets</h3>\n<p><em>In order to use our Gulp tasks to compile the Sass and ES6+ JavaScript files, you\'ll need to have <a href="https://nodejs.org/en/">Node</a>, <a href="https://www.npmjs.com/">NPM</a>, and <a href="https://gulpjs.com/">Gulp</a> installed on your machine.</em></p>\n<ul>\n<li>\n<p>To download this repository, the following commands can be used in the terminal.<br>\n<code>$ git clone git@github.com:USDA-Farmers-gov/Farmers.Gov-Design-System.git</code><br>\nthen run <code>$ cd Farmers.Gov-Design-System</code> to navigate into the repository directory.</p>\n</li>\n<li>\n<p>Once you have the repository downloaded, make sure you are in the repository directory and run <code>npm install</code> to get all of the necessary packages.</p>\n</li>\n<li>\n<p>After all of the packages have been installed, you can run the Gulp tasks to generate the compiled JavaScript and CSS files.</p>\n</li>\n</ul>\n<h5>Gulp Tasks</h5>\n<p><em>These gulp tasks put the compiled assets in the <code>/dist</code> directory.</em></p>\n<table>\n<thead>\n<tr>\n<th>Task</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>gulp scripts</code></td>\n<td>Transpiles the main a JavaScript file located in <code>/js/farmers.js</code></td>\n</tr>\n<tr>\n<td><code>gulp styles</code></td>\n<td>Compiles the main a Sass file located in <code>/scss/styles.scss</code></td>\n</tr>\n<tr>\n<td><code>gulp assets</code></td>\n<td>Copies files from the <code>img/</code> and <code>fonts/</code> directories</td>\n</tr>\n<tr>\n<td><code>gulp watch</code></td>\n<td>Watches all <code>.js</code> files in the <code>js/</code> directory and all <code>.scss</code> files in the <code>scss/</code> directory and compiles/transpiles any new changes</td>\n</tr>\n<tr>\n<td><code>gulp clean</code></td>\n<td>Deletes files and directories in the <code>dist/</code> directory</td>\n</tr>\n<tr>\n<td><code>gulp</code> or <code>gulp build</code></td>\n<td>Runs <code>gulp clean</code>, <code>gulp styles</code>, <code>gulp scripts</code> and <code>gulp assets</code></td>\n</tr>\n</tbody>\n</table>\n</section>\n'}}},d=n(2),component=Object(d.a)(o,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("Installation")]),this._v(" "),t("p",{staticClass:"instructions",domProps:{innerHTML:this._s(this.content)}})])},[],!1,null,null,null);t.default=component.exports}}]);