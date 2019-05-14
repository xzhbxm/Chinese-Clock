Object.assign(Clock_zh.prototype, {
    create_DATA: function (methodType,params) {
        var ArrType = {
            'DATA_MONTH': {startNum: 1, length: 13, unit: '月'},
            'DATA_DAY': {startNum: 1, length: 32, unit: '日'},
            'DATA_WEEK': {startNum: 0, length: 7, unit: '星期'},
            'DATA_HOUR': {startNum: 0, length: 24, unit: '时'},
            'DATA_MINUTE': {startNum: 0, length: 60, unit: '分'},
            'DATA_SECOND': {startNum: 0, length: 60, unit: '秒'},
        }
        // var DATA_Arr;
        var DATA_obj = {};
        for (var i = ArrType[methodType].startNum; i < ArrType[methodType].length; i++) {
            // DATA_Arr.push(NumtoZh.TransformToChinese(i) + ArrType[methodType].unit);
            if(methodType === 'DATA_WEEK'){
                var val = i === 0 ? '日' : NumtoZh.TransformToChinese(i);
                DATA_obj[i] = ArrType[methodType].unit + val;
            }else{
                DATA_obj[i] = NumtoZh.TransformToChinese(i) + ArrType[methodType].unit;
            }
            
        }
        return DATA_obj;
    }
})