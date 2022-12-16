// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10-Role", "11-Nick"]'


var CaracMaximo = 0; // numero de caracteres permitidos | caso seja 0 ele fica sem limite || O NÚMERO MÁXIMO PERMITIDO PELO HAXBALL É 140
var adminPassword = 000; // senha de adm

var TrocaDeChat = 2;   // digite 1 para a sala "Futsal Para Todos"
                      // digite 2 para a sala "brasileirao"

var saudacao = 0; //se a saudação tiver valor diferente de null, ele não manda

var token = 'thr1.AAAAAGObsoLTWjpdydxbkQ.c_qSUfl6R-Q'; //https://www.haxball.com/headlesstoken

//digita a conexão da pessoa banida aqui 
var listaban = ["3137372E33342E3232302E313030", //"PARA TODOS"ACEITA TRANS?
    '3230312E322E31342E3731', // bolsodoria - racista
    '3138392E31332E3136382E3838', // O - flood da quintal
    "3230312E3138322E3231342E313534", //golaço
    "3139312E31372E3138312E323131", //Ribamar (No celular)
    "3137372E38392E3137342E313430", //BILARDO "EL DOC"
    "3137372E31302E3134392E3532", //goleiro
    "3138312E3232302E34392E3631", //BOLAT
    "3138392E36382E3231372E323234", //Kratos_︻ф▅▆▇◤__︻ф▅▆▇◤
    "3138362E3230372E38342E313336", //Vinho
    "3136382E3230352E3133362E313635", //sem nome
    "3230312E3135372E3232392E3832", //ƦaᎥ Mᴇssɪ 亗 
    "34352E3136342E38342E313432", //jin morri	
    "3138392E33372E38312E323238", //terremoto	
    " 3230312E38372E3132372E3931 ", //trovao
    "3137372E38312E37392E313937", //sem nome
]; 
estilo = 'normal';
const aviso = 0; // se botar 1 ele manda no discord quando abrir | 2 ele manda la e marca | 0 ele não manda
const discord = "🔥Entra no discord: https://discord.gg/UjFtf5ymW6 🔥";
const roomName = "⚽Brasileirão⚽";
const botName = "TITE ARROMBADO";
const maxPlayers = 15;
const roomPublic = true;

const geo = [{"code": "DE", "lat": 51.1, "lon": 10.4}, {"code": "FR", "lat": 46.2, "lon": 2.2}, {"code": "PL", "lat": 51.9, "lon": 19.1}, {"code": "GB", "lat": 55.3, "lon": -3.4}, {"lat":-21.749,"lon":-43.4382,"code":"Br"}];
const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, token: token, playerName: botName, geo: geo[4] });

