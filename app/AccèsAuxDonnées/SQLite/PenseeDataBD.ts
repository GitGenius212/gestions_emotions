import * as SQLite from 'expo-sqlite';


const db = await SQLite.openDatabaseAsync('Pensees');

// `execAsync()` is useful for bulk queries when you want to execute altogether.
// Note that `execAsync()` does not escape parameters and may lead to SQL injection.
await db.execAsync(`
PRAGMA journal_mode = WAL;

CREATE TABLE IF NOT EXISTS PenseeData (
id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT, 
element_declencheur TEXT NOT NULL DEFAULT '', 
interpretation TEXT NOT NULL DEFAULT '', 
date TEXT NOT NULL, 
contre_pensee_negative TEXT NOT NULL DEFAULT ''
);

CREATE TABLE IF NOT EXISTS ÉmotionAvant (
pensee_id NOT NULL, 
emotion TEXT NOT NULL, 
PRIMARY KEY (pensee_id),
FOREIGN KEY (pensee_id) REFERENCES PenseeData(pensee_id)
);

CREATE TABLE IF NOT EXISTS ÉmotionAprès (
pensee_id NOT NULL, 
emotion TEXT NOT NULL, 
PRIMARY KEY (pensee_id),
FOREIGN KEY (pensee_id) REFERENCES PenseeData(pensee_id)
);

INSERT INTO PenseeData (
id, 
element_declencheur, 
interpretation, 
date, 
contre_pensee_negative
) VALUES ("La sécurité m'a dit de venir", "J'ai peur qu'il me fait du mal", "2025-06-12T05:11:37.962Z", "Sois bien avec toi-même. Prends ton temps");

INSERT INTO PenseeData (
element_declencheur, 
interpretation, 
date, 
contre_pensee_negative
) VALUES ("Ma tante m'a dit si la chemise me va bien", "OOOOOOOHHHHH ! Elle est meilleur que moi", "2025-06-13T10:12:54.992Z", "Personne n'est meilleur que l'autre que par la piété");

INSERT INTO ÉmotionAvant (pensee_id, emotion) VALUES (1, 'Peur');
INSERT INTO ÉmotionAprès (pensee_id, emotion) VALUES (1, 'Joie');

INSERT INTO ÉmotionAvant (pensee_id, emotion) VALUES (2, 'Peur');
INSERT INTO ÉmotionAvant (pensee_id, emotion) VALUES (2, 'Colère');
INSERT INTO ÉmotionAprès (pensee_id, emotion) VALUES (2, 'Colère');
`);

// `runAsync()` is useful when you want to execute some write operations.
const result = await db.runAsync('INSERT INTO test (value, intValue) VALUES (?, ?)', 'aaa', 100);
console.log(result.lastInsertRowId, result.changes);
await db.runAsync('UPDATE test SET intValue = ? WHERE value = ?', 999, 'aaa'); // Binding unnamed parameters from variadic arguments
await db.runAsync('UPDATE test SET intValue = ? WHERE value = ?', [999, 'aaa']); // Binding unnamed parameters from array
await db.runAsync('DELETE FROM test WHERE value = $value', { $value: 'aaa' }); // Binding named parameters from object

// `getFirstAsync()` is useful when you want to get a single row from the database.
const firstRow = await db.getFirstAsync<any>('SELECT * FROM PenseeData');
console.log(firstRow.id, firstRow.element_declencheur, firstRow.interpretation, firstRow.contre_pensee_negative, firstRow.date);

// `getAllAsync()` is useful when you want to get all results as an array of objects.
const allRows = await db.getAllAsync<any>('SELECT * FROM PenseeData');
for (const row of allRows) {
    console.log(row.id, row.element_declencheur, row.interpretation, row.contre_pensee_negative, row.date);
}

// `getEachAsync()` is useful when you want to iterate SQLite query cursor.
for await (const row of db.getEachAsync<any>('SELECT * FROM PenseeData')) {
    console.log(row.id, row.element_declencheur, row.interpretation, row.contre_pensee_negative, row.date);
}
