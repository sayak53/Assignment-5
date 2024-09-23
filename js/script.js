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

document.getElementById('first-donate-now').addEventListener('click',function(event){
    event.preventDefault()
    const first=document.getElementById('first-donate-input').value
    const second=document.getElementById('second-donate-input').value
    const third=document.getElementById('third-donate-input').value
    
    const mainBalance1=document.getElementById('main-first')
    const mainBalance2=document.getElementById('main-second')
    const mainBalance3=document.getElementById('main-third')
})