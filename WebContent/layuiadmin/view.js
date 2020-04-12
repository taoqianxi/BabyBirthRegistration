/**

 @Name：layuiAdmin 视图模块
 @Author：贤心
 @Site：http://www.layui.com/admin/
 @License：LPPL

 */

layui.define(['laytpl', 'layer'], function (exports) {
    var $ = layui.jquery
        , laytpl = layui.laytpl
        , layer = layui.layer
        , setter = layui.setter
        , device = layui.device()
        , hint = layui.hint()

        //对外接口
        , view = function (id) {
            return new Class(id);
        }

        , SHOW = 'layui-show', LAY_BODY = 'LAY_app_body'

        //构造器
        , Class = function (id) {
            this.id = id;
            this.container = $('#' + (id || LAY_BODY));
        };

    //加载中
    view.loading = function (elem) {
        elem.append(
            this.elemLoad = $('<i class="layui-anim layui-anim-rotate layui-anim-loop layui-icon layui-icon-loading layadmin-loading"></i>')
        );
    };

    //移除加载
    view.removeLoad = function () {
        this.elemLoad && this.elemLoad.remove();
    };

    //清除 token，并跳转到登入页
    view.exit = function () {
        layer.msg("会话失效，请重新登入！",{time:1000});
        //清空本地记录的 token
        layui.data(setter.tableName, {
            key: setter.request.tokenName
            , remove: true
        });
        //跳转到登入页
        location.hash = '/user/login';
        location.reload();
    };

    //Ajax请求
    view.req = function (options) {
        var that = this
            , success = options.success
            , error = options.error
            , showProgress=options.showProgress===undefined?true:options.showProgress
            , request = setter.request
            , response = setter.response
            , debugexception=function (e) {
                return setter.debug
                    ? '<br>'+e.statusText : '';
            }
            , debug = function () {
                return setter.debug
                    ? '<br><cite>URL：</cite>' + options.url
                    : '';
            };
        if(showProgress){
            layer.load(2);
        }
        options.data = options.data || {};

        options.headers = options.headers || {};
        if (request.timeStamp) {
            var time = (new Date()).getTime();
            options.data[request.timeStamp] = request.timeStamp in options.headers
                ? options.headers[request.timeStamp] : time;
            options.headers[request.timeStamp] = request.timeStamp in options.headers
                ? options.headers[request.timeStamp] : time;

        }
        if (request.tokenName) {
            //自动给参数传入默认 token
            options.data[request.tokenName] = request.tokenName in options.data
                ? options.data[request.tokenName]
                : (layui.data(setter.tableName)[request.tokenName] || '');

            //自动给 Request Headers 传入 token
            options.headers[request.tokenName] = request.tokenName in options.headers
                ? options.headers[request.tokenName]
                : (layui.data(setter.tableName)[request.tokenName] || '');
        }
        delete options.success;
        delete options.error;

        return $.ajax($.extend({
            type: 'post'
            ,xhrFields: {
                withCredentials: true
            }
            , dataType: 'json'
            , success: function (res) {
                layer.closeAll('loading');
                var statusCode = response.statusCode;
                // console.log(res);
                //只有 response 的 code 一切正常才执行 done
                if (res[response.statusName] == statusCode.ok) {
                    typeof options.done === 'function' && options.done(res);
                }

                //登录状态失效，清除本地 access_token，并强制跳转到登入页
                else if (Number(res[response.statusName]) == statusCode.logout
                    ||Number(res[response.statusName]) ==statusCode.token_error) {
                    // layer.msg("登入失效，请重新登入！",{time:2000});
                    view.exit();
                }

                //其它异常
                else {
                    // var error = [
                    //     '<cite>Error：</cite> ' + (res[response.msgName] || '返回状态码异常')
                    //     , debug()
                    // ].join('');
                    var error = [
                        res[response.msgName]
                    ].join('');
                    view.error(error);
                }

                //只要 http 状态码正常，无论 response 的 code 是否正常都执行 success
                typeof success === 'function' && success(res);
            }
            , error: function (e, code) {
                layer.closeAll('loading');
                console.log("code:"+code);
                var error = [
                    '<cite>错误：</cite><br>请求异常，请重试'
                ].join('');
                view.error(error);

                typeof error === 'function' && error(res);
            }
        }, options));
    };
    //弹窗
    view.popup = function (options) {

        var success = options.success
            , skin = options.skin;

        delete options.success;
        delete options.skin;
        skin=(skin==null||skin===undefined)?'layui-layer-admin':options.skin;
        return layer.open($.extend({
            type: 1
            , title: '提示'
            , content: ''
            , id: 'LAY-system-view-popup'
            // , skin: 'layui-layer-admin' + (skin ? ' ' + skin : '')
            , skin: skin
            , shadeClose: true
            , closeBtn: false
            , success: function (layero, index) {
                var elemClose = $('<i class="layui-icon" close>&#x1006;</i>');
                layero.append(elemClose);
                elemClose.on('click', function () {
                    layer.close(index);
                });
                typeof success === 'function' && success.apply(this, arguments);
            }
        }, options))
    };

    //异常提示
    view.error = function (content, options) {
        var layId=layer.open({
            type: 1
            ,offset: 'auto'
            ,id: 'layerPop9009' //防止重复弹出
            ,content: '<div style="padding: 20px 20px;">'+ content +'</div>'
            ,btn: '知道了'
            ,btnAlign: 'c' //按钮居中
            ,shade: 0.2 //不显示遮罩
            ,yes: function(){
                layer.close(layId);
            }
        });
        // return view.popup($.extend({
        //     icon:7
        //     ,content: content
        //     , maxWidth: 300
        //     , area: ["200px","130px"]
        //     //,shade: 0.01
        //     , offset: 'auto'
        //     , anim: 0
        //     , id: 'LAY_adminError'
        // }, options))
    };


    //请求模板文件渲染
    Class.prototype.render = function (views, params) {
        var that = this, router = layui.router();
        views = setter.views + views + setter.engine;

        $('#' + LAY_BODY).children('.layadmin-loading').remove();
        view.loading(that.container); //loading

        //请求模板
        $.ajax({
            url: views
            , type: 'get'
            , dataType: 'html'
            , data: {
                v: layui.cache.version
            }
            , success: function (html) {
                html = '<div>' + html + '</div>';

                var elemTitle = $(html).find('title')
                    , title = elemTitle.text() || (html.match(/\<title\>([\s\S]*)\<\/title>/) || [])[1];

                var res = {
                    title: title
                    , body: html
                };

                elemTitle.remove();
                that.params = params || {}; //获取参数

                if (that.then) {
                    that.then(res);
                    delete that.then;
                }

                that.parse(html);
                view.removeLoad();

                if (that.done) {
                    that.done(res);
                    delete that.done;
                }

            }
            , error: function (e) {
                view.removeLoad();

                if (that.render.isError) {
                    return view.error('请求视图文件异常，状态：' + e.status);
                }
                ;

                if (e.status === 404) {
                    that.render('template/tips/404');
                } else {
                    that.render('template/tips/error');
                }

                that.render.isError = true;
            }
        });
        return that;
    };

    //解析模板
    Class.prototype.parse = function (html, refresh, callback) {
        var that = this
            , isScriptTpl = typeof html === 'object' //是否模板元素
            , elem = isScriptTpl ? html : $(html)
            , elemTemp = isScriptTpl ? html : elem.find('*[template]')
            , fn = function (options) {
            var tpl = laytpl(options.dataElem.html());

            options.dataElem.after(tpl.render($.extend({
                params: router.params
            }, options.res)));

            typeof callback === 'function' && callback();

            try {
                options.done && new Function('d', options.done)(options.res);
            } catch (e) {
                console.error(options.dataElem[0], '\n存在错误回调脚本\n\n', e)
            }
        }
            , router = layui.router();

        elem.find('title').remove();
        that.container[refresh ? 'after' : 'html'](elem.children());

        router.params = that.params || {};

        //遍历模板区块
        for (var i = elemTemp.length; i > 0; i--) {
            (function () {
                var dataElem = elemTemp.eq(i - 1)
                    , layDone = dataElem.attr('lay-done') || dataElem.attr('lay-then') //获取回调
                    , url = laytpl(dataElem.attr('lay-url') || '').render(router) //接口 url
                    , data = laytpl(dataElem.attr('lay-data') || '').render(router) //接口参数
                    , headers = laytpl(dataElem.attr('lay-headers') || '').render(router); //接口请求的头信息

                try {
                    data = new Function('return ' + data + ';')();
                } catch (e) {
                    hint.error('lay-data: ' + e.message);
                    data = {};
                }
                ;

                try {
                    headers = new Function('return ' + headers + ';')();
                } catch (e) {
                    hint.error('lay-headers: ' + e.message);
                    headers = headers || {}
                }
                ;
                // if (request.timeStamp) {
                //     var time = (new Date()).getTime();
                //     data[request.timeStamp] = request.timeStamp in options.headers
                //         ? options.headers[request.timeStamp] : time;
                //     headers[request.timeStamp] = request.timeStamp in options.headers
                //         ? options.headers[request.timeStamp] : time;
                //
                //     //sign
                //     var sign = getSign(options.data, setter.kAppKey, setter.kAppSecret);
                //     data[request.sign] = sign;
                // }
                // if (request.tokenName) {
                //     //自动给参数传入默认 token
                //     data[request.tokenName] = request.tokenName in options.data
                //         ? options.data[request.tokenName]
                //         : (layui.data(setter.tableName)[request.tokenName] || '');
                //
                //     //自动给 Request Headers 传入 token
                //     headers[request.tokenName] = request.tokenName in options.headers
                //         ? options.headers[request.tokenName]
                //         : (layui.data(setter.tableName)[request.tokenName] || '');
                // }
                if (url) {
                    view.req({
                        type: dataElem.attr('lay-type') || 'get'
                        , url: url
                        , data: data
                        , dataType: 'json'
                        , headers: headers
                        , success: function (res) {
                            fn({
                                dataElem: dataElem
                                , res: res
                                , done: layDone
                            });
                        }
                    });
                } else {
                    fn({
                        dataElem: dataElem
                        , done: layDone
                    });
                }
            }());
        }

        return that;
    };

    //直接渲染字符
    Class.prototype.send = function (views, data) {
        var tpl = laytpl(views || this.container.html()).render(data || {});
        this.container.html(tpl);
        return this;
    };

    //局部刷新模板
    Class.prototype.refresh = function (callback) {
        var that = this
            , next = that.container.next()
            , templateid = next.attr('lay-templateid');

        if (that.id != templateid) return that;

        that.parse(that.container, 'refresh', function () {
            that.container.siblings('[lay-templateid="' + that.id + '"]:last').remove();
            typeof callback === 'function' && callback();
        });

        return that;
    };

    //视图请求成功后的回调
    Class.prototype.then = function (callback) {
        this.then = callback;
        return this;
    };

    //视图渲染完毕后的回调
    Class.prototype.done = function (callback) {
        this.done = callback;
        return this;
    };

    //对外接口
    exports('view', view);
});