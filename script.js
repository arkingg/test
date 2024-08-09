let usernamemassge = document.querySelector('.username')
let passwordmassge = document.querySelector('.password')
let userspan = document.querySelector('.userspan')
let passspan = document.querySelector('.passspan')


function userekhtar () {

    if(usernamemassge.value.length < 12){


        userspan.style.display ='block'
        userspan.innerHTML= " تعداد حرف های نام کاربری کمتر از 12"
        userspan.style.color='red'

        


    }else{

        userspan.style.color='green'
        userspan.style.display ='block'
        userspan.innerHTML= 'صحیح است'
        usernamemassge.value.trim().length==""






    }

}

function passekhtar () {


    if(passwordmassge.value.length < 8){

          passspan.style.display ='block'
          passspan.innerHTML= " تعداد حرف های رمز ورود کمتر از 8"
          passspan.style.color='red'


    } else{

        passspan.style.color='green'
        passspan.style.display ='block'
        passspan.innerHTML= 'صحیح است'
        passwordmassge.value.trim().length==""






    }
}
