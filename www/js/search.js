//搜索,等连接完数据库再具体实现
function search(str)
{
    var bookname;
    while(bookname=readfromsql) //需数据库
    {
        if(bookname.findText(str))
        {
            bookname.select();
        }
        else {
            alert("no such words found!");
        }
    }

}