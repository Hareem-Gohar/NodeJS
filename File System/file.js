const fs = require("fs");

const writeToFile = () => {
    // ..Sync
    fs.writeFileSync("./text.txt", "hey therewwwwwwwwwe!");
    //   ...Async --didnt return anything, it expects a callback
    fs.writeFile("./text.txt", "hey!", (err) => { });
};

const readFile = () => {
    // ..Sync
    const result = fs.readFileSync("./contact.txt", "utf-8");
    console.log(result);

    //   ...Async   --didnt return anything, it expects a callback
    fs.readFile("./contact.txt", "utf-8", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
};

const appendData = () => {
    // Sync version: Appends data and blocks further execution until done
    fs.appendFileSync("./test.txt", `${Date.now()} Hey!\n`);
    // Async version: Appends data and continues execution without blocking
    fs.appendFile("./test.txt", `${Date.now()} noooo!\n`, (err) =>{})
};

const deltFile = () =>{
    fs.writeFileSync("./delt.txt" , 'file Completed')
    //Sync version: 
    fs.unlinkSync("./delt.txt");
}

module.exports = { writeToFile, readFile, appendData, deltFile };
