
## html

1. html 标签

    1. <html></html>称为根标签，所有的网页标签都在<html></html>中。
    2. <head> 标签用于定义文档的头部，它是所有头部元素的容器。头部元素有<title>、<script>、 <style>、<link>、 <meta>等标签，头部标签在下一小节中会有详细介绍。
    3. 在<body>和</body>标签之间的内容是网页的主要内容，如<h1>、<p>、<a>、<img>等网页内容标签，在这里的标签中的内容会在浏览器中显示出来。
    
    <title>标签：在<title>和</title>标签之间的文字内容是网页的标题信息，它会出现在浏览器的标题栏中。
    网页的title标签用于告诉用户和搜索引擎这个网页的主要内容是什么，搜索引擎可以通过网页标题，迅速的判断出网页的主题。每个网页的内容都是不同的，
    每个网页都应该有一个独一无二的title。
   
   1. <em>和<strong>标签是为了强调一段话中的关键字时使用，它们的语义是强调。
   
   2. <span>标签是没有语义的，它的作用就是为了设置单独的样式用的。
   
   <blockquote>标签，长文本引用
   
   为你的网页中添加一些空格 &nbsp;
   
   认识<hr>标签，添加水平横线
   
   <address>标签，为网页加入地址信息
   
   想加入一行代码吗？使用<code>标签
   注：如果是多行代码，可以使用<pre>标签。
   
   使用ul li，添加新闻信息列表 无序的
   
   使用ol，添加图书销售排行榜 有序的
   
   在网页制作过程过中，可以把一些独立的逻辑部分划分出来，放在一个<div>标签中，这个<div>标签的作用就相当于一个容器
   
   我们可以为这一个独立的逻辑部分设置一个名称，用id属性来为<div>提供唯一的名称，这个就像我们每个人都有一个身份证号，这个身份证号是唯一标识我们的身份的，也是必须唯一的。
   <div  id="版块名称">…</div>
   
   table标签，认识网页上的表格
   创建表格的四个元素：
   
   table、tbody、tr、th、td
   
   1、<table>…</table>：整个表格以<table>标记开始、</table>标记结束。
   
   2、<tbody>…</tbody>：如果不加<thead><tbody><tfooter> , table表格加载完后才显示。加上这些表格结构， tbody包含行的内容下载完优先显示，不必等待表格结束后在显示，同时如果表格很长，用tbody分段，可以一部分一部分地显示。（通俗理解table 可以按结构一块块的显示，不在等整个表格加载完后显示。）
   
   3、<tr>…</tr>：表格的一行，所以有几对tr 表格就有几行。
   
   4、<td>…</td>：表格的一个单元格，一行中包含几对<td>...</td>，说明一行中就有几列。
   
   5、<th>…</th>：表格的头部的一个单元格，表格表头。
   
   6、表格中列的个数，取决于一行中数据单元格的个数。
   caption标签，为表格添加标题和摘要
   <table>
       <caption>标题文本</caption>
       <tr>
           <td>…</td>
           <td>…</td>
           …
       </tr>
   …
   </table>
   
   使用<a>标签，链接到另一个页面
   
   <a  href="目标网址"  title="鼠标滑过显示的文本">链接显示的文本</a>
   
   在新建浏览器窗口中打开链接
   <a href="目标网址" target="_blank">click here!</a>
   
   认识<img>标签，为网页插入图片
   <img src="图片地址" alt="下载失败时的替换文本" title = "提示文本">
   
   使用表单标签，与用户交互
   <form   method="传送方式"   action="服务器文件">
   
   文本输入框、密码输入框
   <form>
      <input type="text/password" name="名称" value="文本" />
   </form>
   1、type：
   
      当type="text"时，输入框为文本输入框;
   
      当type="password"时, 输入框为密码输入框。
   
   2、name：为文本框命名，以备后台程序ASP 、PHP使用。
   
   3、value：为文本输入框设置默认值。(一般起到提示作用)
   
   文本域，支持多行文本输入
   <textarea  rows="行数" cols="列数">文本</textarea>
   1、<textarea>标签是成对出现的，以<textarea>开始，以</textarea>结束。
   
   2、cols ：多行输入域的列数。
   
   3、rows ：多行输入域的行数。
   
   4、在<textarea></textarea>标签之间可以输入默认值。
   
   使用单选框、复选框，让用户选择
   <input   type="radio/checkbox"   value="值"    name="名称"   checked="checked"/>
   1、type:
   
      当 type="radio" 时，控件为单选框
   
      当 type="checkbox" 时，控件为复选框
   
   2、value：提交数据到服务器的值（后台程序PHP使用）
   
   3、name：为控件命名，以备后台程序 ASP、PHP 使用
   
   4、checked：当设置 checked="checked" 时，该选项被默认选中
   
   使用下拉列表框，节省空间
   
   使用提交按钮，提交数据
   <input   type="submit"   value="提交">
   type：只有当type值设置为submit时，按钮才有提交作用
   
   value：按钮上显示的文字
   
   使用重置按钮，重置表单信息
   <input type="reset" value="重置">
   type：只有当type值设置为reset时，按钮才有重置作用
   
   form表单中的label标签
   <label for="控件id名称">
   注意：标签的 for 属性中的值应当与相关控件的 id 属性值一定要相同。
    <label for="male">男</label>
     <input type="radio" name="gender" id="male" />
     <br />
     <label for="female">女</label>
     <input type="radio" name="gender" id="female" />
     <br />
     <label for="email">输入你的邮箱地址</label>
     <input type="email" id="email" placeholder="Enter email">
     
   
  CSS全称为“层叠样式表 (Cascading Style Sheets)”，它主要是用于定义HTML内容在浏览器内的显示样式，如文字大小、颜色、字体加粗等。
  
  p{
     font-size:12px;
     color:red;
     font-weight:bold;
  }
  使用CSS样式的一个好处是通过定义某个样式，可以让不同网页位置的文字有着统一的字体、字号或者颜色等。
   
   css 样式由选择符和声明组成，而声明又由属性和值组成，如下图所示：
   
   p{font-size:12px;color:red;}
   选择符：又称选择器，指明网页中要应用样式规则的元素，如本例中是网页中所有的段（p）的文字将变成蓝色，而其他的元素（如ol）不会受到影响。
   
   声明：在英文大括号“｛｝”中的的就是声明，属性和值之间用英文冒号“：”分隔。当有多条声明时，中间可以英文分号“;”分隔，如下所示：
   
   CSS注释代码
   在CSS中也有注释语句：用/*注释语句*/来标明（Html中使用<!--注释语句-->
   
   CSS样式可以写在哪些地方呢？从CSS 样式代码插入的形式来看基本可以分为以下3种：内联式、嵌入式和外部式三种。这一小节先来讲解内联式。
   内联式css样式表就是把css代码直接写在现有的HTML标签中，如下面代码：
   <p style="color:red">这里文字是红色。</p>
   外部式css样式，写在单独的一个文件中
   外部式css样式(也可称为外联式)就是把css代码写一个单独的外部文件中，这个css样式文件以“.css”为扩展名，在<head>内（不是在<style>标签内）使用<link>标签将css样式文件链接到HTML文件内，如下面代码：
   <link href="base.css" rel="stylesheet" type="text/css" />
   
   1、css样式文件名称以有意义的英文字母命名，如 main.css。
   
   2、rel="stylesheet" type="text/css" 是固定写法不可修改。
   
   3、<link>标签位置一般写在<head>标签之内。
   
   内联：<span style="color:red;font-size:10px;" >text</span>
   
   嵌入：<style type="text/css">span{color:red;font-size:10px;}</style>
   
   外部：<link href="style.css" rel="stylesheet" type="text/css">
   
   优先级 内联式 > 嵌入式 > 外部式
   
   
   什么是选择器？
   每一条css样式声明（定义）由两部分组成，形式如下：
   选择器{
       样式;
   }
   在{}之前的部分就是“选择器”，“选择器”指明了{}中的“样式”的作用对象，也就是“样式”作用于网页中的哪些元素。比如右侧代码编辑器中第7行代码中的“body”就是选择器。
   
   标签选择器
   标签选择器其实就是html代码中的标签。如右侧代码编辑器中的<html>、<body>、<h1>、<p>、<img>。例如下面代码：
   p{font-size:12px;line-height:1.6em;}
   
   
   类选择器
   .类选器名称{css样式代码;}
   
   注意：
   
   1、英文圆点开头
   
   2、其中类选器名称可以任意起名（但不要起中文噢）
   
   使用方法：
   第一步：使用合适的标签把要修饰的内容标记起来，如下
   <span>胆小如鼠</span>
   第二步：使用class="类选择器名称"为标签设置一个类，如下：
   <span class="stress">胆小如鼠</span>
   
   第三步：设置类选器css样式，如下：
   .stress{color:red;}/*类前面要加入一个英文圆点*/
   
   
   ID选择器
    在很多方面，ID选择器都类似于类选择符，但也有一些重要的区别：
    1、为标签设置id="ID名称"，而不是class="类名称"。
    2、ID选择符的前面是井号（#）号，而不是英文圆点（.）。
    
    
    类和ID选择器的区别
        相同点：可以应用于任何元素
        不同点：
        
        1、ID选择器只能在文档中使用一次。与类选择器不同，在一个HTML文档中，ID选择器只能使用一次，而且仅一次。而类选择器可以使用多次。
        下面代码是正确的：
        
         <p>三年级时，我还是一个<span class="stress">胆小如鼠</span>的小女孩，上课从来不敢回答老师提出的问题，生怕回答错了老师会批评我。就一直没有这个<span class="stress">勇气</span>来回答老师提出的问题。</p>
        而下面代码是错误的：
        
         <p>三年级时，我还是一个<span id="stress">胆小如鼠</span>的小女孩，上课从来不敢回答老师提出的问题，生怕回答错了老师会批评我。就一直没有这个<span id="stress">勇气</span>来回答老师提出的问题。</p>
        2、可以使用类选择器词列表方法为一个元素同时设置多个样式。我们可以为一个元素同时设多个样式，但只可以用类选择器的方法实现，ID选择器是不可以的（不能使用 ID 词列表）
        
    
   
    子选择器
    还有一个比较有用的选择器子选择器，即大于符号(>),用于选择指定标签元素的第一代子元素。如右侧代码编辑器中的代码：
    .food>li{border:1px solid red;}
    这行代码会使class名为food下的子元素li（水果、蔬菜）加入红色实线边框。
    
    
    包含(后代)选择器
    包含选择器，即加入空格,用于选择指定标签元素下的后辈元素。如右侧代码编辑器中的代码：
    .first  span{color:red;}
    
    请注意这个选择器与子选择器的区别，子选择器（child selector）仅是指它的直接后代，或者你可以理解为作用于子元素的第一代后代。而后代选择器是作用于所有子后代元素。后代选择器通过空格来进行选择，而子选择器是通过“>”进行选择。
    
    总结：>作用于元素的第一代后代，空格作用于元素的所有后代。
    
    通用选择器
    通用选择器是功能最强大的选择器，它使用一个（*）号指定，它的作用是匹配html中所有标签元素，如下使用下面代码使用html中任意标签元素字体颜色全部设置为红色：
    * {color:red;}
    
    伪类选择符
    更有趣的是伪类选择符，为什么叫做伪类选择符，它允许给html不存在的标签（标签的某种状态）设置样式，比如说我们给html中一个标签元素的鼠标滑过的状态来设置字体颜色：
    a:hover{color:red;}
    
    上面一行代码就是为 a 标签鼠标滑过的状态设置字体颜色变红。这样就会使第一段文字内容中的“胆小如鼠”文字加入鼠标滑过字体颜色变为红色特效。
    关于伪选择符：
    
        关于伪类选择符，到目前为止，可以兼容所有浏鉴器的“伪类选择符”就是 a 标签上使用 :hover 了（其实伪类选择符还有很多，尤其是 css3 中，但是因为不能兼容所有浏览器，本教程只是讲了这一种最常用的）。
        其实 :hover 可以放在任意的标签上，比如说 p:hover，但是它们的兼容性也是很不好的，所以现在比较常用的还是 a:hover 的组合。
        
    分组选择符
    
    当你想为html中多个标签元素设置同一个样式时，可以使用分组选择符（，），如下代码为右侧代码编辑器中的h1、span标签同时设置字体颜色为红色：
    h1,span{color:red;}
    
    它相当于下面两行代码：
    h1{color:red;}
    span{color:red;}
    
    
    继承
    
    CSS的某些样式是具有继承性的，那么什么是继承呢？继承是一种规则，它允许样式不仅应用于某个特定html标签元素，而且应用于其后代。
    比如下面代码：如某种颜色应用于p标签，这个颜色设置不仅应用p标签，还应用于p标签中的所有子元素文本，这里子元素为span标签。
    
    p{color:red;}
    
    <p>三年级时，我还是一个<span>胆小如鼠</span>的小女孩。</p>
    
    可见右侧结果窗口中p中的文本与span中的文本都设置为了红色。但注意有一些css样式是不具有继承性的。如border:1px solid red;
    
    p{border:1px solid red;}
    
    <p>三年级时，我还是一个<span>胆小如鼠</span>的小女孩。</p>
    在上面例子中它代码的作用只是给p标签设置了边框为1像素、红色、实心边框线，而对于子元素span是没用起到作用的。
    
    
    特殊性
    
    有的时候我们为同一个元素设置了不同的CSS样式代码，那么元素会启用哪一个CSS样式呢?我们来看一下面的代码：
    p{color:red;}
    .first{color:green;}
    <p class="first">三年级时，我还是一个<span>胆小如鼠</span>的小女孩。</p>
    
    p和.first都匹配到了p这个标签上，那么会显示哪种颜色呢？green是正确的颜色，那么为什么呢？是因为浏览器是根据权值来判断使用哪种css样式的，权值高的就使用哪种css样式。
    
    标签的权值为1，类选择符的权值为10，ID选择符的权值最高为100。
    
    注意：还有一个权值比较特殊--继承也有权值但很低，有的文献提出它只有0.1，所以可以理解为继承的权值最低。
    
    
    层叠
    
    我们来思考一个问题：如果在html文件中对于同一个元素可以有多个css样式存在并且这多个css样式具有相同权重值怎么办？好，这一小节中的层叠帮你解决这个问题。
    
    层叠就是在html文件中对于同一个元素可以有多个css样式存在，当有相同权重的样式存在时，会根据这些css样式的前后顺序来决定，处于最后面的css样式会被应用。
    
    p{color:red;}
    p{color:green;}
    <p class="first">三年级时，我还是一个<span>胆小如鼠</span>的小女孩。</p>
    
    最后 p 中的文本会设置为green，这个层叠很好理解，理解为后面的样式会覆盖前面的样式。
    
    所以前面的css样式优先级就不难理解了：
    
    内联样式表（标签内部）> 嵌入样式表（当前文件中）> 外部样式表（外部文件中）。
    
    重要性
    
    我们在做网页代码的时，有些特殊的情况需要为某些样式设置具有最高权值，怎么办？这时候我们可以使用!important来解决。
    
    p{color:red!important;}
    p{color:green;}
    <p class="first">三年级时，我还是一个<span>胆小如鼠</span>的小女孩。</p>
    
    这时 p 段落中的文本会显示的red红色。
    
    注意：!important要写在分号的前面
    
    这里注意当网页制作者不设置css样式时，浏览器会按照自己的一套样式来显示网页。并且用户也可以在浏览器中设置自己习惯的样式，
    比如有的用户习惯把字号设置为大一些，使其查看网页的文本更加清楚。这时注意样式优先级为：浏览器默认的样式 < 网页制作者样式 < 用户自己设置的样式，
    但记住!important优先级样式是个例外，权值高于用户自己设置的样式。
    
    
    文字排版--字体
    
    
    body{font-family:"宋体";}
    
    
    文字排版--字号、颜色
    body{font-size:12px;color:#666}
    
    文字排版--粗体
    
    p span{font-weight:bold;}
    
    文字排版--下划线
    
    p a{text-decoration:underline;}
    <p>三年级时，我还是一个<a>胆小如鼠</a>的小女孩。</p>
    
    文字排版--删除线
    
     .oldPrice{text-decoration:line-through;}
     
    段落排版--缩进
     
     中文文字中的段前习惯空两个文字的空白，这个特殊的样式可以用下面代码来实现：
     p{text-indent:2em;}
     注意：2em的意思就是文字的2倍大小。
     <p>1922年的春天，一个想要成名名叫尼克卡拉威（托比?马奎尔Tobey Maguire 饰）的作家，离开了美国中西部，来到了纽约。那是一个道德感渐失，
     爵士乐流行，走私为王，股票飞涨的时代。为了追寻他的美国梦，他搬入纽约附近一海湾居住。</p>
     
     段落排版--行间距（行高）
     p{line-height:1.5em;}
     
     
    段落排版--中文字间距、字母间距
    中文字间隔、字母间隔设置：
    如果想在网页排版中设置文字间隔或者字母间隔就可以使用    letter-spacing 来实现，如下面代码：
    
    h1{
        letter-spacing:50px;
    }
    ...
    <h1>了不起的盖茨比</h1
    注意：这个样式使用在英文单词时，是设置字母与字母之间的间距。
    
    单词间距设置：
    如果我想设置英文单词之间的间距呢？可以使用 word-spacing 来实现。如下代码：
    
    h1{
        word-spacing:50px;
    }
    ...
    <h1>welcome to imooc!</h1>
    
    
    
    段落排版--对齐
    
    想为块状元素中的文本、图片设置居中样式吗？可以使用text-align样式代码，如下代码可实现文本居中显示。(那么什么是块状元素呢？在后面的11-1、11-2小节中会讲到。)
    
    h1{
        text-align:center;
    }
    <h1>了不起的盖茨比</h1>
    同样可以设置居左：
    h1{
        text-align:left;
    }
    <h1>了不起的盖茨比</h1>
    还可以设置居右：
    h1{
        text-align:right;
    }
    <h1>了不起的盖茨比</h1>
    
    
    css 盒子模型
    
    
在讲解CSS布局之前，我们需要提前知道一些知识，在CSS中，html中的标签元素大体被分为三种不同的类型：块状元素、内联元素(又叫行内元素)和内联块状元素。

    常用的块状元素有：
    
    <div>、<p>、<h1>...<h6>、<ol>、<ul>、<dl>、<table>、<address>、<blockquote> 、<form>
    
    常用的内联元素有：
    
    <a>、<span>、<br>、<i>、<em>、<strong>、<label>、<q>、<var>、<cite>、<code>
    
    常用的内联块状元素有：
    
    <img>、<input>
    
    元素分类--块级元素
        什么是块级元素？在html中<div>、 <p>、<h1>、<form>、<ul> 和 <li>就是块级元素。
        设置display:block就是将元素显示为块级元素。如下代码就是将内联元素a转换为块状元素，从而使a元素具有块状元素特点。
    
        a{display:block;}
        
        块级元素特点：
        
        1、每个块级元素都从新的一行开始，并且其后的元素也另起一行。（真霸道，一个块级元素独占一行）
        
        2、元素的高度、宽度、行高以及顶和底边距都可设置。
        
        3、元素宽度在不设置的情况下，是它本身父容器的100%（和父元素的宽度一致），除非设定一个宽度。
        
        
   ##  段落排版--中文字间距、字母间距
   
        word-spacing : 10 px
        
   ## 
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
     
    
    


    
    
    
    
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   