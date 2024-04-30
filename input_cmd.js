// console.log(" here we take input from the command ")
const fs= require ('fs');
const input =process.argv;
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}else if(input[2]=='sub') {
    fs.unlinkSync(input[3]);


}
else{
    console.log(" error in input ");

}

