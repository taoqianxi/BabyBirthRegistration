/**

 @Name：layuiAdmin iframe版主入口
 @Author：贤心
 @Site：http://www.layui.com/admin/
 @License：LPPL

 */

layui.extend({
    setter: 'config' //配置模块
    , admin: 'lib/admin' //核心模块
    , view: 'lib/view' //视图渲染模块,
}).define(['setter','table','admin'], function (exports) {
    var setter = layui.setter
        , element = layui.element
        , admin = layui.admin
        , tabsPage = admin.tabsPage
        , view = layui.view

        //打开标签页
        , openTabsPage = function (url, text) {
            //遍历页签选项卡
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

            text = text || '新标签页';

            if (setter.pageTabs) {
                //如果未在选项卡中匹配到，则追加选项卡
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

            //定位当前tabs
            element.tabChange(FILTER_TAB_TBAS, url);
            admin.tabsBodyChange(tabsPage.index, {
                url: url
                , text: text
            });
        }

        , APP_BODY = '#LAY_app_body', FILTER_TAB_TBAS = 'layadmin-layout-tabs'
        , $ = layui.$, $win = $(window);

    //初始
    if (admin.screen() < 2) admin.sideFlexible();

    //将模块根路径设置为 controller 目录
    layui.config({
        base: setter.base + 'modules/'
    });

    //扩展 lib 目录下的其它模块
    layui.each(setter.extend, function (index, item) {
        var mods = {};
        mods[item] = '{/}' + setter.base + 'lib/extend/' + item;
        layui.extend(mods);
    });

    view().autoRender();

    /**
     * 源码修改开始部分 2018-11-26
     */
    layui.table.set({contentType: 'application/json', page: {theme: '#1E9FFF'},loading:true})

    /**
     * 源码修改结束部分 2018-11-26
     */

    //加载公共模块
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

    //对外输出
    exports('index', {
        openTabsPage: openTabsPage
    });
});
