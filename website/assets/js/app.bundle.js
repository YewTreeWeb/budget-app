(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{0:function(e,t,n){e.exports=n("kFay")},1:function(e,t){},E4hX:function(e,t,n){(function(e,t){for(var n,i=function(){},o=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],s=o.length,c=window.console=window.console||{};s--;)c[n=o[s]]||(c[n]=i);window.addEventListener("keydown",(function e(t){9===t.keyCode&&(document.body.classList.add("user-is-tabbing"),window.removeEventListener("keydown",e))})),document.querySelector("html").setAttribute("data-browser",e.name);var d=document.querySelector("body");t({xlarge:["1281px","1680px"],large:["981px","1280px"],medium:["737px","980px"],small:["481px","736px"],xsmall:[null,"480px"]}),e.mobile?d.classList.add("is-mobile"):(t.on(">medium",(function(){d.classList.remove("is-mobile"),d.classList.add("is-desktop")})),t.on("<=medium",(function(){d.classList.remove("is-desktop"),d.classList.add("is-mobile")})))}).call(this,n("txRt"),n("a6Qp"))},SEKM:function(e,t,n){"use strict";n.r(t);var i,o=(i={inputType:".add__type",inputDesc:".add__description",inputVal:".add__value"},{getInput:function(){return{type:document.querySelector(i.inputType).value,description:document.querySelector(i.inputDesc).value,value:document.querySelector(i.inputVal).value}},addListItem:function(e,t){var n,i="exp"===t?"expenses":"income";n="\n      <li class='".concat(i,"__item' id='").concat(t,"-").concat(e.id,"'>\n        <div class='item-desc'>").concat(e.desc,"</div>\n      "),"exp"===t&&(n+='\n          <div class="item-percent">0&#37;</div>\n        '),n+="\n        <div class=\"items\">\n          <div class='items__value'>&pound;".concat(e.val,'</div>\n          <button class=\'btn btn--clear items__del\'>\n            <svg id="delete" class="icon" width="20" height="20" aria-hidden="true">\n              <use xlink:href="/assets/images/icons.svg#icon-delete"></use>\n            </svg>\n          </button>\n        </div>\n      </li>\n      '),document.querySelector(".".concat(i,"__list")).innerHTML+=n},getDOMStrings:function(){return i}});t.default=o},a6Qp:function(e,t){e.exports=breakpoints},kFay:function(e,t,n){"use strict";n.r(t);n("OuUZ"),n("E4hX");var i=n("xVb/"),o=n("SEKM"),s=document.querySelector("body");window.onload=function(){window.setTimeout((function(){s.classList.remove("is-loading")}),100)};!function(e,t){t.getDOMStrings();var n=document.querySelector(".add__form"),i=document.querySelector(".add__type"),o=document.querySelector("#check");i.addEventListener("change",(function(e){console.log(e);var t=Array.from(i.options);console.log(t),"exp"===i.value?(o.classList.add(i.value),i.options[0].removeAttribute("selected"),i.options.selectedIndex.setAttribute("selected")):o.classList.remove("exp")})),n.addEventListener("submit",(function(i){i.preventDefault();var o=t.getInput(),s=e.addItem(o.type,o.description,o.value);t.addListItem(s,o.type),n.reset(),console.log("form submitted!"),console.log(o),console.log(s)}))}(i.default,o.default)},txRt:function(e,t){e.exports=browser},"xVb/":function(e,t,n){"use strict";n.r(t);var i,o,s=n("lwsE"),c=n.n(s),d=(i=function e(t,n,i){c()(this,e),this.id=t,this.desc=n,this.val=i},o={allItems:{exp:[],inc:[]},totals:{exp:0,inc:0}},{addItem:function(e,t,n){var s=o.allItems[e].length>0?o.allItems[e][o.allItems[e].length-1].id+1:0,c=new i(s,t,n);return o.allItems[e].push(c),c}});t.default=d}},[[0,"runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWJzaXRlL3NyYy9qcy9tb2R1bGVzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vd2Vic2l0ZS9zcmMvanMvbW9kdWxlcy91aWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnJlYWtwb2ludHNcIiIsIndlYnBhY2s6Ly8vLi93ZWJzaXRlL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnJvd3NlclwiIiwid2VicGFjazovLy8uL3dlYnNpdGUvc3JjL2pzL21vZHVsZXMvYnVkZ2V0Y29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJtZXRob2QiLCJub29wIiwibWV0aG9kcyIsImxlbmd0aCIsImNvbnNvbGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlRmlyc3RUYWIiLCJlIiwia2V5Q29kZSIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiYnJvd3NlciIsIm5hbWUiLCJicmVha3BvaW50cyIsInhsYXJnZSIsImxhcmdlIiwibWVkaXVtIiwic21hbGwiLCJ4c21hbGwiLCJtb2JpbGUiLCJvbiIsInJlbW92ZSIsIkRPTVN0cmluZ3MiLCJVSUNvbnRyb2xsZXIiLCJpbnB1dFR5cGUiLCJpbnB1dERlc2MiLCJpbnB1dFZhbCIsImdldElucHV0IiwidHlwZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJhZGRMaXN0SXRlbSIsIm9iaiIsImh0bWwiLCJpdGVtIiwiaWQiLCJkZXNjIiwidmFsIiwiaW5uZXJIVE1MIiwiZ2V0RE9NU3RyaW5ncyIsIm1vZHVsZSIsImV4cG9ydHMiLCJvbmxvYWQiLCJzZXRUaW1lb3V0IiwiYnVkZ2V0Q3RybCIsIlVJQ3RybCIsImZvcm0iLCJjaGVjayIsImxvZyIsIm9wdGlvbnMiLCJBcnJheSIsImZyb20iLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZWxlY3RlZEluZGV4IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsIm5ld0l0ZW0iLCJhZGRJdGVtIiwicmVzZXQiLCJidWRnZXRDb250cm9sbGVyIiwiQnVkZ2V0IiwiZGF0YSIsInRoaXMiLCJhbGxJdGVtcyIsImV4cCIsImluYyIsInRvdGFscyIsIklEIiwicHVzaCJdLCJtYXBwaW5ncyI6IjRJQUFBLGNBcUNFLElBL0JBLElBQUlBLEVBQ0VDLEVBQU8sYUFDUEMsRUFBVSxDQUNkLFNBQ0EsUUFDQSxRQUNBLFFBQ0EsTUFDQSxTQUNBLFFBQ0EsWUFDQSxRQUNBLGlCQUNBLFdBQ0EsT0FDQSxNQUNBLGVBQ0EsVUFDQSxhQUNBLFFBQ0EsT0FDQSxVQUNBLFdBQ0EsY0FDQSxZQUNBLFFBQ0EsUUFFSUMsRUFBV0QsRUFBWEMsT0FDQUMsRUFBV0MsT0FBT0QsUUFBVUMsT0FBT0QsU0FBVyxHQUU3Q0QsS0FJQUMsRUFITEosRUFBU0UsRUFBUUMsTUFJZkMsRUFBUUosR0FBVUMsR0FjeEJJLE9BQU9DLGlCQUFpQixXQVJELFNBQWpCQyxFQUFrQkMsR0FDSixJQUFkQSxFQUFFQyxVQUVKQyxTQUFTQyxLQUFLQyxVQUFVQyxJQUFJLG1CQUM1QlIsT0FBT1Msb0JBQW9CLFVBQVdQLE9BTzdCRyxTQUFTSyxjQUFjLFFBQy9CQyxhQUFhLGVBQWdCQyxFQUFRQyxNQUcxQyxJQUFNUCxFQUFPRCxTQUFTSyxjQUFjLFFBRXBDSSxFQUFZLENBQ1ZDLE9BQVEsQ0FBQyxTQUFVLFVBQ25CQyxNQUFPLENBQUMsUUFBUyxVQUNqQkMsT0FBUSxDQUFDLFFBQVMsU0FDbEJDLE1BQU8sQ0FBQyxRQUFTLFNBQ2pCQyxPQUFRLENBQUMsS0FBTSxXQUdiUCxFQUFRUSxPQUNWZCxFQUFLQyxVQUFVQyxJQUFJLGNBRW5CTSxFQUFZTyxHQUFHLFdBQVcsV0FDeEJmLEVBQUtDLFVBQVVlLE9BQU8sYUFDdEJoQixFQUFLQyxVQUFVQyxJQUFJLGlCQUVyQk0sRUFBWU8sR0FBRyxZQUFZLFdBQ3pCZixFQUFLQyxVQUFVZSxPQUFP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bm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1tdWx0aS1hc3NpZ24gKi9cblxuLy8gQXZvaWQgYGNvbnNvbGVgIGVycm9ycyBpbiBicm93c2VycyB0aGF0IGxhY2sgYSBjb25zb2xlLlxue1xuICBsZXQgbWV0aG9kXG4gIGNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuICBjb25zdCBtZXRob2RzID0gW1xuICAgICdhc3NlcnQnLFxuICAgICdjbGVhcicsXG4gICAgJ2NvdW50JyxcbiAgICAnZGVidWcnLFxuICAgICdkaXInLFxuICAgICdkaXJ4bWwnLFxuICAgICdlcnJvcicsXG4gICAgJ2V4Y2VwdGlvbicsXG4gICAgJ2dyb3VwJyxcbiAgICAnZ3JvdXBDb2xsYXBzZWQnLFxuICAgICdncm91cEVuZCcsXG4gICAgJ2luZm8nLFxuICAgICdsb2cnLFxuICAgICdtYXJrVGltZWxpbmUnLFxuICAgICdwcm9maWxlJyxcbiAgICAncHJvZmlsZUVuZCcsXG4gICAgJ3RhYmxlJyxcbiAgICAndGltZScsXG4gICAgJ3RpbWVFbmQnLFxuICAgICd0aW1lbGluZScsXG4gICAgJ3RpbWVsaW5lRW5kJyxcbiAgICAndGltZVN0YW1wJyxcbiAgICAndHJhY2UnLFxuICAgICd3YXJuJyxcbiAgXVxuICBsZXQgeyBsZW5ndGggfSA9IG1ldGhvZHNcbiAgY29uc3QgY29uc29sZSA9ICh3aW5kb3cuY29uc29sZSA9IHdpbmRvdy5jb25zb2xlIHx8IHt9KVxuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIG1ldGhvZCA9IG1ldGhvZHNbbGVuZ3RoXVxuXG4gICAgLy8gT25seSBzdHViIHVuZGVmaW5lZCBtZXRob2RzLlxuICAgIGlmICghY29uc29sZVttZXRob2RdKSB7XG4gICAgICBjb25zb2xlW21ldGhvZF0gPSBub29wXG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCB0YWJiaW5nIGluZGljYXRvciB0byB3aW5kb3dcbmNvbnN0IGhhbmRsZUZpcnN0VGFiID0gKGUpID0+IHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gOSkge1xuICAgIC8vIHRoZSBcIkkgYW0gYSBrZXlib2FyZCB1c2VyXCIga2V5XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd1c2VyLWlzLXRhYmJpbmcnKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlRmlyc3RUYWIpXG4gIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVGaXJzdFRhYilcblxuLy8gQWRkIGEgYnJvd2VyIGluZGljYXRvciB0byB0aGUgSFRNTCBlbGVtZW50LlxuY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKVxuaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnJvd3NlcicsIGJyb3dzZXIubmFtZSlcblxuLy8gRGV0ZWN0IGlmIG1vYmlsZSBvciBkZXNrdG9wLlxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuXG5icmVha3BvaW50cyh7XG4gIHhsYXJnZTogWycxMjgxcHgnLCAnMTY4MHB4J10sXG4gIGxhcmdlOiBbJzk4MXB4JywgJzEyODBweCddLFxuICBtZWRpdW06IFsnNzM3cHgnLCAnOTgwcHgnXSxcbiAgc21hbGw6IFsnNDgxcHgnLCAnNzM2cHgnXSxcbiAgeHNtYWxsOiBbbnVsbCwgJzQ4MHB4J10sXG59KVxuXG5pZiAoYnJvd3Nlci5tb2JpbGUpIHtcbiAgYm9keS5jbGFzc0xpc3QuYWRkKCdpcy1tb2JpbGUnKVxufSBlbHNlIHtcbiAgYnJlYWtwb2ludHMub24oJz5tZWRpdW0nLCAoKSA9PiB7XG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1tb2JpbGUnKVxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnaXMtZGVza3RvcCcpXG4gIH0pXG4gIGJyZWFrcG9pbnRzLm9uKCc8PW1lZGl1bScsICgpID0+IHtcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWRlc2t0b3AnKVxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnaXMtbW9iaWxlJylcbiAgfSlcbn1cbiIsImNvbnN0IFVJQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IERPTVN0cmluZ3MgPSB7XG4gICAgaW5wdXRUeXBlOiAnLmFkZF9fdHlwZScsXG4gICAgaW5wdXREZXNjOiAnLmFkZF9fZGVzY3JpcHRpb24nLFxuICAgIGlucHV0VmFsOiAnLmFkZF9fdmFsdWUnLFxuICB9XG4gIHJldHVybiB7XG4gICAgZ2V0SW5wdXQ6ICgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5ncy5pbnB1dFR5cGUpLnZhbHVlLCAvLyBXaWxsIGJlIGVpdGhlciBpbmMgb3IgZXhwXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZ3MuaW5wdXREZXNjKS52YWx1ZSxcbiAgICAgICAgdmFsdWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5ncy5pbnB1dFZhbCkudmFsdWUsXG4gICAgICB9XG4gICAgfSxcbiAgICBhZGRMaXN0SXRlbTogKG9iaiwgdHlwZSkgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IHR5cGUgPT09ICdleHAnID8gJ2V4cGVuc2VzJyA6ICdpbmNvbWUnXG4gICAgICBsZXQgaHRtbFxuICAgICAgLy8gQ3JlYXRlIEhUTUwgc3RyaW5nIHdpdGggcGxhY2Vob2xkZXJcbiAgICAgIGh0bWwgPSBgXG4gICAgICA8bGkgY2xhc3M9JyR7aXRlbX1fX2l0ZW0nIGlkPScke3R5cGV9LSR7b2JqLmlkfSc+XG4gICAgICAgIDxkaXYgY2xhc3M9J2l0ZW0tZGVzYyc+JHtvYmouZGVzY308L2Rpdj5cbiAgICAgIGBcbiAgICAgIGlmICh0eXBlID09PSAnZXhwJykge1xuICAgICAgICBodG1sICs9IGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1wZXJjZW50XCI+MCYjMzc7PC9kaXY+XG4gICAgICAgIGBcbiAgICAgIH1cbiAgICAgIGh0bWwgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbXNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdpdGVtc19fdmFsdWUnPiZwb3VuZDske29iai52YWx9PC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnRuIGJ0bi0tY2xlYXIgaXRlbXNfX2RlbCc+XG4gICAgICAgICAgICA8c3ZnIGlkPVwiZGVsZXRlXCIgY2xhc3M9XCJpY29uXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIi9hc3NldHMvaW1hZ2VzL2ljb25zLnN2ZyNpY29uLWRlbGV0ZVwiPjwvdXNlPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICAgIGBcbiAgICAgIC8vIEluc2VydCBIVE1MIGludG8gdGhlIERPTVxuICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2l0ZW19X19saXN0YClcbiAgICAgIGxpc3QuaW5uZXJIVE1MICs9IGh0bWxcbiAgICB9LFxuICAgIGdldERPTVN0cmluZ3M6ICgpID0+IHtcbiAgICAgIHJldHVybiBET01TdHJpbmdzXG4gICAgfSxcbiAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBVSUNvbnRyb2xsZXJcbiIsIm1vZHVsZS5leHBvcnRzID0gYnJlYWtwb2ludHM7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cblxuLy8gRXh0ZXJuYWxcbmltcG9ydCAnYWlyYm5iLWJyb3dzZXItc2hpbXMnXG5cbi8vIEludGVybmFsXG5pbXBvcnQgJy4vbW9kdWxlcy9oZWxwZXJzJ1xuaW1wb3J0IGJ1ZGdldENvbnRyb2xsZXIgZnJvbSAnLi9tb2R1bGVzL2J1ZGdldGNvbnRyb2xsZXInXG5pbXBvcnQgVUlDb250cm9sbGVyIGZyb20gJy4vbW9kdWxlcy91aWNvbnRyb2xsZXInXG5cbi8vIFJlbW92ZSBsb2FkaW5nIGNsYXNzIGZyb20gYm9keSBvbiB3aW5kb3cgbG9hZC5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jylcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpXG4gIH0sIDEwMClcbn1cblxuLy8gQ3JlYXRlIHRoZSBtYWluIGNvbnRyb2xsZXIgZm9yIHRoZSBhcHBcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuY29uc3QgY29udHJvbGxlciA9ICgoYnVkZ2V0Q3RybCwgVUlDdHJsKSA9PiB7XG4gIGNvbnN0IERPTSA9IFVJQ3RybC5nZXRET01TdHJpbmdzKClcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRfX2Zvcm0nKVxuICBjb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZF9fdHlwZScpXG4gIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrJylcblxuICB0eXBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBjb25zdCBvcHRpb25zID0gQXJyYXkuZnJvbSh0eXBlLm9wdGlvbnMpXG4gICAgY29uc29sZS5sb2cob3B0aW9ucylcbiAgICBpZiAodHlwZS52YWx1ZSA9PT0gJ2V4cCcpIHtcbiAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQodHlwZS52YWx1ZSlcbiAgICAgIHR5cGUub3B0aW9uc1swXS5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJylcbiAgICAgIHR5cGUub3B0aW9ucy5zZWxlY3RlZEluZGV4LnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvcHRpb25zWzFdLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKVxuICAgICAgLy8gb3B0aW9uc1swXS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJylcbiAgICAgIGNoZWNrLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cCcpXG4gICAgfVxuICB9KVxuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vIEdldCBmaWxlZCBpbnB1dCBkYXRhXG4gICAgY29uc3QgaW5wdXQgPSBVSUN0cmwuZ2V0SW5wdXQoKVxuXG4gICAgLy8gQWRkIHRoZSBpdGVtIHRvIHRoZSBidWRnZXRcbiAgICBjb25zdCBuZXdJdGVtID0gYnVkZ2V0Q3RybC5hZGRJdGVtKFxuICAgICAgaW5wdXQudHlwZSxcbiAgICAgIGlucHV0LmRlc2NyaXB0aW9uLFxuICAgICAgaW5wdXQudmFsdWVcbiAgICApXG5cbiAgICAvLyBBZGQgaXRlbSB0byB0aGUgVUlcbiAgICBVSUN0cmwuYWRkTGlzdEl0ZW0obmV3SXRlbSwgaW5wdXQudHlwZSlcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgYnVkZ2V0XG5cbiAgICAvLyBVcGRhdGUgdGhlIFVJXG5cbiAgICBmb3JtLnJlc2V0KClcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5sb2coJ2Zvcm0gc3VibWl0dGVkIScpXG4gICAgICBjb25zb2xlLmxvZyhpbnB1dClcbiAgICAgIGNvbnNvbGUubG9nKG5ld0l0ZW0pXG4gICAgfVxuICB9KVxufSkoYnVkZ2V0Q29udHJvbGxlciwgVUlDb250cm9sbGVyKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBicm93c2VyOyIsImNvbnN0IGJ1ZGdldENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjbGFzcyBCdWRnZXQge1xuICAgIGNvbnN0cnVjdG9yKGlkLCBkZXNjcmlwdGlvbiwgdmFsdWUpIHtcbiAgICAgIHRoaXMuaWQgPSBpZFxuICAgICAgdGhpcy5kZXNjID0gZGVzY3JpcHRpb25cbiAgICAgIHRoaXMudmFsID0gdmFsdWVcbiAgICB9XG4gIH1cblxuICBjb25zdCBkYXRhID0ge1xuICAgIGFsbEl0ZW1zOiB7XG4gICAgICBleHA6IFtdLFxuICAgICAgaW5jOiBbXSxcbiAgICB9LFxuICAgIHRvdGFsczoge1xuICAgICAgZXhwOiAwLFxuICAgICAgaW5jOiAwLFxuICAgIH0sXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFkZEl0ZW0odHlwZSwgZGVzYywgdmFsKSB7XG4gICAgICAvLyBDcmVhdGUgbmV3IElEXG4gICAgICBjb25zdCBJRCA9XG4gICAgICAgIGRhdGEuYWxsSXRlbXNbdHlwZV0ubGVuZ3RoID4gMFxuICAgICAgICAgID8gZGF0YS5hbGxJdGVtc1t0eXBlXVtkYXRhLmFsbEl0ZW1zW3R5cGVdLmxlbmd0aCAtIDFdLmlkICsgMVxuICAgICAgICAgIDogMFxuXG4gICAgICAvLyBTZXQgbmV3IGl0ZW0gdG8gdXNlIG9iamVjdFxuICAgICAgY29uc3QgbmV3SXRlbSA9IG5ldyBCdWRnZXQoSUQsIGRlc2MsIHZhbClcblxuICAgICAgLy8gUHVzaCBpdCBpbnRvIGRhdGEgc3RydWN0dXJlXG4gICAgICBkYXRhLmFsbEl0ZW1zW3R5cGVdLnB1c2gobmV3SXRlbSlcblxuICAgICAgLy8gY3JlYXRlIG5ldyBpdGVtXG4gICAgICByZXR1cm4gbmV3SXRlbVxuICAgIH0sXG4gIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgYnVkZ2V0Q29udHJvbGxlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==