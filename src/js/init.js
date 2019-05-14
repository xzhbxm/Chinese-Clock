var Clock_zh = function (params) {
    this.$el = params.el;
    this.DATA = {};//数据集合
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
        this.create_Html(this.$el);

        
        // this.initData();
    },
    
}