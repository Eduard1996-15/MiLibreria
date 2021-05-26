function InvertirTexto(tex)
{
    let textInv ="";
    for(let i = tex.length; i>=0;i--)
    {
       textInv += tex.charAt(i);
    }
    return textInv;
}
function ContarLetras(texto, letr)
{
    cantLetra=0;
    for(let i = 0; i<texto.length; i ++){
        if(letr === texto.charAt(i))
        {
            cantLetra++;
        }
     }
     return cantLetra;
}
function ContarVocales(texto){
    let cant=0;
    let vocal = [5];
    vocal = ["a", "e", "i", "o", "u"];
    for (let i = 0; i<= texto.length; i ++)
    {
       if(texto.charAt(i) === vocal[0]  || texto.charAt(i) === vocal[1]  || texto.charAt(i) === vocal[2]  ||
       texto.charAt(i) === vocal[3]  || texto.charAt(i) === vocal[4]  )
       {
        cant++;
       }
    }
    return cant;
}
function verificarSubCadena(texto, subcadena)
{
    let es = true;
    if(texto.indexOf(subcadena) === -1){
        es = false;
    }
    return es;
}
function QuitarCaracter(tex, otro)
{
    let nuevo="";
    
    for(let i = 0; i< tex.length; i++){
        if(tex.charAt(i)=== otro){
            nuevo += "";
        }else
        {
            nuevo += tex.charAt(i);
        }
    }
    return nuevo;
}
function contadorPalabras(tex)
{
    let contador=1;
    
    for(let i = 0; i< tex.length; i++){
        if(tex.charAt(i)=== " "){
            contador++;
        }
    }
    return contador;
}
function Igualdad_Primera_Ultima_Letra(palabra)
{
    let igual ;
    let palabrainvertida = InvertirTexto(palabra);
        if(palabra.charAt(0) === palabrainvertida.charAt(0) ){
            igual =  true;
        }else{
            igual = false;
        }
   
    return igual;
}
function MatriculaDepartamento(matricula)
    {     
      let returno="";
      let letra ="";
      
       for(let i =0; i< matricula.length -5; i++)
        {           
           letra = matricula.charAt(0);
        }
        
        letra = letra.toUpperCase();
       
        switch(letra)
        {
         case "A":
         returno = "Canelones";
         break;
         case "B":
         returno= "Maldonado";
         break;
         case "C":
            returno=  "Rocha";
            break;
         case "D":
            returno=  "Treinta y tres";
            break;
         case "E":
            returno=  "Cerro largo";
            break;
         case "F":
            returno=  "Rivera";
            break;
         case "G":
            returno=  "Artigas";
            break;
         case "H":
            returno=  "Salto";
            break;
         case "I":
            returno=  "Paysandu";
            break;
         case "J":
            returno=  "Rio Negro";
            break;
         case "K":
            returno=  "Soriano";
            break;
         case "L":
            returno=  "colonia ";
            break;
         case "M":
            returno=  "San Jose";
            break;
         case "N":
            returno=  "Flores";
            break;
         case "O":
            returno=  "Florida";
            break;
         case "P":
            returno=  "lavalleja";
            break;
         case "Q":
            returno=  "Durazno";
            break;
         case "R":
            returno=  "Tacuarembo";
            break;
         case "S":
            returno=  "Montevideo";
            break;
         default:
            {
             returno = " No peretenece a ninguno de los 19 Departamentos ";
             break;
            }
        }
       return returno;
}
function PrimeraMayusTodasMinus(tx){
      txNuevo ="";
      tx = tx.toLowerCase();
      let letra = tx.charAt(0);
      let may= letra.toUpperCase();
      for (let i = 1; i < tx.length;i++){
        txNuevo += tx.charAt(i);
       txNuevo.toLowerCase();
     }
       txNuevo = may + txNuevo;
      return txNuevo;
}
function SustituirCaracter(tex, este, poreste)
{
    let nuevo="";
   
    for(let i = 0; i< tex.length; i++){
        if(tex.charAt(i)=== este){
            nuevo += poreste;
        }else
        {
            nuevo += tex.charAt(i);
        }
    }
    return nuevo;
}
function guardarMayorde(arra,num)
{
   let mayor20 = [];
   for (let i =0 ; i< arra.length; i++)
   {
       if(arra[i] > num)
       {
        mayor20.push(arra[i]);
       }
   }
   return mayor20;
}
function obtenerNombreporUltimaLetra(arrNombres, letra) {
    let nuevoArrNombres = [];
  
    for (let i = 0; i < arrNombres.length; i++) {
      let nom = arrNombres[i];
      //if(arrMascotas[i].charAt(arrMascotas[i].length - 1) === letra){
      if (nom.charAt(nom.length - 1) === letra) {
        nuevoArrNombres.push(nom);
        //nuevoArrMascotas.push(arrMascotas[i]);
      }
    }
  
    return nuevoArrNombres;
}
function mayor_o_igual_alPrimero(arreglo){
    let newArr = [];
    for (let i = 1; i < arreglo.length; i++) {
        if(arreglo[0] === arreglo[i] || arreglo[i] > arreglo[0])
        {
            newArr.push(arreglo[i]);
        }
    }
    return newArr;
}
function Buscar(busqueda, arreglo){
    let encontre =false;
    if(arreglo.indexOf(busqueda) > -1){
        encontre =true;
    }
  return encontre;
}
function BorrarRepetidos(a)
{
    let newArr = [];
    for(let  i=0;i<a.length;i++)
    {
        let elem= a[i];
        if(a.indexOf(elem)=== i)
        {
            //Primera impresión
            newArr.push(elem);
        }
    }
    return newArr;
}
function BuscarContarelemento(busked, arr)
{//devuelve cantidad
    let encontre=0;
    for (let i =0; i< arr.length;i++)
    {
            if(busked === arr[i])
           {
              encontre ++;
           }
    } 
  return encontre;
}
function buscarUsuario(usuarios, usu)
{
    let log = false;
        for(let i = 0; i < usuarios.length; i++){
            let unUS = usuarios[i];
        
        if(unUS.usu === usu ){
            log = true;
        }
    }
        return log
}
function logueoUsuArrays(array1, array2, usu, contra)
{
    let log = false;
    let indiceUsu = array1.indexOf(usu);
    let indClave = array2.indexOf(contra);
      if(indiceUsu === indClave)
       {
           log =true;
        }
    return log;
}
function contarLetras(texto)//todo el array o elemento modificable//o solo un texto
{
    let cant =0;
    for (let i = 0; i < texto.length; i++) {
        cant += texto[i].length;
    }
    return cant;
}