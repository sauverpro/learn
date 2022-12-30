const secondApi= async()=>{
    const request = await fetch('https://jsonplaceholder.typicode.com/todos',
    {
        headers:{
            'content-Type':'application/json'
        }
    });
    const response= await request.json();
    return response;
}
secondApi().then(
    response => console.log(response))
            .catch( err => {
    console.error(err);
});