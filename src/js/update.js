Object.assign(Clock_zh.prototype, {
    updateMonth: function (parmas) {
        // 更新显示状态
        var domArr = document.getElementsByClassName('month_items'),
            length = parmas.length ? parmas.length : 12;
        for(var i = 0; i < length; i++){
            domArr[i].dataset.status = 'desibled';
            domArr[i].classList.remove('active');
            domArr[i].classList.add('desibled');
            // 当前旋转的度数
            var rotate = (parmas.val - domArr[i].dataset.index) * 30;

            domArr[i].style['transform'] = 'rotate(' + rotate + 'deg)';
            domArr[i].style['-webkit-transform'] = 'rotate(' + rotate + 'deg)';
            
            // 更新第几月active
            if(domArr[i].dataset.index == parmas.val){
                domArr[i].dataset.status = 'active';
                domArr[i].classList.remove('desibled');
                domArr[i].classList.add('active');
            }
        }
    }
})