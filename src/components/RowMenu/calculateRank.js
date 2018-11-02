export default (data)=>{
    console.log(data);
    let sumaRank = data.reduce((a,b)=>a+b,0)
    let average = sumaRank/data.length
    console.log((Math.round(average *2 ) / 2).toFixed(1))
    return(Math.round(average*2) / 2).toFixed(1);
}