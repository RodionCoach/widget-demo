function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,i,o=[],a=!0,d=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){d=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(d)throw i}}return o}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}!function(){const e={WIDGET_PATH:"city",NODE_ENV:"production"};try{if(process)return process.env=Object.assign({},process.env),void Object.assign(process.env,e)}catch(e){}globalThis.process={env:e}}();i(".timelineWrapper{width:100%;position:relative}.timelineWrapper .view{margin:0 auto;min-height:360px;display:block;border-top:0}#videoTimeline{height:360px}.timelineWrapper .progressBar{top:0;right:0;position:absolute;width:100%;height:100%;background:#000;opacity:.4}.timelineWrapper .loadingStatus{width:100%;top:50%;transform:translateY(-100%);background:#fff;text-align:center;font-size:18px;padding:10px 0;text-transform:uppercase;position:absolute}.timelineWrapper .controlsWrapper{display:flex;margin-top:10px;padding:0 10px;align-items:center}.timelineWrapper .controlsWrapper .rangeControl{flex:1}.timelineWrapper .controlsWrapper .playButton{width:47px;height:40px;border-radius:5px;margin-right:10px;font-size:13px;border:2px solid #006c96;background:#fff;-webkit-appearance:none;cursor:pointer}.timelineWrapper .controlsWrapper .playButton:hover{border:2px solid #00a2e0;background:#daf5ff}.timelineWrapper .hidden{display:none}.timelineWrapper input[type=range]{-webkit-appearance:none;margin:18px 0;width:100%}.timelineWrapper input[type=range]:focus{outline:none}.timelineWrapper input[type=range]::-webkit-slider-runnable-track{width:100%;height:8.4px;cursor:pointer;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;background:#3071a9;border-radius:1.3px;border:.2px solid #010101}.timelineWrapper input[type=range]::-webkit-slider-thumb{box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;border:1px solid #000;height:36px;width:16px;border-radius:3px;background:#fff;cursor:pointer;-webkit-appearance:none;margin-top:-14px}.timelineWrapper input[type=range]:focus::-webkit-slider-runnable-track{background:#367ebd}.timelineWrapper input[type=range]::-moz-range-track{width:100%;height:8.4px;cursor:pointer;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;background:#3071a9;border-radius:1.3px;border:.2px solid #010101}.timelineWrapper input[type=range]::-moz-range-thumb{box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;border:1px solid #000;height:36px;width:16px;border-radius:3px;background:#fff;cursor:pointer}.timelineWrapper input[type=range]::-ms-track{width:100%;height:8.4px;cursor:pointer;background:transparent;border-color:transparent;border-width:16px 0;color:transparent}.timelineWrapper input[type=range]::-ms-fill-lower{background:#2a6495;border:.2px solid #010101;border-radius:2.6px;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d}.timelineWrapper input[type=range]::-ms-fill-upper{background:#3071a9;border:.2px solid #010101;border-radius:2.6px;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d}.timelineWrapper input[type=range]::-ms-thumb{box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;border:1px solid #000;height:36px;width:16px;border-radius:3px;background:#fff;cursor:pointer}.timelineWrapper input[type=range]:focus::-ms-fill-lower{background:#3071a9}.timelineWrapper input[type=range]:focus::-ms-fill-upper{background:#367ebd}");var o=function(){function n(e){var t=e.containerId,r=e.videoSrc,i=e.layout;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.isPlaying=!1,this.containerId=t,this.videoSrc=r,this.layout=i||'\n    <div class="loadingStatus">Loading...</div>\n    <video id="videoTimeline"></video>\n    <div class="controlsWrapper">\n      <button class="playButton">Play</button>\n      <input class="rangeControl" type="range" value="0" min="0" step="1">\n    </div>\n',this.mainLoop=null}var r,i,o;return r=n,(i=[{key:"init",value:function(){var e=this,n=document.getElementById(this.containerId);n.innerHTML=this.layout,n.classList.add("timelineWrapper");var r=t(n.getElementsByClassName("loadingStatus"),1);this.loadingStatus=r[0];var i=t(n.getElementsByClassName("playButton"),1);this.playButton=i[0];var o=t(n.getElementsByClassName("rangeControl"),1);this.rangeControl=o[0],this.video=document.getElementById("videoTimeline"),this.playButton.disabled=!0,this.video.addEventListener("ended",(function(){clearInterval(e.mainLoop),e.pause(),e.rangeControl.value=0})),this.rangeControl.addEventListener("change",(function(){e.setTime(e.rangeControl.valueAsNumber)})),fetch(this.videoSrc).then((function(){e.loadingStatus.remove();var t=document.createElement("source");t.src=e.videoSrc,e.video.appendChild(t),e.video.load(),e.video.onloadedmetadata=function(){e.rangeControl.max=String(100*e.video.duration),e.playButton.disabled=!1,e.play()}})).catch((function(){e.loadingStatus.innerText="Network Error"})),this.rangeControl.addEventListener("input",(function(){e.pause(),e.setTime(e.rangeControl.valueAsNumber)})),this.playButton.addEventListener("click",(function(){e.isPlaying?e.pause():e.play()}))}},{key:"play",value:function(){var e=this;this.video.play(),this.playButton.innerText="Pause",this.isPlaying=!0,this.mainLoop=setInterval((function(){e.rangeControl.value=String(100*e.video.currentTime)}),100)}},{key:"pause",value:function(){this.video.pause(),this.playButton.innerText="Play",this.isPlaying=!1}},{key:"setTime",value:function(e){this.video.currentTime=e/100}},{key:"destroy",value:function(){document.getElementById(this.containerId).innerHTML="",clearInterval(this.mainLoop)}}])&&e(r.prototype,i),o&&e(r,o),n}();i("polyline{cursor:pointer;fill:transparent}.point:hover polyline{fill:rgba(120,226,250,.26);stroke:#fff;stroke-width:2;stroke-linecap:round}#timeline-wrapper{position:absolute;width:100%;height:100%;max-width:640px;max-height:460px;background-color:#fff;top:-30px;left:50%;transform:translate(-50%,-100%);border-radius:0 0 5px 5px;box-shadow:0 0 10px rgba(0,0,0,.43);transition:all .5s ease-in-out;z-index:4}#closeButton{display:flex;width:100%;justify-content:center;-webkit-appearance:none;background:none;border:0;font-size:14px;height:30px;align-items:center;cursor:pointer}#closeButton:hover{background:#f7f7f7}#closeButton span{width:10px;height:10px;border-right:2px solid #000;border-top:2px solid #000;transform:rotate(-45deg) translate(-4px,-1px);margin-right:7px}.button{height:25px;border-radius:5px;font-size:13px;border:2px solid #006c96;padding:0 15px;background:#fff;-webkit-appearance:none;cursor:pointer}.button:hover{border:2px solid #00a2e0;background:#daf5ff}#nextVideo{position:absolute;z-index:3;right:10px;bottom:10px;animation:fadeIn 1s}#timeline-wrapper.opened{transform:translateX(-50%);top:0}.loader{position:absolute;top:50%;transform:translateX(-50%);margin:0 auto}.hidden{display:none}");var a,d=document.getElementById("loader")||{},l=document.getElementsByClassName("cycle-wrapper")[0]||{},p=document.getElementById("nextVideo"),s=document.getElementById("timeline-wrapper"),u=document.getElementById("video-container"),c=document.getElementById("video-zoom-in"),m=document.getElementById("pointContainer"),h=document.getElementsByClassName("point"),f=t(u.getElementsByTagName("source"),1)[0];d.innerHtml="<span>Loading...</span>";var g=function(){return null==p?void 0:p.classList.remove("hidden")};null==u||u.addEventListener("loadedmetadata",(function(){null==l||l.classList.remove("hidden"),null==d||d.classList.add("hidden")})),null==u||u.addEventListener("canplay",g),null==p||p.addEventListener("click",(function(){null==c||c.classList.remove("hidden"),null==u||u.classList.add("hidden"),null==u||u.removeEventListener("canplay",g),null==c||c.play(),null==p||p.classList.add("hidden"),null==c||c.addEventListener("ended",(function(){f.src="assets/static/main/219_Town2.mp4",null==u||u.load(),null==u||u.addEventListener("canplay",(function(){null==c||c.classList.add("hidden"),null==u||u.classList.remove("hidden")})),null==m||m.classList.remove("hidden")}))}));var x,y=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,d=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return d=e.done,e},e:function(e){l=!0,a=e},f:function(){try{d||null==r.return||r.return()}finally{if(l)throw a}}}}(h);try{var b=function(){var e=x.value,t=e.getAttribute("data-point");t&&e.addEventListener("click",(function(){return e=t,s.classList.add("opened"),void(a=new o({containerId:"timeline",videoSrc:"assets/static/".concat(e,".mp4")})).init();var e}))};for(y.s();!(x=y.n()).done;)b()}catch(e){y.e(e)}finally{y.f()}document.getElementById("closeButton").addEventListener("click",(function(){s.classList.contains("opened")&&(s.classList.remove("opened"),a.destroy())}));
