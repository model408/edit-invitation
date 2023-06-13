
// OWL CAROUSEL 
$(document).ready(function(){
    $(".testimonial_slider").owlCarousel({
        loop:true,
        responsiveClass:true,
        nav:true,
        margin:20,
        dots:false,
        rewindNav : true,
        navText: ["<i class='fas fa-chevron-left'></i>", '<i class="fas fa-chevron-right"></i>'],  
        responsive:{
            0:{
                items:1,
            },
            992:{
                items:2,
            },
        }
    
    });
  });
  
$(document).ready(function(){
    $(".speaker_slider").owlCarousel({
        loop:true,
        margin:80,
        center:true,
        responsiveClass:true,
        nav:true,
        dots:false,
        navText: ["<i class='fas fa-chevron-left'></i>", '<i class="fas fa-chevron-right"></i>'],  
        responsive:{
            0:{
                items:1,
            },
            992:{
                items:3,
            },
        }
    
    });
  });

  let invdate
  let invheading

// NGAY TO CHUC 
$('#home-date').click(function(){
    $(this).toggleClass('d-none')
    $('#home-date-input').css("display","flex")
})
document.getElementById('home-date-input').addEventListener('input',e => {
    invdate=e.target.value
})
$('#home-date-save').click(function(){
    $('#home-date-input').hide()
    $('#home-date').removeClass('d-none')
    $('#home-date').html(invdate)
})

// TEN THU MOI 
$('#invite-heading').click(function(){
    $(this).toggleClass('d-none')
    $('#invite-heading-input').css("display","flex")
})
document.getElementById('invite-heading-input').addEventListener('input',e => {
    invheading=e.target.value
})
$('#invite-heading-save').click(function(){
    $('#invite-heading-input').hide()
    $('#invite-heading').removeClass('d-none')
    $('#invite-heading').html(invheading)
})

// NOI DUNG THU MOI 
let invtext
$('#home-text').click(function(){
    $(this).toggleClass('d-none')
    $('#home-text-input').css("display","flex")
})
document.getElementById('home-text-input').addEventListener('input',e => {
    invtext=e.target.value
})
$('#home-text-save').click(function(){
    $('#home-text-input').hide()
    $('#home-text').removeClass('d-none')
    $('#home-text').html(invtext)
})

// TÊN TOPIC 
let invtopic
$('#invite-topic').click(function(){
    $(this).toggleClass('d-none')
    $('#invite-topic-input').css("display","flex")
})
document.getElementById('invite-topic-input').addEventListener('input',e => {
    invtopic=e.target.value
})
$('#invite-topic-save').click(function(){
    $('#invite-topic-input').hide()
    $('#invite-topic').removeClass('d-none')
    $('#invite-topic').html(invtopic)
})

// NỘI DUNG CHIA SẺ
let topictxt
$('#topic-text').click(function(){
    $(this).toggleClass('d-none')
    $('#topic-text-input').css("display","flex")
})
document.getElementById('topic-text-input').addEventListener('input',e => {
    invtopic=e.target.value
})
$('#topic-text-save').click(function(){
    $('#topic-text-input').hide()
    $('#topic-text').removeClass('d-none')
    $('#topic-text').html(invtopic)
})

// AVT SPEAKER 1
let source1 
const input1 = document.getElementById('avt-speaker-1-input')
const image1 = document.getElementById('avt-speaker-1');
input1.addEventListener('change', (e) => {
    if (e.target.files.length) {
        source1 = URL.createObjectURL(e.target.files[0]);
        image1.src=source1
    }
    $('#avt-speaker-1').removeClass('d-none')
    $('#avt-speaker-1-input').hide()
});
$('#avt-speaker-1').click(function(){
    $(this).toggleClass('d-none')
    $('#avt-speaker-1-input').css("display","flex")
})

// Tên SPEAKER 1
let spkname1
$('#speaker-name-1').click(function(){
    $(this).toggleClass('d-none')
    $('#speaker-name-1-input').css("display","flex")
})
document.getElementById('speaker-name-1-input').addEventListener('input',e => {
    spkname1=e.target.value
})
$('#speaker-name-1-save').click(function(){
    if(spkname1.trim() !== ''){
        $('#speaker-name-1-input').hide()
        $('#speaker-name-1').removeClass('d-none')
        $('#speaker-name-1').html(spkname1)
    }else return
})
// CHỨC DANH SPEAKER 1
let speakerpos1
$('#speaker-pos-1').click(function(){
    $(this).toggleClass('d-none')
    $('#speaker-pos-1-input').css("display","flex")
})
document.getElementById('speaker-pos-1-input').addEventListener('input',e => {
    speakerpos1=e.target.value
})
$('#speaker-pos-1-save').click(function(){
    $('#speaker-pos-1-input').hide()
    $('#speaker-pos-1').removeClass('d-none')
    $('#speaker-pos-1').html(speakerpos1)
    if(speakerpos1.trim() !== ''){
        $('#speaker-pos-1-input').hide()
        $('#speaker-pos-1').removeClass('d-none')
        $('#speaker-pos-1').html(speakerpos1)
    }else return
})
// AVT SPEAKER 2
let source2
const input2 = document.getElementById('avt-speaker-2-input')
const image2 = document.getElementById('avt-speaker-2');
input2.addEventListener('change', (e) => {
    if (e.target.files.length) {
        source2 = URL.createObjectURL(e.target.files[0]);
        image2.src=source2
    }
    $('#avt-speaker-2').removeClass('d-none')
    $('#avt-speaker-2-input').hide()
});
$('#avt-speaker-2').click(function(){
    $(this).toggleClass('d-none')
    $('#avt-speaker-2-input').css("display","flex")
})
// Tên SPEAKER 2
let spkname2
$('#speaker-name-2').click(function(){
    $(this).toggleClass('d-none')
    $('#speaker-name-2-input').css("display","flex")
})
document.getElementById('speaker-name-2-input').addEventListener('input',e => {
    spkname2=e.target.value
})
$('#speaker-name-2-save').click(function(){
    if(spkname2.trim() !== ''){
        $('#speaker-name-2-input').hide()
        $('#speaker-name-2').removeClass('d-none')
        $('#speaker-name-2').html(spkname2)
    }else return
})
// CHỨC DANH SPEAKER 2
let speakerpos2
$('#speaker-pos-2').click(function(){
    $(this).toggleClass('d-none')
    $('#speaker-pos-2-input').css("display","flex")
})
document.getElementById('speaker-pos-2-input').addEventListener('input',e => {
    speakerpos2=e.target.value
})
$('#speaker-pos-2-save').click(function(){
    if(speakerpos2.trim() !== ''){
        $('#speaker-pos-2-input').hide()
        $('#speaker-pos-2').removeClass('d-none')
        $('#speaker-pos-2').html(speakerpos2)
    }else return
})
// AVT SPEAKER 3
let source3
const input3 = document.getElementById('avt-speaker-3-input')
const image3 = document.getElementById('avt-speaker-3');
input3.addEventListener('change', (e) => {
    if (e.target.files.length) {
        source3 = URL.createObjectURL(e.target.files[0]);
        image3.src=source3
    }
    $('#avt-speaker-3').removeClass('d-none')
    $('#avt-speaker-3-input').hide()
});
$('#avt-speaker-3').click(function(){
    $(this).toggleClass('d-none')
    $('#avt-speaker-3-input').css("display","flex")
})
// Tên SPEAKER 3
let spkname3
$('#speaker-name-3').click(function(){
    $(this).toggleClass('d-none')
    $('#speaker-name-3-input').css("display","flex")
})
document.getElementById('speaker-name-3-input').addEventListener('input',e => {
    spkname3=e.target.value
})
$('#speaker-name-3-save').click(function(){
    if(spkname3.trim() !== ''){
        $('#speaker-name-3-input').hide()
        $('#speaker-name-3').removeClass('d-none')
        $('#speaker-name-3').html(spkname3)
    }else return
})
// CHỨC DANH SPEAKER 3
let speakerpos3
$('#speaker-pos-3').click(function(){
    $(this).toggleClass('d-none')
    $('#speaker-pos-3-input').css("display","flex")
})
document.getElementById('speaker-pos-3-input').addEventListener('input',e => {
    speakerpos3=e.target.value
})
$('#speaker-pos-3-save').click(function(){
    if(speakerpos3.trim() !== ''){
        $('#speaker-pos-3-input').hide()
        $('#speaker-pos-3').removeClass('d-none')
        $('#speaker-pos-3').html(speakerpos3)
    }else return
})
// AVT SPEAKER 4
let source4
const input4 = document.getElementById('avt-speaker-4-input')
const image4 = document.getElementById('avt-speaker-4');
input4.addEventListener('change', (e) => {
    if (e.target.files.length) {
        source4 = URL.createObjectURL(e.target.files[0]);
        image4.src=source4
    }
    $('#avt-speaker-4').removeClass('d-none')
    $('#avt-speaker-4-input').hide()
});
$('#avt-speaker-4').click(function(){
    $(this).toggleClass('d-none')
    $('#avt-speaker-4-input').css("display","flex")
})
// Tên SPEAKER 4
let spkname4
$('#speaker-name-4').click(function(){
    $(this).toggleClass('d-none')
    $('#speaker-name-4-input').css("display","flex")
})
document.getElementById('speaker-name-4-input').addEventListener('input',e => {
    spkname4=e.target.value
})
$('#speaker-name-4-save').click(function(){
    if(spkname4.trim() !== ''){
        $('#speaker-name-4-input').hide()
        $('#speaker-name-4').removeClass('d-none')
        $('#speaker-name-4').html(spkname4)
    }else return
})
// CHỨC DANH SPEAKER 4
let speakerpos4
$('#speaker-pos-4').click(function(){
    $(this).toggleClass('d-none')
    $('#speaker-pos-4-input').css("display","flex")
})
document.getElementById('speaker-pos-4-input').addEventListener('input',e => {
    speakerpos4=e.target.value
})
$('#speaker-pos-4-save').click(function(){
    if(speakerpos4.trim() !== ''){
        $('#speaker-pos-4-input').hide()
        $('#speaker-pos-4').removeClass('d-none')
        $('#speaker-pos-4').html(speakerpos4)
    }else return
})

// TÊN ADS
let adsheading
$('#ads-heading').click(function(){
    $(this).toggleClass('d-none')
    $('#ads-heading-input').css("display","flex")
})
document.getElementById('ads-heading-input').addEventListener('input',e => {
    adsheading=e.target.value
})
$('#ads-heading-save').click(function(){
    if(adsheading.trim() !== ''){
        $('#ads-heading-input').hide()
        $('#ads-heading').removeClass('d-none')
        $('#ads-heading').html(adsheading)
    }else return
})

// NỘI DUNG PROMOTION
let adstxt
$('#ads-text').click(function(){
    $(this).toggleClass('d-none')
    $('#ads-text-input').css("display","flex")
})
document.getElementById('ads-text-input').addEventListener('input',e => {
    adstxt=e.target.value
})
$('#ads-text-save').click(function(){
    if(adstxt.trim() !== ''){
        $('#ads-text-input').hide()
        $('#ads-text').removeClass('d-none')
        $('#ads-text').html(adstxt)
    }else return
})

// TEXT BUTTON TOI PHAN DANG KI
let toregbtn
$('#to-reg-btn').click(function(){
    $(this).toggleClass('d-none')
    $('#to-reg-btn-input').css("display","flex")
})
document.getElementById('to-reg-btn-input').addEventListener('input',e => {
    toregbtn=e.target.value
})
$('#to-reg-btn-save').click(function(){
    if(toregbtn.trim() !== ''){
        $('#to-reg-btn-input').hide()
        $('#to-reg-btn').removeClass('d-none')
        $('#to-reg-btn').html(toregbtn)
    }else return
})

// PARTNER HEADING
let partnerheading
$('#partner-heading').click(function(){
    $(this).toggleClass('d-none')
    $('#partner-heading-input').css("display","flex")
})
document.getElementById('partner-heading-input').addEventListener('input',e => {
    partnerheading=e.target.value
})
$('#partner-heading-save').click(function(){
    if(partnerheading.trim() !== ''){
        $('#partner-heading-input').hide()
        $('#partner-heading').removeClass('d-none')
        $('#partner-heading').html(partnerheading)
    }else return
})

// PARTNER TEXT SAVE
let partnertext
$('#partner-text').click(function(){
    $(this).toggleClass('d-none')
    $('#partner-text-input').css("display","flex")
})
document.getElementById('partner-text-input').addEventListener('input',e => {
    partnertext=e.target.value
})
$('#partner-text-save').click(function(){
    if(partnertext.trim() !== ''){
        $('#partner-text-input').hide()
        $('#partner-text').removeClass('d-none')
        $('#partner-text').html(partnertext)
    }else return
})

// AVT ĐỐI TÁC 1
let avtpartner1
const inputpartner1 = document.getElementById('avt-partner-1-input')
const imagepartner1 = document.getElementById('avt-partner-1');
inputpartner1.addEventListener('change', (e) => {
    if (e.target.files.length) {
        avtpartner1 = URL.createObjectURL(e.target.files[0]);
        imagepartner1.src=avtpartner1
    }
    $('#avt-partner-1').removeClass('d-none')
    $('#avt-partner-1-input').hide()
});
$('#avt-partner-1').click(function(){
    $(this).toggleClass('d-none')
    $('#avt-partner-1-input').css("display","flex")
})

// AVT ĐỐI TÁC 2
let avtpartner2
const inputpartner2 = document.getElementById('avt-partner-2-input')
const imagepartner2 = document.getElementById('avt-partner-2');
inputpartner2.addEventListener('change', (e) => {
    if (e.target.files.length) {
        avtpartner2 = URL.createObjectURL(e.target.files[0]);
        imagepartner2.src=avtpartner2
    }
    $('#avt-partner-2').removeClass('d-none')
    $('#avt-partner-2-input').hide()
});
$('#avt-partner-2').click(function(){
    $(this).toggleClass('d-none')
    $('#avt-partner-2-input').css("display","flex")
})

// AVT ĐỐI TÁC 3
let avtpartner3
const inputpartner3 = document.getElementById('avt-partner-3-input')
const imagepartner3 = document.getElementById('avt-partner-3');
inputpartner3.addEventListener('change', (e) => {
    if (e.target.files.length) {
        avtpartner3 = URL.createObjectURL(e.target.files[0]);
        imagepartner3.src=avtpartner3
    }
    $('#avt-partner-3').removeClass('d-none')
    $('#avt-partner-3-input').hide()
});
$('#avt-partner-3').click(function(){
    $(this).toggleClass('d-none')
    $('#avt-partner-3-input').css("display","flex")
})
// AVT ĐỐI TÁC 4
let avtpartner4
const inputpartner4 = document.getElementById('avt-partner-4-input')
const imagepartner4 = document.getElementById('avt-partner-4');
inputpartner4.addEventListener('change', (e) => {
    if (e.target.files.length) {
        avtpartner4 = URL.createObjectURL(e.target.files[0]);
        imagepartner4.src=avtpartner4
    }
    $('#avt-partner-4').removeClass('d-none')
    $('#avt-partner-4-input').hide()
});
$('#avt-partner-4').click(function(){
    $(this).toggleClass('d-none')
    $('#avt-partner-4-input').css("display","flex")
})
// AVT ĐỐI TÁC 5
let avtpartner5
const inputpartner5 = document.getElementById('avt-partner-5-input')
const imagepartner5 = document.getElementById('avt-partner-5');
inputpartner5.addEventListener('change', (e) => {
    if (e.target.files.length) {
        avtpartner5 = URL.createObjectURL(e.target.files[0]);
        imagepartner5.src=avtpartner5
    }
    $('#avt-partner-5').removeClass('d-none')
    $('#avt-partner-5-input').hide()
});
$('#avt-partner-5').click(function(){
    $(this).toggleClass('d-none')
    $('#avt-partner-5-input').css("display","flex")
})
// AVT ĐỐI TÁC 6
let avtpartner6
const inputpartner6 = document.getElementById('avt-partner-6-input')
const imagepartner6 = document.getElementById('avt-partner-6');
inputpartner6.addEventListener('change', (e) => {
    if (e.target.files.length) {
        avtpartner6 = URL.createObjectURL(e.target.files[0]);
        imagepartner6.src=avtpartner6
    }
    $('#avt-partner-6').removeClass('d-none')
    $('#avt-partner-6-input').hide()
});
$('#avt-partner-6').click(function(){
    $(this).toggleClass('d-none')
    $('#avt-partner-6-input').css("display","flex")
})
// JSON 
