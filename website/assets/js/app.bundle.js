(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{0:function(e,t,n){e.exports=n("kFay")},1:function(e,t){},E4hX:function(e,t,n){(function(e,t){for(var n,a=function(){},o=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],s=o.length,c=window.console=window.console||{};s--;)c[n=o[s]]||(c[n]=a);window.addEventListener("keydown",(function e(t){9===t.keyCode&&(document.body.classList.add("user-is-tabbing"),window.removeEventListener("keydown",e))})),document.querySelector("html").setAttribute("data-browser",e.name);var i=document.querySelector("body");t({xlarge:["1281px","1680px"],large:["981px","1280px"],medium:["737px","980px"],small:["481px","736px"],xsmall:[null,"480px"]}),e.mobile?i.classList.add("is-mobile"):(t.on(">medium",(function(){i.classList.remove("is-mobile"),i.classList.add("is-desktop")})),t.on("<=medium",(function(){i.classList.remove("is-desktop"),i.classList.add("is-mobile")}))),"localhost"===window.location.hostname&&console.log("localhost detected!")}).call(this,n("txRt"),n("a6Qp"))},SEKM:function(e,t,n){"use strict";n.r(t);var a=n("lwsE"),o=n.n(a),s=n("W8MJ"),c=n.n(s),i=n("xVb/"),l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=Math.abs(e),s=(o=o.toFixed(2)).split("."),c=s[0],i=s[1];i=Number(i)>0?".".concat(i):"",c.length>3&&(c="".concat(c.substr(0,c.length-3),",").concat(c.substr(c.length-3,3)));var l=n?'<span class="currency">&pound;</span>':"";return"".concat(a?"exp"===t?'<span class="sign">&#45;</span> ':'<span class="sign">&#43;</span> ':"").concat(l).concat(c).concat(i)},u=function(){function e(t,n,a){o()(this,e),this.inputType=t,this.inputDesc=n,this.inputVal=a}return c()(e,[{key:"getInput",value:function(){return{type:this.inputType.value,description:this.inputDesc.value,value:Number(this.inputVal.value)}}},{key:"render",value:function(e,t){var n,a="exp"===t?"expenses":"sav"===t?"savings":"income",o=document.querySelector(".".concat(a,"__list"));n="\n    <li class='".concat(a,"__item' id='").concat(t,"-").concat(e.id,"'>\n      <div class='item-desc'><p>").concat(e.desc,"</p></div>\n      <div class=\"items\">\n        <div class='items__value'><p>").concat(l(e.val,t,!0,!1),"</p></div>\n    "),"exp"!==t&&"sav"!==t||(n+='<div class="items__percent"><p>0&#37;</p></div>'),n+='\n        <button class=\'btn btn--clear items__del\'>\n          <svg id="delete" class="icon" width="20" height="20" aria-hidden="true">\n            <use xlink:href="/assets/images/icons.svg#icon-delete"></use>\n          </svg>\n        </button>\n      </div>\n    </li>\n    ',o.innerHTML+=n}},{key:"getBudget",value:function(e){return{budget:e.budget,totalInc:e.totals.inc,totalExp:e.totals.exp,totalSav:e.totals.sav,percentExp:e.percent.exp,percentSav:e.percent.sav}}},{key:"displayBudget",value:function(e){var t=e.budget>0?"inc":"exp",n="exp"===t?"expenses":"income",a=document.querySelector(".budget__value"),o=document.querySelector(".budget__income .budget__amount"),s=document.querySelector(".budget__expenses .budget__amount"),c=document.querySelector(".budget__savings .budget__amount");a.innerHTML=l(e.budget,t,!0),o.innerHTML=l(e.totalInc,"inc"),s.innerHTML=l(e.totalExp,"exp"),c.innerHTML=l(e.totalSav,"exp"),console.log("The ".concat(n," is/are ").concat(e.budget)),console.log(o,s)}},{key:"displayPercentage",value:function(e,t){var n="exp"===t?"expenses":"savings",a=document.querySelector(".budget__".concat(n," .percentage"));e>0?(a.classList.add("show"),a.innerHTML="".concat(e,"&#37;")):a.classList.remove("show"),console.log(a)}},{key:"updateBudget",value:function(){var e=i.default.calculateBudget(),t=this.getBudget(e);console.log(t),this.displayBudget(t),this.displayPercentage(t.percentExp,"exp"),this.displayPercentage(t.percentSav,"sav")}},{key:"displayPercentages",value:function(e,t){var n="exp"===t?"expenses":"savings";!function(e,t){for(var n=0;n<e.length;n++)t(e[n],n)}(document.querySelectorAll(".".concat(n," .items__percent")),(function(t,n){e[n]>0?(t.classList.add("show"),t.innerHTML="".concat(e[n],"&#37;")):(t.classList.remove("show"),t.innerHTML="0&#37;")}))}},{key:"updatePercentages",value:function(){i.default.calculatePercentages(this.inputType.value);var e=i.default.getPercentages(this.inputType.value);this.displayPercentages(e,this.inputType.value)}},{key:"displayDate",value:function(){var e=document.querySelector(".budget__date"),t=new Date;e.textContent="".concat(["January","February","March","April","May","June","July","August","Sepetember","October","November","December"][t.getMonth()]," ").concat(t.getFullYear())}},{key:"changeType",value:function(){var e=this.inputType,t=document.querySelector("#check"),n=[e,this.inputDesc,this.inputVal,t];console.log(n),e.addEventListener("change",(function(t){var a=Array.from(e.options);console.log(t),console.log(e.attributes,e.options,e.options.selectedIndex,a,a[1]),n.forEach((function(e){e.classList.toggle("exp")})),a.forEach((function(e,t){e.selected?e.setAttribute("selected","selected"):e.removeAttribute("selected","selected"),console.log(e,e.value,t)}))}))}},{key:"deleteItem",value:function(){var e=this;document.querySelector(".income-expenses").addEventListener("click",(function(t){if("delete"===t.target.id){var n=t.target.closest(".items").parentElement,a=n.id.split("-"),o=a[0],s=Number(a[1]);console.log(t.target,n,a,o,s),i.default.removeItem(o,s),n.remove(),e.updateBudget(),e.updatePercentages()}}))}}]),e}();t.default=u},a6Qp:function(e,t){e.exports=breakpoints},kFay:function(e,t,n){"use strict";n.r(t);var a=n("cDf5"),o=n.n(a),s=(n("OuUZ"),n("E4hX"),n("xVb/")),c=n("SEKM"),i=document.querySelector("body");window.onload=function(){window.setTimeout((function(){i.classList.remove("is-loading")}),100)};var l,u,r,d,p,v;l=s.default,u=document.querySelector(".add__form"),r=document.querySelector(".add__type"),d=document.querySelector(".add__description"),p=document.querySelector(".add__value"),(v=new c.default(r,d,p)).displayDate(),v.changeType(),u.addEventListener("submit",(function(e){e.preventDefault();var t=v.getInput();if(console.log(t),console.log(o()(t.value)),u.reset(),""!==t.desc&&!isNaN(t.value)&&t.value>0){var n=l.addItem(t.type,t.description,t.value);v.render(n,t.type),v.updateBudget(),v.updatePercentages(),console.log("form submitted!"),console.log(n)}})),v.deleteItem()},txRt:function(e,t){e.exports=browser},"xVb/":function(e,t,n){"use strict";n.r(t);var a,o,s,c=n("cDf5"),i=n.n(c),l=n("lwsE"),u=n.n(l),r=n("W8MJ"),d=n.n(r),p=(a=function(){function e(t,n,a){u()(this,e),this.id=t,this.desc=n,this.val=a,this.percentage=-1}return d()(e,[{key:"calcPercentage",value:function(e){this.percentage=e>0?Math.round(this.val/e*100):-1,console.log("this value is ".concat(i()(this.val)),"the totalIncome ".concat(i()(e)))}},{key:"getPercentage",value:function(){return this.percentage}}]),e}(),o={allItems:{exp:[],inc:[],sav:[]},totals:{exp:0,inc:0,sav:0},percent:{exp:-1,sav:-1},budget:0},s=function(e){var t=0;o.allItems[e].forEach((function(e){t+=e.val})),o.totals[e]=t},{addItem:function(e,t,n){var s=o.allItems[e].length>0?o.allItems[e][o.allItems[e].length-1].id+1:0,c=new a(s,t,n);return o.allItems[e].push(c),c},calculateBudget:function(){return s("exp"),s("inc"),s("sav"),o.budget=o.totals.inc-(o.totals.exp+o.totals.sav),o.totals.inc>0?(o.percent.exp=Math.round(o.totals.exp/o.totals.inc*100),o.percent.sav=Math.round(o.totals.sav/o.totals.inc*100)):(o.percent.exp=-1,o.percent.sav=-1),console.log(o.totals.exp,o.totals.inc),console.log(o.budget,o.percent.exp,o.percent.sav),o},calculatePercentages:function(e){o.allItems[e].forEach((function(e){e.calcPercentage(o.totals.inc)}))},getPercentages:function(e){return o.allItems[e].map((function(e){return e.getPercentage()}))},removeItem:function(e,t){var n=o.allItems[e].map((function(e){return e.id})).indexOf(t);-1!==n&&o.allItems[e].splice(n,1)}});t.default=p}},[[0,"runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWJzaXRlL3NyYy9qcy9tb2R1bGVzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vd2Vic2l0ZS9zcmMvanMvbW9kdWxlcy91aWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnJlYWtwb2ludHNcIiIsIndlYnBhY2s6Ly8vLi93ZWJzaXRlL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnJvd3NlclwiIiwid2VicGFjazovLy8uL3dlYnNpdGUvc3JjL2pzL21vZHVsZXMvYnVkZ2V0Y29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJtZXRob2QiLCJub29wIiwibWV0aG9kcyIsImxlbmd0aCIsImNvbnNvbGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlRmlyc3RUYWIiLCJlIiwia2V5Q29kZSIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiYnJvd3NlciIsIm5hbWUiLCJicmVha3BvaW50cyIsInhsYXJnZSIsImxhcmdlIiwibWVkaXVtIiwic21hbGwiLCJ4c21hbGwiLCJtb2JpbGUiLCJvbiIsInJlbW92ZSIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJsb2ciLCJmb3JtYXROdW1iZXIiLCJudW1iZXIiLCJ0eXBlIiwibW9uZXkiLCJjYWxjIiwibnVtIiwiTWF0aCIsImFicyIsIm51bVNwbGl0IiwidG9GaXhlZCIsInNwbGl0IiwiaW50IiwiZGVjaW1hbCIsIk51bWJlciIsInN1YnN0ciIsImN1cnJlbmN5IiwiVUlDb250cm9sbGVyIiwiY29zdCIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJ0aGlzIiwiaW5wdXRUeXBlIiwiaW5wdXREZXNjIiwiaW5wdXRWYWwiLCJvYmoiLCJodG1sIiwiaXRlbSIsImxpc3QiLCJpZCIsImRlc2MiLCJ2YWwiLCJpbm5lckhUTUwiLCJkYXRhIiwiYnVkZ2V0IiwidG90YWxJbmMiLCJ0b3RhbHMiLCJpbmMiLCJ0b3RhbEV4cCIsImV4cCIsInRvdGFsU2F2Iiwic2F2IiwicGVyY2VudEV4cCIsInBlcmNlbnQiLCJwZXJjZW50U2F2IiwidHlwZXMiLCJwZXJjZW50YWdlIiwiZ2V0RGF0YSIsImJ1ZGdldENvbnRyb2xsZXIiLCJjYWxjdWxhdGVCdWRnZXQiLCJuZXdCdWRnZXQiLCJnZXRCdWRnZXQiLCJkaXNwbGF5QnVkZ2V0IiwiZGlzcGxheVBlcmNlbnRhZ2UiLCJwZXJjZW50YWdlcyIsImNiIiwiaSIsIm5vZGVMaXN0Rm9yRWFjaCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjdXJyZW50IiwiaW5kZXgiLCJjYWxjdWxhdGVQZXJjZW50YWdlcyIsImdldFBlcmNlbnRhZ2VzIiwiZGlzcGxheVBlcmNlbnRhZ2VzIiwiYnVkZ2V0RGF0ZSIsImRhdGUiLCJEYXRlIiwidGV4dENvbnRlbnQiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiY2hlY2siLCJmaWVsZHMiLCJvcHRpb25zIiwiQXJyYXkiLCJmcm9tIiwiYXR0cmlidXRlcyIsInNlbGVjdGVkSW5kZXgiLCJmb3JFYWNoIiwiZmllbGQiLCJ0b2dnbGUiLCJvcHRpb24iLCJzZWxlY3RlZCIsInJlbW92ZUF0dHJpYnV0ZSIsInRhcmdldCIsImNsb3Nlc3QiLCJwYXJlbnRFbGVtZW50Iiwic3BsaXRJRCIsIklEIiwicmVtb3ZlSXRlbSIsInVwZGF0ZUJ1ZGdldCIsInVwZGF0ZVBlcmNlbnRhZ2VzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm9ubG9hZCIsInNldFRpbWVvdXQiLCJidWRnZXRDdHJsIiwiZm9ybSIsIlVJQ3RybCIsImRpc3BsYXlEYXRlIiwiY2hhbmdlVHlwZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJnZXRJbnB1dCIsInJlc2V0IiwiaXNOYU4iLCJuZXdJdGVtIiwiYWRkSXRlbSIsInJlbmRlciIsImRlbGV0ZUl0ZW0iLCJCdWRnZXQiLCJjYWxjdWxhdGVUb3RhbHMiLCJ0b3RhbEluY29tZSIsInJvdW5kIiwiYWxsSXRlbXMiLCJzdW0iLCJjdXIiLCJwdXNoIiwiY2FsY1BlcmNlbnRhZ2UiLCJtYXAiLCJnZXRQZXJjZW50YWdlIiwiaW5kZXhPZiIsInNwbGljZSJdLCJtYXBwaW5ncyI6IjRJQUFBLGNBcUNFLElBL0JBLElBQUlBLEVBQ0VDLEVBQU8sYUFDUEMsRUFBVSxDQUNkLFNBQ0EsUUFDQSxRQUNBLFFBQ0EsTUFDQSxTQUNBLFFBQ0EsWUFDQSxRQUNBLGlCQUNBLFdBQ0EsT0FDQSxNQUNBLGVBQ0EsVUFDQSxhQUNBLFFBQ0EsT0FDQSxVQUNBLFdBQ0EsY0FDQSxZQUNBLFFBQ0EsUUFFSUMsRUFBV0QsRUFBWEMsT0FDQUMsRUFBV0MsT0FBT0QsUUFBVUMsT0FBT0QsU0FBVyxHQUU3Q0QsS0FJQUMsRUFITEosRUFBU0UsRUFBUUMsTUFJZkMsRUFBUUosR0FBVUMsR0FjeEJJLE9BQU9DLGlCQUFpQixXQVJELFNBQWpCQyxFQUFrQkMsR0FDSixJQUFkQSxFQUFFQyxVQUVKQyxTQUFTQyxLQUFLQyxVQUFVQyxJQUFJLG1CQUM1QlIsT0FBT1Msb0JBQW9CLFVBQVdQLE9BTzdCRyxTQUFTSyxjQUFjLFFBQy9CQyxhQUFhLGVBQWdCQyxFQUFRQyxNQUcxQyxJQUFNUCxFQUFPRCxTQUFTSyxjQUFjLFFBRXBDSSxFQUFZLENBQ1ZDLE9BQVEsQ0FBQyxTQUFVLFVBQ25CQyxNQUFPLENBQUMsUUFBUyxVQUNqQkMsT0FBUSxDQUFDLFFBQVMsU0FDbEJDLE1BQU8sQ0FBQyxRQUFTLFNBQ2pCQyxPQUFRLENBQUMsS0FBTSxXQUdiUCxFQUFRUSxPQUNWZCxFQUFLQyxVQUFVQyxJQUFJLGNBRW5CTSxFQUFZTyxHQUFHLFdBQVcsV0FDeEJmLEVBQUtDLFVBQVVlLE9BQU8sYUFDdEJoQixFQUFLQyxVQUFVQyxJQUFJLGlCQUVyQk0sRUFBWU8sR0FBRyxZQUFZLFdBQ3pCZixFQUFLQyxVQUFVZSxPQUFPLGNBQ3RCaEIsRUFBS0MsVUFBVUMsSUFBSSxpQkFNUSxjQUE3QlIsT0FBT3VCLFNB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QVFKLElBQUtOLEVBQUtVLFFBQVFGLEtBR25EUixHQUVUNEIscUJBQXNCLFNBQUMxRCxHQUNyQjhCLEVBQUtnRixTQUFTOUcsR0FBTTBFLFNBQVEsU0FBQ3NDLEdBQzNCQSxFQUFJRSxlQUFlcEYsRUFBS0csT0FBT0MsU0FHbkN5QixlQUFnQixTQUFDM0QsR0FJZixPQUhnQjhCLEVBQUtnRixTQUFTOUcsR0FBTW1ILEtBQUksU0FBQ0gsR0FDdkMsT0FBT0EsRUFBSUksb0JBSWYvQixXQUFZLFNBQUNyRixFQUFNMEIsR0FDakIsSUFHTStCLEVBSE0zQixFQUFLZ0YsU0FBUzlHLEdBQU1tSCxLQUFJLFNBQUMzRCxHQUNuQyxPQUFPQSxFQUFROUIsTUFFQzJGLFFBQVEzRixJQUVYLElBQVgrQixHQUNGM0IsRUFBS2dGLFNBQVM5RyxHQUFNc0gsT0FBTzdELEVBQU8sTUFNM0JaLGMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbXVsdGktYXNzaWduICovXG5cbi8vIEF2b2lkIGBjb25zb2xlYCBlcnJvcnMgaW4gYnJvd3NlcnMgdGhhdCBsYWNrIGEgY29uc29sZS5cbntcbiAgbGV0IG1ldGhvZFxuICBjb25zdCBub29wID0gKCkgPT4ge31cbiAgY29uc3QgbWV0aG9kcyA9IFtcbiAgICAnYXNzZXJ0JyxcbiAgICAnY2xlYXInLFxuICAgICdjb3VudCcsXG4gICAgJ2RlYnVnJyxcbiAgICAnZGlyJyxcbiAgICAnZGlyeG1sJyxcbiAgICAnZXJyb3InLFxuICAgICdleGNlcHRpb24nLFxuICAgICdncm91cCcsXG4gICAgJ2dyb3VwQ29sbGFwc2VkJyxcbiAgICAnZ3JvdXBFbmQnLFxuICAgICdpbmZvJyxcbiAgICAnbG9nJyxcbiAgICAnbWFya1RpbWVsaW5lJyxcbiAgICAncHJvZmlsZScsXG4gICAgJ3Byb2ZpbGVFbmQnLFxuICAgICd0YWJsZScsXG4gICAgJ3RpbWUnLFxuICAgICd0aW1lRW5kJyxcbiAgICAndGltZWxpbmUnLFxuICAgICd0aW1lbGluZUVuZCcsXG4gICAgJ3RpbWVTdGFtcCcsXG4gICAgJ3RyYWNlJyxcbiAgICAnd2FybicsXG4gIF1cbiAgbGV0IHsgbGVuZ3RoIH0gPSBtZXRob2RzXG4gIGNvbnN0IGNvbnNvbGUgPSAod2luZG93LmNvbnNvbGUgPSB3aW5kb3cuY29uc29sZSB8fCB7fSlcblxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBtZXRob2QgPSBtZXRob2RzW2xlbmd0aF1cblxuICAgIC8vIE9ubHkgc3R1YiB1bmRlZmluZWQgbWV0aG9kcy5cbiAgICBpZiAoIWNvbnNvbGVbbWV0aG9kXSkge1xuICAgICAgY29uc29sZVttZXRob2RdID0gbm9vcFxuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgdGFiYmluZyBpbmRpY2F0b3IgdG8gd2luZG93XG5jb25zdCBoYW5kbGVGaXJzdFRhYiA9IChlKSA9PiB7XG4gIGlmIChlLmtleUNvZGUgPT09IDkpIHtcbiAgICAvLyB0aGUgXCJJIGFtIGEga2V5Ym9hcmQgdXNlclwiIGtleVxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgndXNlci1pcy10YWJiaW5nJylcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUZpcnN0VGFiKVxuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlRmlyc3RUYWIpXG5cbi8vIEFkZCBhIGJyb3dlciBpbmRpY2F0b3IgdG8gdGhlIEhUTUwgZWxlbWVudC5cbmNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJylcbmh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJyb3dzZXInLCBicm93c2VyLm5hbWUpXG5cbi8vIERldGVjdCBpZiBtb2JpbGUgb3IgZGVza3RvcC5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcblxuYnJlYWtwb2ludHMoe1xuICB4bGFyZ2U6IFsnMTI4MXB4JywgJzE2ODBweCddLFxuICBsYXJnZTogWyc5ODFweCcsICcxMjgwcHgnXSxcbiAgbWVkaXVtOiBbJzczN3B4JywgJzk4MHB4J10sXG4gIHNtYWxsOiBbJzQ4MXB4JywgJzczNnB4J10sXG4gIHhzbWFsbDogW251bGwsICc0ODBweCddLFxufSlcblxuaWYgKGJyb3dzZXIubW9iaWxlKSB7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZCgnaXMtbW9iaWxlJylcbn0gZWxzZSB7XG4gIGJyZWFrcG9pbnRzLm9uKCc+bWVkaXVtJywgKCkgPT4ge1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbW9iaWxlJylcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2lzLWRlc2t0b3AnKVxuICB9KVxuICBicmVha3BvaW50cy5vbignPD1tZWRpdW0nLCAoKSA9PiB7XG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1kZXNrdG9wJylcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2lzLW1vYmlsZScpXG4gIH0pXG59XG5cbi8vIExvZyBpZiBydW5uaW5nIGluIGxvY2FsaG9zdCB3aGVuIGluIGRldmVsb3BtZW50IG1vZGUuXG5pZiAoXG4gIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgJiZcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuKSB7XG4gIGNvbnNvbGUubG9nKCdsb2NhbGhvc3QgZGV0ZWN0ZWQhJylcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBidWRnZXRDb250cm9sbGVyIGZyb20gJy4vYnVkZ2V0Y29udHJvbGxlcidcblxuY29uc3QgZm9ybWF0TnVtYmVyID0gKG51bWJlciwgdHlwZSwgbW9uZXkgPSBmYWxzZSwgY2FsYyA9IHRydWUpID0+IHtcbiAgLyoqXG4gICAqICsgb3IgLSBiZWZvcmUgdGhlIG51bWJlclxuICAgKiBleGFjdGx5IDIgZGVjaW1hbCBwb2ludHNcbiAgICogY29tbWEgc2VwZXJhdGluZyB0aGUgdGhvdXNhbmRzXG4gICAqXG4gICAqIDIzMTAuNDU2NyA9ICsgMiwzMTAuNDZcbiAgICovXG4gIGxldCBudW0gPSBNYXRoLmFicyhudW1iZXIpXG4gIG51bSA9IG51bS50b0ZpeGVkKDIpXG5cbiAgY29uc3QgbnVtU3BsaXQgPSBudW0uc3BsaXQoJy4nKSAvLyBub3cgYSBzdHJpbmcgYW5kIHdpbGwgc3BsaXQgdGhlIC4gdG8gcmVwbGFjZSB3aXRoIGEgLFxuICBsZXQgaW50ID0gbnVtU3BsaXRbMF1cbiAgbGV0IGRlY2ltYWwgPSBudW1TcGxpdFsxXVxuICBkZWNpbWFsID0gTnVtYmVyKGRlY2ltYWwpID4gMCA/IGAuJHtkZWNpbWFsfWAgOiAnJ1xuXG4gIGlmIChpbnQubGVuZ3RoID4gMykge1xuICAgIC8vIHN1YnN0ciBhbGxvd3MgZm9yIG9ubHkgcGFydCBvZiB0aGUgc3RyaW5nIHRvIGJlIHRha2VuXG4gICAgaW50ID0gYCR7aW50LnN1YnN0cigwLCBpbnQubGVuZ3RoIC0gMyl9LCR7aW50LnN1YnN0cihpbnQubGVuZ3RoIC0gMywgMyl9YCAvLyBpbnB1dCAyMzEwLCBvdXRwdXQgMiwzMTBcbiAgfVxuXG4gIGxldCBzaWduXG4gIGlmIChjYWxjKSB7XG4gICAgc2lnbiA9XG4gICAgICB0eXBlID09PSAnZXhwJ1xuICAgICAgICA/ICc8c3BhbiBjbGFzcz1cInNpZ25cIj4mIzQ1Ozwvc3Bhbj4gJ1xuICAgICAgICA6ICc8c3BhbiBjbGFzcz1cInNpZ25cIj4mIzQzOzwvc3Bhbj4gJ1xuICB9IGVsc2Uge1xuICAgIHNpZ24gPSAnJ1xuICB9XG4gIGNvbnN0IGN1cnJlbmN5ID0gbW9uZXkgPyAnPHNwYW4gY2xhc3M9XCJjdXJyZW5jeVwiPiZwb3VuZDs8L3NwYW4+JyA6ICcnXG5cbiAgLy8gUmV0dXJuIHRoZSBmb3JtYXR0ZWQgc3RyaW5nXG4gIHJldHVybiBgJHtzaWdufSR7Y3VycmVuY3l9JHtpbnR9JHtkZWNpbWFsfWBcbn1cblxuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWRlc3RydWN0dXJpbmcgKi9cbmNsYXNzIFVJQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKGNvc3QsIGRlc2NyaXB0aW9uLCB2YWx1ZSkge1xuICAgIHRoaXMuaW5wdXRUeXBlID0gY29zdFxuICAgIHRoaXMuaW5wdXREZXNjID0gZGVzY3JpcHRpb25cbiAgICB0aGlzLmlucHV0VmFsID0gdmFsdWVcbiAgfVxuXG4gIGdldElucHV0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0aGlzLmlucHV0VHlwZS52YWx1ZSwgLy8gV2lsbCBiZSBlaXRoZXIgaW5jIG9yIGV4cFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5wdXREZXNjLnZhbHVlLFxuICAgICAgdmFsdWU6IE51bWJlcih0aGlzLmlucHV0VmFsLnZhbHVlKSxcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICByZW5kZXIob2JqLCB0eXBlKSB7XG4gICAgY29uc3QgaXRlbSA9XG4gICAgICB0eXBlID09PSAnZXhwJyA/ICdleHBlbnNlcycgOiB0eXBlID09PSAnc2F2JyA/ICdzYXZpbmdzJyA6ICdpbmNvbWUnXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2l0ZW19X19saXN0YClcbiAgICBsZXQgaHRtbFxuXG4gICAgLy8gQ3JlYXRlIEhUTUwgc3RyaW5nIHdpdGggcGxhY2Vob2xkZXJcbiAgICBodG1sID0gYFxuICAgIDxsaSBjbGFzcz0nJHtpdGVtfV9faXRlbScgaWQ9JyR7dHlwZX0tJHtvYmouaWR9Jz5cbiAgICAgIDxkaXYgY2xhc3M9J2l0ZW0tZGVzYyc+PHA+JHtvYmouZGVzY308L3A+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz0naXRlbXNfX3ZhbHVlJz48cD4ke2Zvcm1hdE51bWJlcihcbiAgICAgICAgICBvYmoudmFsLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApfTwvcD48L2Rpdj5cbiAgICBgXG5cbiAgICBpZiAodHlwZSA9PT0gJ2V4cCcgfHwgdHlwZSA9PT0gJ3NhdicpIHtcbiAgICAgIGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJpdGVtc19fcGVyY2VudFwiPjxwPjAmIzM3OzwvcD48L2Rpdj4nXG4gICAgfVxuXG4gICAgaHRtbCArPSBgXG4gICAgICAgIDxidXR0b24gY2xhc3M9J2J0biBidG4tLWNsZWFyIGl0ZW1zX19kZWwnPlxuICAgICAgICAgIDxzdmcgaWQ9XCJkZWxldGVcIiBjbGFzcz1cImljb25cIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIi9hc3NldHMvaW1hZ2VzL2ljb25zLnN2ZyNpY29uLWRlbGV0ZVwiPjwvdXNlPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGk+XG4gICAgYFxuXG4gICAgLy8gSW5zZXJ0IEhUTUwgaW50byB0aGUgRE9NXG4gICAgbGlzdC5pbm5lckhUTUwgKz0gaHRtbFxuICB9XG5cbiAgZ2V0QnVkZ2V0KGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnVkZ2V0OiBkYXRhLmJ1ZGdldCxcbiAgICAgIHRvdGFsSW5jOiBkYXRhLnRvdGFscy5pbmMsXG4gICAgICB0b3RhbEV4cDogZGF0YS50b3RhbHMuZXhwLFxuICAgICAgdG90YWxTYXY6IGRhdGEudG90YWxzLnNhdixcbiAgICAgIHBlcmNlbnRFeHA6IGRhdGEucGVyY2VudC5leHAsXG4gICAgICBwZXJjZW50U2F2OiBkYXRhLnBlcmNlbnQuc2F2LFxuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlCdWRnZXQob2JqKSB7XG4gICAgY29uc3QgdHlwZSA9IG9iai5idWRnZXQgPiAwID8gJ2luYycgOiAnZXhwJ1xuICAgIGNvbnN0IHR5cGVzID0gdHlwZSA9PT0gJ2V4cCcgPyAnZXhwZW5zZXMnIDogJ2luY29tZSdcbiAgICBjb25zdCBidWRnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVkZ2V0X192YWx1ZScpXG4gICAgY29uc3QgaW5jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJ1ZGdldF9faW5jb21lIC5idWRnZXRfX2Ftb3VudGApXG4gICAgY29uc3QgZXhwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJ1ZGdldF9fZXhwZW5zZXMgLmJ1ZGdldF9fYW1vdW50YClcbiAgICBjb25zdCBzYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYnVkZ2V0X19zYXZpbmdzIC5idWRnZXRfX2Ftb3VudGApXG5cbiAgICBidWRnZXQuaW5uZXJIVE1MID0gZm9ybWF0TnVtYmVyKG9iai5idWRnZXQsIHR5cGUsIHRydWUpXG4gICAgaW5jLmlubmVySFRNTCA9IGZvcm1hdE51bWJlcihvYmoudG90YWxJbmMsICdpbmMnKVxuICAgIGV4cC5pbm5lckhUTUwgPSBmb3JtYXROdW1iZXIob2JqLnRvdGFsRXhwLCAnZXhwJylcbiAgICBzYXYuaW5uZXJIVE1MID0gZm9ybWF0TnVtYmVyKG9iai50b3RhbFNhdiwgJ2V4cCcpXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5sb2coYFRoZSAke3R5cGVzfSBpcy9hcmUgJHtvYmouYnVkZ2V0fWApXG4gICAgICBjb25zb2xlLmxvZyhpbmMsIGV4cClcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5UGVyY2VudGFnZShwZXJjZW50YWdlLCB0eXBlKSB7XG4gICAgY29uc3QgdHlwZXMgPSB0eXBlID09PSAnZXhwJyA/ICdleHBlbnNlcycgOiAnc2F2aW5ncydcbiAgICBjb25zdCBwZXJjZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJ1ZGdldF9fJHt0eXBlc30gLnBlcmNlbnRhZ2VgKVxuXG4gICAgaWYgKHBlcmNlbnRhZ2UgPiAwKSB7XG4gICAgICBwZXJjZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxuICAgICAgcGVyY2VudC5pbm5lckhUTUwgPSBgJHtwZXJjZW50YWdlfSYjMzc7YFxuICAgIH0gZWxzZSB7XG4gICAgICBwZXJjZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmxvZyhwZXJjZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUJ1ZGdldCgpIHtcbiAgICAvLyAxLiBDaGVjayBsb2NhbFN0b3JhZ2UgZm9yIHNhdmUgYnVkZ2V0IGRhdGEsIGVsc2UgZ2V0IG5ldyBkYXRhXG4gICAgY29uc3QgZ2V0RGF0YSA9IGJ1ZGdldENvbnRyb2xsZXIuY2FsY3VsYXRlQnVkZ2V0KClcblxuICAgIC8vIDIuIFJldHVybiB0aGUgYnVkZ2V0XG4gICAgY29uc3QgbmV3QnVkZ2V0ID0gdGhpcy5nZXRCdWRnZXQoZ2V0RGF0YSlcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmxvZyhuZXdCdWRnZXQpXG4gICAgfVxuXG4gICAgLy8gMy4gRGlzcGxheSB0aGUgdXBkYXRlZCBidWRnZXRcbiAgICB0aGlzLmRpc3BsYXlCdWRnZXQobmV3QnVkZ2V0KVxuXG4gICAgLy8gNC4gRGlzcGxheSB0aGUgbmV3IG92ZXJhbGwgYnVkZ2V0IHBlcmNlbnRhZ2VcbiAgICB0aGlzLmRpc3BsYXlQZXJjZW50YWdlKG5ld0J1ZGdldC5wZXJjZW50RXhwLCAnZXhwJylcbiAgICB0aGlzLmRpc3BsYXlQZXJjZW50YWdlKG5ld0J1ZGdldC5wZXJjZW50U2F2LCAnc2F2JylcbiAgfVxuXG4gIGRpc3BsYXlQZXJjZW50YWdlcyhwZXJjZW50YWdlcywgdHlwZSkge1xuICAgIGNvbnN0IHR5cGVzID0gdHlwZSA9PT0gJ2V4cCcgPyAnZXhwZW5zZXMnIDogJ3NhdmluZ3MnXG4gICAgY29uc3QgZmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7dHlwZXN9IC5pdGVtc19fcGVyY2VudGApXG4gICAgY29uc3Qgbm9kZUxpc3RGb3JFYWNoID0gKGxpc3QsIGNiKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2IobGlzdFtpXSwgaSlcbiAgICAgIH1cbiAgICB9XG4gICAgbm9kZUxpc3RGb3JFYWNoKGZpZWxkcywgKGN1cnJlbnQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAocGVyY2VudGFnZXNbaW5kZXhdID4gMCkge1xuICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxuICAgICAgICBjdXJyZW50LmlubmVySFRNTCA9IGAke3BlcmNlbnRhZ2VzW2luZGV4XX0mIzM3O2BcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXG4gICAgICAgIGN1cnJlbnQuaW5uZXJIVE1MID0gJzAmIzM3OydcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlUGVyY2VudGFnZXMoKSB7XG4gICAgLy8gMS4gQ2FsdWxhdGUgcGVyY2VudGFnZXNcbiAgICBidWRnZXRDb250cm9sbGVyLmNhbGN1bGF0ZVBlcmNlbnRhZ2VzKHRoaXMuaW5wdXRUeXBlLnZhbHVlKVxuXG4gICAgLy8gMi4gUmVhZCBwZXJjZW50YWdlcyBmcm9tIGJ1ZGdldCBjb250cm9sbGVyXG4gICAgY29uc3QgcGVyY2VudGFnZXMgPSBidWRnZXRDb250cm9sbGVyLmdldFBlcmNlbnRhZ2VzKHRoaXMuaW5wdXRUeXBlLnZhbHVlKVxuXG4gICAgLy8gMy4gVXBkYXRlIFVJIHRvIHNob3cgbmV3IHBlcmNlbnRhZ2VzXG4gICAgdGhpcy5kaXNwbGF5UGVyY2VudGFnZXMocGVyY2VudGFnZXMsIHRoaXMuaW5wdXRUeXBlLnZhbHVlKVxuICB9XG5cbiAgZGlzcGxheURhdGUoKSB7XG4gICAgY29uc3QgYnVkZ2V0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idWRnZXRfX2RhdGUnKVxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgbW9udGhzID0gW1xuICAgICAgJ0phbnVhcnknLFxuICAgICAgJ0ZlYnJ1YXJ5JyxcbiAgICAgICdNYXJjaCcsXG4gICAgICAnQXByaWwnLFxuICAgICAgJ01heScsXG4gICAgICAnSnVuZScsXG4gICAgICAnSnVseScsXG4gICAgICAnQXVndXN0JyxcbiAgICAgICdTZXBldGVtYmVyJyxcbiAgICAgICdPY3RvYmVyJyxcbiAgICAgICdOb3ZlbWJlcicsXG4gICAgICAnRGVjZW1iZXInLFxuICAgIF1cbiAgICBidWRnZXREYXRlLnRleHRDb250ZW50ID0gYCR7bW9udGhzW2RhdGUuZ2V0TW9udGgoKV19ICR7ZGF0ZS5nZXRGdWxsWWVhcigpfWBcbiAgfVxuXG4gIGNoYW5nZVR5cGUoKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuaW5wdXRUeXBlXG4gICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2snKVxuICAgIGNvbnN0IGZpZWxkcyA9IFt0eXBlLCB0aGlzLmlucHV0RGVzYywgdGhpcy5pbnB1dFZhbCwgY2hlY2tdXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5sb2coZmllbGRzKVxuICAgIH1cblxuICAgIHR5cGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBBcnJheS5mcm9tKHR5cGUub3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgdHlwZS5hdHRyaWJ1dGVzLFxuICAgICAgICAgIHR5cGUub3B0aW9ucyxcbiAgICAgICAgICB0eXBlLm9wdGlvbnMuc2VsZWN0ZWRJbmRleCxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIG9wdGlvbnNbMV1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgZmllbGQuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwJylcbiAgICAgIH0pXG4gICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHRpb24ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhvcHRpb24sIG9wdGlvbi52YWx1ZSwgaW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0oKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmNvbWUtZXhwZW5zZXMnKVxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSAnZGVsZXRlJykge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5jbG9zZXN0KCcuaXRlbXMnKS5wYXJlbnRFbGVtZW50XG4gICAgICAgIGNvbnN0IHNwbGl0SUQgPSB0YXJnZXQuaWQuc3BsaXQoJy0nKVxuICAgICAgICBjb25zdCB0eXBlID0gc3BsaXRJRFswXVxuICAgICAgICBjb25zdCBJRCA9IE51bWJlcihzcGxpdElEWzFdKVxuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQsIHRhcmdldCwgc3BsaXRJRCwgdHlwZSwgSUQpXG4gICAgICAgIH1cblxuICAgICAgICAvLyAxLiBEZWxldGUgdGhlIGl0ZW0gZnJvbSB0aGUgZGF0YSBzdHJ1Y3R1cmVcbiAgICAgICAgYnVkZ2V0Q29udHJvbGxlci5yZW1vdmVJdGVtKHR5cGUsIElEKVxuXG4gICAgICAgIC8vIDIuIERlbGV0ZSB0aGUgaXRlbSBmcm9tIHRoZSBVSVxuICAgICAgICB0YXJnZXQucmVtb3ZlKClcblxuICAgICAgICAvLyAzLiBVcGRhdGUgYW5kIHNob3cgdGhlIG5ldyBidWRnZXRcbiAgICAgICAgdGhpcy51cGRhdGVCdWRnZXQoKVxuXG4gICAgICAgIC8vIDQuIFVwZGF0ZSBhbmQgc2hvdyB0aGUgbmV3IHBlcmNlbnRhZ2VzXG4gICAgICAgIHRoaXMudXBkYXRlUGVyY2VudGFnZXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVUlDb250cm9sbGVyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGJyZWFrcG9pbnRzOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cblxuLy8gRXh0ZXJuYWxcbmltcG9ydCAnYWlyYm5iLWJyb3dzZXItc2hpbXMnXG5cbi8vIEludGVybmFsXG5pbXBvcnQgJy4vbW9kdWxlcy9oZWxwZXJzJ1xuaW1wb3J0IGJ1ZGdldENvbnRyb2xsZXIgZnJvbSAnLi9tb2R1bGVzL2J1ZGdldGNvbnRyb2xsZXInXG5pbXBvcnQgVUlDb250cm9sbGVyIGZyb20gJy4vbW9kdWxlcy91aWNvbnRyb2xsZXInXG5cbi8vIFJlbW92ZSBsb2FkaW5nIGNsYXNzIGZyb20gYm9keSBvbiB3aW5kb3cgbG9hZC5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jylcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpXG4gIH0sIDEwMClcbn1cblxuLy8gQ3JlYXRlIHRoZSBtYWluIGNvbnRyb2xsZXIgZm9yIHRoZSBhcHBcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuY29uc3QgY29udHJvbGxlciA9ICgoYnVkZ2V0Q3RybCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZF9fZm9ybScpXG4gIGNvbnN0IHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkX190eXBlJylcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRfX2Rlc2NyaXB0aW9uJylcbiAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkX192YWx1ZScpXG5cbiAgY29uc3QgVUlDdHJsID0gbmV3IFVJQ29udHJvbGxlcih0eXBlLCBkZXNjLCB2YWx1ZSlcblxuICAvLyBTaG9lIHRoZSBsYXRlc3QgZGF0ZVxuICBVSUN0cmwuZGlzcGxheURhdGUoKVxuXG4gIC8vIFRvZ2dsZSB0aGUgc3VibWl0IG5ldyBjb3N0IGZyb20gZWl0aGVyIGluY29tZSBvciBleHBlbnNlLlxuICBVSUN0cmwuY2hhbmdlVHlwZSgpXG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gR2V0IGZpbGVkIGlucHV0IGRhdGFcbiAgICBjb25zdCBpbnB1dCA9IFVJQ3RybC5nZXRJbnB1dCgpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKGlucHV0KVxuICAgICAgY29uc29sZS5sb2codHlwZW9mIGlucHV0LnZhbHVlKVxuICAgIH1cblxuICAgIC8vIENsZWFyIHRoZSBmb3JtIGZpZWxkc1xuICAgIGZvcm0ucmVzZXQoKVxuXG4gICAgLy8gT25seSBydW4gY2FsY3VsYXRpb25zIGlmIHZhbGlkIGlucHV0cyBhcmUgZW50ZXJlZFxuICAgIGlmIChpbnB1dC5kZXNjICE9PSAnJyAmJiAhaXNOYU4oaW5wdXQudmFsdWUpICYmIGlucHV0LnZhbHVlID4gMCkge1xuICAgICAgLy8gQWRkIHRoZSBpdGVtIHRvIHRoZSBidWRnZXRcbiAgICAgIGNvbnN0IG5ld0l0ZW0gPSBidWRnZXRDdHJsLmFkZEl0ZW0oXG4gICAgICAgIGlucHV0LnR5cGUsXG4gICAgICAgIGlucHV0LmRlc2NyaXB0aW9uLFxuICAgICAgICBpbnB1dC52YWx1ZVxuICAgICAgKVxuXG4gICAgICAvLyBDYWxjdWxhZSB0aGUgYnVkZ2V0IGFuZCB1cGRhdGUgdGhlIFVJXG4gICAgICBVSUN0cmwucmVuZGVyKG5ld0l0ZW0sIGlucHV0LnR5cGUpIC8vIEFkZCBpdGVtcyB0byBpbmNvbWUgb3IgZXhwZW5zZXMgbGlzdFxuICAgICAgVUlDdHJsLnVwZGF0ZUJ1ZGdldCgpIC8vIE91dHB1dCB0aGUgbmV3IGJ1ZGdldFxuICAgICAgVUlDdHJsLnVwZGF0ZVBlcmNlbnRhZ2VzKCkgLy8gT3V0cHV0IHRoZSBuZXcgcGVyY2VudGFnZXNcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Zvcm0gc3VibWl0dGVkIScpXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0l0ZW0pXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIC8vIERlbGV0ZSBhbiBhZGRlZCBpbmNvbWUgb3IgZXhwZW5zZVxuICBVSUN0cmwuZGVsZXRlSXRlbSgpXG59KShidWRnZXRDb250cm9sbGVyKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBicm93c2VyOyIsImNvbnN0IGJ1ZGdldENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjbGFzcyBCdWRnZXQge1xuICAgIGNvbnN0cnVjdG9yKGlkLCBkZXNjcmlwdGlvbiwgdmFsdWUpIHtcbiAgICAgIHRoaXMuaWQgPSBpZFxuICAgICAgdGhpcy5kZXNjID0gZGVzY3JpcHRpb25cbiAgICAgIHRoaXMudmFsID0gdmFsdWVcbiAgICAgIHRoaXMucGVyY2VudGFnZSA9IC0xXG4gICAgfVxuXG4gICAgY2FsY1BlcmNlbnRhZ2UodG90YWxJbmNvbWUpIHtcbiAgICAgIGlmICh0b3RhbEluY29tZSA+IDApIHtcbiAgICAgICAgdGhpcy5wZXJjZW50YWdlID0gTWF0aC5yb3VuZCgodGhpcy52YWwgLyB0b3RhbEluY29tZSkgKiAxMDApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBlcmNlbnRhZ2UgPSAtMVxuICAgICAgfVxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgYHRoaXMgdmFsdWUgaXMgJHt0eXBlb2YgdGhpcy52YWx9YCxcbiAgICAgICAgICBgdGhlIHRvdGFsSW5jb21lICR7dHlwZW9mIHRvdGFsSW5jb21lfWBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIGdldFBlcmNlbnRhZ2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wZXJjZW50YWdlXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGF0YSA9IHtcbiAgICBhbGxJdGVtczoge1xuICAgICAgZXhwOiBbXSxcbiAgICAgIGluYzogW10sXG4gICAgICBzYXY6IFtdLFxuICAgIH0sXG4gICAgdG90YWxzOiB7XG4gICAgICBleHA6IDAsXG4gICAgICBpbmM6IDAsXG4gICAgICBzYXY6IDAsXG4gICAgfSxcbiAgICBwZXJjZW50OiB7XG4gICAgICBleHA6IC0xLFxuICAgICAgc2F2OiAtMSxcbiAgICB9LFxuICAgIGJ1ZGdldDogMCxcbiAgfVxuXG4gIGNvbnN0IGNhbGN1bGF0ZVRvdGFscyA9ICh0eXBlKSA9PiB7XG4gICAgbGV0IHN1bSA9IDBcbiAgICBkYXRhLmFsbEl0ZW1zW3R5cGVdLmZvckVhY2goKGN1cikgPT4ge1xuICAgICAgc3VtICs9IGN1ci52YWxcbiAgICB9KVxuICAgIGRhdGEudG90YWxzW3R5cGVdID0gc3VtXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFkZEl0ZW06ICh0eXBlLCBkZXNjLCB2YWwpID0+IHtcbiAgICAgIC8vIENyZWF0ZSBuZXcgSURcbiAgICAgIGNvbnN0IElEID1cbiAgICAgICAgZGF0YS5hbGxJdGVtc1t0eXBlXS5sZW5ndGggPiAwXG4gICAgICAgICAgPyBkYXRhLmFsbEl0ZW1zW3R5cGVdW2RhdGEuYWxsSXRlbXNbdHlwZV0ubGVuZ3RoIC0gMV0uaWQgKyAxXG4gICAgICAgICAgOiAwXG5cbiAgICAgIC8vIFNldCBuZXcgaXRlbSB0byB1c2Ugb2JqZWN0XG4gICAgICBjb25zdCBuZXdJdGVtID0gbmV3IEJ1ZGdldChJRCwgZGVzYywgdmFsKVxuXG4gICAgICAvLyBQdXNoIGl0IGludG8gZGF0YSBzdHJ1Y3R1cmVcbiAgICAgIGRhdGEuYWxsSXRlbXNbdHlwZV0ucHVzaChuZXdJdGVtKVxuXG4gICAgICAvLyBjcmVhdGUgbmV3IGl0ZW1cbiAgICAgIHJldHVybiBuZXdJdGVtXG4gICAgfSxcbiAgICBjYWxjdWxhdGVCdWRnZXQ6ICgpID0+IHtcbiAgICAgIC8vIDEuIENhbGN1bGF0ZSB0aGUgYnVkZ2V0XG4gICAgICBjYWxjdWxhdGVUb3RhbHMoJ2V4cCcpXG4gICAgICBjYWxjdWxhdGVUb3RhbHMoJ2luYycpXG4gICAgICBjYWxjdWxhdGVUb3RhbHMoJ3NhdicpXG5cbiAgICAgIC8vIDIuIENhbGN1bGF0ZSB0aGUgYnVkZ2V0OiBpbmNvbWUgLSBleHBlbnNlc1xuICAgICAgZGF0YS5idWRnZXQgPSBkYXRhLnRvdGFscy5pbmMgLSAoZGF0YS50b3RhbHMuZXhwICsgZGF0YS50b3RhbHMuc2F2KVxuXG4gICAgICAvLyAzLiBDYWxjdWxhdGUgdGhlIHBlcmNlbnRhZ2Ugb2YgaW5jb21lIHRoYXQgd2Ugc3BlbnRcbiAgICAgIGlmIChkYXRhLnRvdGFscy5pbmMgPiAwKSB7XG4gICAgICAgIGRhdGEucGVyY2VudC5leHAgPSBNYXRoLnJvdW5kKChkYXRhLnRvdGFscy5leHAgLyBkYXRhLnRvdGFscy5pbmMpICogMTAwKVxuICAgICAgICBkYXRhLnBlcmNlbnQuc2F2ID0gTWF0aC5yb3VuZCgoZGF0YS50b3RhbHMuc2F2IC8gZGF0YS50b3RhbHMuaW5jKSAqIDEwMClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEucGVyY2VudC5leHAgPSAtMVxuICAgICAgICBkYXRhLnBlcmNlbnQuc2F2ID0gLTFcbiAgICAgIH1cblxuICAgICAgLy8gMy4gUmV0dXJuIHRoZSBidWRnZXRcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEudG90YWxzLmV4cCwgZGF0YS50b3RhbHMuaW5jKVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmJ1ZGdldCwgZGF0YS5wZXJjZW50LmV4cCwgZGF0YS5wZXJjZW50LnNhdilcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9LFxuICAgIGNhbGN1bGF0ZVBlcmNlbnRhZ2VzOiAodHlwZSkgPT4ge1xuICAgICAgZGF0YS5hbGxJdGVtc1t0eXBlXS5mb3JFYWNoKChjdXIpID0+IHtcbiAgICAgICAgY3VyLmNhbGNQZXJjZW50YWdlKGRhdGEudG90YWxzLmluYylcbiAgICAgIH0pXG4gICAgfSxcbiAgICBnZXRQZXJjZW50YWdlczogKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IGFsbFBlcmMgPSBkYXRhLmFsbEl0ZW1zW3R5cGVdLm1hcCgoY3VyKSA9PiB7XG4gICAgICAgIHJldHVybiBjdXIuZ2V0UGVyY2VudGFnZSgpXG4gICAgICB9KVxuICAgICAgcmV0dXJuIGFsbFBlcmNcbiAgICB9LFxuICAgIHJlbW92ZUl0ZW06ICh0eXBlLCBpZCkgPT4ge1xuICAgICAgY29uc3QgaWRzID0gZGF0YS5hbGxJdGVtc1t0eXBlXS5tYXAoKGN1cnJlbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQuaWRcbiAgICAgIH0pXG4gICAgICBjb25zdCBpbmRleCA9IGlkcy5pbmRleE9mKGlkKVxuXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIGRhdGEuYWxsSXRlbXNbdHlwZV0uc3BsaWNlKGluZGV4LCAxKVxuICAgICAgfVxuICAgIH0sXG4gIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgYnVkZ2V0Q29udHJvbGxlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==