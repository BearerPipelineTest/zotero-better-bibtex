import root from 'zotero-plugin/root'
process.chdir(root)

import 'zotero-plugin/copy-assets'
import 'zotero-plugin/rdf'
import 'zotero-plugin/version'
import './extract-apis'
require('./javascript-identifier-regex')
