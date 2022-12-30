const practice= async()=>{
    const request= await fetch('https://jsonplaceholder.typicode.com/todos',{
        headers:{
            'content-Type':'application/json'
        }
    });
    const response = await request.json() ;
    return response;
}
practice().then(response =>{
    response.map((el,i)=>{
       console.log(`id : ${el.userId} title: ${el.title} completed: ${el.completed}`);
    })
})
.catch(err =>{
    console.error(err)
})
