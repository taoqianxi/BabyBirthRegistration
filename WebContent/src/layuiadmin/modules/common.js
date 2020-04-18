/**

 @Name：layuiAdmin 公共业务
 @Author：贤心
 @Site：http://www.layui.com/admin/
 @License：LPPL

 */

layui.define(['api'], function (exports) {
    var $ = layui.$
        , layer = layui.layer
        , laytpl = layui.laytpl
        , setter = layui.setter
        , view = layui.view
        , admin = layui.admin

    //公共业务的逻辑处理可以写在此处，切换任何页面都会执行
    //……
    $.ajaxSetup({
        beforeSend: function (a) {
            layer.load();
        },
        complete: function (xhr, status) {
            layer.closeAll('loading');
            parent.layer.closeAll('loading');
            if (xhr && xhr.status === 500) {
                var errorJSON = xhr.responseJSON || null;
                if (errorJSON && (errorJSON.code === '060010' || (errorJSON.code && errorJSON.code.startsWith("020000")))) {
                    layer.confirm('您还未进行登录，是否去登录？', function () {
                        layer.closeAll();
                        top.location.href = '../../pages/user/login.html';
                    })
                } else {
                    var tips = errorJSON.message ? errorJSON.message : "系统错误，请联系管理员"
                    if(!errorJSON.code && tips.indexOf('Exception')!=-1){
                        tips = "系统错误，请联系管理员";
                    }
                    var tip = '<h3>请求异常，请重试<br><br>错误信息：' + '<b style="color: red">' + tips + '</b></h3>'
                    view.error(tip);
                }
            }
        }
    });

    //退出
    admin.events.logout = function () {
        //执行退出接口
        admin.req({
            url: layui.setter.base + 'json/user/logout.js',
            type: 'post',
            data: {},
            done: function (res) { //这里要说明一下：done 是只有 response 的 code 正常才会执行。而 succese 则是只要 http 为 200 就会执行
                console.log("退出去", res)
                admin.exit(function () {
                    location.href = 'user/login.html';
                });
            }
        });

        //清除本地的token信息
        admin.exit(function () {
            location.href = 'user/login.html';
        });
    };

    //添加快捷菜单
    admin.events.addShortcut = function () {
        layer.open({
            type: 1,
            title: "菜单选择",
            area: ["400px", "70%"],
            content: '<ul id="menuTree" class="dtree" data-id="0"></ul>',
            btn: ['确认选择'],
            success: function (layero, index) {
                layui.admin.req({
                    url: layui.api.Index.listHomeShortcutMenu,
                    data: {},
                    success: function (res) {
                        layui.dtree.render({
                            obj: $(layero).find("#menuTree"),
                            checkbar: true,// 开启复选框
                            dataStyle: "layuiStyle",  //使用layui风格的数据格式
                            dataFormat: "list",  //配置data的风格为list
                            data: res.data
                        });
                    }
                });
            },
            yes: function (index, layero) {
                var params = layui.dtree.getCheckbarNodesParam("menuTree"); // 获取选中值
                if (params.length == 0) {
                    layer.msg("请至少选择一个节点", {icon: 2});
                    return;
                }
                var menuIds = []
                for (var key in params) {
                    var param = params[key];
                    menuIds.push(param.nodeId);
                }

                layui.admin.req({
                    url: layui.api.Index.addHomeShortcutMenu,
                    data: {menuIds: menuIds},
                    success: function (res) {
                        layer.msg('保存成功', {icon: 1})
                        layer.close(index)
                        initShortcut(initCarousel);
                    }
                });

            }
        });
    }
    //对外暴露的接口
    exports('common', {});
});
