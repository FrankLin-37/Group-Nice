<script>
import 'youtube-background';    
        jQuery(document).ready(function() {
            jQuery('[data-vbg]').youtube_background();

            const videoBackgrounds = VIDEO_BACKGROUNDS;
        });
</script>

<template>
<div class="headerBox">
    <div data-vbg="https://www.youtube.com/watch?v=5UUPXJiTBec"></div>

    <div class="headerimg"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur fugiat commodi vero optio quaerat delectus maiores. Illum minima suscipit, quos optio, asperiores rem aliquam obcaecati, ipsa repellat laborum veritatis.</p></div>
</div>

<div class="cityImg">
    <div class="imgP1"></div>
    <div class="textP1"><h1>Title</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, eum. Commodi numquam quaerat, odio laborum, pariatur iusto sequi in deserunt aspernatur quo placeat officia. Eveniet provident obcaecati sed ipsam deleniti quidem commodi reiciendis atque expedita, laborum, doloribus dolorum maiores itaque ut iusto cumque nulla fugit, optio numquam. Necessitatibus, accusantium odio!</p></div>
</div>
<div class="longText">
    <div class="accordion" id="accordionExample">
<div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
    </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
    </div>
</div>
<div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
    </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
    </div>
</div>
<div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
    </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
    </div>
</div>
</div>
    <div class="accordion" id="accordionExample">
<div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
    </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
    </div>
</div>
<div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
    </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
    </div>
</div>
<div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
    </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
    </div>
</div>
</div>
</div>

<div class="footerBox">

    <select name="" id="" v-model="this.modelSelect">
        <option value="">請選擇</option>
        <option value="one">123</option>
        <option value="two">有啥問題麻</option>
        <option value="three">別問就是吃</option>
    </select>
    <h3>{{this.modelSelect}}</h3>

</div>
</template>

<style scoped lang="scss">
.headerBox{
    width: 100%;
    height: 100dvh;
    border: 1.5px solid black;
    .headerimg{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    p{
        justify-content: center;
        align-items: center;
    }
}
.cityImg{
    width: 100%;
    height: 60dvh;
    background-color: #F6F4EB;
    display: flex;
    .imgP1{
        width: 50%;
        height: 60dvb;
        background-image: url(../assets/Kaohsiung.jpg);
        border-radius: 20px;
        margin-left: 2%;
    }
    .textP1{
        width: 50%;
        height: 60dvh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}
.longText{
    width: 100%;
    height: 110dvh;
    padding-top: 8%;    
    background-color: #F6F4EB;
    .textBox{
        width: 100%;
        height: 12dvb;
        display: flex;
        border-bottom: 1.5px solid black;
        justify-content: space-around;
        align-items: flex-end;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }.cityName{
        font-size: 38px;
    }
}
.footerBox{
    width: 100%;
    height: 90dvh;
    border: 1.5px solid black;
    background-color: #F6F4EB;
}
</style>