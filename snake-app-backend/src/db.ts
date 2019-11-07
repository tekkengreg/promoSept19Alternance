import { Database, Statement } from 'sqlite3';

console.log('db')
const db: Database = new Database('./db/snake.db');

// db.serialize(() => {
//   db.run("CREATE TABLE items (info TEXT)");

//   const stmt: Statement = db.prepare("INSERT INTO items VALUES (?)");
//   for (let i = 0; i < 10; i++) {
//     stmt.run(`Item #${i}`);
//   }
//   stmt.finalize();

//   db.each("SELECT rowid AS id, info FROM items", (err, row) => {
//     if (err) console.log(err);
//     console.log(row.id + ": " + row.info);
//   });
// });

// db.close();

export default db;