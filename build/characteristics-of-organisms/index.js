function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==i)return;var n,a,o=[],s=!0,r=!1;try{for(i=i.call(e);!(s=(n=i.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(e){r=!0,a=e}finally{try{s||null==i.return||i.return()}finally{if(r)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function n(e,t){void 0===t&&(t={});var i=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===i&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}!function(){const e={WIDGET_PATH:"characteristics-of-organisms",NODE_ENV:"production"};try{if(process)return process.env=Object.assign({},process.env),void Object.assign(process.env,e)}catch(e){}globalThis.process={env:e}}();n(".button{height:25px;border-radius:5px;font-size:13px;border:2px solid #006c96;padding:0 15px;background:#fff;-webkit-appearance:none;cursor:pointer}.button:hover{border:2px solid #00a2e0;background:#daf5ff}#prevVideo{left:60px}#nextVideo,#prevVideo{position:absolute;z-index:3;bottom:30px;animation:fadeIn 1s}#nextVideo{right:50px}#videoPageChange{position:absolute;z-index:10;width:100%;height:100%}#videoTimeline{width:100%;height:360px}.loadingStatus{position:absolute}.hiddenButton{display:none}.hiddenVideo{visibility:hidden}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}");var a=function(){function i(e){var t=e.containerId,n=e.videoSrc,a=e.onBeforePageChange,o=void 0===a?function(){}:a,s=e.onPageChanged,r=void 0===s?function(){}:s,d=e.assets;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.isPlaying=!1,this.currentPage=1,this.containerId=t,this.onBeforePageChange=o,this.onPageChanged=r,this.videoSrc=n,this.assetsNames=d,this.isForwardChange=!0}var n,a,o;return n=i,(a=[{key:"getLayout",value:function(){return'\n      <div class="loadingStatus">Loading...</div>\n      <video id="videoPageChange">\n      <source src="">\n</video>\n      <video id="videoTimeline" loop>\n      <source src=""></video>\n      <button id="prevVideo" class="button">Prev</button>\n      <button id="nextVideo" class="button">Next</button>\n    '}},{key:"fetchSrc",value:function(e,t){var i=this;return Array.isArray(e)?Promise.all(e.map((function(e){return fetch(e)}))).then(t).catch((function(){i.loadinStatus?i.loadingStatus.innerText="Network Error":i.containerId.innerText="Network Error"})):fetch(e).then((function(){t()})).catch((function(){i.loadinStatus?i.loadingStatus.innerText="Network Error":i.containerId.innerText="Network Error"}))}},{key:"init",value:function(){var e=this,i=document.getElementById(this.containerId);i.classList.add("timelineWrapper"),i.innerHTML=this.getLayout();var n=t(i.getElementsByClassName("loadingStatus"),1);this.loadingStatus=n[0],this.video=document.getElementById("videoTimeline"),this.videoPageChange=document.getElementById("videoPageChange"),this.prevVideoButton=document.getElementById("prevVideo"),this.nextVideoButton=document.getElementById("nextVideo"),this.videoPageChange.classList.add("hiddenVideo"),this.prevVideoButton.classList.add("hiddenButton"),this.nextVideoButton.classList.add("hiddenButton");var a=Object.values(this.assetsNames[0]);this.fetchSrc(a,(function(){e.loadingStatus.remove(),e.updateVideoSrc(e.video,e.videoSrc),e.onPageChanged(e.currentPage)})),this.videoPageChange.oncanplay=function(){if(e.videoPageChange.classList.remove("hiddenVideo"),e.play(e.videoPageChange),e.isForwardChange)if(e.currentPage>1){var t=Object.values(e.assetsNames[e.currentPage-1]);e.fetchSrc(t,(function(){var t;e.updateVideoSrc(e.video,null===(t=e.assetsNames[e.currentPage-1])||void 0===t?void 0:t.slide)}))}else{var i;e.fetchSrc(null===(i=e.assetsNames[e.currentPage])||void 0===i?void 0:i.slide,(function(){var t;e.updateVideoSrc(e.video,null===(t=e.assetsNames[e.currentPage-1])||void 0===t?void 0:t.slide)}))}else if(2===e.currentPage){var n;e.updateVideoSrc(e.video,null===(n=e.assetsNames[e.currentPage-2])||void 0===n?void 0:n.forward)}else{var a;e.updateVideoSrc(e.video,null===(a=e.assetsNames[e.currentPage-2])||void 0===a?void 0:a.slide)}e.changeCurrentVideo()},this.videoPageChange.onended=function(){e.onPageChanged(e.currentPage),e.prevVideoButton.disabled=!1,e.nextVideoButton.disabled=!1,e.videoPageChange.classList.add("hiddenVideo")},this.video.oncanplay=function(){e.currentPage<2?e.nextVideoButton.classList.remove("hiddenButton"):e.play(e.video)},this.prevVideoButton.onclick=function(){var t;e.onBeforePageChange(e.currentPage),e.isForwardChange=!1,e.prevVideoButton.disabled=!0,e.nextVideoButton.disabled=!0,e.updateVideoSrc(e.videoPageChange,null===(t=e.assetsNames[e.currentPage-2])||void 0===t?void 0:t.backward)},this.nextVideoButton.onclick=function(){var t;e.onBeforePageChange(e.currentPage),e.isForwardChange=!0,e.prevVideoButton.disabled=!0,e.nextVideoButton.disabled=!0,e.updateVideoSrc(e.videoPageChange,null===(t=e.assetsNames[e.currentPage-1])||void 0===t?void 0:t.forward)}}},{key:"play",value:function(e){e.play(),this.isPlaying=!0}},{key:"pause",value:function(e){e.pause(),this.isPlaying=!1}},{key:"updateVideoSrc",value:function(e,i){t(e.getElementsByTagName("source"),1)[0].src=i,e.load()}},{key:"changeCurrentVideo",value:function(){this.isForwardChange?(this.currentPage<4&&(this.currentPage+=1),4===this.currentPage&&this.nextVideoButton.classList.add("hiddenButton"),this.currentPage>1&&this.prevVideoButton.classList.contains("hiddenButton")&&this.prevVideoButton.classList.remove("hiddenButton")):(this.currentPage>1&&(this.currentPage-=1),1===this.currentPage&&this.prevVideoButton.classList.add("hiddenButton"),this.currentPage<4&&this.nextVideoButton.classList.contains("hiddenButton")&&this.nextVideoButton.classList.remove("hiddenButton"))}}])&&e(n.prototype,a),o&&e(n,o),i}();n('@import url("https://fonts.googleapis.com/css2?family=Rancho&family=Schoolbell&display=swap");#multicellular,#unicellular{top:60%}#mainDescription{width:80%;position:absolute;top:80px;left:80px;z-index:1;font-family:Schoolbell,cursive}#content{display:flex;justify-content:center;align-items:center}#pointContainer{display:none}#mainScene{position:absolute;z-index:2}div[data-page]{animation:fadeIn 1s}div[data-page] div{width:40%;max-height:200px;position:absolute;top:57%;z-index:1;font-family:Schoolbell,cursive;font-size:14px}div[data-page] div:first-child{left:11%}div[data-page] div:nth-child(2){right:6%}.wrapper{position:relative;width:640px;height:360px;margin:0 auto}.hidden{display:none;animation:fadeOut .5s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}');var o=document.querySelectorAll("div[data-page]");null==o||o.forEach((function(e){e.classList.add("hidden")}));new a({containerId:"content",videoSrc:"assets/static/ITN3D-166-slide1f.mp4",onBeforePageChange:function(e){var t;null==o||null===(t=o[e-1])||void 0===t||t.classList.add("hidden")},onPageChanged:function(e){var t;null==o||null===(t=o[e-1])||void 0===t||t.classList.remove("hidden")},assets:[{backward:"assets/static/ITN3D-166-slide1b.mp4",forward:"assets/static/ITN3D-166-slide1f.mp4"},{backward:"assets/static/ITN3D-166-slide2b.mp4",forward:"assets/static/ITN3D-166-slide2f.mp4",slide:"assets/static/ITN3D-166-slide2.mp4"},{backward:"assets/static/ITN3D-166-slide3b.mp4",forward:"assets/static/ITN3D-166-slide3f.mp4",slide:"assets/static/ITN3D-166-slide3.mp4"},{slide:"assets/static/ITN3D-166-slide4.mp4"}]}).init();
