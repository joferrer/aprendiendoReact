const path = require('path');
const fs  = require ('fs');
const https =  require('https');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const url = 'https://divisist2.ufps.edu.co/informacion_academica/pensum';

const cookie = '_ga=GA1.3.497342521.1635199518; AMCV_A450776A5245ACC00A490D44%40AdobeOrg=-1124106680%7CMCIDTS%7C19050%7CMCMID%7C24027914493176419602406657574228367364%7CMCAAMLH-1646487236%7C4%7CMCAAMB-1646487236%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1645889636s%7CNONE%7CMCSYNCSOP%7C411-19057%7CvVersion%7C5.2.0; _gid=GA1.3.1919120572.1656977010; ezproxy=UYcUb6sKRmbLZnN; ezproxyl=UYcUb6sKRmbLZnN; ezproxyn=UYcUb6sKRmbLZnN; AMCVS_A450776A5245ACC00A490D44%40AdobeOrg=1; ci_session=58bb27745fc83842e78d580cc29cfad61d2cf5a7; _gat_gtag_UA_145084914_1=1';

const cookieNeider = 'ci_session=d9115827bcc65a3c750d7bf45f8743985b6e044f'



const materias = async()=>{
    let listaMaterias =[];  
    const httpAgent =  new https.Agent({
        rejectUnauthorized: false
    });

    const peti = await fetch(url,{
        method: 'GET',
        "rejectUnauthorized": false, 
        headers:{
            'Content-Type' :'text/html; charset=UTF-8',
            'Cookie': cookieNeider,
            'Accept' : '*/*',
            'Accept-Encoding': 'gzip, deflate, br'
        },
        agent : httpAgent
        
        
    });
    const pg = await peti.text()
    //console.log("MATE2: "+ pg);

    
    const dom = new JSDOM(pg);
    const document = dom.window.document;
    const bodyEl = document.body;
    const materias = document.getElementsByClassName('badge');
    console.log("MATEEEE: 3:  "+materias[0].title)

    for (let i = 0; i < materias.length; i++) {
       const mate = materias[i].innerHTML.split("<b>")[1].toString().split("</b>")[0] +
        ";"+materias[i].title.split("-")[0]+
        ";"+materias[i].title.split("Prerrequisito:")[1]+
        ";"+ materias[i].innerHTML.split("Cred:")[1].toString().charAt(0);
        console.log(mate);
        listaMaterias.push(mate);
        
    }
    


  
    return listaMaterias;
};
const generarJson = async(nombreJson = "none.json")=>{ 
    const pensum = await materias();
    
    let data = []
    pensum.forEach(materia => {
        const datos = materia.split(";");
        const mate = {
            codigo : datos[0],
            nombre : datos[1],
            prerrequisito : datos[2],
            creditos : datos[3]
        }
         data.push(mate);
        
    });
    let json = {
        programa: "Ingenieria Agronomica",
        pensum: data
    };
    fs.writeFileSync(nombreJson, JSON.stringify(json));





}; 
console.log("MATE :" +materias())
generarJson("ing_agronomica_pensum.json")