var Clock_zh = function (params) {
    var nowDate = new Date();
    this.$el = params.el;
    this.DATA = {};//数据集合
    this.DateNow = {
        nowMonth: nowDate.getMonth(),
        nowDay: nowDate.getDate(),
        nowWeek: nowDate.getDay(),
        nowHours: nowDate.getHours(),
        nowMinutes: nowDate.getMinutes(),
        nowSeconds: nowDate.getSeconds()
    }
    this.create();
}

Clock_zh.prototype = {
    create: function () {
        this.DATA = {
            DATA_MONTH: this.create_DATA('DATA_MONTH'),
            DATA_DAY: this.create_DATA('DATA_DAY'),
            DATA_WEEK: this.create_DATA('DATA_WEEK'),
            DATA_HOUR: this.create_DATA('DATA_HOUR'),
            DATA_MINUTE: this.create_DATA('DATA_MINUTE'),
            DATA_SECOND: this.create_DATA('DATA_SECOND')
        }
        this.create_Html(this.$el, this.DateNow);

        
        // this.initData();
    },
    update: function (params) {
        switch (params.type) {
            case 'updateMonth':
                this.updateMonth({val: params.val});
                break;
            default:
                break;
        }
    }
}