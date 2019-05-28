<template>
    <div class="app">
        <img src="/images/dedicated.jpg" alt="">
        <div class="demo">
            <div>Ready To Get Started ?</div>
            <div class="but"><button id="get">Get The App</button> <button id="demo">Request Demo</button></div>

        </div>
        
    </div>

</template>

<style scoped>
.app{
    background-color: #232E42;
    filter: alpha(opacity=60) ;
    position:relative;
    height:70vh;
    overflow: hidden;
}
img{
    width:100%;
    height:80vh;
    /* position:fixed; */
    OPACITY:0.3;
    margin-top:-10vh;
    object-fit: cover;
}

.demo{
    position: absolute;
    top:50%;
    left:50%;
    width:100%;
    transform: translate(-50%, -50%);
    color:#fff;
    font-weight:bold;
    font-family:'Gothic AI',sans-serif;
    font-size: 36px;
    line-height: 48px;
    font-weight: 400;
}


button{
    padding:1.5rem 3rem;
    border-radius:5px;
    font-size:16px;
    margin-right:1rem;
    cursor:pointer;
    outline:none;
}
#demo{
    background: transparent;
    border:1px solid grey;
    transition: all 0.7s;
    color:#fff;
}
#demo:hover, #get:hover{
    background:linear-gradient(135deg, #dd1173, #350e47); ;
    color:#fff;
    transform: scale(0.9)
}

#get{
    background-color: #fc0a7e;
    border:none;
    color:#FFF;
     transition: all 0.7s;
}
@media screen and (max-width:990px){
    /* .demo{
        font-size: 28px;
    } */
    button{
        padding:1rem 2rem;
        width:30%;
    }
}

@media screen and (max-width:600px){
    .demo{
        font-size: 28px;
    }
    button{
        padding:1rem 2rem;
        margin-top:20px;
        width:70%;
    }
}
</style>
