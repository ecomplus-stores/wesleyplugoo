(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{232:function(t,e,n){"use strict";n.r(e);n(41),n(5);var a=n(2),o=n(25),i=n(189);window._info=window._info||{};const s=[],l=[{endpoint:"list_payments"},{endpoint:"calculate_shipping"}];Object.keys(i.a).length&&l.push({endpoint:"apply_discount",reqOptions:{method:"post",data:{utm:i.a}}}),l.forEach((t=>{let{endpoint:e,reqOptions:n}=t;const i={};window._info[e]=i;const l=new Promise((t=>{Object(a.c)({url:"/".concat(e,".json"),...n,axiosConfig:{timeout:1e4}}).then((t=>{let{data:n}=t;const{result:a}=n;Array.isArray(a)&&a.forEach((t=>{let{error:n,response:a}=t;if(!n){let t,n;switch(e){case"calculate_shipping":t="free_shipping_from_value",n=a[t],"number"==typeof n&&(void 0===i[t]||n<i[t])&&(i[t]=n);break;case"list_payments":t="installments_option",n=a[t],n&&(!i[t]||n.monthly_interest<i[t].monthly_interest||n.max_number>i[t].max_number)&&(i[t]=n),t="discount_option",n=a[t],n&&(!i[t]||n.value>i[t].value)&&a.payment_gateways.forEach((e=>{let{discount:a}=e;a&&"freight"!==a.apply_at&&a.value===n.value&&(i[t]={apply_at:a.apply_at,...n})})),t="loyalty_points_programs",n=a[t],n&&(i[t]={...i[t],...n});break;default:t="available_extra_discount",n=a[t],n&&(!i[t]||n.value>i[t].value)&&(i[t]=n)}}})),o.a.emit("info:".concat(e),i)})).catch((t=>{console.error(t),o.a.emit("info:".concat(e),t)})).finally(t)}));s.push(l)})),Promise.all(s).then((()=>o.a.emit("info",window._info)))}}]);