Object.assign(Clock_zh.prototype, {
    create_Html: function (rootEl) {
        if(rootEl.clientWidth > rootEl.clientHeight){
            this.width_g = rootEl.clientHeight
        }else{
            this.width_g = rootEl.clientWidth
        }
        // this.width_g = rootEl.clientWidth;
        // this.height_g = rootEl.clientHeight;
        // this.itmes_width = rootEl.clientWidth / 2;
        this.create_month_html(rootEl);
    },
    create_month_html: function (rootEl) {
        var mouth_dom_width = this.width_g / 3;
        var DATA_MONTH = this.DATA['DATA_MONTH']
        var month_wrap_div = document.createElement('div');
        month_wrap_div.className = 'month_box';
        month_wrap_div.setAttribute('style','width:' + mouth_dom_width + 'px;height:' + mouth_dom_width  + 'px;');
        var rotate = 30;
        for(var k in DATA_MONTH){
            rotate -= 30;
            console.log(k);
            console.log(DATA_MONTH[k]);
            var p_dom = document.createElement('p');
            p_dom.setAttribute("data-index", k);
            p_dom.setAttribute('style','width:' + mouth_dom_width + 'px;position:absolute;text-align: right;transform:rotate(' + rotate + 'deg);-webkit-transform:rotate(' + rotate + 'deg);');
            p_dom.innerHTML = DATA_MONTH[k];
            p_dom.className = 'month_items'
            month_wrap_div.appendChild(p_dom);
        }
        rootEl.appendChild(month_wrap_div);
    }
})