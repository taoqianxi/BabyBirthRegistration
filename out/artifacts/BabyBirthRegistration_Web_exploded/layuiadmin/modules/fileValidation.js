layui.define(function (exports) {
    exports('fileValidation', {
        resourcesValidate: function resourcesValidate(resourceType, fileName,that) {
            if (resourceType === 'TEACHER_PLAN') {
                return this.acceptFile('image', [fileName])
            } else if (resourceType === 'CARTOON') {
                return this.acceptFile('video', [fileName])
            } else if (resourceType === 'COURSEWARE') {
                return this.acceptFile('pptx', [fileName])
            } else if (resourceType === 'VIDEO') {
                return this.acceptFile('video', [fileName])
            } else if (resourceType === 'IMG') {
                return this.acceptFile('image', [fileName])
            } else if (resourceType === 'VOICE') {
                return this.acceptFile('audio', [fileName])
            }
            else if (resourceType === 'VOICE_EXAMPLE') {
                var fileType = that.elem[0].getAttribute('fileType')
                if(fileType==='img'){
                    return this.acceptFile('image', [fileName])
                }else if(fileType==='audio'){
                    return this.acceptFile('audio', [fileName])
                }
            }
        },
        acceptFile: function acceptFile(accept, fileName) {
            switch (accept) {
                case 'file': //一般文件
                    if (!RegExp('\\w\\.(' + exts + ')$', 'i').test(escape(fileName))) {
                        layer.msg('选择的文件中包含不支持的格式', {icon: 2, shift: 2});
                        return false;
                    }
                    break;
                case 'video': //视频文件
                    if (!RegExp('\\w\\.(' + ('avi|mp4|wma|rmvb|rm|flash|3gp|flv') + ')$', 'i').test(escape(fileName))) {
                        layer.msg('选择的视频中包含不支持的格式', {icon: 2, shift: 2});
                        return false;
                    } else {
                        return true;
                    }
                    break;
                case 'docx':
                    if (!RegExp('\\w\\.(' + ('docx') + ')$', 'i').test(escape(fileName))) {
                        layer.msg('请选择文件格式为doc或者docx的文件', {icon: 2, shift: 2});
                        return false;
                    } else {
                        return true
                    }
                    break;
                case 'pptx':
                    if (!RegExp('\\w\\.(' + ('pptx') + ')$', 'i').test(escape(fileName))) {
                        layer.msg('请选择文件格式为ppt或者pptx的文件', {icon: 2, shift: 2});
                        return false;
                    } else {
                        return true
                    }
                    break;
                case 'audio': //音频文件
                    if (!RegExp('\\w\\.(' + ('mp3|wav|mid') + ')$', 'i').test(escape(fileName))) {
                        layer.msg('选择的音频中包含不支持的格式', {icon: 2, shift: 2});
                        return false;
                    } else {
                        return true
                    }
                    break;
                default: //图片文件
                    var check = false;
                    layui.each(fileName, function (i, item) {
                        if (!RegExp('\\w\\.(' + ('jpg|png|gif|bmp|jpeg$') + ')', 'i').test(escape(item))) {
                            check = true;
                        }
                    });
                    if (check) {
                        layer.msg('请选择图片文件',{icon:2});
                        return false;
                    } else {
                        return true
                    }
                    break;
            }
        }
    })
});
