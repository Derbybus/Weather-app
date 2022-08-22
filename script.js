document.getElementById('add').addEventListener('click', function(){
    let x = document.getElementById('cityinput').value

    

    let a = 'accra'
    let b = 'London'
    let c = 'Paris'
    let d = 'New York'
    let e = 'Kumasi'
    

    if(a==x.toLowerCase()){
        document.getElementById('cities').innerHTML = 'Accra'
        document.getElementById('morning').innerHTML='Morning : 19&degC';
        document.getElementById('afternoon').innerHTML='Afternoon : 25&degC';
        document.getElementById('evening').innerHTML='Evening : 10&degC';
    }
    else if(b==x.toLowerCase){
        document.getElementById('cities').innerHTML='London';
        document.getElementById('morning').innerHTML='Morning : 17&degC';
        document.getElementById('afternoon').innerHTML='Afternoon : 25&degC';
        document.getElementById('evening').innerHTML='Evening : 27&degC';
    }
    else if(c==x.toLowerCase){
        document.getElementById('cities').innerHTML='Paris';
        document.getElementById('morning').innerHTML='Morning : -15&degC';
        document.getElementById('afternoon').innerHTML='Afternoon : 1&degC';
        document.getElementById('evening').innerHTML='Evening : 10&degC';
    }
    else if(d==x.toLowerCase){
        document.getElementById('cities').innerHTML='New York';
        document.getElementById('morning').innerHTML='Morning : 19&degC';
        document.getElementById('afternoon').innerHTML='Afternoon : 22&degC';
        document.getElementById('evening').innerHTML='Evening : 29&degC';
    }
    else if(e==x.toLowerCase){
        document.getElementById('cities').innerHTML='Kumasi';
        document.getElementById('morning').innerHTML='Morning : 4&degC';
        document.getElementById('afternoon').innerHTML='Afternoon : 30&degC';
        document.getElementById('evening').innerHTML='Evening : 21&degC';
    }
    
  else {
    document.getElementById('evening').innerHTML='You entered the wrong city.';
  }
  
  })
