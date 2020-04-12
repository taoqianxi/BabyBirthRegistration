/**
 * Created by fplei on 2019/7/1.
 */
var storage = {
    getDB:function(){
        return  window.localStorage.getItem(config.tableName);
    },
    saveData: function (key, value) {
        window.localStorage.setItem(key, value);
    },
    getToken:function(){
        var db=window.localStorage.getItem(config.tableName);
        if(db!=null&&db!=undefined){
            var dbObject=JSON.parse(db);
            return dbObject[config.request.TokenName]?dbObject[config.request.TokenName]:"";
        }
        return  "";
    },
    saveToken: function (value) {
        var db=window.localStorage.getItem(config.tableName);
        var dbObject;
        if(db==null||db==undefined){
            dbObject={};
        }else {
            dbObject=JSON.parse(db);
        }
        dbObject[config.request.TokenName]=value;
        window.localStorage.setItem(config.tableName, JSON.stringify(dbObject));
    },
    getDeviceId:function(){
        var db=window.localStorage.getItem(config.tableName);
        if(db!=null&&db!=undefined){
            db=JSON.parse(db);
            return db[config.request.DeviceId]?db[config.request.DeviceId]:"";
        }
        return  "";
    },
    saveDeviceId:function(value){
        var db=window.localStorage.getItem(config.tableName);
        var dbObject;
        if(db==null||db==undefined){
            dbObject={};
        }else {
            dbObject=JSON.parse(db);
        }
        dbObject[config.request.DeviceId]=value;
        //转为json string储存
        window.localStorage.setItem(config.tableName, JSON.stringify(dbObject));
    },
    removeToken: function () {
        var db = window.localStorage.getItem(config.tableName);
        if(db==null){
            db={}
        }
        db[config.request.TokenName] = "";
        window.localStorage.setItem(config.tableName, db);
    },
    deleteTable: function (key) {
        window.localStorage.removeItem(key);
    },
    deleteAll: function () {
        window.localStorage.clear();
    },
    setLocalStorageAndTime:function (key, value) {
        window.localStorage.setItem(key, JSON.stringify({ data: value, time: new Date().getTime() }))
    },
    /**
     * 获取数据
     * @param key
     * @param exp 过期时间 默认1天
     * @returns {*}
     */
    getLocalStorageAndTime:function (key,exp = 86400000) {
        // 获取数据
        let data = window.localStorage.getItem(key);
        if (!data) return null;
        let dataObj = JSON.parse(data);
        // 与过期时间比较
        if (new Date().getTime() - dataObj.time > exp) {
            // 过期删除返回null
            window.localStorage.removeItem(key);
            return null
        } else {
            return dataObj.data
        }
    }
};
