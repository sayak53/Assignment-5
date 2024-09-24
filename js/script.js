document.getElementById('history-button').addEventListener('click',function(){
    const donation = document.getElementById('donation')
    donation.setAttribute('class','hidden')

    const history = document.getElementById('history')
    history.setAttribute('class','block')

    document.getElementById('history-button').classList.add('green-background')
    document.getElementById('donation-button').classList.remove('green-background')
})

document.getElementById('donation-button').addEventListener('click',function(){
    const donation = document.getElementById('donation')
    donation.setAttribute('class','block')

    const history = document.getElementById('history')
    history.setAttribute('class','hidden')

    document.getElementById('history-button').classList.remove('green-background')
    document.getElementById('donation-button').classList.add('green-background')
})

document.getElementById('blog-btn').addEventListener('click',function(){
    window.location='blog.html'
})
// first-donation logic
document.getElementById('first-donate-now').addEventListener('click',function(event){
    event.preventDefault()
    const first=document.getElementById('first-donate-input').value
    const f=parseInt(first)

    const mainBalance1=document.getElementById('main-first').innerText
    const main=parseInt(mainBalance1)

   if(isNaN(first)==false){
    const addition=f+main
    document.getElementById('main-first').innerText=addition

    const mainB=document.getElementById('main-balance').innerText
    const integerMain=parseInt(mainB)
    console.log(integerMain)

    const substraction=mainB-f
    document.getElementById('main-balance').innerText=substraction 

    const p=document.createElement('p')
    p.innerText=`${f} is donated for flood at noakhali`

    document.getElementById('transanction-history').appendChild(p)

    alert("succeesfully donated")
   }
   else{
    alert("Please Enter a Valid Amount")
   }
})
// second-donation logic
document.getElementById('second-donate-now').addEventListener('click',function(event){
    event.preventDefault()
    const first=document.getElementById('second-donate-input').value
    const f=parseInt(first)

    const mainBalance1=document.getElementById('main-second').innerText
    const main=parseInt(mainBalance1)

    if(isNaN(first)==false){
        const addition=f+main
    document.getElementById('main-second').innerText=addition

    const mainB=document.getElementById('main-balance').innerText
    const integerMain=parseInt(mainB)
    console.log(integerMain)

    const substraction=mainB-f
    document.getElementById('main-balance').innerText=substraction
    
    const p=document.createElement('p')
    p.innerText=`${f} is donated for flood at feni`

    document.getElementById('transanction-history').appendChild(p)
    alert("succeesfully donated")
    }
    else{
        alert("Please Enter a Valid Amount")
    }
})
// third-donation logic
document.getElementById('third-donate-now').addEventListener('click',function(event){
    event.preventDefault()
    const first=document.getElementById('third-donate-input').value
    const f=parseInt(first)

    const mainBalance1=document.getElementById('main-third').innerText
    const main=parseInt(mainBalance1)

    if(isNaN(first)==false){
        const addition=f+main
        document.getElementById('main-third').innerText=addition
    
        const mainB=document.getElementById('main-balance').innerText
        const integerMain=parseInt(mainB)
        console.log(integerMain)
    
        const substraction=mainB-f
        document.getElementById('main-balance').innerText=substraction
        
        const p=document.createElement('p')
        p.innerText=`${f} is donated for injured at quota movement`
    
        document.getElementById('transanction-history').appendChild(p)
        alert("succeesfully donated")
    }
    else{
        alert("Please Enter a Valid Amount")
    }
})