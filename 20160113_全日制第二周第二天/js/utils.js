/*
 * utils.js 存储的是我们项目中常用的公共的方法
 */
var utils = {
    //listToArray:把类数组转换为数组(兼容所有的浏览器)
    listToArray: function (obj) {
            var out = [],i = 0,len = obj.length;
            for (; i < len; i++) {
                if (obj[i] instanceof Object){
                    out[i] = deepcopy(obj[i]);
                }
                else out[i] = obj[i];
            }
            return out;
        }
};
