(()=>{"use strict";var e={773:(e,t,n)=>{e.exports=n.p+"0fa5b68ff7ec4f1f0fd9.jpg"},561:(e,t,n)=>{e.exports=n.p+"6e5ab6d8277a497767a9.jpg"}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(561);const t={para1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu justo nec ante ornare molestie. Nulla fermentum massa ac gravida eleifend. Phasellus nulla ipsum, mattis sit amet tortor eu, semper consequat orci.",para2:"Quisque tortor dui, consequat eu risus tincidunt, auctor aliquet ligula. Suspendisse feugiat viverra rhoncus. Sed ultricies mi nunc, sit amet pretium elit porttitor ut. Praesent interdum viverra leo sit amet blandit.",heading:"Welcome, Our Restaurant Serves The Best.",info:[{spanText:"calendar_month",pText:"Mondays - Sundays Working Days"},{spanText:"schedule",pText:"7:30am - 11:00pm Working Hours"},{spanText:"groups",pText:"Professional Work Staffs"}]},a={material:[{spanText:"place",pText:"some address here..."},{spanText:"email",pText:"example@mail.com"}],fontawesome:[{link:"www.facebook.com",class:["fa","fa-facebook-official"]},{link:"www.twitter.com",class:["fa","fa-twitter-square"]},{link:"www.instagram.com",class:["fa","fa-instagram"]}]};function i(){const n=document.createElement("div");n.classList.add("intro");const a=document.createElement("img");a.classList.add("intro-img");const i=document.createElement("div");i.classList.add("intro-details");const s=document.createElement("h1");s.classList.add("intro-heading");const o=document.createElement("div");o.classList.add("intro-info"),a.src=e,n.appendChild(a),s.textContent=t.heading,i.appendChild(s);for(let e=1;e<=2;e++){const n=document.createElement("p");n.textContent=t["para"+e],i.appendChild(n)}return t.info.forEach((e=>{const t=document.createElement("p"),n=document.createElement("span");n.classList.add("material-icons"),n.textContent=e.spanText,t.appendChild(n);const a=document.createTextNode(e.pText);t.appendChild(a),o.appendChild(t)})),i.appendChild(o),n.appendChild(i),n}function s(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("h2");t.textContent="Visit Us Today";const n=document.createElement("div");n.classList.add("contact-list"),a.material.forEach((e=>{const t=document.createElement("p"),a=document.createElement("span");a.classList.add("material-icons"),a.textContent=e.spanText,t.appendChild(a);const i=document.createTextNode(e.pText);t.appendChild(i),n.appendChild(t)}));const i=document.createElement("div");return i.classList.add("social"),a.fontawesome.forEach((e=>{const t=document.createElement("a");t.href=e.link;const n=document.createElement("i");n.classList.add(e.class[0],e.class[1]),t.appendChild(n),i.appendChild(t)})),e.appendChild(t),e.appendChild(n),e.appendChild(i),e}var o=n(773);const c=document.querySelector("#content");function r(){const e=document.createElement("div");e.classList.add("footer");const t=document.createElement("p");t.textContent="CopyRight &copy; 2021";const n=document.createElement("h2");return n.textContent="Koby's Restaurant",n.classList.add("logo-text"),e.appendChild(t),e.appendChild(n),e}c.appendChild(function e(){const t=document.createElement("div"),n=document.createElement("h2");n.textContent="Koby's Restaurant";const a=document.createElement("ul");return a.addEventListener("click",(function(t){const n=t.target;if("LI"===n.tagName){console.log(n.textContent);const t=Array.from(c.children);for(let e=0;e<t.length;e++)c.removeChild(t[e]);"Home"===n.textContent?(document.title="Koby's Restaurant Project",c.appendChild(e()),c.appendChild(i()),c.appendChild(s()),c.appendChild(r())):"Menu"===n.textContent?(document.title="Our Menu - Koby's Restaurant",c.appendChild(e()),c.appendChild(r())):(document.title="About Us - Koby's Restaurant",c.appendChild(e()),c.appendChild(function(){const e=document.createElement("div");e.classList.add("about-section");const t=document.createElement("h1");t.classList.add("about-heading");const n=document.createElement("p"),a=document.createElement("p"),i=document.createElement("img");return i.classList.add("about-img"),t.textContent="Why We Excel Soo Much - Koby's Restaurant",n.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel condimentum est. Phasellus maximus orci et vehicula ullamcorper. Morbi lacus nunc, varius quis ligula a, maximus fermentum est. Nunc tristique tincidunt massa ultrices ornare. Nulla faucibus pulvinar orci. Mauris fringilla sollicitudin enim. Pellentesque ac ullamcorper nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam cursus quam ipsum, in commodo orci pellentesque a.",a.textContent="Curabitur gravida lorem vel est ullamcorper eleifend. Nam tempor magna non bibendum maximus. Pellentesque vitae pharetra tortor. Nullam tellus nisl, pulvinar nec lacus vel, ullamcorper rutrum arcu. Morbi pellentesque congue justo, sed aliquam tellus sollicitudin vehicula. Cras hendrerit augue non tempor fringilla. Suspendisse sit amet ipsum sollicitudin massa lacinia lacinia quis vitae urna. Duis vulputate faucibus urna sit amet vulputate.",i.src=o,e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(a),e}()),c.appendChild(r()))}})),t.classList.add("top-navbar"),n.classList.add("logo-text"),a.classList.add("nav-links"),["Home","Menu","About Us"].forEach((e=>{const t=document.createElement("li");t.textContent=e,a.appendChild(t)})),t.appendChild(n),t.appendChild(a),t}()),c.appendChild(i()),c.appendChild(s()),c.appendChild(r())})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTTBDLEVBQWVuRSxTQUFTdUIsY0FBYyxNQUM1QzRDLEVBQWEzQyxVQUFVQyxJQUFJLGlCQUUzQixNQUFNMkMsRUFBWXBFLFNBQVN1QixjQUFjLEtBQ25DOEMsRUFBYXJFLFNBQVN1QixjQUFjLEtBRXBDRyxFQUFNMUIsU0FBU3VCLGNBQWMsT0FlbkMsT0FkQUcsRUFBSUYsVUFBVUMsSUFBSSxhQUdsQjBDLEVBQWFwQyxZQUFlLDRDQUM1QnFDLEVBQVVyQyxZRjZCQyxvZEU1QlhzQyxFQUFXdEMsWUY2QkMsOGJFNUJaTCxFQUFJeEIsSUFBTW9FLEVBR1ZKLEVBQWFwQyxZQUFZcUMsR0FDekJELEVBQWFwQyxZQUFZc0MsR0FDekJGLEVBQWFwQyxZQUFZSixHQUN6QndDLEVBQWFwQyxZQUFZdUMsR0FFbEJILEVDU3lCLElBQ3BCckIsRUFBUWYsWUFBWWlCLFVBTWhDSyxFQUFPNUIsVUFBVUMsSUFBSSxjQUNyQnlCLEVBQVMxQixVQUFVQyxJQUFJLGFBQ3ZCNEIsRUFBUzdCLFVBQVVDLElBQUksYUFHTCxDQUFDLE9BQVEsT0FBUSxZQUN6QlEsU0FBUXNDLElBQ2QsTUFBTUMsRUFBS3hFLFNBQVN1QixjQUFjLE1BQ2xDaUQsRUFBR3pDLFlBQWN3QyxFQUNqQmxCLEVBQVN2QixZQUFZMEMsTUFLekJwQixFQUFPdEIsWUFBWW9CLEdBQ25CRSxFQUFPdEIsWUFBWXVCLEdBRVpELEVBb0JhRCxJQUNwQk4sRUFBUWYsWUFBWVQsS0FDcEJ3QixFQUFRZixZQUFZUSxLQUNwQk8sRUFBUWYsWUFBWWlCLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW50cm9EYXRhLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJjb25zdCBkYXRhID0ge1xuICAgIHBhcmExOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRG9uZWMgZXUganVzdG8gbmVjIGFudGUgb3JuYXJlIG1vbGVzdGllLiBOdWxsYSBmZXJtZW50dW0gbWFzc2EgYWMgZ3JhdmlkYSBlbGVpZmVuZC4gUGhhc2VsbHVzIG51bGxhIGlwc3VtLCBtYXR0aXMgc2l0IGFtZXQgdG9ydG9yIGV1LCBzZW1wZXIgY29uc2VxdWF0IG9yY2kuJyxcbiAgICBwYXJhMjogJ1F1aXNxdWUgdG9ydG9yIGR1aSwgY29uc2VxdWF0IGV1IHJpc3VzIHRpbmNpZHVudCwgYXVjdG9yIGFsaXF1ZXQgbGlndWxhLiBTdXNwZW5kaXNzZSBmZXVnaWF0IHZpdmVycmEgcmhvbmN1cy4gU2VkIHVsdHJpY2llcyBtaSBudW5jLCBzaXQgYW1ldCBwcmV0aXVtIGVsaXQgcG9ydHRpdG9yIHV0LiBQcmFlc2VudCBpbnRlcmR1bSB2aXZlcnJhIGxlbyBzaXQgYW1ldCBibGFuZGl0LicsXG4gICAgaGVhZGluZzogJ1dlbGNvbWUsIE91ciBSZXN0YXVyYW50IFNlcnZlcyBUaGUgQmVzdC4nLFxuICAgIGluZm86IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc3BhblRleHQ6ICdjYWxlbmRhcl9tb250aCcsXG4gICAgICAgICAgICBwVGV4dDogJ01vbmRheXMgLSBTdW5kYXlzIFdvcmtpbmcgRGF5cycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNwYW5UZXh0OiAnc2NoZWR1bGUnLFxuICAgICAgICAgICAgcFRleHQ6ICc3OjMwYW0gLSAxMTowMHBtIFdvcmtpbmcgSG91cnMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNwYW5UZXh0OiAnZ3JvdXBzJyxcbiAgICAgICAgICAgIHBUZXh0OiAnUHJvZmVzc2lvbmFsIFdvcmsgU3RhZmZzJ1xuICAgICAgICB9XG4gICAgXVxufVxuXG5jb25zdCBjb250YWN0RGF0YSA9IHtcbiAgICBtYXRlcmlhbDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBzcGFuVGV4dDogJ3BsYWNlJyxcbiAgICAgICAgICAgIHBUZXh0OiAnc29tZSBhZGRyZXNzIGhlcmUuLi4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNwYW5UZXh0OiAnZW1haWwnLFxuICAgICAgICAgICAgcFRleHQ6ICdleGFtcGxlQG1haWwuY29tJ1xuICAgICAgICB9XG4gICAgXSxcbiAgICBmb250YXdlc29tZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBsaW5rOiAnd3d3LmZhY2Vib29rLmNvbScsXG4gICAgICAgICAgICBjbGFzczogWydmYScsICdmYS1mYWNlYm9vay1vZmZpY2lhbCddLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsaW5rOiAnd3d3LnR3aXR0ZXIuY29tJyxcbiAgICAgICAgICAgIGNsYXNzOiBbJ2ZhJywgJ2ZhLXR3aXR0ZXItc3F1YXJlJ10sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxpbms6ICd3d3cuaW5zdGFncmFtLmNvbScsXG4gICAgICAgICAgICBjbGFzczogWydmYScsICdmYS1pbnN0YWdyYW0nXSxcbiAgICAgICAgfVxuICAgIF1cbn1cblxuY29uc3QgYWJvdXREYXRhID0ge1xuICAgIGZpcnN0UGFyYTogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEN1cmFiaXR1ciB2ZWwgY29uZGltZW50dW0gZXN0LiBQaGFzZWxsdXMgbWF4aW11cyBvcmNpIGV0IHZlaGljdWxhIHVsbGFtY29ycGVyLiBNb3JiaSBsYWN1cyBudW5jLCB2YXJpdXMgcXVpcyBsaWd1bGEgYSwgbWF4aW11cyBmZXJtZW50dW0gZXN0LiBOdW5jIHRyaXN0aXF1ZSB0aW5jaWR1bnQgbWFzc2EgdWx0cmljZXMgb3JuYXJlLiBOdWxsYSBmYXVjaWJ1cyBwdWx2aW5hciBvcmNpLiBNYXVyaXMgZnJpbmdpbGxhIHNvbGxpY2l0dWRpbiBlbmltLiBQZWxsZW50ZXNxdWUgYWMgdWxsYW1jb3JwZXIgbmlzaS4gSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLiBFdGlhbSBjdXJzdXMgcXVhbSBpcHN1bSwgaW4gY29tbW9kbyBvcmNpIHBlbGxlbnRlc3F1ZSBhLicsXG4gICAgc2Vjb25kUGFyYTogJ0N1cmFiaXR1ciBncmF2aWRhIGxvcmVtIHZlbCBlc3QgdWxsYW1jb3JwZXIgZWxlaWZlbmQuIE5hbSB0ZW1wb3IgbWFnbmEgbm9uIGJpYmVuZHVtIG1heGltdXMuIFBlbGxlbnRlc3F1ZSB2aXRhZSBwaGFyZXRyYSB0b3J0b3IuIE51bGxhbSB0ZWxsdXMgbmlzbCwgcHVsdmluYXIgbmVjIGxhY3VzIHZlbCwgdWxsYW1jb3JwZXIgcnV0cnVtIGFyY3UuIE1vcmJpIHBlbGxlbnRlc3F1ZSBjb25ndWUganVzdG8sIHNlZCBhbGlxdWFtIHRlbGx1cyBzb2xsaWNpdHVkaW4gdmVoaWN1bGEuIENyYXMgaGVuZHJlcml0IGF1Z3VlIG5vbiB0ZW1wb3IgZnJpbmdpbGxhLiBTdXNwZW5kaXNzZSBzaXQgYW1ldCBpcHN1bSBzb2xsaWNpdHVkaW4gbWFzc2EgbGFjaW5pYSBsYWNpbmlhIHF1aXMgdml0YWUgdXJuYS4gRHVpcyB2dWxwdXRhdGUgZmF1Y2lidXMgdXJuYSBzaXQgYW1ldCB2dWxwdXRhdGUuJ1xufVxuXG5cbmV4cG9ydCB7IGRhdGEsIGNvbnRhY3REYXRhLCBhYm91dERhdGEgfTsiLCJpbXBvcnQgcmVzdGF1cmFudCBmcm9tICcuL2ludHJvLmpwZyc7XG5pbXBvcnQgeyBkYXRhLCBjb250YWN0RGF0YSB9IGZyb20gJy4vaW50cm9EYXRhJztcblxuZnVuY3Rpb24gYnVpbGRJbnRybygpIHtcbiAgICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGludHJvLmNsYXNzTGlzdC5hZGQoJ2ludHJvJyk7XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnaW50cm8taW1nJyk7XG5cbiAgICBjb25zdCBpbnRyb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnRyb0RldGFpbHMuY2xhc3NMaXN0LmFkZCgnaW50cm8tZGV0YWlscycpO1xuXG4gICAgY29uc3QgaW50cm9IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBpbnRyb0hlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaW50cm8taGVhZGluZycpO1xuXG4gICAgY29uc3QgaW50cm9JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW50cm9JbmZvLmNsYXNzTGlzdC5hZGQoJ2ludHJvLWluZm8nKTtcblxuXG4gICAgLy8gc2V0dXAgdGhlIGltYWdlXG4gICAgaW1nLnNyYyA9IHJlc3RhdXJhbnQ7XG5cbiAgICBpbnRyby5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgLy8gYnVpbGQgdGhlIGludHJvIHRleHQgc2VjdGlvblxuICAgIGludHJvSGVhZGluZy50ZXh0Q29udGVudCA9IGRhdGEuaGVhZGluZztcbiAgICBpbnRyb0RldGFpbHMuYXBwZW5kQ2hpbGQoaW50cm9IZWFkaW5nKTtcbiAgICAvLyBjb25zdHJ1Y3QgdGhlIHBhcmFncmFwaHMgc2VjdGlvbnNcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkrKykge1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gZGF0YVsncGFyYScrIGldO1xuICAgICAgICBpbnRyb0RldGFpbHMuYXBwZW5kQ2hpbGQocCk7XG4gICAgfVxuXG4gICAgLy8gYnVpbGQgdGhlIGluZm8gc2VjdGlvblxuICAgIGRhdGEuaW5mby5mb3JFYWNoKGluZm9EYXRhID0+IHtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gaW5mb0RhdGEuc3BhblRleHQ7XG4gICAgICAgIHAuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIGNvbnN0IHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShpbmZvRGF0YS5wVGV4dCk7XG4gICAgICAgIHAuYXBwZW5kQ2hpbGQodCk7XG5cbiAgICAgICAgaW50cm9JbmZvLmFwcGVuZENoaWxkKHApO1xuICAgIH0pXG5cbiAgICBpbnRyb0RldGFpbHMuYXBwZW5kQ2hpbGQoaW50cm9JbmZvKTtcbiAgICBpbnRyby5hcHBlbmRDaGlsZChpbnRyb0RldGFpbHMpO1xuXG4gICAgcmV0dXJuIGludHJvO1xuICAgIFxufVxuXG5mdW5jdGlvbiBidWlsZENvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gICAgY29uc3QgY29udGFjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgY29udGFjdEhlYWRpbmcudGV4dENvbnRlbnQgPSAnVmlzaXQgVXMgVG9kYXknO1xuXG4gICAgY29uc3QgY29udGFjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWxpc3QnKTtcbiAgICAvLyBidWlsZCB0aGUgY29udGFjdCBsaXN0XG4gICAgY29udGFjdERhdGEubWF0ZXJpYWwuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpXG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBkYXRhLnNwYW5UZXh0O1xuICAgICAgICBwLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBjb25zdCB0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YS5wVGV4dCk7XG4gICAgICAgIHAuYXBwZW5kQ2hpbGQodCk7XG4gICAgICAgIGNvbnRhY3RMaXN0LmFwcGVuZENoaWxkKHApO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc29jaWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc29jaWFsLmNsYXNzTGlzdC5hZGQoJ3NvY2lhbCcpO1xuXG4gICAgLy8gYnVpbGQgdGhlIHNvY2lhbCBsaXN0XG4gICAgY29udGFjdERhdGEuZm9udGF3ZXNvbWUuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgYS5ocmVmID0gZGF0YS5saW5rO1xuICAgICAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICBpLmNsYXNzTGlzdC5hZGQoZGF0YS5jbGFzc1swXSwgZGF0YS5jbGFzc1sxXSk7XG4gICAgICAgIGEuYXBwZW5kQ2hpbGQoaSk7XG4gICAgICAgIHNvY2lhbC5hcHBlbmRDaGlsZChhKTtcbiAgICB9KVxuXG5cbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkaW5nKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RMaXN0KTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKHNvY2lhbCk7XG5cbiAgICByZXR1cm4gY29udGFjdDtcblxufVxuXG5leHBvcnQgeyBidWlsZEludHJvLCBidWlsZENvbnRhY3QgfTsiLCJpbXBvcnQgeyBhYm91dERhdGEgfSBmcm9tICcuL2ludHJvRGF0YSc7XG5pbXBvcnQgYWJvdXQgZnJvbSAnLi9hYm91dC5qcGcnO1xuXG5mdW5jdGlvbiBidWlsZEFib3V0VXMoKSB7XG4gICAgLy8gY3JlYXRlIGRvbSBlbGVtZW50cyBhbmQgYWRkIHRoZWlyIGNsYXNzZXNcbiAgICBjb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYWJvdXQtc2VjdGlvbicpO1xuXG4gICAgY29uc3QgYWJvdXRIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBhYm91dEhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnYWJvdXQtaGVhZGluZycpO1xuXG4gICAgY29uc3QgZmlyc3RQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHNlY29uZFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnYWJvdXQtaW1nJyk7XG5cbiAgICAvLyBjcmVhdGUgdGhlIGNvbnRlbnRzIGZvciB0aGUgZWxlbWVudHNcbiAgICBhYm91dEhlYWRpbmcudGV4dENvbnRlbnQgPSAgYFdoeSBXZSBFeGNlbCBTb28gTXVjaCAtIEtvYnkncyBSZXN0YXVyYW50YDtcbiAgICBmaXJzdFBhcmEudGV4dENvbnRlbnQgPSBhYm91dERhdGEuZmlyc3RQYXJhO1xuICAgIHNlY29uZFBhcmEudGV4dENvbnRlbnQgPSBhYm91dERhdGEuc2Vjb25kUGFyYTtcbiAgICBpbWcuc3JjID0gYWJvdXQ7XG5cbiAgICAvL2FwcGVuZCBhbGwgdGhlIGVsZW1lbnRzIHRvIHRoZSBhYm91dCB1cyBzZWN0aW9uXG4gICAgYWJvdXRTZWN0aW9uLmFwcGVuZENoaWxkKGFib3V0SGVhZGluZylcbiAgICBhYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoZmlyc3RQYXJhKTtcbiAgICBhYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBhYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoc2Vjb25kUGFyYSk7XG5cbiAgICByZXR1cm4gYWJvdXRTZWN0aW9uO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkQWJvdXRVczsiLCJpbXBvcnQgeyBidWlsZEludHJvLCBidWlsZENvbnRhY3QgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgYnVpbGRBYm91dFVzIGZyb20gXCIuL2Fib3V0XCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5mdW5jdGlvbiBidWlsZE5hdmlnYXRpb25CYXIoKSB7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxvZ29UZXh0LnRleHRDb250ZW50ID0gYEtvYnkncyBSZXN0YXVyYW50YDtcbiAgICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBuYXZMaW5rcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc3QgZWxtID0gZS50YXJnZXQ7XG4gICAgICAgIGlmKCBlbG0udGFnTmFtZSA9PT0gJ0xJJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZWxtLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VDb250ZW50cyA9IEFycmF5LmZyb20oY29udGVudC5jaGlsZHJlbilcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlQ29udGVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKHBhZ2VDb250ZW50c1tpXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIHdoaWNoIHRvIHJlbmRlclxuXG4gICAgICAgICAgICBpZiAoZWxtLnRleHRDb250ZW50ID09PSAnSG9tZScpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IGBLb2J5J3MgUmVzdGF1cmFudCBQcm9qZWN0YDtcbiAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkTmF2aWdhdGlvbkJhcigpKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkSW50cm8oKSk7XG4gICAgICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZENvbnRhY3QoKSk7XG4gICAgICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZEZvb3RlcigpKTtcbiBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxtLnRleHRDb250ZW50ID09PSAnTWVudScpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9ICdPdXIgTWVudSAtIEtvYnlcXCdzIFJlc3RhdXJhbnQnO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGROYXZpZ2F0aW9uQmFyKCkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRGb290ZXIoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gYEFib3V0IFVzIC0gS29ieSdzIFJlc3RhdXJhbnRgO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGROYXZpZ2F0aW9uQmFyKCkpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRBYm91dFVzKCkpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRGb290ZXIoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gYWRkIGFsbCB0aGUgbmVjZXNzYXJ5IHN0eWxlc1xuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCd0b3AtbmF2YmFyJyk7XG4gICAgbG9nb1RleHQuY2xhc3NMaXN0LmFkZCgnbG9nby10ZXh0Jyk7XG4gICAgbmF2TGlua3MuY2xhc3NMaXN0LmFkZCgnbmF2LWxpbmtzJyk7XG5cbiAgICAvLyBjcmVhdGUgdGhlIGxpbmtzIGZvciB0aGUgcGFnZXNcbiAgICBjb25zdCBsaW5rc1RleHQgPSBbJ0hvbWUnLCAnTWVudScsICdBYm91dCBVcyddO1xuICAgIGxpbmtzVGV4dC5mb3JFYWNoKHRleHQgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgbmF2TGlua3MuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pXG5cbiAgICAvLyBhcHBlbmQgYWxsIHRoZSBuZWNlc3NhcnkgZWxlbWVudHMgdG8gdGhlIG5hdkJhclxuXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGxvZ29UZXh0KTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2TGlua3MpO1xuXG4gICAgcmV0dXJuIG5hdkJhcjtcbn1cblxuZnVuY3Rpb24gYnVpbGRGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGBDb3B5UmlnaHQgJmNvcHk7IDIwMjFgO1xuICAgIGNvbnN0IGxvZ29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBsb2dvVGV4dC50ZXh0Q29udGVudCA9IGBLb2J5J3MgUmVzdGF1cmFudGA7XG4gICAgbG9nb1RleHQuY2xhc3NMaXN0LmFkZCgnbG9nby10ZXh0Jyk7XG5cbiAgICAvLyBhcHBlbmQgdGhlIGFsbCB0byB0aGUgZm9vdGVyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGxvZ29UZXh0KTtcblxuICAgIHJldHVybiBmb290ZXI7XG59XG5cbihmdW5jdGlvbigpe1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGROYXZpZ2F0aW9uQmFyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRJbnRybygpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkQ29udGFjdCgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkRm9vdGVyKCkpO1xufSkoKVxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZyIsImdsb2JhbFRoaXMiLCJ0aGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93Iiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwiRXJyb3IiLCJyZXBsYWNlIiwicCIsImRhdGEiLCJwYXJhMSIsInBhcmEyIiwiaGVhZGluZyIsImluZm8iLCJzcGFuVGV4dCIsInBUZXh0IiwiY29udGFjdERhdGEiLCJtYXRlcmlhbCIsImZvbnRhd2Vzb21lIiwibGluayIsImNsYXNzIiwiYnVpbGRJbnRybyIsImludHJvIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImltZyIsImludHJvRGV0YWlscyIsImludHJvSGVhZGluZyIsImludHJvSW5mbyIsImFwcGVuZENoaWxkIiwidGV4dENvbnRlbnQiLCJpIiwiZm9yRWFjaCIsImluZm9EYXRhIiwic3BhbiIsInQiLCJjcmVhdGVUZXh0Tm9kZSIsImJ1aWxkQ29udGFjdCIsImNvbnRhY3QiLCJjb250YWN0SGVhZGluZyIsImNvbnRhY3RMaXN0Iiwic29jaWFsIiwiYSIsImhyZWYiLCJjb250ZW50IiwicXVlcnlTZWxlY3RvciIsImJ1aWxkRm9vdGVyIiwiZm9vdGVyIiwiY29weXJpZ2h0IiwibG9nb1RleHQiLCJidWlsZE5hdmlnYXRpb25CYXIiLCJuYXZCYXIiLCJuYXZMaW5rcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbG0iLCJ0YXJnZXQiLCJ0YWdOYW1lIiwiY29uc29sZSIsImxvZyIsInBhZ2VDb250ZW50cyIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwicmVtb3ZlQ2hpbGQiLCJ0aXRsZSIsImFib3V0U2VjdGlvbiIsImFib3V0SGVhZGluZyIsImZpcnN0UGFyYSIsInNlY29uZFBhcmEiLCJhYm91dCIsInRleHQiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=