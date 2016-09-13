# TinyMCE-Plugin


Building TinyMCE
----------------
1. Install Node.js
2. Open a console and go to the project directory
3. Write "npm i -g grunt-cli" to install the grunt command line tool globally.
4. Write "npm i" to install all package dependencies.
4. Build TinyMCE by writing "grunt"

Build tasks
-----------

`grunt`
Lints, minified, unit tests and creates release packages for TinyMCE.

`grunt minify`
Minifies all JS and CSS files.

`grunt test`
Runs all qunit tests on PhantomJS.

`grunt lint`
Runs all source files though various JS linters.

`grunt sc-test`
Runs all qunit tests on Saucelabs.

`grunt watch`
Watches for source code changes and triggers rebuilds and linting.

`grunt --help`
Displays the various build tasks.

## Installation

* Download tinyMCE from [here](https://www.tinymce.com/download/)
* unzip (root should be the same as the `tinyMCE` folder in this root)
* also, download the plugin `notification`, and unzip it to the `plugins/` folder
* make sure the tinyMCE is loaded with jquery and the jquery adapter (see `tinyMCE/samples/freme.html` for an example)
* check out `tinyMCE/samples/freme.html`, it's awesome!

## License

Copyright 2015  Agro-Know, Deutsches Forschungszentrum für Künstliche Intelligenz, iMinds, 
Institut für Angewandte Informatik e. V. an der Universität Leipzig, 
Istituto Superiore Mario Boella, Tilde, Vistatec, WRIPL

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
