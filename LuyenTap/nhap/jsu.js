let html = "";
for (let i =2 ; i<10; i++){
    html += "<tr>";
    for (let j =2 ; j < 10; j++){
        html += "</td>";
        html += j + "x"+ i+ "="+(i*j);
        html += "</td>";
    }

    html +="</tr>";
} document.getElementById('main').innerHTML = html;
