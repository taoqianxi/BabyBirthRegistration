/**

 @Name锛歭ayuiAdmin iframe鐗堜富鍏ュ彛
 @Author锛氳搐蹇�
 @Site锛歨ttp://www.layui.com/admin/
 @License锛歀PPL

 */

layui.extend({
    setter: 'config' //閰嶇疆妯″潡
    , admin: 'lib/admin' //鏍稿績妯″潡
    , view: 'lib/view' //瑙嗗浘娓叉煋妯″潡,
}).define(['setter','table','admin'], function (exports) {
    var setter = layui.setter
        , element = layui.element
        , admin = layui.admin
        , tabsPage = admin.tabsPage
        , view = layui.view

        //鎵撳紑鏍囩椤�
        , openTabsPage = function (url, text) {
            //閬嶅巻椤电閫夐」鍗�
            var matchTo
                , tabs = $('#LAY_app_tabsheader>li')
                , path = url.replace(/(^http(s*):)|(\?[\s\S]*$)/g, '');

            tabs.each(function (index) {
                var li = $(this) , layid = li.attr('lay-id');
                if (layid === url) {
                    matchTo = true;
                    tabsPage.index = index;
                }
            });

            text = text || '鏂版爣绛鹃〉';

            if (setter.pageTabs) {
                //濡傛灉鏈湪閫夐」鍗′腑鍖归厤鍒帮紝鍒欒拷鍔犻€夐」鍗�
                if (!matchTo) {
                    $(APP_BODY).append([
                        '<div class="layadmin-tabsbody-item layui-show">'
                        , '<iframe src="' + url + '" frameborder="0" class="layadmin-iframe"></iframe>'
                        , '</div>'
                    ].join(''));
                    tabsPage.index = tabs.length;
                    element.tabAdd(FILTER_TAB_TBAS, {
                        title: '<span>' + text + '</span>'
                        , id: url
                        , attr: path
                    });
                }
            } else {
                var iframe = admin.tabsBody(admin.tabsPage.index).find('.layadmin-iframe');
                iframe[0].contentWindow.location.href = url;
            }

            //瀹氫綅褰撳墠tabs
            element.tabChange(FILTER_TAB_TBAS, url);
            admin.tabsBodyChange(tabsPage.index, {
                url: url
                , text: text
            });
        }

        , APP_BODY = '#LAY_app_body', FILTER_TAB_TBAS = 'layadmin-layout-tabs'
        , $ = layui.$, $win = $(window);

    //鍒濆
    if (admin.screen() < 2) admin.sideFlexible();

    //灏嗘ā鍧楁牴璺緞璁剧疆涓� controller 鐩綍
    layui.config({
        base: setter.base + 'modules/'
    });

    //鎵╁睍 lib 鐩綍涓嬬殑鍏跺畠妯″潡
    layui.each(setter.extend, function (index, item) {
        var mods = {};
        mods[item] = '{/}' + setter.base + 'lib/extend/' + item;
        layui.extend(mods);
    });

    view().autoRender();

    /**
     * 婧愮爜淇敼寮€濮嬮儴鍒� 2018-11-26
     */
    layui.table.set({contentType: 'application/json', page: {theme: '#1E9FFF'},loading:true})

    /**
     * 婧愮爜淇敼缁撴潫閮ㄥ垎 2018-11-26
     */

    //鍔犺浇鍏叡妯″潡
    layui.use('common');

    var tokenName = layui.setter.request.tokenName;
    if (tokenName) {
        var tableName = layui.setter.tableName
        if (layui.data(tableName)[tokenName]) {
            var value = layui.data(tableName)[tokenName];

            var href = self.location.href
            var lastIndexOf = href.lastIndexOf('/')
            var page = href.substring(lastIndexOf + 1, href.length)
            if (page.indexOf('?') != -1) {
                page = page.substring(0, page.indexOf('?'))
            }
            value.page = page
            layui.data(layui.setter.tableName, {key: layui.setter.request.tokenName, value: value});
        }
    }
    // console.log("login info :",layui.data(tableName)[tokenName])

    //瀵瑰杈撳嚭
    exports('index', {
        openTabsPage: openTabsPage
    });
});