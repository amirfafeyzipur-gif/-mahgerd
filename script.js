*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:tahoma;
}

body{
background:#000;
overflow:hidden;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
color:#fff;
}

.bg{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
object-fit:cover;
opacity:.35;
animation:zoom 20s infinite alternate;
}

.overlay{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.8));
z-index:1;
}

.content{
position:relative;
z-index:10;
text-align:center;
padding:20px;
max-width:90%;
animation:fade 2s;
}

h1{
font-size:60px;
margin-bottom:20px;
}

h2{
font-size:30px;
margin-bottom:15px;
line-height:1.8;
}

h3{
font-size:34px;
color:#ffd700;
margin-bottom:20px;
}

.date{
font-size:22px;
margin-bottom:30px;
opacity:.9;
}

button{
background:rgba(255,255,255,.15);
border:1px solid rgba(255,255,255,.3);
backdrop-filter:blur(10px);
color:#fff;
padding:15px 35px;
font-size:20px;
border-radius:50px;
margin:10px;
cursor:pointer;
transition:.3s;
}

button:hover{
transform:scale(1.08);
}

#popup{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.8);
display:none;
justify-content:center;
align-items:center;
z-index:999;
}

.box{
background:rgba(255,255,255,.12);
backdrop-filter:blur(18px);
padding:35px;
border-radius:20px;
width:90%;
max-width:520px;
text-align:center;
}

.box h2{
font-size:45px;
margin-bottom:20px;
}

.box p{
line-height:2;
font-size:20px;
}

#close{
position:absolute;
right:25px;
top:15px;
font-size:30px;
cursor:pointer;
}

#hearts{
position:fixed;
width:100%;
height:100%;
overflow:hidden;
z-index:2;
pointer-events:none;
}

.heart{
position:absolute;
color:#ff4d6d;
font-size:24px;
animation:heartMove linear forwards;
}

@keyframes heartMove{
0%{
transform:translateY(100vh) scale(.5);
opacity:0;
}
20%{
opacity:1;
}
100%{
transform:translateY(-120vh) scale(1.4);
opacity:0;
}
}

@keyframes fade{
from{
opacity:0;
transform:translateY(40px);
}
to{
opacity:1;
transform:translateY(0);
}
}

@keyframes zoom{
from{
transform:scale(1);
}
to{
transform:scale(1.1);
}
}
