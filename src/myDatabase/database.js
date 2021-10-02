const database = [{"email":"esmetoun0@usda.gov","Password":"N7MBsKC","contact":"399-385-9071","firstName":"Emelina","lastName":"Smetoun"},
    {"email":"ckurth1@ft.com","Password":"A8tP3K4Ay4i","contact":"717-554-8227","firstName":"Carol-jean","lastName":"Kurth"},
    {"email":"nmartellini2@bluehost.com","Password":"Y9BCDOJGRsB","contact":"223-666-4542","firstName":"Nealy","lastName":"Martellini"},
    {"email":"hmaccollom3@moonfruit.com","Password":"1OKq4C","contact":"688-287-4479","firstName":"Harrietta","lastName":"MacCollom"},
    {"email":"bdudmarsh4@elegantthemes.com","Password":"eo1TyV","contact":"989-461-8239","firstName":"Bryon","lastName":"Dudmarsh"},
    {"email":"cdewberry5@fastcompany.com","Password":"32QN7heJrLmk","contact":"717-141-8500","firstName":"Conway","lastName":"Dewberry"},
    {"email":"babramof6@ucla.edu","Password":"MZR2iFzzYtKz","contact":"270-421-3558","firstName":"Berti","lastName":"Abramof"},
    {"email":"npolon7@ibm.com","Password":"Kx9Uv2HBM82q","contact":"592-553-1927","firstName":"Nicolea","lastName":"Polon"},
    {"email":"pwissby8@quantcast.com","Password":"ORJm4xs7M","contact":"765-686-4174","firstName":"Paige","lastName":"Wissby"},
    {"email":"adrummond9@cisco.com","Password":"cUjUF2buU","contact":"216-993-1600","firstName":"Ario","lastName":"Drummond"},
    {"email":"frodmana@tripadvisor.com","Password":"h6WH0Lt9TCz","contact":"635-448-1190","firstName":"Franciskus","lastName":"Rodman"},
    {"email":"kdowsonb@wikispaces.com","Password":"smRKnJ8qV","contact":"845-180-0745","firstName":"Kippy","lastName":"Dowson"},
    {"email":"wremmersc@seattletimes.com","Password":"kiHueQsjm","contact":"573-771-6779","firstName":"Winne","lastName":"Remmers"},
    {"email":"kdoriand@hostgator.com","Password":"T74WSzPoFtC","contact":"863-592-2438","firstName":"Kellby","lastName":"Dorian"},
    {"email":"gbrandine@linkedin.com","Password":"9CoQO2vnLw","contact":"765-359-9196","firstName":"Godfry","lastName":"Brandin"},
    {"email":"bcollyerf@creativecommons.org","Password":"PP57f9p","contact":"650-281-9002","firstName":"Bili","lastName":"Collyer"},
    {"email":"afincherg@tinyurl.com","Password":"t5nchyVqly3M","contact":"113-913-2746","firstName":"Adlai","lastName":"Fincher"},
    {"email":"hneilandh@theguardian.com","Password":"thGaTYm","contact":"672-478-2475","firstName":"Harriett","lastName":"Neiland"},
    {"email":"nhoovarti@weebly.com","Password":"TKeBudp","contact":"128-432-0233","firstName":"Nickolaus","lastName":"Hoovart"},
    {"email":"max@gmail.com","Password":"max","contact":"579-894-9533","firstName":"Garrard","lastName":"Pyzer"}];


//function to return a single user
  const getUserByEmail =(email)=>{
   return database.filter(user=>user.email===email);
}

export const loginValidation = (email,password)=>{
  
    return new Promise((resolve, reject) => {
        const res =  database.filter(user => (user.email === email) && (user.Password === password) );

        if(res.length > 0){
            resolve(res)
        }

        reject('Oops that did not work')
    });
   
}


console.log(loginValidation('max@gmail.com','eJyNvVn'))

//a function to return all users
 const getUsers=()=>{
    return database;
}

// a function to alter a certain user's details{email,column,data}
const updateUserData=(email,column,data)=>{
    const users = database
    const index = users.findIndex(user=>user.email === email);
    users[index][column] = data;
    // console.log(users[index][column],data)
}

updateUserData('npolon7@ibm.com','Password','newman@gmail.com');
// export default database;
// console.log(getUserByEmail('nmartellini2@bluehost.com'));
// console.log(getUsers())