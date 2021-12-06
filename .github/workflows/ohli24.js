var button = document.createElement("Button");
button.innerHTML = "Adblock";
button.onclick = function(){
   changetag();
  };
button.style = "top:0;right:0;position:absolute;z-index: 9999"
document.body.appendChild(button);

function changetag() {
document.getElementsByClassName("at-title")[0].innerHTML = "";
document.getElementById("exoall").innerHTML = "";
document.getElementById("exon").innerHTML = "";
document.getElementById('exon').setAttribute('id', 'cxon');
document.getElementById("exon").innerHTML = "이전화 다음화";
document.getElementById('exon').setAttribute('id', 'cxon');
document.getElementById("exon").innerHTML = "";
document.getElementById('exon').setAttribute('id', 'cxon');
document.getElementsByClassName("npside")[0].innerHTML = "";
document.getElementsByClassName('view-wrap')[1].style.position='relative';
document.getElementsByClassName('view-wrap')[1].style.float='left';
document.getElementsByClassName('view-wrap')[1].style.width='320px';
document.getElementsByClassName('view-wrap')[1].style.left='880px';
document.getElementsByClassName('view-wrap')[1].style.top='-604px';
document.getElementsByClassName('list-item')[0].style.fontSize='12px';
document.getElementsByClassName('list-item')[1].style.fontSize='12px';
document.getElementsByClassName('list-item')[2].style.fontSize='12px';
document.getElementsByClassName('list-item')[3].style.fontSize='12px';
document.getElementsByClassName('list-item')[4].style.fontSize='12px';
document.getElementsByClassName('list-item')[5].style.fontSize='12px';
document.getElementsByClassName('list-item')[6].style.fontSize='12px';
document.getElementsByClassName('list-item')[7].style.fontSize='12px';
document.getElementsByClassName('list-item')[8].style.fontSize='12px';
document.getElementsByClassName('list-item')[9].style.fontSize='12px';
document.getElementsByClassName('list-item')[10].style.fontSize='12px';
document.getElementsByClassName('list-item')[11].style.fontSize='12px';
document.getElementsByClassName('list-item')[12].style.fontSize='12px';
document.getElementsByClassName('list-item')[13].style.fontSize='12px';
document.getElementsByClassName('list-item')[14].style.fontSize='12px';
document.getElementsByClassName('view-btn text-right')[0].style.float='left';

var nexturl2 = document.getElementsByClassName('btn btn-lightgray btn-sm')[0].href;
document.getElementsByClassName('btn btn-lightgray btn-sm')[0].href = nexturl2 + '&spage=1';
document.getElementsByClassName('btn btn-lightgray btn-sm')[0].innerHTML = "<font style='font-size:30px'>< 이전화</font>";
var pervurl2 = document.getElementsByClassName('btn btn-lightgray btn-sm')[1].href;
document.getElementsByClassName('btn btn-lightgray btn-sm')[1].href = pervurl2 + '&spage=1';
document.getElementsByClassName('btn btn-lightgray btn-sm')[1].innerHTML = "<font style='font-size:30px'>다음화 ></font>";
document.getElementsByClassName('btn btn-lightgray btn-sm')[2].innerHTML = "목록보기";

var nexturl1 = document.getElementsByClassName('btn btn-white btn-sm')[0].href;
var pervurl1 = document.getElementsByClassName('btn btn-white btn-sm')[1].href;
document.getElementsByClassName('btn btn-white btn-sm')[0].href = nexturl1 + '&spage=1';
document.getElementsByClassName('btn btn-white btn-sm')[0].innerHTML = "<font style='font-size:30px'>< 이전화</font>";
document.getElementsByClassName('btn btn-white btn-sm')[1].href = pervurl1 + '&spage=1';
document.getElementsByClassName('btn btn-white btn-sm')[1].innerHTML = "<font style='font-size:30px'>다음화 ></font>";
document.getElementsByClassName('btn btn-white btn-sm')[2].innerHTML = "목록보기";
}
