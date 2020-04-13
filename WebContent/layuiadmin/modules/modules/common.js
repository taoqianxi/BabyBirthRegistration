/**

 @Name锛歭ayuiAdmin 鍏叡涓氬姟
 @Author锛氳搐蹇�
 @Site锛歨ttp://www.layui.com/admin/
 @License锛歀PPL

 */

layui.define(['api'], function (exports) {
    var $ = layui.$
        , layer = layui.layer
        , laytpl = layui.laytpl
        , setter = layui.setter
        , view = layui.view
        , admin = layui.admin

    //鍏叡涓氬姟鐨勯€昏緫澶勭悊鍙互鍐欏湪姝ゅ锛屽垏鎹换浣曢〉闈㈤兘浼氭墽琛�
    //鈥︹€�
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
                    layer.confirm('鎮ㄨ繕鏈繘琛岀櫥褰曪紝鏄惁鍘荤櫥褰曪紵', function () {
                        layer.closeAll();
                        top.location.href = '../../pages/home/login.html';
                    })
                } else {
                    var tips = errorJSON.message ? errorJSON.message : "绯荤粺閿欒锛岃鑱旂郴绠＄悊鍛�"
                    if(!errorJSON.code && tips.indexOf('Exception')!=-1){
                        tips = "绯荤粺閿欒锛岃鑱旂郴绠＄悊鍛�";
                    }
                    var tip = '<h3>璇锋眰寮傚父锛岃閲嶈瘯<br><br>閿欒淇℃伅锛�' + '<b style="color: red">' + tips + '</b></h3>'
                    view.error(tip);
                }
            }
        }
    });

    //閫€鍑�
    admin.events.logout = function () {
        //鎵ц閫€鍑烘帴鍙�
        admin.req({
            url: layui.setter.base + 'json/user/logout.js',
            type: 'post',
            data: {},
            done: function (res) { //杩欓噷瑕佽鏄庝竴涓嬶細done 鏄彧鏈� response 鐨� code 姝ｅ父鎵嶄細鎵ц銆傝€� succese 鍒欐槸鍙 http 涓� 200 灏变細鎵ц
                console.log("閫€鍑哄幓", res)
                admin.exit(function () {
                    location.href = 'home/login.html';
                });
            }
        });

        //娓呴櫎鏈湴鐨則oken淇℃伅
        admin.exit(function () {
            location.href = 'home/login.html';
        });
    };

    //娣诲姞蹇嵎鑿滃崟
    admin.events.addShortcut = function () {
        layer.open({
            type: 1,
            title: "鑿滃崟閫夋嫨",
            area: ["400px", "70%"],
            content: '<ul id="menuTree" class="dtree" data-id="0"></ul>',
            btn: ['纭閫夋嫨'],
            success: function (layero, index) {
                layui.admin.req({
                    url: layui.api.Index.listHomeShortcutMenu,
                    data: {},
                    success: function (res) {
                        layui.dtree.render({
                            obj: $(layero).find("#menuTree"),
                            checkbar: true,// 寮€鍚閫夋
                            dataStyle: "layuiStyle",  //浣跨敤layui椋庢牸鐨勬暟鎹牸寮�
                            dataFormat: "list",  //閰嶇疆data鐨勯鏍间负list
                            data: res.data
                        });
                    }
                });
            },
            yes: function (index, layero) {
                var params = layui.dtree.getCheckbarNodesParam("menuTree"); // 鑾峰彇閫変腑鍊�
                if (params.length == 0) {
                    layer.msg("璇疯嚦灏戦€夋嫨涓€涓妭鐐�", {icon: 2});
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
                        layer.msg('淇濆瓨鎴愬姛', {icon: 1})
                        layer.close(index)
                        initShortcut(initCarousel);
                    }
                });

            }
        });
    }
    //瀵瑰鏆撮湶鐨勬帴鍙�
    exports('common', {});
});