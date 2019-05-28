<template>
      <header>
            <a href="" class="logo">aLPHA</a>
            <div class="menu-toggle"></div>
            <nav class="nav">
                 <ul class="nav-bar" id="ul">
                     <li><a href="#yip">About</a></li>
                     <li><a href="#products" id="button">Products</a></li>
                     <li><a href="">Contacts</a></li>
                     <router-link tag="li" to="/sign-in"><a>Log In</a></router-link>
                    
                </ul>
            </nav>
                   <div class="clearfix"></div>
     </header>

</template>

<style scoped>
header{
 position: relative;
 top: 1rem;
 width:100%;
 box-sizing: border-box;
 z-index: 5;
 font-weight: bold;
}

.logo{
    margin-top:0;
    text-decoration: none;
    box-sizing: border-box;
    float: left;
    color:#fff;
    font-family: 'Pacifico', cursive;
    font-size:30px;

}


nav{
    float: right;
}

.clearfix{
    clear: both;
}

nav ul{
    margin: 0;
    padding: 0;
    display: flex;
} 
nav ul li{
    list-style: none;
}
nav ul li a{
    display: block;
    text-decoration: none;
    margin: 10px 1px;
    padding: 10px 20px;
     color: #fff;
}


nav ul li a.active,ul li a:hover{
    background-color: #fff;
    border-radius: 5px;
    color: #102649;
    transition: 1s;
}
@media screen and (max-width:700px){
    body{
        margin: 0;
        padding: 0;
    }

    header{
        position: relative;
        width: 100%;
    }
    
    .menu-toggle{
        display: block;
        width: 40px;
        height: 40px;
        margin: 10px;
        margin-right: 20px;
        margin-top: -5px;
        background:unset;
        float: right;
        cursor: pointer;
        text-align: center;
        font-size: 30px;
        color:  #2376f3;
    }
    .menu-toggle:before{
        content:'\f0c9';
        line-height: 40px;
        font-family: fontAwesome;
    }


    .menu-toggle.active:before{
        content:'\f00d';
    }
    .nav{
        display: none;
    }

    nav.active{
        display: block;
        width:100%;
    }

    nav.active ul{
        display: block;
    }

    nav.active ul li a{
        margin: 0;
    }
    
}
</style>
<script>
export default {
     mounted(){
        var menu = document.getElementById('menu-toggle'); 
function showBar(e)
{
     menu.classList.toggle('active');
    document.getElementById('sidenav').classList.toggle('active');
};

   menu.addEventListener('click', showBar); 
    },
}
</script>


