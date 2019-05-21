Object.assign(Clock_zh.prototype, {
    create_Html: function (rootEl, date) {
        if(rootEl.clientWidth > rootEl.clientHeight){
            this.width_g = rootEl.clientHeight
        }else{
            this.width_g = rootEl.clientWidth
        }
        // this.width_g = rootEl.clientWidth;
        // this.height_g = rootEl.clientHeight;
        // this.itmes_width = rootEl.clientWidth / 2;
        this.create_month_html(rootEl, date);
        this.create_seconds_html(rootEl, date);
    },
    create_month_html: function (rootEl, date) {
        var mouth_dom_width = this.width_g / 3;
        var DATA_MONTH = this.DATA['DATA_MONTH']
        var month_wrap_div = document.createElement('div');
        month_wrap_div.className = 'month_box';
        month_wrap_div.setAttribute('style','width:' + mouth_dom_width + 'px;height:' + mouth_dom_width  + 'px;');
        var rotate = 0;
        // var rotate = 30 * (date.nowMonth + 1);
        for(var k in DATA_MONTH){
            // rotate -= 30;
            var p_dom = document.createElement('p');
            p_dom.setAttribute("data-index", k);
            // p_dom.setAttribute('style','width:' + mouth_dom_width + 'px;transform:rotate(' + rotate + 'deg);-webkit-transform:rotate(' + rotate + 'deg);');
            p_dom.setAttribute('style','width:' + mouth_dom_width + 'px;');
            p_dom.innerHTML = DATA_MONTH[k];
            p_dom.className = 'month_items'
            month_wrap_div.appendChild(p_dom);
        }
        rootEl.appendChild(month_wrap_div);

        // 更新状态
        this.updateMonth({
            length: Object.keys(DATA_MONTH).length,
            val: date.nowMonth + 1
        });
    },
    create_seconds_html: function (rootEl, date) {
        var seconds_dom_width = this.width_g;
        var DATA_SECOND = this.DATA['DATA_SECOND'];
        var seconds_wrap_div = document.createElement('div');
        seconds_wrap_div.className = 'seconds_box';
        seconds_wrap_div.setAttribute('style','width:' + seconds_dom_width + 'px;height:' + seconds_dom_width  + 'px;');
        var rotate = 0;
        for(var k in DATA_SECOND){
            rotate -= 6;
            var p_dom = document.createElement('p');
            p_dom.setAttribute("data-index", k);
            p_dom.setAttribute('style','width:' + seconds_dom_width + 'px;transform:rotate(' + rotate + 'deg);-webkit-transform:rotate(' + rotate + 'deg);');
            // p_dom.setAttribute('style','width:' + seconds_dom_width + 'px;');
            p_dom.innerHTML = DATA_SECOND[k];
            p_dom.className = 'seconds_items'
            seconds_wrap_div.appendChild(p_dom);
        }
        rootEl.appendChild(seconds_wrap_div);
    }
})