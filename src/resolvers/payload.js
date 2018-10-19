export default (token) => {
    
    
    let base64Uri = token.split('.')[1];
    
    console.log(base64Uri,'<<< ANTES DEL REPLACES')

    let base64 = base64Uri.replace('-','+').replace('_','/');
    
    console.log(base64,'<<<<DESPUES DEL REPLACE')
    console.log(JSON.parse(window.atob(base64)),'<<<<DESPUES DEL REPLACE<<<')

    return JSON.parse(window.atob(base64))
}