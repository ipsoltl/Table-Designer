function countNumberLines() {
    var lines = document.getElementById('numberOfLines').value;
    var columns = document.getElementById('numberOfColumns').value;
    
    document.getElementById('table').innerHTML = '';
    for (let index = 0; index < lines; index++) {
        var tr = document.createElement('tr');
        tr.id = 'tr'+ index;
        document.getElementById('table').appendChild(tr);
    
        for (let index2 = 0; index2 < columns; index2++) {
            var td = document.createElement('td');
            td.innerHTML=index2;
            td.id = 'td' + index2;
            document.getElementById('tr' + index).appendChild(td);
        };
    };

    var elements = document.querySelectorAll('td');
    for (let index33 = 0; index33 < elements.length; index33++) {
        proverca = index33 + 1;
        elements[index33].innerHTML = proverca;
        elements[index33].style.border = "ridge";
        elements[index33].style.padding = "3px";   
    };
    
    document.getElementById('samCode').style.display = 'block';
    document.getElementById('samCode').innerHTML = '';
    var codeHtml = table.innerHTML;
    samCode.innerHTML = '<table>' + codeHtml + '</table>';
    
};