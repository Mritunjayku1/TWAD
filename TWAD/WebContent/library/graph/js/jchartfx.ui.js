(function(g){g.widget("ui.chart",{options:{gallery:null},_create:function(){var a=Object.getPrototypeOf(this);this.chart=new cfx.Chart(!1);g.extend(this,this.chart);g.extend(a,Object.getPrototypeOf(this.chart));this._0Chart();this.sSW(!1);a=this.getData();a.setSeries(2);a.setPoints(9);this.create(this.element[0]);this.p_fs(this);for(var b in this.options)this._setOption(b,this.options[b]);this.setPalette(this.p_pcp());this.sSW(!0);this._ud(!1)},_setOption:function(a,b){switch(a){case "disabled":break;
case "dataValues":this.setDataSource(b);break;default:this._sOO(a,b,this)}g.Widget.prototype._setOption.apply(this,arguments)},destroy:function(){g.Widget.prototype.destroy.call(this)},p_fs:function(a){var b=this.m1;b.className="ui-widget";var c=this.p_gs(b,"fontFamily"),d="8pt",e=this.p_gs(b,"fontWeight");a.setFont(e+" "+d+" "+c);d=this.p_gs(b,"fontSize");if(void 0!=cfx.vector){e=new cfx.vector.VectorBorder;e.setTemplate('<T xmlns:x="a"><T.Resources><Th K="externalMargin">16</Th><String K="plotMargin">targetChart</String><Th K="internalRectMargin">2</Th><T K="internalRect"><B CR="6" F="{B F}" S="{B S}" CP="0.8" /></T><T x:Key="internal"><Line S="{B S}" X1="{B X1}" X2="{B X2}" Y1="{B Y1}" Y2="{B Y2}"/></T></T.Resources><B CR="10" F="{B F}" S="{B S}"><g M="4"><g.RD><RD H="Auto" MinHeight="42"/><RD H="*"/></g.RD><B CR="10" S="{Binding Class=ui-widget-header.borderTopColor}" CP="0.5"><B.F><ImageBrush Source="{Binding Class=ui-widget-header.backgroundImage}"/></B.F><TextBlock x:Name="cfxMainTitle" VA="Center" HA="Center"/></B><C x:Name="targetChart" g.R="1" M="0,4,0,0"/></g></B></T>');
a.setBorder(e);b.className="ui-widget-header";var e=this.p_gs(b,"fontWeight"),h=a.getTitles();if(0==h.getCount()){var f=new cfx.TitleDockable;f.setText("Chart Title");f.setFont(e+" "+d+" "+c);h.add(f)}}b.className="ui-widget-content ui-state-default";c=this.p_gs(b,"background");d=c.indexOf("ui-bg_");if(0<=d&&(d+=6,e=c.indexOf("_",d),0<=e)){b=-1;switch(c.substring(d,e)){case "dots-small":b=29;break;case "diagonals-thick":b=17;break;case "diagonals-small":b=2;break;case "fine-grain":b=24;break;case "diamond":b=
23}-1!=b&&(a=a.getAllSeries(),a.setFillMode(cfx.FillMode.Pattern),a.setPattern(b))}},p_gci:function(a,b){return 4*a+b},p_ipa:function(){var a=[];a.push(this.p_gci(3,1));a.push(this.p_gci(4,1));a.push(this.p_gci(2,2));a.push(this.p_gci(4,2));a.push(this.p_gci(5,1));a.push(this.p_gci(6,1));a.push(this.p_gci(0,3));a.push(this.p_gci(0,1));a.push(this.p_gci(1,3));a.push(this.p_gci(0,0));a.push(this.p_gci(1,2));a.push(this.p_gci(2,3));a.push(this.p_gci(1,0));a.push(this.p_gci(3,2));a.push(this.p_gci(3,
3));a.push(this.p_gci(2,0));a.push(this.p_gci(5,2));a.push(this.p_gci(4,3));a.push(this.p_gci(3,0));a.push(this.p_gci(6,2));a.push(this.p_gci(5,3));a.push(this.p_gci(4,0));a.push(this.p_gci(1,1));a.push(this.p_gci(6,3));a.push(this.p_gci(5,0));a.push(this.p_gci(2,1));a.push(this.p_gci(0,2));a.push(this.p_gci(6,0));return a},p_gs:function(a,b){return a.currentStyle?a.currentStyle[b]:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(a,"")[b]:a.style[b]},
p_acp:function(a,b){if(0!=a.length){var c=sfx.m.w(a);b.push(c.r);b.push(c.g);b.push(c.b)}},p_acep:function(a,b,c){this.p_acp(this.p_gs(a,b),c)},p_aicep:function(a,b,c){a=this.p_gs(a,b);b=a.indexOf("ui-icons_");if(0<=b){var b=b+9,d=a.indexOf("_",b);0<=d&&this.p_acp("#"+a.substring(b,d),c)}},p_pc:function(a,b,c,d){a.className=c;this.p_acep(a,"borderTopColor",d);this.p_acep(a,"backgroundColor",d);this.p_acep(a,"color",d);b.className="ui-icon";this.p_aicep(b,"backgroundImage",d)},p_gpc:function(a,b){var c=
3*a,d={};d.r=b[c++];d.g=b[c++];d.b=b[c++];return d},p_bc:function(a,b,c){var d={};d.r=a;d.g=b;d.b=c;return d},p_sc:function(a,b,c){var d=a.r,e=a.g,a=a.b,h=b.r,f=b.g,b=b.b;return Math.sqrt((h-d)*(h-d)+(f-e)*(f-e)+(b-a)*(b-a))<=c?!0:!1},p_ac:function(a,b){for(var c=b.length,d=0;d<c;d++)if(this.p_sc(b[d],a,60))return!0;return!1},p_ciu:function(a,b){for(var c=b.length,d=0;d<c;){if(b[d]==a||this.p_sc(b[d],a,40))return!0;d++}return!1},p_val:function(a){255<a?a=255:0>a&&(a=0);return a},p_ldc:function(a,
b){var c=this.p_val(a.r+b),d=this.p_val(a.g+b),e=this.p_val(a.b+b);return this.p_bc(c,d,e)},p_amc:function(a,b,c,d,e){for(var h=0,f,i=this.p_occ;16>a&&h<c.length;){f=this.p_ldc(c[h],b);if(!this.p_ac(f,e)&&!this.p_ciu(f,c)){var g=3*i;d[g++]=f.r;d[g++]=f.g;d[g++]=f.b;d.push(i);c.push(f);i++;a++}h++}this.p_occ=i;return a},p_ssc:function(a,b){for(var c=this.p_ipa(),d=[],e=0,h=c.length,f,g;e<h&&16>d.length;)f=c[e],g=this.p_gpc(f,b),!this.p_ac(g,a)&&!this.p_ciu(g,d)&&(b.push(f),d.push(g)),e++;c=d.length;
c=this.p_amc(c,100,d,b,a);c=this.p_amc(c,-100,d,b,a);c=this.p_amc(c,40,d,b,a);for(c=this.p_amc(c,-40,d,b,a);16>c;)b.push(0),c++},p_pcp:function(){var a=this.m1,b=this.m2,c=[];this.p_pc(a,b,"ui-widget-header",c);this.p_pc(a,b,"ui-widget-content",c);this.p_pc(a,b,"ui-state-default",c);this.p_pc(a,b,"ui-state-hover",c);this.p_pc(a,b,"ui-state-active",c);this.p_pc(a,b,"ui-state-highlight",c);this.p_pc(a,b,"ui-state-error",c);this.p_occ=a=c.length/3;for(b=0;b<3*(49-a);b++)c.push(0);c.push(1);c.push(46);
a=this.p_gpc(this.p_gci(2,1),c);b=[];b.push(a);b.push(this.p_bc(0,0,0));this.p_ssc(b,c);c.push(this.p_gci(1,1));c.push(this.p_gci(0,1));c.push(this.p_gci(2,1));c.push(this.p_gci(1,0));c.push(this.p_gci(2,0));c.push(this.p_gci(1,1));c.push(this.p_gci(2,2));c.push(this.p_gci(0,1));c.push(this.p_gci(1,2));c.push(this.p_gci(1,2));c.push(0);c.push(this.p_gci(0,2));c.push(255);c.push(this.p_gci(1,2));c.push(255);c.push(this.p_gci(1,1));c.push(this.p_gci(1,2));c.push(this.p_gci(0,1));c.push(this.p_gci(0,
2));c.push(this.p_gci(0,1));c.push(this.p_gci(0,2));c.push(this.p_gci(2,0));c.push(this.p_gci(1,1));for(b=0;5>b;b++)c.push(0);return c}})})(jQuery);
