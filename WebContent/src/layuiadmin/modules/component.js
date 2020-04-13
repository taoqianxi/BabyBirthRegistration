layui.define(function (exports) {

    //初始化学科
    var initSubject = function (callback) {
        layui.admin.req({
            url: layui.api.SubjectService.listBasicSubject,
            data: {name:'',pagination: {pageNum: 1, pageSize: 20}},
            success: function (res) {
                if (res && res.data) {
                    var xx = '<select name="subjectName"  id = "subjectName" lay-filter="subjectName">' +
                        '<option value="">请选择</option>' +
                        '{{# layui.each(d, function(index, item){ }}' +
                        '<option value="{{item.id}}">{{item.name}}</option>' +
                        '{{# }); }}' +
                        '< /select>';

                    layui.laytpl(xx).render(res.data, function (html) {
                        var doc = document.getElementById('SUBJECTNAMEVIEW');
                        if (doc) {
                            doc.innerHTML = html;
                        }
                    });
                    layui.form.render();

                    if (callback) {
                        callback();
                    }
                }
            },
            error: function (error) {
                layui.view.error(error);
            }
        });
    }


    //初始化学科,开启多选
    var initSubjectMul = function (callback) {
        layui.admin.req({
            url: layui.api.SubjectService.listBasicSubject,
            data: {name:'',pagination: {pageNum: 1, pageSize: 20}},
            success: function (res) {
                if (res && res.data) {
                    var xx = '<select name="subjectName"  id = "subjectName" multiple lay-search lay-filter="subjectName">' +
                      '<option value="">请选择</option>' +
                      '{{# layui.each(d, function(index, item){ }}' +
                      '<option value="{{item.id}}">{{item.name}}</option>' +
                      '{{# }); }}' +
                      '< /select>';

                    layui.laytpl(xx).render(res.data, function (html) {
                        var doc = document.getElementById('SUBJECTNAMEVIEW');
                        if (doc) {
                            doc.innerHTML = html;
                        }
                    });
                    layui.form.render();

                    if (callback) {
                        callback();
                    }
                }
            },
            error: function (error) {
                layui.view.error(error);
            }
        });
    }

    //初始化类型
    var initCategory = function (callback) {
        layui.admin.req({
            url: layui.api.DictService.listDict,
            data: {typeCode: 'SHIFT_CATEGORY'},
            success: function (res) {
                var xx = '<select name="typeId" lay-filter="typeId">' +
                    '<option value="">请选择</option>' +
                    '{{# layui.each(d, function(index, item){ }}' +
                    '<option value="{{item.id}}">{{item.value}}</option>' +
                    '{{# }); }}' +
                    '< /select>';

                layui.laytpl(xx).render(res, function (html) {

                    var dom = document.getElementById('SHIFT_CATEGORY_VIEW')
                    if(dom){
                        dom.innerHTML = html;
                    }

                });
                layui.form.render();
                if (callback) {
                    callback();
                }
            },
            error: function (error) {
                layui.view.error(error);
            }
        });
    }

    //初始化科目
    var initShiftSubject = function (callback) {
        layui.admin.req({
            url: layui.api.DictService.listDict,
            data: {typeCode: 'SHIFT_SUBJECT'},
            success: function (res) {

                var xx = '<select name="subjectId" lay-filter="subjectId">\n' +
                    '<option value="">请选择</option>\n' +
                    '{{# layui.each(d, function(index, item){ }}\n' +
                    '<option value="{{item.id}}">{{item.value}}</option>\n' +
                    '{{# }); }}\n' +
                    '</select>';
                layui.laytpl(xx).render(res, function (html) {
                    var dom = document.getElementById('SHIFT_SUBJECT_VIEW')
                    if(dom){
                        dom.innerHTML = html;
                    }
                });
                layui.form.render();
                if (callback) {
                    callback();
                }
            },
            error: function (error) {
                layui.view.error(error);
            }
        });
    }


    //初始化课程编码
    var initShiftCode = function (callback) {
        layui.admin.req({
            url: layui.api.ShiftService.listShiftCode,
            data: {},
            success: function (res) {
                var xx = '<select name="shiftCode"  id = "shiftCode" lay-filter="shiftCode">' +
                    '<option value="">请选择</option>' +
                    '{{# layui.each(d, function(index, item){ }}' +
                    '<option value="{{item.code}}">{{item.code}}</option>' +
                    '{{# }); }}' +
                    '< /select>';
                layui.laytpl(xx).render(res, function (html) {
                    var doc = document.getElementById('SHIFTCODEVIEW');
                    if (doc) {
                        doc.innerHTML = html;
                    }
                });
                layui.form.render();
                if (callback) {
                    callback();
                }
            },
            error: function (error) {
                layui.view.error(error);
            }
        });
    }

    //
    var initShiftTerm = function (callback) {
        layui.admin.req({
            url: layui.api.DictService.listDict,
            data: {typeCode: 'SHIFT_TERM'},
            success: function (res) {

                var xx = '<select name="shiftTerm" lay-filter="shiftTerm">\n' +
                    '<option value="">请选择</option>\n' +
                    '{{# layui.each(d, function(index, item){ }}\n' +
                    '<option value="{{item.id}}">{{item.value}}</option>\n' +
                    '{{# }); }}\n' +
                    '</select>';
                layui.laytpl(xx).render(res, function (html) {
                    document.getElementById('SHIFT_TERM_VIEW').innerHTML = html;
                });
                layui.form.render();
                if (callback) {
                    callback();
                }
            },
            error: function (error) {
                layui.view.error(error);
            }
        });
    }


    var initJoinSubject = function (callback) {
        layui.admin.req({
            url: layui.api.SubjectService.listBasicSubject,
            data: { name: "", pagination: { pageNum: 1, pageSize: 20 } },
            success: function (res) {

                var xx = '<select name="shiftJoinSubject" lay-filter="shiftJoinSubject">\n' +
                    '<option value="">请选择</option>\n' +
                    '{{# layui.each(d, function(index, item){ }}\n' +
                    '<option value="{{item.id}}">{{item.name}}</option>\n' +
                    '{{# }); }}\n' +
                    '</select>';
                layui.laytpl(xx).render(res.data, function (html) {
                    document.getElementById('SHIFT_JOIN_SUBJECT_VIEW').innerHTML = html;
                });
                layui.form.render();
                if (callback) {
                    callback();
                }
            },
            error: function (error) {
                layui.view.error(error);
            }
        });
    };





    exports('component', {
        initJoinSubject:initJoinSubject,
        initCategory: initCategory,
        initSubject: initSubject,
        initShiftSubject: initShiftSubject,
        initShiftCode: initShiftCode,
        initShiftTerm: initShiftTerm,
        initSubjectMul: initSubjectMul
    })

});
