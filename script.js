basededatos=[]

function crearusuario(){
let nombre=document.getElementById("nombre").value,
    correo=document.getElementById("correo").value,
    password=document.getElementById("password").value;

    function user(a, b, c){
        this.nombre=a;
        this.correo=b;
        this.password=c;
    }

    const user1 =new user(nombre,correo,password);

basededatos.push(user1);

console.log(basededatos);


}