/*
 * utils.js �洢����������Ŀ�г��õĹ����ķ���
 */
var utils = {
    //listToArray:��������ת��Ϊ����(�������е������)
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
