layui.define(['api'], function (exports) {
    var $ = layui.$;
    var handle = {
        initButton: function () {
            //控制菜单操作权限
            layui.admin.req({
                url: layui.api.DictService.listDict,
                data: {typeCode: 'SHIFT_CATEGORY'},
                success: function (res) {

                    var arr = ['lay5c6d04723075d93fce3238f7']

                    for (var handle in arr) {
                        console.log("加载完成", arr[handle])
                        $("div>button,div>a").each(function (index, item) {
                            console.log(item)
                            if (item.getAttribute("handleId") === arr[handle]) {
                                $(item).removeClass('layui-hide').addClass("layui-anim layui-anim-scale")
                            }
                        })
                    }
                },
                error: function (error) {
                    layui.view.error(error);
                }
            });
        }
    }
    exports('handle', handle)
})
