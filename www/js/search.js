//����,�����������ݿ��پ���ʵ��
function search(str)
{
    var bookname;
    while(bookname=readfromsql) //�����ݿ�
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