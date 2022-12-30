const myApi= async()=>{
    const request= await fetch('https://jsonplaceholder.typicode.com/users',{
        Headers:{
            'Content-Type':'application/json'
        }
    });
    const response= await request.json();
    return response;
}
myApi().then(response=>{
    response.map((el,i)=>{
        console.log(`
        id: ${el.id} 
        name: ${el.name} 
        username: ${el.username} 
        email: ${el.email} 
        address:
        zipp-code: ${el.address.zipcode} street: ${el.address.street}  suite: ${el.address.suite} city: ${el.address.city}`);
    })
})
.catch(err=>{
    console.error(err);
})