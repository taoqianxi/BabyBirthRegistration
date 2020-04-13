/**

 @Name锛歭ayuiAdmin iframe鐗堟牳蹇冩ā鍧�
 @Author锛氳搐蹇�
 @Site锛歨ttp://www.layui.com/admin/
 @License锛歀PPL

 */

layui.define('view', function(exports){
    var $ = layui.jquery
        ,laytpl = layui.laytpl
        ,element = layui.element
        ,setter = layui.setter
        ,view = layui.view
        ,device = layui.device()

        ,$win = $(window), $body = $('body')
        ,container = $('#'+ setter.container)

        ,SHOW = 'layui-show', HIDE = 'layui-hide', THIS = 'layui-this', DISABLED = 'layui-disabled', TEMP = 'template'
        ,APP_BODY = '#LAY_app_body', APP_FLEXIBLE = 'LAY_app_flexible'
        ,FILTER_TAB_TBAS = 'layadmin-layout-tabs'
        ,APP_SPREAD_SM = 'layadmin-side-spread-sm', TABS_BODY = 'layadmin-tabsbody-item'
        ,ICON_SHRINK = 'layui-icon-shrink-right', ICON_SPREAD = 'layui-icon-spread-left'
        ,SIDE_SHRINK = 'layadmin-side-shrink', SIDE_MENU = 'LAY-system-side-menu'

        //閫氱敤鏂规硶
        ,admin = {
            v: '1.2.1 std'

            //鏁版嵁鐨勫紓姝ヨ姹�
            ,req: view.req

            //娓呴櫎鏈湴 token锛屽苟璺宠浆鍒扮櫥鍏ラ〉
            ,exit: view.exit

            //xss 杞箟
            ,escape: function(html){
                return String(html || '').replace(/&(?!#?[a-zA-Z0-9]+;)/g, '&amp;')
                    .replace(/</g, '&lt;').replace(/>/g, '&gt;')
                    .replace(/'/g, '&#39;').replace(/"/g, '&quot;');
            }

            //浜嬩欢鐩戝惉
            ,on: function(events, callback){
                return layui.onevent.call(this, setter.MOD_NAME, events, callback);
            }

            //鍙戦€侀獙璇佺爜
            ,sendAuthCode: function(options){
                options = $.extend({
                    seconds: 60
                    ,elemPhone: '#LAY_phone'
                    ,elemVercode: '#LAY_vercode'
                }, options);

                var seconds = options.seconds
                    ,btn = $(options.elem)
                    ,token = null
                    ,timer, countDown = function(loop){
                    seconds--;
                    if(seconds < 0){
                        btn.removeClass(DISABLED).html('鑾峰彇楠岃瘉鐮�');
                        seconds = options.seconds;
                        clearInterval(timer);
                    } else {
                        btn.addClass(DISABLED).html(seconds + '绉掑悗閲嶈幏');
                    }

                    if(!loop){
                        timer = setInterval(function(){
                            countDown(true);
                        }, 1000);
                    }
                };

                options.elemPhone = $(options.elemPhone);
                options.elemVercode = $(options.elemVercode);

                btn.on('click', function(){
                    var elemPhone = options.elemPhone
                        ,value = elemPhone.val();

                    if(seconds !== options.seconds || $(this).hasClass(DISABLED)) return;

                    if(!/^1\d{10}$/.test(value)){
                        elemPhone.focus();
                        return layer.msg('璇疯緭鍏ユ纭殑鎵嬫満鍙�')
                    };

                    if(typeof options.ajax === 'object'){
                        var success = options.ajax.success;
                        delete options.ajax.success;
                    }

                    admin.req($.extend(true, {
                        url: '/auth/code'
                        ,type: 'get'
                        ,data: {
                            phone: value
                        }
                        ,success: function(res){
                            layer.msg('楠岃瘉鐮佸凡鍙戦€佽嚦浣犵殑鎵嬫満锛岃娉ㄦ剰鏌ユ敹', {
                                icon: 1
                                ,shade: 0
                            });
                            options.elemVercode.focus();
                            countDown();
                            success && success(res);
                        }
                    }, options.ajax));
                });
            }

            //灞忓箷绫诲瀷
            ,screen: function(){
                var width = $win.width()
                if(width > 1200){
                    return 3; //澶у睆骞�
                } else if(width > 992){
                    return 2; //涓睆骞�
                } else if(width > 768){
                    return 1; //灏忓睆骞�
                } else {
                    return 0; //瓒呭皬灞忓箷
                }
            }

            //渚ц竟浼哥缉
            ,sideFlexible: function(status){
                var app = container
                    ,iconElem =  $('#'+ APP_FLEXIBLE)
                    ,screen = admin.screen();

                //璁剧疆鐘舵€侊紝PC锛氶粯璁ゅ睍寮€銆佺Щ鍔細榛樿鏀剁缉
                if(status === 'spread'){
                    //鍒囨崲鍒板睍寮€鐘舵€佺殑 icon锛岀澶达細鈫�
                    iconElem.removeClass(ICON_SPREAD).addClass(ICON_SHRINK);

                    //绉诲姩锛氫粠宸﹀埌鍙充綅绉伙紱PC锛氭竻闄ゅ浣欓€夋嫨鍣ㄦ仮澶嶉粯璁�
                    if(screen < 2){
                        app.addClass(APP_SPREAD_SM);
                    } else {
                        app.removeClass(APP_SPREAD_SM);
                    }

                    app.removeClass(SIDE_SHRINK)
                } else {
                    //鍒囨崲鍒版悳绱㈢姸鎬佺殑 icon锛岀澶达細鈫�
                    iconElem.removeClass(ICON_SHRINK).addClass(ICON_SPREAD);

                    //绉诲姩锛氭竻闄ゅ浣欓€夋嫨鍣ㄦ仮澶嶉粯璁わ紱PC锛氫粠鍙冲線宸︽敹缂�
                    if(screen < 2){
                        app.removeClass(SIDE_SHRINK);
                    } else {
                        app.addClass(SIDE_SHRINK);
                    }

                    app.removeClass(APP_SPREAD_SM)
                }

                layui.event.call(this, setter.MOD_NAME, 'side({*})', {
                    status: status
                });
            }

            //寮瑰嚭闈㈡澘
            ,popup: view.popup

            //鍙充晶闈㈡澘
            ,popupRight: function(options){
                //layer.close(admin.popup.index);
                return admin.popup.index = layer.open($.extend({
                    type: 1
                    ,id: 'LAY_adminPopupR'
                    ,anim: -1
                    ,title: false
                    ,closeBtn: false
                    ,offset: 'r'
                    ,shade: 0.1
                    ,shadeClose: true
                    ,skin: 'layui-anim layui-anim-rl layui-layer-adminRight'
                    ,area: '300px'
                }, options));
            }

            //涓婚璁剧疆
            ,theme: function(options){
                var theme = setter.theme
                    ,local = layui.data(setter.tableName)
                    ,id = 'LAY_layadmin_theme'
                    ,style = document.createElement('style')
                    ,styleText = laytpl([
                    //涓婚鑹�
                    '.layui-side-menu,'
                    ,'.layadmin-pagetabs .layui-tab-title li:after,'
                    ,'.layadmin-pagetabs .layui-tab-title li.layui-this:after,'
                    ,'.layui-layer-admin .layui-layer-title,'
                    ,'.layadmin-side-shrink .layui-side-menu .layui-nav>.layui-nav-item>.layui-nav-child'
                    ,'{background-color:{{d.color.main}} !important;}'

                    //閫変腑鑹�
                    ,'.layui-nav-tree .layui-this,'
                    ,'.layui-nav-tree .layui-this>a,'
                    ,'.layui-nav-tree .layui-nav-child dd.layui-this,'
                    ,'.layui-nav-tree .layui-nav-child dd.layui-this a'
                    ,'{background-color:{{d.color.selected}} !important;}'

                    //logo
                    ,'.layui-layout-admin .layui-logo{background-color:{{d.color.logo || d.color.main}} !important;}'

                    //澶撮儴鑹�
                    ,'{{# if(d.color.header){ }}'
                    ,'.layui-layout-admin .layui-header{background-color:{{ d.color.header }};}'
                    ,'.layui-layout-admin .layui-header a,'
                    ,'.layui-layout-admin .layui-header a cite{color: #f8f8f8;}'
                    ,'.layui-layout-admin .layui-header a:hover{color: #fff;}'
                    ,'.layui-layout-admin .layui-header .layui-nav .layui-nav-more{border-top-color: #fbfbfb;}'
                    ,'.layui-layout-admin .layui-header .layui-nav .layui-nav-mored{border-color: transparent; border-bottom-color: #fbfbfb;}'
                    ,'.layui-layout-admin .layui-header .layui-nav .layui-this:after, .layui-layout-admin .layui-header .layui-nav-bar{background-color: #fff; background-color: rgba(255,255,255,.5);}'
                    ,'.layadmin-pagetabs .layui-tab-title li:after{display: none;}'
                    ,'{{# } }}'
                ].join('')).render(options = $.extend({}, local.theme, options))
                    ,styleElem = document.getElementById(id);

                //娣诲姞涓婚鏍峰紡
                if('styleSheet' in style){
                    style.setAttribute('type', 'text/css');
                    style.styleSheet.cssText = styleText;
                } else {
                    style.innerHTML = styleText;
                }
                style.id = id;

                styleElem && $body[0].removeChild(styleElem);
                $body[0].appendChild(style);
                $body.attr('layadmin-themealias', options.color.alias);

                //鏈湴瀛樺偍璁板綍
                local.theme = local.theme || {};
                layui.each(options, function(key, value){
                    local.theme[key] = value;
                });
                layui.data(setter.tableName, {
                    key: 'theme'
                    ,value: local.theme
                });
            }

            //鍒濆鍖栦富棰�
            ,initTheme: function(index){
                var theme = setter.theme;
                index = index || 0;
                if(theme.color[index]){
                    theme.color[index].index = index;
                    admin.theme({
                        color: theme.color[index]
                    });
                }
            }

            //璁板綍鏈€杩戜竴娆＄偣鍑荤殑椤甸潰鏍囩鏁版嵁
            ,tabsPage: {}

            //鑾峰彇椤甸潰鏍囩涓讳綋鍏冪礌
            ,tabsBody: function(index){
                return $(APP_BODY).find('.'+ TABS_BODY).eq(index || 0);
            }

            //鍒囨崲椤甸潰鏍囩涓讳綋
            ,tabsBodyChange: function(index, options){
                options = options || {};

                admin.tabsBody(index).addClass(SHOW).siblings().removeClass(SHOW);
                events.rollPage('auto', index);

                //鎵ц {setter.MOD_NAME}.tabsPage 涓嬬殑浜嬩欢
                layui.event.call(this, setter.MOD_NAME, 'tabsPage({*})', {
                    url: options.url
                    ,text: options.text
                });
            }

            //resize浜嬩欢绠＄悊
            ,resize: function(fn){
                var router = layui.router()
                    ,key = router.path.join('-');

                if(admin.resizeFn[key]){
                    $win.off('resize', admin.resizeFn[key]);
                    delete admin.resizeFn[key];
                }

                if(fn === 'off') return; //濡傛灉鏄竻闄� resize 浜嬩欢锛屽垯缁堟寰€涓嬫墽琛�

                fn(), admin.resizeFn[key] = fn;
                $win.on('resize', admin.resizeFn[key]);
            }
            ,resizeFn: {}
            ,runResize: function(){
                var router = layui.router()
                    ,key = router.path.join('-');
                admin.resizeFn[key] && admin.resizeFn[key]();
            }
            ,delResize: function(){
                this.resize('off');
            }

            //鍏抽棴褰撳墠 pageTabs
            ,closeThisTabs: function(){
                if(!admin.tabsPage.index) return;
                $(TABS_HEADER).eq(admin.tabsPage.index).find('.layui-tab-close').trigger('click');
            }

            //鍏ㄥ睆
            ,fullScreen: function(){
                var ele = document.documentElement
                    ,reqFullScreen = ele.requestFullScreen || ele.webkitRequestFullScreen
                    || ele.mozRequestFullScreen || ele.msRequestFullscreen;
                if(typeof reqFullScreen !== 'undefined' && reqFullScreen) {
                    reqFullScreen.call(ele);
                };
            }

            //閫€鍑哄叏灞�
            ,exitScreen: function(){
                var ele = document.documentElement
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }

            //鈥︹€�
        };

    //浜嬩欢
    var events = admin.events = {
        //浼哥缉
        flexible: function(othis){
            var iconElem = othis.find('#'+ APP_FLEXIBLE)
                ,isSpread = iconElem.hasClass(ICON_SPREAD);
            admin.sideFlexible(isSpread ? 'spread' : null);
        }

        //鍒锋柊
        ,refresh: function(){
            var ELEM_IFRAME = '.layadmin-iframe'
                ,length = $('.'+ TABS_BODY).length;

            if(admin.tabsPage.index >= length){
                admin.tabsPage.index = length - 1;
            }

            var iframe = admin.tabsBody(admin.tabsPage.index).find(ELEM_IFRAME);
            iframe[0].contentWindow.location.reload(true);
        }

        //杈撳叆妗嗘悳绱�
        ,serach: function(othis){
            othis.off('keypress').on('keypress',function(e){
                if(!this.value.replace(/\s/g, '')) return;
                //鍥炶溅璺宠浆
                if(e.keyCode === 13){
                    var href = othis.attr('lay-action')
                        ,text = othis.attr('lay-text') || '鎼滅储';

                    href = href + this.value;
                    text = text + ' <span style="color: #FF5722;">'+ admin.escape(this.value) +'</span>';

                    //鎵撳紑鏍囩椤�
                    layui.index.openTabsPage(href, text);

                    //濡傛灉鎼滅储鍏抽敭璇嶅凡缁忔墦寮€锛屽垯鍒锋柊椤甸潰鍗冲彲
                    events.serach.keys || (events.serach.keys = {});
                    events.serach.keys[admin.tabsPage.index] = this.value;
                    if(this.value === events.serach.keys[admin.tabsPage.index]){
                        events.refresh(othis);
                    }

                    //娓呯┖杈撳叆妗�
                    this.value = '';
                }
            });
        }

        //鐐瑰嚮娑堟伅
        ,message: function(othis){
            othis.find('.layui-badge-dot').remove();
        }

        //寮瑰嚭涓婚闈㈡澘
        ,theme: function(){
            admin.popupRight({
                id: 'LAY_adminPopupTheme'
                ,success: function(){
                    view(this.id).render('system/theme')
                }
            });
        }

        //渚跨
        ,note: function(othis){
            var mobile = admin.screen() < 2
                ,note = layui.data(setter.tableName).note;

            events.note.index = admin.popup({
                title: '渚跨'
                ,shade: 0
                ,offset: [
                    '41px'
                    ,(mobile ? null : (othis.offset().left - 250) + 'px')
                ]
                ,anim: -1
                ,id: 'LAY_adminNote'
                ,skin: 'layadmin-note layui-anim layui-anim-upbit'
                ,content: '<textarea placeholder="鍐呭"></textarea>'
                ,resize: false
                ,success: function(layero, index){
                    var textarea = layero.find('textarea')
                        ,value = note === undefined ? '渚跨涓殑鍐呭浼氬瓨鍌ㄥ湪鏈湴锛岃繖鏍峰嵆渚夸綘鍏虫帀浜嗘祻瑙堝櫒锛屽湪涓嬫鎵撳紑鏃讹紝渚濈劧浼氳鍙栧埌涓婁竴娆＄殑璁板綍銆傛槸涓潪甯稿皬宸у疄鐢ㄧ殑鏈湴澶囧繕褰�' : note;

                    textarea.val(value).focus().on('keyup', function(){
                        layui.data(setter.tableName, {
                            key: 'note'
                            ,value: this.value
                        });
                    });
                }
            })
        }

        //鍏ㄥ睆
        ,fullscreen: function(othis){
            var SCREEN_FULL = 'layui-icon-screen-full'
                ,SCREEN_REST = 'layui-icon-screen-restore'
                ,iconElem = othis.children("i");

            if(iconElem.hasClass(SCREEN_FULL)){
                admin.fullScreen();
                iconElem.addClass(SCREEN_REST).removeClass(SCREEN_FULL);
            } else {
                admin.exitScreen();
                iconElem.addClass(SCREEN_FULL).removeClass(SCREEN_REST);
            }
        }

        //寮瑰嚭鍏充簬闈㈡澘
        ,about: function(){
            admin.popupRight({
                id: 'LAY_adminPopupAbout'
                ,success: function(){
                    view(this.id).render('system/about');
                }
            });
        }

        //寮瑰嚭鏇村闈㈡澘
        ,more: function(){
            admin.popupRight({
                id: 'LAY_adminPopupMore'
                ,success: function(){
                    view(this.id).render('system/more');
                }
            });
        }

        //杩斿洖涓婁竴椤�
        ,back: function(){
            history.back();
        }

        //涓婚璁剧疆
        ,setTheme: function(othis){
            var index = othis.data('index')
                ,nextIndex = othis.siblings('.layui-this').data('index');

            if(othis.hasClass(THIS)) return;

            othis.addClass(THIS).siblings('.layui-this').removeClass(THIS);
            admin.initTheme(index);
        }

        //宸﹀彸婊氬姩椤甸潰鏍囩
        ,rollPage: function(type, index){
            var tabsHeader = $('#LAY_app_tabsheader')
                ,liItem = tabsHeader.children('li')
                ,scrollWidth = tabsHeader.prop('scrollWidth')
                ,outerWidth = tabsHeader.outerWidth()
                ,tabsLeft = parseFloat(tabsHeader.css('left'));

            //鍙冲乏寰€鍙�
            if(type === 'left'){
                if(!tabsLeft && tabsLeft <=0) return;

                //褰撳墠鐨刲eft鍑忓幓鍙瀹藉害锛岀敤浜庝笌涓婁竴杞殑椤垫爣姣旇緝
                var  prefLeft = -tabsLeft - outerWidth;

                liItem.each(function(index, item){
                    var li = $(item)
                        ,left = li.position().left;

                    if(left >= prefLeft){
                        tabsHeader.css('left', -left);
                        return false;
                    }
                });
            } else if(type === 'auto'){ //鑷姩婊氬姩
                (function(){
                    var thisLi = liItem.eq(index), thisLeft;

                    if(!thisLi[0]) return;
                    thisLeft = thisLi.position().left;

                    //褰撶洰鏍囨爣绛惧湪鍙鍖哄煙宸︿晶鏃�
                    if(thisLeft < -tabsLeft){
                        return tabsHeader.css('left', -thisLeft);
                    }

                    //褰撶洰鏍囨爣绛惧湪鍙鍖哄煙鍙充晶鏃�
                    if(thisLeft + thisLi.outerWidth() >= outerWidth - tabsLeft){
                        var subLeft = thisLeft + thisLi.outerWidth() - (outerWidth - tabsLeft);
                        liItem.each(function(i, item){
                            var li = $(item)
                                ,left = li.position().left;

                            //浠庡綋鍓嶅彲瑙嗗尯鍩熺殑鏈€宸︾浜屼釜鑺傜偣閬嶅巻锛屽鏋滃噺鍘绘渶宸﹁妭鐐圭殑宸� > 鐩爣鍦ㄥ彸渚т笉鍙鐨勫搴︼紝鍒欏皢璇ヨ妭鐐规斁缃彲瑙嗗尯鍩熸渶宸�
                            if(left + tabsLeft > 0){
                                if(left - tabsLeft > subLeft){
                                    tabsHeader.css('left', -left);
                                    return false;
                                }
                            }
                        });
                    }
                }());
            } else {
                //榛樿鍚戝乏婊氬姩
                liItem.each(function(i, item){
                    var li = $(item)
                        ,left = li.position().left;

                    if(left + li.outerWidth() >= outerWidth - tabsLeft){
                        tabsHeader.css('left', -left);
                        return false;
                    }
                });
            }
        }

        //鍚戝彸婊氬姩椤甸潰鏍囩
        ,leftPage: function(){
            events.rollPage('left');
        }

        //鍚戝乏婊氬姩椤甸潰鏍囩
        ,rightPage: function(){
            events.rollPage();
        }

        //鍏抽棴褰撳墠鏍囩椤�
        ,closeThisTabs: function(){
            var topAdmin = parent === self ? admin : parent.layui.admin;
            topAdmin.closeThisTabs();
        }

        //鍏抽棴鍏跺畠鏍囩椤�
        ,closeOtherTabs: function(type){
            var TABS_REMOVE = 'LAY-system-pagetabs-remove';
            if(type === 'all'){
                $(TABS_HEADER+ ':gt(0)').remove();
                $(APP_BODY).find('.'+ TABS_BODY+ ':gt(0)').remove();

                $(TABS_HEADER).eq(0).trigger('click');
            } else {
                $(TABS_HEADER).each(function(index, item){
                    if(index && index != admin.tabsPage.index){
                        $(item).addClass(TABS_REMOVE);
                        admin.tabsBody(index).addClass(TABS_REMOVE);
                    }
                });
                $('.'+ TABS_REMOVE).remove();
            }
        }

        //鍏抽棴鍏ㄩ儴鏍囩椤�
        ,closeAllTabs: function(){
            events.closeOtherTabs('all');
            //location.hash = '';
        }

        //閬僵
        ,shade: function(){
            admin.sideFlexible();
        }

        //鍛煎嚭IM 绀轰緥
        ,im: function(){
            admin.popup({
                id: 'LAY-popup-layim-demo' //瀹氫箟鍞竴ID锛岄槻姝㈤噸澶嶅脊鍑�
                ,shade: 0
                ,area: ['800px', '300px']
                ,title: '闈㈡澘澶栫殑鎿嶄綔绀轰緥'
                ,offset: 'lb'
                ,success: function(){
                    //灏� views 鐩綍涓嬬殑鏌愯鍥炬枃浠跺唴瀹规覆鏌撶粰璇ラ潰鏉�
                    layui.view(this.id).render('layim/demo').then(function(){
                        layui.use('im');
                    });
                }
            })
        }
    };

    //鍒濆
    !function(){
        //涓婚鍒濆鍖栵紝鏈湴涓婚璁板綍浼樺厛锛屽叾娆′负 initColorIndex
        var local = layui.data(setter.tableName);
        if(local.theme){
            admin.theme(local.theme);
        } else if(setter.theme){
            admin.initTheme(setter.theme.initColorIndex);
        }

        //甯歌鐗堥粯璁ゅ紑鍚鏍囩椤�
        if(!('pageTabs' in layui.setter)) layui.setter.pageTabs = true;

        //涓嶅紑鍚〉闈㈡爣绛炬椂
        if(!setter.pageTabs){
            $('#LAY_app_tabs').addClass(HIDE);
            container.addClass('layadmin-tabspage-none');
        }

        //浣庣増鏈琁E鎻愮ず
        if(device.ie && device.ie < 10){
            view.error('IE'+ device.ie + '涓嬭闂彲鑳戒笉浣筹紝鎺ㄨ崘浣跨敤锛欳hrome / Firefox / Edge 绛夐珮绾ф祻瑙堝櫒', {
                offset: 'auto'
                ,id: 'LAY_errorIE'
            });
        }

    }();

    //admin.prevRouter = {}; //涓婁竴涓矾鐢�

    //鐩戝惉 tab 缁勪欢鍒囨崲锛屽悓姝� index
    element.on('tab('+ FILTER_TAB_TBAS +')', function(data){
        admin.tabsPage.index = data.index;
    });

    //鐩戝惉閫夐」鍗″垏鎹紝鏀瑰彉鑿滃崟鐘舵€�
    admin.on('tabsPage(setMenustatus)', function(router){
        var pathURL = router.url, getData = function(item){
                return {
                    list: item.children('.layui-nav-child')
                    ,a: item.children('*[lay-href]')
                }
            }
            ,sideMenu = $('#'+ SIDE_MENU)
            ,SIDE_NAV_ITEMD = 'layui-nav-itemed'

            //鎹曡幏瀵瑰簲鑿滃崟
            ,matchMenu = function(list){
                list.each(function(index1, item1){
                    var othis1 = $(item1)
                        ,data1 = getData(othis1)
                        ,listChildren1 = data1.list.children('dd')
                        ,matched1 = pathURL === data1.a.attr('lay-href');

                    listChildren1.each(function(index2, item2){
                        var othis2 = $(item2)
                            ,data2 = getData(othis2)
                            ,listChildren2 = data2.list.children('dd')
                            ,matched2 = pathURL === data2.a.attr('lay-href');

                        listChildren2.each(function(index3, item3){
                            var othis3 = $(item3)
                                ,data3 = getData(othis3)
                                ,matched3 = pathURL === data3.a.attr('lay-href');

                            if(matched3){
                                var selected = data3.list[0] ? SIDE_NAV_ITEMD : THIS;
                                othis3.addClass(selected).siblings().removeClass(selected); //鏍囪閫夋嫨鍣�
                                return false;
                            }

                        });

                        if(matched2){
                            var selected = data2.list[0] ? SIDE_NAV_ITEMD : THIS;
                            othis2.addClass(selected).siblings().removeClass(selected); //鏍囪閫夋嫨鍣�
                            return false
                        }

                    });

                    if(matched1){
                        var selected = data1.list[0] ? SIDE_NAV_ITEMD : THIS;
                        othis1.addClass(selected).siblings().removeClass(selected); //鏍囪閫夋嫨鍣�
                        return false;
                    }

                });
            }

        //閲嶇疆鐘舵€�
        sideMenu.find('.'+ THIS).removeClass(THIS);

        //绉诲姩绔偣鍑昏彍鍗曟椂鑷姩鏀剁缉
        if(admin.screen() < 2) admin.sideFlexible();

        //寮€濮嬫崟鑾�
        matchMenu(sideMenu.children('li'));
    });

    //鐩戝惉渚ц竟瀵艰埅鐐瑰嚮浜嬩欢
    element.on('nav(layadmin-system-side-menu)', function(elem){
        if(elem.siblings('.layui-nav-child')[0] && container.hasClass(SIDE_SHRINK)){
            admin.sideFlexible('spread');
            layer.close(elem.data('index'));
        };
        admin.tabsPage.type = 'nav';
    });

    //鐩戝惉閫夐」鍗＄殑鏇村鎿嶄綔
    element.on('nav(layadmin-pagetabs-nav)', function(elem){
        var dd = elem.parent();
        dd.removeClass(THIS);
        dd.parent().removeClass(SHOW);
    });

    //鍚屾璺敱
    var setThisRouter = function(othis){
        var layid = othis.attr('lay-id')
            ,attr = othis.attr('lay-attr')
            ,index = othis.index();

        admin.tabsBodyChange(index, {
            url: attr
        });
        //location.hash = layid === setter.entry ? '/' : attr;
    }
        ,TABS_HEADER = '#LAY_app_tabsheader>li';

    //鏍囩椤垫爣棰樼偣鍑�
    $body.on('click', TABS_HEADER, function(){
        var othis = $(this)
            ,index = othis.index();

        admin.tabsPage.type = 'tab';
        admin.tabsPage.index = index;

        setThisRouter(othis);
    });

    //鐩戝惉 tabspage 鍒犻櫎
    element.on('tabDelete('+ FILTER_TAB_TBAS +')', function(obj){
        var othis = $(TABS_HEADER+ '.layui-this');

        obj.index && admin.tabsBody(obj.index).remove();
        setThisRouter(othis);

        //绉婚櫎resize浜嬩欢
        admin.delResize();
    });

    //椤甸潰璺宠浆
    $body.on('click', '*[lay-href]', function(){
        var othis = $(this)
            ,href = othis.attr('lay-href')
            ,text = othis.attr('lay-text')
            ,router = layui.router();

        admin.tabsPage.elem = othis;
        //admin.prevRouter[router.path[0]] = router.href; //璁板綍涓婁竴娆″悇鑿滃崟鐨勮矾鐢变俊鎭�

        //鎵ц璺宠浆
        var topLayui = parent === self ? layui : top.layui;
        topLayui.index.openTabsPage(href, text || othis.text());
    });

    //鐐瑰嚮浜嬩欢
    $body.on('click', '*[layadmin-event]', function(){
        var othis = $(this)
            ,attrEvent = othis.attr('layadmin-event');
        events[attrEvent] && events[attrEvent].call(this, othis);
    });

    //tips
    $body.on('mouseenter', '*[lay-tips]', function(){
        var othis = $(this);

        if(othis.parent().hasClass('layui-nav-item') && !container.hasClass(SIDE_SHRINK)) return;

        var tips = othis.attr('lay-tips')
            ,offset = othis.attr('lay-offset')
            ,direction = othis.attr('lay-direction')
            ,index = layer.tips(tips, this, {
            tips: direction || 1
            ,time: -1
            ,success: function(layero, index){
                if(offset){
                    layero.css('margin-left', offset + 'px');
                }
            }
        });
        othis.data('index', index);
    }).on('mouseleave', '*[lay-tips]', function(){
        layer.close($(this).data('index'));
    });

    //绐楀彛resize浜嬩欢
    var resizeSystem = layui.data.resizeSystem = function(){
        //layer.close(events.note.index);
        layer.closeAll('tips');

        if(!resizeSystem.lock){
            setTimeout(function(){
                admin.sideFlexible(admin.screen() < 2 ? '' : 'spread');
                delete resizeSystem.lock;
            }, 100);
        }

        resizeSystem.lock = true;
    }
    $win.on('resize', layui.data.resizeSystem);

    //鎺ュ彛杈撳嚭
    exports('admin', admin);
});