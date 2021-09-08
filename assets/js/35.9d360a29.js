(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{417:function(t,e,a){t.exports=a.p+"assets/img/import1.8dae788f.png"},418:function(t,e,a){t.exports=a.p+"assets/img/import2.7efb3426.png"},419:function(t,e,a){t.exports=a.p+"assets/img/import3.39c054d2.png"},726:function(t,e,a){"use strict";a.r(e);var i=a(48),o=Object(i.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"import-data"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#import-data","aria-hidden":"true"}},[t._v("#")]),t._v(" Import Data")]),t._v(" "),i("p",[t._v("GROWI version 3.7.2 and later supports the ability to import data from GROWI, esa.io, and Qiita:Team.")]),t._v(" "),i("h2",{attrs:{id:"growi-archive-data-import"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#growi-archive-data-import","aria-hidden":"true"}},[t._v("#")]),t._v(" GROWI archive data import")]),t._v(" "),i("p",[t._v("Imports data from a GROWI archive data zip file.")]),t._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("GROWI archive data can only be imported from the same version of GROWI.")])]),t._v(" "),i("li",[i("p",[t._v("In a new environment, the import operation should be performed by an Administrator whose username does not exist in the old environment.")])])])]),t._v(" "),i("div",{staticClass:"custom-block danger"},[i("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),i("ul",[i("li",[t._v("Since the data for the import function uses the file system, it may not work properly when the GROWI server is load balanced. For details, see "),i("RouterLink",{attrs:{to:"/en/admin-guide/admin-cookbook/loadbalance.html#cautionary-points-about-importing-exporting-data"}},[t._v("here")]),t._v(".")],1)])]),t._v(" "),i("h3",{attrs:{id:"importable-data"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#importable-data","aria-hidden":"true"}},[t._v("#")]),t._v(" Importable data")]),t._v(" "),i("p",[t._v("The list of data that can be imported can be found in "),i("RouterLink",{attrs:{to:"/en/admin-guide/management-cookbook/export.html#archivable-mongodb-collections"}},[t._v("Archive Data")]),t._v(". It is possible to select and import only the data collections you need from a single zip file.")],1),t._v(" "),i("h3",{attrs:{id:"modes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#modes","aria-hidden":"true"}},[t._v("#")]),t._v(" Modes")]),t._v(" "),i("p",[t._v("There are three different rules for importing duplicate data, one for each collection.")]),t._v(" "),i("ul",[i("li",[t._v("Insert\n"),i("ul",[i("li",[t._v("Import only if there is no data with the same name, and skip if there is.")])])]),t._v(" "),i("li",[t._v('"Upsert"\n'),i("ul",[i("li",[t._v("If there is data that can be determined to have the same name, that data will be overwritten.")])])]),t._v(" "),i("li",[t._v("Flash and Insert\n"),i("ul",[i("li",[t._v("If there is data with the same name, the existing data will be completely deleted before importing.")]),t._v(" "),i("li",[t._v("This mode is not selectable in the User collection.")]),t._v(" "),i("li",[t._v("The Config collection can only be selected in this mode.\n"),i("ul",[i("li",[t._v("If you import the Config collection, you will need to restart the server.")])])])])])]),t._v(" "),i("h3",{attrs:{id:"how-to-import"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-import","aria-hidden":"true"}},[t._v("#")]),t._v(" How to import")]),t._v(" "),i("ol",[i("li",[t._v("Log in to GROWI with an administrator account and go to [Admin/Import Data] ("),i("code",[t._v("/admin/importer")]),t._v("). Make sure that the "),i("code",[t._v("username")]),t._v(" of the administrator user performing the import operation does not exist in the old environment.")]),t._v(" "),i("li",[t._v('Upload the GROWI archive file by clicking "Import GROWI Archive".')]),t._v(" "),i("li",[t._v("Check the collections you want to import and select a mode.")]),t._v(" "),i("li",[t._v("After running the import, the results will be displayed for each collection.")])]),t._v(" "),i("ul",[i("li",[t._v("Inserted: New data added by the import.")]),t._v(" "),i("li",[t._v("Modified: Data updated by the import")]),t._v(" "),i("li",[t._v("Failed: Data that failed to be imported")])]),t._v(" "),i("p",[t._v("*If you have imported the Config collection, you will need to restart the server.")]),t._v(" "),i("h2",{attrs:{id:"import-data-from-esa-io"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#import-data-from-esa-io","aria-hidden":"true"}},[t._v("#")]),t._v(" Import Data From esa.io")]),t._v(" "),i("p",[t._v("Importing data from esa.io using "),i("a",{attrs:{href:"https://docs.esa.io/posts/102",target:"_blank",rel:"noopener noreferrer"}},[t._v("API v1"),i("OutboundLink")],1),t._v(" published by esa.io.")]),t._v(" "),i("h3",{attrs:{id:"import-target"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#import-target","aria-hidden":"true"}},[t._v("#")]),t._v(" Import Target")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("esa.io")]),t._v(" "),i("th"),t._v(" "),i("th",[t._v("GROWI")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Articles")]),t._v(" "),i("td",[t._v("→")]),t._v(" "),i("td",[t._v("Pages")])]),t._v(" "),i("tr",[i("td",[t._v("Category")]),t._v(" "),i("td",[t._v("→")]),t._v(" "),i("td",[t._v("Page Path")])])])]),t._v(" "),i("div",{staticClass:"custom-block danger"},[i("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),i("ul",[i("li",[t._v("User data will not be imported.")]),t._v(" "),i("li",[t._v("If a page with the same name already exists in the destination path of GROWI, the page will be skipped.")]),t._v(" "),i("li",[t._v("If the page's path can't be created in GROWI, the page will be skipped.")]),t._v(" "),i("li",[t._v("The following metadata on the esa.io page is not imported:\n"),i("ul",[i("li",[t._v("The user who created the page and the user who last updated the page.\n"),i("ul",[i("li",[t._v("On GROWI, the current user will be overwritten by the user who executed the import.")])])]),t._v(" "),i("li",[t._v("Page creation date and time, the date and time of the page's last update.\n"),i("ul",[i("li",[t._v("On GROWI, the previous date and time will be overwritten by the date and time when the import is executed.")])])]),t._v(" "),i("li",[t._v("star")]),t._v(" "),i("li",[t._v("watch")]),t._v(" "),i("li",[t._v("tag")]),t._v(" "),i("li",[t._v("comment")]),t._v(" "),i("li",[t._v("WIP/Ship it")]),t._v(" "),i("li",[t._v("revisions and change log")])])]),t._v(" "),i("li",[t._v("Attachment will be displayed by accessing the attachment URL managed by esa.io. Therefore, if the file is deleted on esa.io, the page will be broken.")])])]),t._v(" "),i("h3",{attrs:{id:"import-method"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#import-method","aria-hidden":"true"}},[t._v("#")]),t._v(" Import Method")]),t._v(" "),i("ol",[i("li",[t._v("Log in to esa.io with owner account and access [Settings] → [User Settings] → [Applications] from the tab on the left.")]),t._v(" "),i("li",[t._v("Click the [Generate new token] under [Personal access tokens] to issue a token to access esa.io from GROWI.")]),t._v(" "),i("li",[t._v("Enter the token, check the [Read] box under [Select scopes]  then click [Save].")])]),t._v(" "),i("p",[i("img",{attrs:{src:a(417),alt:"import1"}})]),t._v(" "),i("ol",{attrs:{start:"4"}},[i("li",[t._v("Save the generated token.")])]),t._v(" "),i("p",[i("img",{attrs:{src:a(418),alt:"import2"}})]),t._v(" "),i("ol",{attrs:{start:"5"}},[i("li",[t._v("Log in to GROWI with an administrator account and go to [Admin/Data Import] ("),i("code",[t._v("/admin/importer")]),t._v(").")]),t._v(" "),i("li",[t._v("In [Import from esa.io] section, enter the esa.io Team name and Access token (the token saved earlier) then update.")]),t._v(" "),i("li",[t._v("Execute [Test connection to esa], If "),i("code",[t._v("Test connection to esa success.")]),t._v(" is displayed then the connection is successful.")]),t._v(" "),i("li",[t._v("Execute [Import] while connected to esa.io, and the page import will start.")])]),t._v(" "),i("h2",{attrs:{id:"import-data-from-qiita-team"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#import-data-from-qiita-team","aria-hidden":"true"}},[t._v("#")]),t._v(" Import Data From Qiita:Team")]),t._v(" "),i("p",[t._v("Importing data from Qiita:Team using "),i("a",{attrs:{href:"https://qiita.com/api/v2/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("API v2"),i("OutboundLink")],1),t._v(" published by Qiita:Team.")]),t._v(" "),i("h3",{attrs:{id:"import-target-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#import-target-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Import Target")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Qiita:Team")]),t._v(" "),i("th"),t._v(" "),i("th",[t._v("GROWI")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Articles")]),t._v(" "),i("td",[t._v("→")]),t._v(" "),i("td",[t._v("Pages")])])])]),t._v(" "),i("div",{staticClass:"custom-block danger"},[i("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),i("ul",[i("li",[t._v("User data, project data and group data are not imported.")]),t._v(" "),i("li",[t._v("If a page with the same name already exists in the destination path of GROWI, the page will be skipped.")]),t._v(" "),i("li",[t._v("If the page path can't be created in GROWI, the page will be skipped.")]),t._v(" "),i("li",[t._v("The following metadata on Qiita:Team will not be imported:\n"),i("ul",[i("li",[t._v("The user who created the page and the user who last updated the page.\n"),i("ul",[i("li",[t._v("On GROWI, the current user will be overwritten by the user who executed the import.")])])]),t._v(" "),i("li",[t._v("Page creation date and time, the date and time of the page's last update.\n"),i("ul",[i("li",[t._v("On GROWI, the previous date and time will be overwritten by the date and time when the import is executed.")])])]),t._v(" "),i("li",[t._v("Reaction to a page.")]),t._v(" "),i("li",[t._v("Public Range, Collaborative Edit Mode")]),t._v(" "),i("li",[t._v("Tag")]),t._v(" "),i("li",[t._v("Comment")]),t._v(" "),i("li",[t._v("Edit History")])])]),t._v(" "),i("li",[t._v("Attachment will be displayed by accessing the attachment URL managed by Qiita:Team. Therefore, if the file is deleted on Qiita:Team, the page will be broken.")])])]),t._v(" "),i("h3",{attrs:{id:"import-method-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#import-method-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Import Method")]),t._v(" "),i("ol",[i("li",[t._v("Log in to Qiita:Team with the owner account. Click the user icon in the upper right to access [Settings] from the dropdown menu.")]),t._v(" "),i("li",[t._v("Open the [Applications] tab on the user account, and under [Personal access tokens], click [Generate new token]")]),t._v(" "),i("li",[t._v("Enter [Description], check [read_qiita_team] in [Scopes], then click [Generate token].")])]),t._v(" "),i("p",[i("img",{attrs:{src:a(419),alt:"import3"}})]),t._v(" "),i("ol",{attrs:{start:"4"}},[i("li",[t._v("Save the generated token.")]),t._v(" "),i("li",[t._v("Log in to GROWI with an administrator account and go to [Admin/Data Import] ("),i("code",[t._v("/admin/importer")]),t._v(").")]),t._v(" "),i("li",[t._v("In [Import from Qiita:Team] section, enter the Qiita:Team Team name and Access token (the token saved earlier) then update.")]),t._v(" "),i("li",[t._v("Execute [Test Connection], If "),i("code",[t._v("Test connection to qiita:team success.")]),t._v(" is displayed then the connection is successful.")]),t._v(" "),i("li",[t._v("Execute [Import] while connected to Qiita:Team, and the page import will start.")])])])},[],!1,null,null,null);e.default=o.exports}}]);