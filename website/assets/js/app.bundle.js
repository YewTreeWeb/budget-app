(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{0:function(e,t,n){e.exports=n("kFay")},1:function(e,t){},E4hX:function(e,t,n){(function(e,t){for(var n,o=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],s=c.length,a=window.console=window.console||{};s--;)a[n=c[s]]||(a[n]=o);window.addEventListener("keydown",(function e(t){9===t.keyCode&&(document.body.classList.add("user-is-tabbing"),window.removeEventListener("keydown",e))})),document.querySelector("html").setAttribute("data-browser",e.name);var l=document.querySelector("body");t({xlarge:["1281px","1680px"],large:["981px","1280px"],medium:["737px","980px"],small:["481px","736px"],xsmall:[null,"480px"]}),e.mobile?l.classList.add("is-mobile"):(t.on(">medium",(function(){l.classList.remove("is-mobile"),l.classList.add("is-desktop")})),t.on("<=medium",(function(){l.classList.remove("is-desktop"),l.classList.add("is-mobile")}))),"localhost"===window.location.hostname&&console.log("localhost detected!")}).call(this,n("txRt"),n("a6Qp"))},SEKM:function(e,t,n){"use strict";n.r(t);var o=n("lwsE"),c=n.n(o),s=n("W8MJ"),a=n.n(s),l=n("xVb/"),i=function(e,t){var n=Math.abs(e),o=(n=n.toFixed(2)).split("."),c=o[0],s=o[1];return s=Number(s)>0?".".concat(s):"",c.length>3&&(c="".concat(c.substr(0,c.length-3),",").concat(c.substr(c.length-3,3))),"".concat("exp"===t?"-":"+"," ").concat(c).concat(s)},u=function(){function e(t,n,o){c()(this,e),this.inputType=t,this.inputDesc=n,this.inputVal=o}return a()(e,[{key:"getInput",value:function(){return{type:this.inputType.value,description:this.inputDesc.value,value:Number(this.inputVal.value)}}},{key:"render",value:function(e,t){var n,o="exp"===t?"expenses":"income",c=document.querySelector(".".concat(o,"__list"));n="\n    <li class='".concat(o,"__item' id='").concat(t,"-").concat(e.id,"'>\n      <div class='item-desc'><p>").concat(e.desc,"</p></div>\n      <div class=\"items\">\n        <div class='items__value'><p><span>&pound;</span>").concat(i(e.val,t),"</p></div>\n    "),"exp"===t&&(n+='<div class="items__percent"><p>0&#37;</p></div>'),n+='\n        <button class=\'btn btn--clear items__del\'>\n          <svg id="delete" class="icon" width="20" height="20" aria-hidden="true">\n            <use xlink:href="/assets/images/icons.svg#icon-delete"></use>\n          </svg>\n        </button>\n      </div>\n    </li>\n    ',c.innerHTML+=n}},{key:"getBudget",value:function(e){return{budget:e.budget,totalInc:e.totals.inc,totalExp:e.totals.exp,percent:e.percent}}},{key:"displayBudget",value:function(e){var t=e.budget>0?"inc":"exp",n="exp"===t?"expenses":"income",o=document.querySelector(".budget__value .budget"),c=document.querySelector(".budget__income .budget__amount .amount"),s=document.querySelector(".budget__expenses .budget__amount .amount");o.textContent=i(e.budget,t),c.textContent=i(e.totalInc,"inc"),s.textContent=i(e.totalExp,"exp"),console.log("The ".concat(n," is/are ").concat(e.budget)),console.log(c,s)}},{key:"displayPercentage",value:function(e){var t=document.querySelector(".percentage");e>0?(t.classList.add("show"),t.innerHTML="".concat(e,"&#37;")):t.classList.remove("show"),console.log(t)}},{key:"updateBudget",value:function(){var e=l.default.calculateBudget(),t=this.getBudget(e);console.log(t),this.displayBudget(t),this.displayPercentage(t.percent)}},{key:"displayPercentages",value:function(e){!function(e,t){for(var n=0;n<e.length;n++)t(e[n],n)}(document.querySelectorAll(".items__percent"),(function(t,n){e[n]>0?(t.classList.add("show"),t.innerHTML="".concat(e[n],"&#37;")):(t.classList.remove("show"),t.innerHTML="0&#37;")}))}},{key:"updatePercentages",value:function(){l.default.calculatePercentages();var e=l.default.getPercentages();this.displayPercentages(e)}},{key:"deleteItem",value:function(){var e=this;document.querySelector(".income-expenses").addEventListener("click",(function(t){if("delete"===t.target.id){var n=t.target.closest(".items").parentElement,o=n.id.split("-"),c=o[0],s=Number(o[1]);console.log(t.target,n,o,c,s),l.default.removeItem(c,s),n.remove(),e.updateBudget(),e.updatePercentages()}}))}}]),e}();t.default=u},a6Qp:function(e,t){e.exports=breakpoints},kFay:function(e,t,n){"use strict";n.r(t);var o=n("cDf5"),c=n.n(o),s=(n("OuUZ"),n("E4hX"),n("xVb/")),a=n("SEKM"),l=document.querySelector("body");window.onload=function(){window.setTimeout((function(){l.classList.remove("is-loading")}),100)};var i,u,r,d,p,m,g;i=s.default,u=document.querySelector(".add__form"),r=document.querySelector(".add__type"),d=document.querySelector(".add__description"),p=document.querySelector(".add__value"),m=document.querySelector("#check"),g=new a.default(r,d,p),r.addEventListener("change",(function(e){var t=Array.from(r.options);console.log(e),console.log(r.attributes,r.options,r.options.selectedIndex,t,t[1]),1===r.options.selectedIndex?(m.classList.add(r.value),t[0].removeAttribute("selected","selected"),t[1].setAttribute("selected","selected")):(t[1].removeAttribute("selected","selected"),t[0].setAttribute("selected","selected"),m.classList.remove("exp"))})),u.addEventListener("submit",(function(e){e.preventDefault();var t=g.getInput();if(console.log(t),console.log(c()(t.value)),u.reset(),""!==t.desc&&!isNaN(t.value)&&t.value>0){var n=i.addItem(t.type,t.description,t.value);g.render(n,t.type),g.updateBudget(),g.updatePercentages(),console.log("form submitted!"),console.log(n)}})),g.deleteItem()},txRt:function(e,t){e.exports=browser},"xVb/":function(e,t,n){"use strict";n.r(t);var o,c,s,a=n("cDf5"),l=n.n(a),i=n("lwsE"),u=n.n(i),r=n("W8MJ"),d=n.n(r),p=(o=function(){function e(t,n,o){u()(this,e),this.id=t,this.desc=n,this.val=o,this.percentage=-1}return d()(e,[{key:"calcPercentage",value:function(e){this.percentage=e>0?Math.round(this.val/e*100):-1,console.log("this value is ".concat(l()(this.val)),"the totalIncome ".concat(l()(e)))}},{key:"getPercentage",value:function(){return this.percentage}}]),e}(),c={allItems:{exp:[],inc:[]},totals:{exp:0,inc:0},budget:0},s=function(e){var t=0;c.allItems[e].forEach((function(e){t+=e.val})),c.totals[e]=t},{addItem:function(e,t,n){var s=c.allItems[e].length>0?c.allItems[e][c.allItems[e].length-1].id+1:0,a=new o(s,t,n);return c.allItems[e].push(a),a},calculateBudget:function(){return s("exp"),s("inc"),c.budget=c.totals.inc-c.totals.exp,c.totals.inc>0?c.percent=Math.round(c.totals.exp/c.totals.inc*100):c.percent=-1,console.log(c.totals.exp,c.totals.inc),console.log(c.budget,c.percent),c},calculatePercentages:function(){c.allItems.exp.forEach((function(e){e.calcPercentage(c.totals.inc)}))},getPercentages:function(){return c.allItems.exp.map((function(e){return e.getPercentage()}))},removeItem:function(e,t){var n=c.allItems[e].map((function(e){return e.id})).indexOf(t);-1!==n&&c.allItems[e].splice(n,1)}});t.default=p}},[[0,"runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWJzaXRlL3NyYy9qcy9tb2R1bGVzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vd2Vic2l0ZS9zcmMvanMvbW9kdWxlcy91aWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnJlYWtwb2ludHNcIiIsIndlYnBhY2s6Ly8vLi93ZWJzaXRlL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnJvd3NlclwiIiwid2VicGFjazovLy8uL3dlYnNpdGUvc3JjL2pzL21vZHVsZXMvYnVkZ2V0Y29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJtZXRob2QiLCJub29wIiwibWV0aG9kcyIsImxlbmd0aCIsImNvbnNvbGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlRmlyc3RUYWIiLCJlIiwia2V5Q29kZSIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiYnJvd3NlciIsIm5hbWUiLCJicmVha3BvaW50cyIsInhsYXJnZSIsImxhcmdlIiwibWVkaXVtIiwic21hbGwiLCJ4c21hbGwiLCJtb2JpbGUiLCJvbiIsInJlbW92ZSIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJsb2ciLCJmb3JtYXROdW1iZXIiLCJudW1iZXIiLCJ0eXBlIiwibnVtIiwiTWF0aCIsImFicyIsIm51bVNwbGl0IiwidG9GaXhlZCIsInNwbGl0IiwiaW50IiwiZGVjaW1hbCIsIk51bWJlciIsInN1YnN0ciIsIlVJQ29udHJvbGxlciIsImNvc3QiLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwidGhpcyIsImlucHV0VHlwZSIsImlucHV0RGVzYyIsImlucHV0VmFsIiwib2JqIiwiaHRtbCIsIml0ZW0iLCJsaXN0IiwiaWQiLCJkZXNjIiwidmFsIiwiaW5uZXJIVE1MIiwiZGF0YSIsImJ1ZGdldCIsInRvdGFsSW5jIiwidG90YWxzIiwiaW5jIiwidG90YWxFeHAiLCJleHAiLCJwZXJjZW50IiwidHlwZXMiLCJ0ZXh0Q29udGVudCIsInBlcmNlbnRhZ2UiLCJnZXREYXRhIiwiYnVkZ2V0Q29udHJvbGxlciIsImNhbGN1bGF0ZUJ1ZGdldCIsIm5ld0J1ZGdldCIsImdldEJ1ZGdldCIsImRpc3BsYXlCdWRnZXQiLCJkaXNwbGF5UGVyY2VudGFnZSIsInBlcmNlbnRhZ2VzIiwiY2IiLCJpIiwibm9kZUxpc3RGb3JFYWNoIiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnQiLCJpbmRleCIsImNhbGN1bGF0ZVBlcmNlbnRhZ2VzIiwiZ2V0UGVyY2VudGFnZXMiLCJkaXNwbGF5UGVyY2VudGFnZXMiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicGFyZW50RWxlbWVudCIsInNwbGl0SUQiLCJJRCIsInJlbW92ZUl0ZW0iLCJ1cGRhdGVCdWRnZXQiLCJ1cGRhdGVQZXJjZW50YWdlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJvbmxvYWQiLCJzZXRUaW1lb3V0IiwiYnVkZ2V0Q3RybCIsImZvcm0iLCJjaGVjayIsIlVJQ3RybCIsIm9wdGlvbnMiLCJBcnJheSIsImZyb20iLCJhdHRyaWJ1dGVzIiwic2VsZWN0ZWRJbmRleCIsInJlbW92ZUF0dHJpYnV0ZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJnZXRJbnB1dCIsInJlc2V0IiwiaXNOYU4iLCJuZXdJdGVtIiwiYWRkSXRlbSIsInJlbmRlciIsImRlbGV0ZUl0ZW0iLCJCdWRnZXQiLCJjYWxjdWxhdGVUb3RhbHMiLCJ0b3RhbEluY29tZSIsInJvdW5kIiwiYWxsSXRlbXMiLCJzdW0iLCJmb3JFYWNoIiwiY3VyIiwicHVzaCIsImNhbGNQZXJjZW50YWdlIiwibWFwIiwiZ2V0UGVyY2VudGFnZSIsImluZGV4T2YiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI0SUFBQSxjQXFDRSxJQS9CQSxJQUFJQSxFQUNFQyxFQUFPLGFBQ1BDLEVBQVUsQ0FDZCxTQUNBLFFBQ0EsUUFDQSxRQUNB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SE14QixFQUFLK0QsU0FBUzFGLEdBQU1nRyxLQUFJLFNBQUM5QyxHQUNuQyxPQUFPQSxFQUFRM0IsTUFFQzJFLFFBQVEzRSxJQUVYLElBQVg0QixHQUNGeEIsRUFBSytELFNBQVMxRixHQUFNbUcsT0FBT2hELEVBQU8sTUFNM0JaLGMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbXVsdGktYXNzaWduICovXG5cbi8vIEF2b2lkIGBjb25zb2xlYCBlcnJvcnMgaW4gYnJvd3NlcnMgdGhhdCBsYWNrIGEgY29uc29sZS5cbntcbiAgbGV0IG1ldGhvZFxuICBjb25zdCBub29wID0gKCkgPT4ge31cbiAgY29uc3QgbWV0aG9kcyA9IFtcbiAgICAnYXNzZXJ0JyxcbiAgICAnY2xlYXInLFxuICAgICdjb3VudCcsXG4gICAgJ2RlYnVnJyxcbiAgICAnZGlyJyxcbiAgICAnZGlyeG1sJyxcbiAgICAnZXJyb3InLFxuICAgICdleGNlcHRpb24nLFxuICAgICdncm91cCcsXG4gICAgJ2dyb3VwQ29sbGFwc2VkJyxcbiAgICAnZ3JvdXBFbmQnLFxuICAgICdpbmZvJyxcbiAgICAnbG9nJyxcbiAgICAnbWFya1RpbWVsaW5lJyxcbiAgICAncHJvZmlsZScsXG4gICAgJ3Byb2ZpbGVFbmQnLFxuICAgICd0YWJsZScsXG4gICAgJ3RpbWUnLFxuICAgICd0aW1lRW5kJyxcbiAgICAndGltZWxpbmUnLFxuICAgICd0aW1lbGluZUVuZCcsXG4gICAgJ3RpbWVTdGFtcCcsXG4gICAgJ3RyYWNlJyxcbiAgICAnd2FybicsXG4gIF1cbiAgbGV0IHsgbGVuZ3RoIH0gPSBtZXRob2RzXG4gIGNvbnN0IGNvbnNvbGUgPSAod2luZG93LmNvbnNvbGUgPSB3aW5kb3cuY29uc29sZSB8fCB7fSlcblxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBtZXRob2QgPSBtZXRob2RzW2xlbmd0aF1cblxuICAgIC8vIE9ubHkgc3R1YiB1bmRlZmluZWQgbWV0aG9kcy5cbiAgICBpZiAoIWNvbnNvbGVbbWV0aG9kXSkge1xuICAgICAgY29uc29sZVttZXRob2RdID0gbm9vcFxuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgdGFiYmluZyBpbmRpY2F0b3IgdG8gd2luZG93XG5jb25zdCBoYW5kbGVGaXJzdFRhYiA9IChlKSA9PiB7XG4gIGlmIChlLmtleUNvZGUgPT09IDkpIHtcbiAgICAvLyB0aGUgXCJJIGFtIGEga2V5Ym9hcmQgdXNlclwiIGtleVxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgndXNlci1pcy10YWJiaW5nJylcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUZpcnN0VGFiKVxuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlRmlyc3RUYWIpXG5cbi8vIEFkZCBhIGJyb3dlciBpbmRpY2F0b3IgdG8gdGhlIEhUTUwgZWxlbWVudC5cbmNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJylcbmh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJyb3dzZXInLCBicm93c2VyLm5hbWUpXG5cbi8vIERldGVjdCBpZiBtb2JpbGUgb3IgZGVza3RvcC5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcblxuYnJlYWtwb2ludHMoe1xuICB4bGFyZ2U6IFsnMTI4MXB4JywgJzE2ODBweCddLFxuICBsYXJnZTogWyc5ODFweCcsICcxMjgwcHgnXSxcbiAgbWVkaXVtOiBbJzczN3B4JywgJzk4MHB4J10sXG4gIHNtYWxsOiBbJzQ4MXB4JywgJzczNnB4J10sXG4gIHhzbWFsbDogW251bGwsICc0ODBweCddLFxufSlcblxuaWYgKGJyb3dzZXIubW9iaWxlKSB7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZCgnaXMtbW9iaWxlJylcbn0gZWxzZSB7XG4gIGJyZWFrcG9pbnRzLm9uKCc+bWVkaXVtJywgKCkgPT4ge1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbW9iaWxlJylcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2lzLWRlc2t0b3AnKVxuICB9KVxuICBicmVha3BvaW50cy5vbignPD1tZWRpdW0nLCAoKSA9PiB7XG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1kZXNrdG9wJylcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2lzLW1vYmlsZScpXG4gIH0pXG59XG5cbi8vIExvZyBpZiBydW5uaW5nIGluIGxvY2FsaG9zdCB3aGVuIGluIGRldmVsb3BtZW50IG1vZGUuXG5pZiAoXG4gIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgJiZcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuKSB7XG4gIGNvbnNvbGUubG9nKCdsb2NhbGhvc3QgZGV0ZWN0ZWQhJylcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBidWRnZXRDb250cm9sbGVyIGZyb20gJy4vYnVkZ2V0Y29udHJvbGxlcidcblxuY29uc3QgZm9ybWF0TnVtYmVyID0gKG51bWJlciwgdHlwZSkgPT4ge1xuICAvKipcbiAgICogKyBvciAtIGJlZm9yZSB0aGUgbnVtYmVyXG4gICAqIGV4YWN0bHkgMiBkZWNpbWFsIHBvaW50c1xuICAgKiBjb21tYSBzZXBlcmF0aW5nIHRoZSB0aG91c2FuZHNcbiAgICpcbiAgICogMjMxMC40NTY3ID0gKyAyLDMxMC40NlxuICAgKi9cbiAgbGV0IG51bSA9IE1hdGguYWJzKG51bWJlcilcbiAgbnVtID0gbnVtLnRvRml4ZWQoMilcblxuICBjb25zdCBudW1TcGxpdCA9IG51bS5zcGxpdCgnLicpIC8vIG5vdyBhIHN0cmluZyBhbmQgd2lsbCBzcGxpdCB0aGUgLiB0byByZXBsYWNlIHdpdGggYSAsXG4gIGxldCBpbnQgPSBudW1TcGxpdFswXVxuICBsZXQgZGVjaW1hbCA9IG51bVNwbGl0WzFdXG4gIGRlY2ltYWwgPSBOdW1iZXIoZGVjaW1hbCkgPiAwID8gYC4ke2RlY2ltYWx9YCA6ICcnXG5cbiAgaWYgKGludC5sZW5ndGggPiAzKSB7XG4gICAgLy8gc3Vic3RyIGFsbG93cyBmb3Igb25seSBwYXJ0IG9mIHRoZSBzdHJpbmcgdG8gYmUgdGFrZW5cbiAgICBpbnQgPSBgJHtpbnQuc3Vic3RyKDAsIGludC5sZW5ndGggLSAzKX0sJHtpbnQuc3Vic3RyKGludC5sZW5ndGggLSAzLCAzKX1gIC8vIGlucHV0IDIzMTAsIG91dHB1dCAyLDMxMFxuICB9XG5cbiAgY29uc3Qgc2lnbiA9IHR5cGUgPT09ICdleHAnID8gJy0nIDogJysnXG5cbiAgLy8gUmV0dXJuIHRoZSBmb3JtYXR0ZWQgc3RyaW5nXG4gIHJldHVybiBgJHtzaWdufSAke2ludH0ke2RlY2ltYWx9YFxufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItZGVzdHJ1Y3R1cmluZyAqL1xuY2xhc3MgVUlDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoY29zdCwgZGVzY3JpcHRpb24sIHZhbHVlKSB7XG4gICAgdGhpcy5pbnB1dFR5cGUgPSBjb3N0XG4gICAgdGhpcy5pbnB1dERlc2MgPSBkZXNjcmlwdGlvblxuICAgIHRoaXMuaW5wdXRWYWwgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHRoaXMuaW5wdXRUeXBlLnZhbHVlLCAvLyBXaWxsIGJlIGVpdGhlciBpbmMgb3IgZXhwXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnB1dERlc2MudmFsdWUsXG4gICAgICB2YWx1ZTogTnVtYmVyKHRoaXMuaW5wdXRWYWwudmFsdWUpLFxuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gIHJlbmRlcihvYmosIHR5cGUpIHtcbiAgICBjb25zdCBpdGVtID0gdHlwZSA9PT0gJ2V4cCcgPyAnZXhwZW5zZXMnIDogJ2luY29tZSdcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aXRlbX1fX2xpc3RgKVxuICAgIGxldCBodG1sXG5cbiAgICAvLyBDcmVhdGUgSFRNTCBzdHJpbmcgd2l0aCBwbGFjZWhvbGRlclxuICAgIGh0bWwgPSBgXG4gICAgPGxpIGNsYXNzPScke2l0ZW19X19pdGVtJyBpZD0nJHt0eXBlfS0ke29iai5pZH0nPlxuICAgICAgPGRpdiBjbGFzcz0naXRlbS1kZXNjJz48cD4ke29iai5kZXNjfTwvcD48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPSdpdGVtc19fdmFsdWUnPjxwPjxzcGFuPiZwb3VuZDs8L3NwYW4+JHtmb3JtYXROdW1iZXIoXG4gICAgICAgICAgb2JqLnZhbCxcbiAgICAgICAgICB0eXBlXG4gICAgICAgICl9PC9wPjwvZGl2PlxuICAgIGBcblxuICAgIGlmICh0eXBlID09PSAnZXhwJykge1xuICAgICAgaHRtbCArPSAnPGRpdiBjbGFzcz1cIml0ZW1zX19wZXJjZW50XCI+PHA+MCYjMzc7PC9wPjwvZGl2PidcbiAgICB9XG5cbiAgICBodG1sICs9IGBcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnRuIGJ0bi0tY2xlYXIgaXRlbXNfX2RlbCc+XG4gICAgICAgICAgPHN2ZyBpZD1cImRlbGV0ZVwiIGNsYXNzPVwiaWNvblwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMuc3ZnI2ljb24tZGVsZXRlXCI+PC91c2U+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgICBgXG5cbiAgICAvLyBJbnNlcnQgSFRNTCBpbnRvIHRoZSBET01cbiAgICBsaXN0LmlubmVySFRNTCArPSBodG1sXG4gIH1cblxuICBnZXRCdWRnZXQoZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBidWRnZXQ6IGRhdGEuYnVkZ2V0LFxuICAgICAgdG90YWxJbmM6IGRhdGEudG90YWxzLmluYyxcbiAgICAgIHRvdGFsRXhwOiBkYXRhLnRvdGFscy5leHAsXG4gICAgICBwZXJjZW50OiBkYXRhLnBlcmNlbnQsXG4gICAgfVxuICB9XG5cbiAgZGlzcGxheUJ1ZGdldChvYmopIHtcbiAgICBjb25zdCB0eXBlID0gb2JqLmJ1ZGdldCA+IDAgPyAnaW5jJyA6ICdleHAnXG4gICAgY29uc3QgdHlwZXMgPSB0eXBlID09PSAnZXhwJyA/ICdleHBlbnNlcycgOiAnaW5jb21lJ1xuICAgIGNvbnN0IGJ1ZGdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idWRnZXRfX3ZhbHVlIC5idWRnZXQnKVxuICAgIGNvbnN0IGluYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmJ1ZGdldF9faW5jb21lIC5idWRnZXRfX2Ftb3VudCAuYW1vdW50YFxuICAgIClcbiAgICBjb25zdCBleHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC5idWRnZXRfX2V4cGVuc2VzIC5idWRnZXRfX2Ftb3VudCAuYW1vdW50YFxuICAgIClcblxuICAgIGJ1ZGdldC50ZXh0Q29udGVudCA9IGZvcm1hdE51bWJlcihvYmouYnVkZ2V0LCB0eXBlKVxuICAgIGluYy50ZXh0Q29udGVudCA9IGZvcm1hdE51bWJlcihvYmoudG90YWxJbmMsICdpbmMnKVxuICAgIGV4cC50ZXh0Q29udGVudCA9IGZvcm1hdE51bWJlcihvYmoudG90YWxFeHAsICdleHAnKVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBUaGUgJHt0eXBlc30gaXMvYXJlICR7b2JqLmJ1ZGdldH1gKVxuICAgICAgY29uc29sZS5sb2coaW5jLCBleHApXG4gICAgfVxuICB9XG5cbiAgZGlzcGxheVBlcmNlbnRhZ2UocGVyY2VudGFnZSkge1xuICAgIGNvbnN0IHBlcmNlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyY2VudGFnZScpXG5cbiAgICBpZiAocGVyY2VudGFnZSA+IDApIHtcbiAgICAgIHBlcmNlbnQuY2xhc3NMaXN0LmFkZCgnc2hvdycpXG4gICAgICBwZXJjZW50LmlubmVySFRNTCA9IGAke3BlcmNlbnRhZ2V9JiMzNztgXG4gICAgfSBlbHNlIHtcbiAgICAgIHBlcmNlbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKHBlcmNlbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQnVkZ2V0KCkge1xuICAgIC8vIDEuIENoZWNrIGxvY2FsU3RvcmFnZSBmb3Igc2F2ZSBidWRnZXQgZGF0YSwgZWxzZSBnZXQgbmV3IGRhdGFcbiAgICBjb25zdCBnZXREYXRhID0gYnVkZ2V0Q29udHJvbGxlci5jYWxjdWxhdGVCdWRnZXQoKVxuXG4gICAgLy8gMi4gUmV0dXJuIHRoZSBidWRnZXRcbiAgICBjb25zdCBuZXdCdWRnZXQgPSB0aGlzLmdldEJ1ZGdldChnZXREYXRhKVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKG5ld0J1ZGdldClcbiAgICB9XG5cbiAgICAvLyAzLiBEaXNwbGF5IHRoZSB1cGRhdGVkIGJ1ZGdldFxuICAgIHRoaXMuZGlzcGxheUJ1ZGdldChuZXdCdWRnZXQpXG5cbiAgICAvLyA0LiBEaXNwbGF5IHRoZSBuZXcgb3ZlcmFsbCBidWRnZXQgcGVyY2VudGFnZVxuICAgIHRoaXMuZGlzcGxheVBlcmNlbnRhZ2UobmV3QnVkZ2V0LnBlcmNlbnQpXG4gIH1cblxuICBkaXNwbGF5UGVyY2VudGFnZXMocGVyY2VudGFnZXMpIHtcbiAgICBjb25zdCBmaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbXNfX3BlcmNlbnQnKVxuICAgIGNvbnN0IG5vZGVMaXN0Rm9yRWFjaCA9IChsaXN0LCBjYikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNiKGxpc3RbaV0sIGkpXG4gICAgICB9XG4gICAgfVxuICAgIG5vZGVMaXN0Rm9yRWFjaChmaWVsZHMsIChjdXJyZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHBlcmNlbnRhZ2VzW2luZGV4XSA+IDApIHtcbiAgICAgICAgY3VycmVudC5jbGFzc0xpc3QuYWRkKCdzaG93JylcbiAgICAgICAgY3VycmVudC5pbm5lckhUTUwgPSBgJHtwZXJjZW50YWdlc1tpbmRleF19JiMzNztgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxuICAgICAgICBjdXJyZW50LmlubmVySFRNTCA9ICcwJiMzNzsnXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVBlcmNlbnRhZ2VzKCkge1xuICAgIC8vIDEuIENhbHVsYXRlIHBlcmNlbnRhZ2VzXG4gICAgYnVkZ2V0Q29udHJvbGxlci5jYWxjdWxhdGVQZXJjZW50YWdlcygpXG5cbiAgICAvLyAyLiBSZWFkIHBlcmNlbnRhZ2VzIGZyb20gYnVkZ2V0IGNvbnRyb2xsZXJcbiAgICBjb25zdCBwZXJjZW50YWdlcyA9IGJ1ZGdldENvbnRyb2xsZXIuZ2V0UGVyY2VudGFnZXMoKVxuXG4gICAgLy8gMy4gVXBkYXRlIFVJIHRvIHNob3cgbmV3IHBlcmNlbnRhZ2VzXG4gICAgdGhpcy5kaXNwbGF5UGVyY2VudGFnZXMocGVyY2VudGFnZXMpXG4gIH1cblxuICAvLyAgIHVwZGF0ZURhdGUoKSB7XG4gIC8vICAgICBjb25zdCBidWRnZXREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1ZGdldF9fbW9udGgnKVxuICAvLyAgICAgY29uc3QgZGF0ZSA9IGRheWpzKCdNTU1NIFlZWVknKVxuICAvLyAgICAgYnVkZ2V0RGF0ZS50ZXh0Q29udGVudCA9IGRhdGVcbiAgLy8gICB9XG5cbiAgZGVsZXRlSXRlbSgpIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluY29tZS1leHBlbnNlcycpXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdkZWxldGUnKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5pdGVtcycpLnBhcmVudEVsZW1lbnRcbiAgICAgICAgY29uc3Qgc3BsaXRJRCA9IHRhcmdldC5pZC5zcGxpdCgnLScpXG4gICAgICAgIGNvbnN0IHR5cGUgPSBzcGxpdElEWzBdXG4gICAgICAgIGNvbnN0IElEID0gTnVtYmVyKHNwbGl0SURbMV0pXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCwgdGFyZ2V0LCBzcGxpdElELCB0eXBlLCBJRClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDEuIERlbGV0ZSB0aGUgaXRlbSBmcm9tIHRoZSBkYXRhIHN0cnVjdHVyZVxuICAgICAgICBidWRnZXRDb250cm9sbGVyLnJlbW92ZUl0ZW0odHlwZSwgSUQpXG5cbiAgICAgICAgLy8gMi4gRGVsZXRlIHRoZSBpdGVtIGZyb20gdGhlIFVJXG4gICAgICAgIHRhcmdldC5yZW1vdmUoKVxuXG4gICAgICAgIC8vIDMuIFVwZGF0ZSBhbmQgc2hvdyB0aGUgbmV3IGJ1ZGdldFxuICAgICAgICB0aGlzLnVwZGF0ZUJ1ZGdldCgpXG5cbiAgICAgICAgLy8gNC4gVXBkYXRlIGFuZCBzaG93IHRoZSBuZXcgcGVyY2VudGFnZXNcbiAgICAgICAgdGhpcy51cGRhdGVQZXJjZW50YWdlcygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVSUNvbnRyb2xsZXJcbiIsIm1vZHVsZS5leHBvcnRzID0gYnJlYWtwb2ludHM7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuXG4vLyBFeHRlcm5hbFxuaW1wb3J0ICdhaXJibmItYnJvd3Nlci1zaGltcydcblxuLy8gSW50ZXJuYWxcbmltcG9ydCAnLi9tb2R1bGVzL2hlbHBlcnMnXG5pbXBvcnQgYnVkZ2V0Q29udHJvbGxlciBmcm9tICcuL21vZHVsZXMvYnVkZ2V0Y29udHJvbGxlcidcbmltcG9ydCBVSUNvbnRyb2xsZXIgZnJvbSAnLi9tb2R1bGVzL3VpY29udHJvbGxlcidcblxuLy8gUmVtb3ZlIGxvYWRpbmcgY2xhc3MgZnJvbSBib2R5IG9uIHdpbmRvdyBsb2FkLlxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJylcbiAgfSwgMTAwKVxufVxuXG4vLyBDcmVhdGUgdGhlIG1haW4gY29udHJvbGxlciBmb3IgdGhlIGFwcFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5jb25zdCBjb250cm9sbGVyID0gKChidWRnZXRDdHJsKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkX19mb3JtJylcbiAgY29uc3QgdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRfX3R5cGUnKVxuICBjb25zdCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZF9fZGVzY3JpcHRpb24nKVxuICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRfX3ZhbHVlJylcbiAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2snKVxuXG4gIGNvbnN0IFVJQ3RybCA9IG5ldyBVSUNvbnRyb2xsZXIodHlwZSwgZGVzYywgdmFsdWUpXG5cbiAgLy8gVG9nZ2xlIHRoZSBzdWJtaXQgbmV3IGNvc3QgZnJvbSBlaXRoZXIgaW5jb21lIG9yIGV4cGVuc2UuXG4gIHR5cGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gQXJyYXkuZnJvbSh0eXBlLm9wdGlvbnMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgdHlwZS5hdHRyaWJ1dGVzLFxuICAgICAgICB0eXBlLm9wdGlvbnMsXG4gICAgICAgIHR5cGUub3B0aW9ucy5zZWxlY3RlZEluZGV4LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBvcHRpb25zWzFdXG4gICAgICApXG4gICAgfVxuICAgIGlmICh0eXBlLm9wdGlvbnMuc2VsZWN0ZWRJbmRleCA9PT0gMSkge1xuICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZCh0eXBlLnZhbHVlKVxuICAgICAgb3B0aW9uc1swXS5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJylcbiAgICAgIG9wdGlvbnNbMV0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnNbMV0ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpXG4gICAgICBvcHRpb25zWzBdLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKVxuICAgICAgY2hlY2suY2xhc3NMaXN0LnJlbW92ZSgnZXhwJylcbiAgICB9XG4gIH0pXG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gR2V0IGZpbGVkIGlucHV0IGRhdGFcbiAgICBjb25zdCBpbnB1dCA9IFVJQ3RybC5nZXRJbnB1dCgpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKGlucHV0KVxuICAgICAgY29uc29sZS5sb2codHlwZW9mIGlucHV0LnZhbHVlKVxuICAgIH1cblxuICAgIC8vIENsZWFyIHRoZSBmb3JtIGZpZWxkc1xuICAgIGZvcm0ucmVzZXQoKVxuXG4gICAgLy8gT25seSBydW4gY2FsY3VsYXRpb25zIGlmIHZhbGlkIGlucHV0cyBhcmUgZW50ZXJlZFxuICAgIGlmIChpbnB1dC5kZXNjICE9PSAnJyAmJiAhaXNOYU4oaW5wdXQudmFsdWUpICYmIGlucHV0LnZhbHVlID4gMCkge1xuICAgICAgLy8gQWRkIHRoZSBpdGVtIHRvIHRoZSBidWRnZXRcbiAgICAgIGNvbnN0IG5ld0l0ZW0gPSBidWRnZXRDdHJsLmFkZEl0ZW0oXG4gICAgICAgIGlucHV0LnR5cGUsXG4gICAgICAgIGlucHV0LmRlc2NyaXB0aW9uLFxuICAgICAgICBpbnB1dC52YWx1ZVxuICAgICAgKVxuXG4gICAgICAvLyBDYWxjdWxhZSB0aGUgYnVkZ2V0IGFuZCB1cGRhdGUgdGhlIFVJXG4gICAgICBVSUN0cmwucmVuZGVyKG5ld0l0ZW0sIGlucHV0LnR5cGUpIC8vIEFkZCBpdGVtcyB0byBpbmNvbWUgb3IgZXhwZW5zZXMgbGlzdFxuICAgICAgVUlDdHJsLnVwZGF0ZUJ1ZGdldCgpIC8vIE91dHB1dCB0aGUgbmV3IGJ1ZGdldFxuICAgICAgVUlDdHJsLnVwZGF0ZVBlcmNlbnRhZ2VzKCkgLy8gT3V0cHV0IHRoZSBuZXcgcGVyY2VudGFnZXNcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Zvcm0gc3VibWl0dGVkIScpXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0l0ZW0pXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIC8vIERlbGV0ZSBhbiBhZGRlZCBpbmNvbWUgb3IgZXhwZW5zZVxuICBVSUN0cmwuZGVsZXRlSXRlbSgpXG59KShidWRnZXRDb250cm9sbGVyKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBicm93c2VyOyIsImNvbnN0IGJ1ZGdldENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjbGFzcyBCdWRnZXQge1xuICAgIGNvbnN0cnVjdG9yKGlkLCBkZXNjcmlwdGlvbiwgdmFsdWUpIHtcbiAgICAgIHRoaXMuaWQgPSBpZFxuICAgICAgdGhpcy5kZXNjID0gZGVzY3JpcHRpb25cbiAgICAgIHRoaXMudmFsID0gdmFsdWVcbiAgICAgIHRoaXMucGVyY2VudGFnZSA9IC0xXG4gICAgfVxuXG4gICAgY2FsY1BlcmNlbnRhZ2UodG90YWxJbmNvbWUpIHtcbiAgICAgIGlmICh0b3RhbEluY29tZSA+IDApIHtcbiAgICAgICAgdGhpcy5wZXJjZW50YWdlID0gTWF0aC5yb3VuZCgodGhpcy52YWwgLyB0b3RhbEluY29tZSkgKiAxMDApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBlcmNlbnRhZ2UgPSAtMVxuICAgICAgfVxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgYHRoaXMgdmFsdWUgaXMgJHt0eXBlb2YgdGhpcy52YWx9YCxcbiAgICAgICAgICBgdGhlIHRvdGFsSW5jb21lICR7dHlwZW9mIHRvdGFsSW5jb21lfWBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIGdldFBlcmNlbnRhZ2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wZXJjZW50YWdlXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGF0YSA9IHtcbiAgICBhbGxJdGVtczoge1xuICAgICAgZXhwOiBbXSxcbiAgICAgIGluYzogW10sXG4gICAgfSxcbiAgICB0b3RhbHM6IHtcbiAgICAgIGV4cDogMCxcbiAgICAgIGluYzogMCxcbiAgICB9LFxuICAgIGJ1ZGdldDogMCxcbiAgfVxuXG4gIGNvbnN0IGNhbGN1bGF0ZVRvdGFscyA9ICh0eXBlKSA9PiB7XG4gICAgbGV0IHN1bSA9IDBcbiAgICBkYXRhLmFsbEl0ZW1zW3R5cGVdLmZvckVhY2goKGN1cikgPT4ge1xuICAgICAgc3VtICs9IGN1ci52YWxcbiAgICB9KVxuICAgIGRhdGEudG90YWxzW3R5cGVdID0gc3VtXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFkZEl0ZW06ICh0eXBlLCBkZXNjLCB2YWwpID0+IHtcbiAgICAgIC8vIENyZWF0ZSBuZXcgSURcbiAgICAgIGNvbnN0IElEID1cbiAgICAgICAgZGF0YS5hbGxJdGVtc1t0eXBlXS5sZW5ndGggPiAwXG4gICAgICAgICAgPyBkYXRhLmFsbEl0ZW1zW3R5cGVdW2RhdGEuYWxsSXRlbXNbdHlwZV0ubGVuZ3RoIC0gMV0uaWQgKyAxXG4gICAgICAgICAgOiAwXG5cbiAgICAgIC8vIFNldCBuZXcgaXRlbSB0byB1c2Ugb2JqZWN0XG4gICAgICBjb25zdCBuZXdJdGVtID0gbmV3IEJ1ZGdldChJRCwgZGVzYywgdmFsKVxuXG4gICAgICAvLyBQdXNoIGl0IGludG8gZGF0YSBzdHJ1Y3R1cmVcbiAgICAgIGRhdGEuYWxsSXRlbXNbdHlwZV0ucHVzaChuZXdJdGVtKVxuXG4gICAgICAvLyBjcmVhdGUgbmV3IGl0ZW1cbiAgICAgIHJldHVybiBuZXdJdGVtXG4gICAgfSxcbiAgICBjYWxjdWxhdGVCdWRnZXQ6ICgpID0+IHtcbiAgICAgIC8vIDEuIENhbGN1bGF0ZSB0aGUgYnVkZ2V0XG4gICAgICBjYWxjdWxhdGVUb3RhbHMoJ2V4cCcpXG4gICAgICBjYWxjdWxhdGVUb3RhbHMoJ2luYycpXG5cbiAgICAgIC8vIDIuIENhbGN1bGF0ZSB0aGUgYnVkZ2V0OiBpbmNvbWUgLSBleHBlbnNlc1xuICAgICAgZGF0YS5idWRnZXQgPSBkYXRhLnRvdGFscy5pbmMgLSBkYXRhLnRvdGFscy5leHBcblxuICAgICAgLy8gMy4gQ2FsY3VsYXRlIHRoZSBwZXJjZW50YWdlIG9mIGluY29tZSB0aGF0IHdlIHNwZW50XG4gICAgICBpZiAoZGF0YS50b3RhbHMuaW5jID4gMCkge1xuICAgICAgICBkYXRhLnBlcmNlbnQgPSBNYXRoLnJvdW5kKChkYXRhLnRvdGFscy5leHAgLyBkYXRhLnRvdGFscy5pbmMpICogMTAwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YS5wZXJjZW50ID0gLTFcbiAgICAgIH1cblxuICAgICAgLy8gMy4gUmV0dXJuIHRoZSBidWRnZXRcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEudG90YWxzLmV4cCwgZGF0YS50b3RhbHMuaW5jKVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmJ1ZGdldCwgZGF0YS5wZXJjZW50KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0sXG4gICAgY2FsY3VsYXRlUGVyY2VudGFnZXM6ICgpID0+IHtcbiAgICAgIGRhdGEuYWxsSXRlbXMuZXhwLmZvckVhY2goKGN1cikgPT4ge1xuICAgICAgICBjdXIuY2FsY1BlcmNlbnRhZ2UoZGF0YS50b3RhbHMuaW5jKVxuICAgICAgfSlcbiAgICB9LFxuICAgIGdldFBlcmNlbnRhZ2VzOiAoKSA9PiB7XG4gICAgICBjb25zdCBhbGxQZXJjID0gZGF0YS5hbGxJdGVtcy5leHAubWFwKChjdXIpID0+IHtcbiAgICAgICAgcmV0dXJuIGN1ci5nZXRQZXJjZW50YWdlKClcbiAgICAgIH0pXG4gICAgICByZXR1cm4gYWxsUGVyY1xuICAgIH0sXG4gICAgcmVtb3ZlSXRlbTogKHR5cGUsIGlkKSA9PiB7XG4gICAgICBjb25zdCBpZHMgPSBkYXRhLmFsbEl0ZW1zW3R5cGVdLm1hcCgoY3VycmVudCkgPT4ge1xuICAgICAgICByZXR1cm4gY3VycmVudC5pZFxuICAgICAgfSlcbiAgICAgIGNvbnN0IGluZGV4ID0gaWRzLmluZGV4T2YoaWQpXG5cbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgZGF0YS5hbGxJdGVtc1t0eXBlXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICB9XG4gICAgfSxcbiAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBidWRnZXRDb250cm9sbGVyXG4iXSwic291cmNlUm9vdCI6IiJ9