
//js实现将数字1234转化为汉字字符串（一千二百三十四）（或大写汉字壹仟贰佰叁拾肆）；

/*阿拉伯数字转中文数字 中文数字的特点： 每个计数数字都跟着一个权位，权位有：十、百、千、万、亿。 以“万”为小节，对应一个节权位，万以下没有节权位。 每个小节内部以“十百千”为权位独立计数。 “十百千”不能连续出现，而“万”和“亿”作为节权位时可以和其他权位连用，如：“二十亿”。 中文数字对“零”的使用要满足以下三条规则： 以10000为小节，小节的结尾即使是0，也不使用零。 小节内两个非0数字之间要使用“零”。 当小节的“千”位是0时（即：1~999），只要不是首小节，都要补“零”。 算法设计的一些说明： 对“零”的第三个规则，把检测放在循环的最前面并默认为false，可以自然的丢弃最高小节的加零判断。 单个数字转换用数组实现，var chnNumChar = ["零","一","二","三","四","五","六","七","八","九"]; 节权位同样用数组实现，var chnUnitSection = ["","万","亿","万亿","亿亿"]； 节内权位同样用数组实现，var chnUnitChar = ["","十","百","千"];*/

// 注意： 下面的方法只针对1亿亿以下数字有效，因为在日常项目中，一亿亿已经是非常大的数字，基本上达不到这个量

//如果数字含有小数部分，那么可以将小数部分单独取出
//将小数部分的数字转换为字符串的方法：
var NumtoZh = {
    chnNumChar: ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
    chnUnitSection: ["", "万", "亿", "万亿", "亿亿"],
    chnUnitChar: ["", "十", "百", "千"],

    numToChn: function (num) {
        var index = num.toString().indexOf(".");
        if (index != -1) {
            var str = num.toString().slice(index);
            var a = "点";
            for (var i = 1; i < str.length; i++) {
                a += this.chnNumChar[parseInt(str[i])];
            }
            return '';
        } else {
            return '';
        }
    },
    sectionToChinese: function (section) {
        //定义在每个小节的内部进行转化的方法，其他部分则与小节内部转化方法相同

        var str = '', chnstr = '', zero = false, count = 0;   //zero为是否进行补零， 第一次进行取余由于为个位数，默认不补零
        while (section > 0) {
            var v = section % 10;  //对数字取余10，得到的数即为个位数
            if (v == 0) {                    //如果数字为零，则对字符串进行补零
                if (zero) {
                    zero = false;        //如果遇到连续多次取余都是0，那么只需补一个零即可
                    chnstr = this.chnNumChar[v] + chnstr;
                }
            } else {
                zero = true;           //第一次取余之后，如果再次取余为零，则需要补零
                str = this.chnNumChar[v];
                str += this.chnUnitChar[count];
                chnstr = str + chnstr;
            }
            count++;
            section = Math.floor(section / 10);
        }
        return chnstr;
    },
    TransformToChinese: function (num) {

        //定义整个数字全部转换的方法，需要依次对数字进行10000为单位的取余，然后分成小节，按小节计算，当每个小节的数不足1000时，则需要进行补零
        var a = this.numToChn(num);
        num = Math.floor(num);
        var unitPos = 0;
        var strIns = '', chnStr = '';
        var needZero = false;

        if (num === 0) {
            return this.chnNumChar[0];
        }
        while (num > 0) {
            var section = num % 10000;
            if (needZero) {
                chnStr = this.chnNumChar[0] + chnStr;
            }
            strIns = this.sectionToChinese(section);
            /* if(strIns === '一十一'){strIns = '十一'}else if (strIns === '一十'){strIns = '十'}; */
            //xzh：自己改的，没有弄明白逻辑，先在这写死。
            if(strIns.indexOf('一十') == 0){
                strIns = strIns.replace('一十', '十');
            }
            strIns += (section !== 0) ? this.chnUnitSection[unitPos] : this.chnUnitSection[0];
            chnStr = strIns + chnStr;
            needZero = (section < 1000) && (section > 0);
            num = Math.floor(num / 10000);
            unitPos++;
        }

        return chnStr + a;
    }
}
