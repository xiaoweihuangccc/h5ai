(function($){$.toJSON=function(o){if(typeof(JSON)=="object"&&JSON.stringify){return JSON.stringify(o)}var type=typeof(o);if(o===null){return"null"}if(type=="undefined"){return undefined}if(type=="number"||type=="boolean"){return o+""}if(type=="string"){return $.quoteString(o)}if(type=="object"){if(typeof o.toJSON=="function"){return $.toJSON(o.toJSON())}if(o.constructor===Date){var month=o.getUTCMonth()+1;if(month<10){month="0"+month}var day=o.getUTCDate();if(day<10){day="0"+day}var year=o.getUTCFullYear();var hours=o.getUTCHours();if(hours<10){hours="0"+hours}var minutes=o.getUTCMinutes();if(minutes<10){minutes="0"+minutes}var seconds=o.getUTCSeconds();if(seconds<10){seconds="0"+seconds}var milli=o.getUTCMilliseconds();if(milli<100){milli="0"+milli}if(milli<10){milli="0"+milli}return'"'+year+"-"+month+"-"+day+"T"+hours+":"+minutes+":"+seconds+"."+milli+'Z"'}if(o.constructor===Array){var ret=[];for(var i=0;i<o.length;i++){ret.push($.toJSON(o[i])||"null")}return"["+ret.join(",")+"]"}var pairs=[];for(var k in o){var name;var type=typeof k;if(type=="number"){name='"'+k+'"'}else{if(type=="string"){name=$.quoteString(k)}else{continue}}if(typeof o[k]=="function"){continue}var val=$.toJSON(o[k]);pairs.push(name+":"+val)}return"{"+pairs.join(", ")+"}"}};$.evalJSON=function(src){if(typeof(JSON)=="object"&&JSON.parse){return JSON.parse(src)}return eval("("+src+")")};$.secureEvalJSON=function(src){if(typeof(JSON)=="object"&&JSON.parse){return JSON.parse(src)}var filtered=src;filtered=filtered.replace(/\\["\\\/bfnrtu]/g,"@");filtered=filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]");filtered=filtered.replace(/(?:^|:|,)(?:\s*\[)+/g,"");if(/^[\],:{}\s]*$/.test(filtered)){return eval("("+src+")")}else{throw new SyntaxError("Error parsing JSON, source is not valid.")}};$.quoteString=function(string){if(string.match(_escapeable)){return'"'+string.replace(_escapeable,function(a){var c=_meta[a];if(typeof c==="string"){return c}c=a.charCodeAt();return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)})+'"'}return'"'+string+'"'};var _escapeable=/["\\\x00-\x1f\x7f-\x9f]/g;var _meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"}})(jQuery);(function(a){a(function(){a.h5ai=new H5ai()});H5ai=function(m){var c={columnClasses:["icon","name","date","size"],defaultSortOrder:"C=N;O=A",viewmodes:["details","icons"],store:{viewmode:"h5ai.viewmode"},icons:{crumb:"/h5ai/images/crumb.png",ascending:"/h5ai/images/ascending.png",descending:"/h5ai/images/descending.png"},customHeader:"h5ai.header.html",customFooter:"h5ai.footer.html",callbacks:{folderClick:[],fileClick:[]}};this.folderClick=function(n){if(typeof n==="function"){c.callbacks.folderClick.push(n)}return this};this.fileClick=function(n){if(typeof n==="function"){c.callbacks.fileClick.push(n)}return this};var l=function(){b();f();j();i()};var k=function(n){for(idx in c.callbacks.folderClick){c.callbacks.folderClick[idx].call(window,n)}};var e=function(n){for(idx in c.callbacks.fileClick){c.callbacks.fileClick[idx].call(window,n)}};var g=function(){var n=localStorage.getItem(c.store.viewmode);if(a.inArray(n,c.viewmodes)){return n}return c.viewmodes[0]};var b=function(n){a("#table").hide();if(n!==undefined){localStorage.setItem(c.store.viewmode,n)}a("body > nav li.view").removeClass("current");if(g()==="icons"){a("#viewicons").closest("li").addClass("current");a("#extended").removeClass("details-view").addClass("icons-view").show()}else{a("#viewdetails").closest("li").addClass("current");a("#extended").addClass("details-view").removeClass("icons-view").show()}};var f=function(){a("#domain span").text(document.domain);var r=decodeURI(document.location.pathname);var q=r.split("/");var p="/";var o=a("nav ul");for(idx in q){var n=q[idx];if(n!==""){p+=n+"/";o.append(a("<li class='crumb'><a href='"+p+"'><img src='"+c.icons.crumb+"' alt='>' />"+n+"</a></li>"))}}a("body > nav .crumb:last").addClass("current");document.title=document.domain+r};var h=function(){function n(o){if(o>=0&&o<c.columnClasses.length){return c.columnClasses[o]}return"unknown"}a("#table td").removeAttr("align").removeAttr("valign");a("#table tr").each(function(){var o=0;a(this).find("th,td").each(function(){a(this).addClass(n(o++))})})};var d=function(){var r=a("<ul/>");var t=a("<li class='header' />").appendTo(r);a("<a class='icon'></a>").appendTo(t);var p=a("th.name a");var s=a("th.date a");var o=a("th.size a");a("<a class='label' href='"+p.attr("href")+"'>"+p.text()+"</a>").appendTo(t);a("<a class='date' href='"+s.attr("href")+"'>"+s.text()+"</a>").appendTo(t);a("<a class='size' href='"+o.attr("href")+"'>"+o.text()+"</a>").appendTo(t);var n=document.location.search;if(n===""){n=c.defaultSortOrder}var q;if(n.indexOf("O=A")>=0){q=a("<img src='"+c.icons.ascending+"' class='sort' alt='ascending' />")}else{q=a("<img src='"+c.icons.descending+"' class='sort' alt='descending' />")}if(n.indexOf("C=N")>=0){t.find("a.label").append(q)}else{if(n.indexOf("C=M")>=0){t.find("a.date").prepend(q)}else{if(n.indexOf("C=S")>=0){t.find("a.size").prepend(q)}}}a("#table td.name a").closest("tr").each(function(){var B=a(this);var u=B.find("td.icon img");var v=u.attr("src");var x=v.replace("16x16","48x48");var A=u.attr("alt");var C=B.find("td.name a");var E=C.text();var w=C.attr("href");var z=B.find("td.date").text();var F=B.find("td.size").text();var D=a("<li class='entry' />").appendTo(r);if(A==="[DIR]"){D.addClass("folder")}else{D.addClass("file")}var y=a("<a href='"+w+"' />").appendTo(D);a("<span class='icon small'><img src='"+v+"' alt='"+A+"' /></span>").appendTo(y);a("<span class='icon big'><img src='"+x+"' alt='"+A+"' /></span>").appendTo(y);a("<span class='label'>"+E+"</span>").appendTo(y);a("<span class='date'>"+z+"</span>").appendTo(y);a("<span class='size'>"+F+"</span>").appendTo(y)});a("#extended").append(r);$entries=a("#extended .entry");if($entries.size()===0||$entries.size()===1&&$entries.find(".label").text()==="Parent Directory"){a("#extended").append(a("<div class='empty'>empty</div>"))}a("#extended").append(a("<div class='clearfix' />"));a("#extended .entry.folder").click(function(){k(a(this).find(".label").text())});a("#extended .entry.file").click(function(){e(a(this).find(".label").text())})};var j=function(){h();d();a("#viewdetails").closest("li").click(function(){b("details")});a("#viewicons").closest("li").click(function(){b("icons")})};var i=function(){a.ajax({url:c.customHeader,dataType:"html",success:function(n){a("#content > header").append(a(n)).show()}});a.ajax({url:c.customFooter,dataType:"html",success:function(n){a("#content > footer").prepend(a(n)).show()}})};l()}})(jQuery);(function(a){a(function(){window.setTimeout(function(){a.h5aiTree=new H5aiTree()},1)});H5aiTree=function(q){var e=/<meta name="h5ai-version"/;var g=/\/$/;var l=/^(\/(.*\/)*)([^\/]+\/?)$/;function p(){k();b();c()}function d(s){if(s==="/"){return["","/"]}var r=l.exec(s);return[r[1],r[3]]}function k(){a("li.crumb a").each(function(){var r=a(this);var s=r.attr("href");f(s,function(t){if(t!==0){a("<img class='hint' src='/h5ai/images/page.png' alt='not listable' />").appendTo(r);if(t!==200){a("<span class='hint'>("+t+")</span>").appendTo(r)}}})})}function j(r){var t=a("#tree");var s=a("#extended");var r=r||false;if(t.outerWidth()<s.offset().left||r){t.stop().animate({left:0})}else{var u=24-t.outerWidth();t.stop().animate({left:u})}}function b(){a("#tree").hover(function(){j(true)},function(){j()});a(window).resize(function(){j()})}function c(){var r=a("#tree");r.css({left:-400}).show();j();var s=decodeURI(document.location.pathname);i(s,function(t){r.empty().append(t.toHtml());j()})}function i(r,s){o(r,function(t){var u=new Entry(t);n(t,function(v){u.content=v;s(u)})})}function o(t,u){var s=d(t);var r=s[0];if(r===""){u(t)}else{f(r,function(v){if(v===0){o(r,u)}else{u(t)}})}}function n(r,s){h(r,false,function(t){if(t instanceof Array){for(idx in t){(function(u){if(u.isFolder){n(u.absHref,function(v){u.content=v;s(t)})}})(t[idx])}}s(t)})}function h(s,r,t){m(s,r,function(u){if(u instanceof Array){var v=[];for(idx in u){var w=u[idx];if(w.isFolder){v.push(w)}}t(v)}else{t(u)}})}function m(s,r,t){a.ajax({url:s,type:"GET",dataType:"html",error:function(u){t(u.status)},success:function(v){if(!e.test(v)){t(200)}else{var u=[];a(v).find("#table table td").closest("tr").each(function(){var w=new Entry(s,this);if(!w.isParentFolder||r){u.push(w)}});t(u)}}})}function f(r,s){a.ajax({url:r,type:"GET",dataType:"html",error:function(t){s(t.status)},success:function(t){if(e.test(t)){s(0)}else{s(200)}}})}Entry=function(t,r){if(!g.test(t)){t+="/"}if(r!==undefined){var v=a(r).find("td");var s=a(v.get(0)).find("img");var u=a(v.get(1)).find("a");this.parentFolder=t;this.icon16=s.attr("src");this.alt=s.attr("alt");this.label=u.text();this.href=u.attr("href");this.date=a(v.get(2)).text();this.size=a(v.get(3)).text()}else{var w=d(t);this.parentFolder=w[0];this.label=w[1];this.icon16="/h5ai/icons/16x16/folder.png";this.alt="[DIR]";this.href=this.label;this.date="";this.size="";if(this.label==="/"){this.label=document.domain+"/"}}this.icon48=this.icon16.replace("16x16","48x48");this.isFolder=(this.alt==="[DIR]");this.isParentFolder=(this.isFolder&&this.label==="Parent Directory");this.absHref=this.isParentFolder?this.href:this.parentFolder+this.href;this.content=undefined;this.isComplete=function(){if(this.content===undefined){return false}if(this.content instanceof Array){for(idx in this.content){if(!this.content[idx].isComplete()){return false}}}return true};this.toHtml=function(){var y=a("<div class='entry' />");try{var A=a("<a href='"+this.absHref+"' />").appendTo(y).append(a("<span class='icon'><img src='"+this.icon16+"' /></span>")).append(a("<span class='label'>"+this.label+"</span>"));if(this.isFolder){if(this.absHref===document.location.pathname){A.find(".icon img").attr("src","/h5ai/images/folder-open.png");y.addClass("current")}if(this.content instanceof Array){var x=a("<ul class='content' />").appendTo(y);for(idx in this.content){a("<li />").append(this.content[idx].toHtml()).appendTo(x)}}else{if(this.content===undefined){A.append(a("<span class='hint'><img src='/h5ai/images/loading.png' /></span>"))}else{if(this.content===200){A.find(".icon img").attr("src","/h5ai/images/folder-page.png");A.append(a("<span class='hint'><img src='/h5ai/images/page.png' /></span>"))}else{A.append(a("<span class='hint error'>"+this.content+"</span>"));y.addClass("notListable")}}}}}catch(z){a("<span class='fail'>fail</span>").appendTo(y)}return y}};p()}})(jQuery);