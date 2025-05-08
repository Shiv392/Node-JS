console.log('this is js file ------------>');

const formSubmit=(event)=>{
    console.log('form submit--------->');
    event.preventDefault();

    const name=document.getElementById('name').value ;
    const email=document.getElementById('email').value;
    const password = document.getElementById('password').value;
}