
const sqlite3 = require('sqlite3');
let db = new sqlite3.Database('./test.db', (err) => { 
    if (err){
        console.log('Error', err);
    }else{
        console.log('Database created!')
        createTable()
    }
})

const createTable = () => {
    console.log('Create database table contacts');
    db.run("CREATE TABLE IF NOt EXISTS contacts(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, status INTEGER)");
}
function insertData()  {
    console.log('Insert data')
    db.run('INSERT INTO contacts (name) VALUES (?)', ['contact 03']);
}

insertData()

const readData = () => {
  console.log('Read data from contacts');
  db.all('SELECT rowid AS id, name FROM contacts', function(err,     rows) {
  rows.forEach(function(row) {
  console.log(row.id + ' : ' + row.name);
  });
});
}
readData()
db.close(); 

function myFunc() {
    const text = document.getElementById('text1').value
    const number = document.getElementById('number1').value
    alert('Тест вывода');
    document.getElementById('output').innerHTML = `${text}${number}`;
    clearForm();
    insertData();
}

function clearForm()  {
    document.getElementById('text1').value = '';
    document.getElementById('number1').value = '';
}