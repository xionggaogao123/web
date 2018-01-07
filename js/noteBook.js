(function ($) {

    var url = "http://imoocnote.calfnote.com/inter/getClasses.php";


    $.ajaxSetup({
       error: function(){
           alert("调用ajax失败");
           return false;
       }
    });
    
    
  /*  function refreshTemplate(curPage) {
        $.getJSON(url, {curPage: curPage}, function (data) {
            renderTemplate("#note-template", data.data, '#classes');
            renderTemplate("#pag-template", formatPaging(data), "#pag");
            $('li.clickable').on('click', function () {
                $this = $(this);
                $this.data('id');
                console.log($this.data('id'));
                refreshTemplate($this.data('id'));
            });
        });
    }
*/
    function refreshTemplate(curPage) {
        $.getJSON(url, {curPage: curPage}, function (data) {
            renderTemplate("#note-template", data.data, '#classes');
            renderTemplate("#pag-template", formatPaging(data), "#pag");
        });
    }
    
    
    /*
    委托
    */
    function bindPageEvent() {
        $('#pag').delegate('li.clickable', 'click', function () {
            $this = $(this);
            refreshTemplate( $this.data('id'));
        })
    }

    bindPageEvent();
    
    
    
    function renderTemplate(templateSeletor, data, htmlSeletor) {
        var t = $(templateSeletor).html();
        var f = Handlebars.compile(t);
        var h = f(data);
        $(htmlSeletor).html(h);
    }

    $.getJSON(url, {curPage: 1}, function (data) {
        console.log(data);
        renderTemplate("#note-template", data.data, '#classes');
        renderTemplate("#pag-template", formatPaging(data), "#pag");
        $('li.clickable').on('click', function () {
            $this = $(this);
            $this.data('id');
            console.log($this.data('id'));
            refreshTemplate($this.data('id'));
        })
    });

    Handlebars.registerHelper("equal", function (v1, v2, options) {
        if(v1 === v2) {
            return options.fn(this);
        }else {
            return options.inverse(this);
        }
    });

    Handlebars.registerHelper("long", function (v,options) {
        if(v.indexOf('小时') !== -1) {
            return options.fn(this);
        }else {
            return options.inverse(this);
        }
    });

    function  formatPaging(pageData) {
        var arr = [];
        var total = parseInt(pageData.totalCount);
        var cur = parseInt(pageData.curPage);
        //处理到首页的逻辑
        var toLeft = {};
        toLeft.index = 1;
        toLeft.text = '&laquo;';
        if (cur !== 1) {
            toLeft.clickable = true;
        }
        arr.push(toLeft);

        //处理到上一页的逻辑
        var pre = {};
        pre.index = cur -1;
        pre.text = '&lsaquo;';
        if (cur !== 1) {
            pre.clickable = true;
        }
        arr.push(pre);
        //处理到当前页的逻辑
        if (cur <= 5) {
            for (var i=1; i < cur; i++) {
                var pag = {};
                pag.text = i;
                pag.index = i;
                pag.clickable = true;
                arr.push(pag);
            }
        }else {
            //如果cur > 5 ,那么cur 前的页面要显示....
            var pag = {};
            pag.index = 1;
            pag.text = 1;
            pag.clickable = true;
            arr.push(pag);

            var pag = {};
            pag.text = "....";
            arr.push(pag);
            for (var i=cur-2; i< cur; i++) {
                var pag = {};
                pag.text = i;
                pag.index = i;
                pag.clickabl = true;
                arr.push(pag);
            }
        }

        //处理到cur页的逻辑
        var pag = {} ;
        pag.text = cur;
        pag.index = cur;
        pag.cur = true;
        arr.push(pag);

        //处理到cur 页后的逻辑
        if (cur >= total-4) {
            for (var i = cur +1; i<total; i++) {
                var pag = {};
                pag.text = i;
                pag.index = i;
                pag.clickable = true;
                arr.push(pag);
            }
        }else {
            for (var i = cur + 1; i<= cur +2 ; i++) {
                var pag = {};
                pag.text = i;
                pag.index = i;
                pag.clickable = true;
                arr.push(pag);
            }
            var pag = {};
            pag.text = '...';
            arr.push(pag);
            var pag = {};
            pag.text = total;
            pag.index = total;
            pag.clickable = true;
            arr.push(pag);
        }

        //处理到下一页的逻辑
        var next = {};
        next.index = cur + 1;
        next.text = '&rsaquo;';
        if (cur !== total) {
            next.clickable = true;
        }
        arr.push(next);

        //处理到尾页的逻辑
        var toRight = {};
        toRight.index = total;
        toRight.text = '&raquo;';
        if (cur !== total) {
            toRight.clickable = true;
        }
        arr.push(toRight);
        console.log(arr);
        return arr;
    }
    
    $('.overlap').on('click', function () {
       showNote(false);
    });

    function bincClassEvent() {
        $('#classes').delegate('li', 'click', function () {
           showNote(true);
        });
    }

    bincClassEvent();
    
    function showNote(show) {
        if (show) {
            $('.overlap').css('display', 'block');
            $('.noteDetail').css('display', 'block');
        }else {
            $('.overlap').css('display', 'none');
            $('.noteDetail').css('display', 'none');
        }
    }

})(jQuery);