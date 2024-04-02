import { openDatabase } from 'expo-sqlite';
import { format } from 'date-fns';

const db = openDatabase('UserDatabase.db');

function createTable() {
    console.log("Creating tables...");
    db.transaction(tx => {
      tx.executeSql(
        `
        CREATE TABLE IF NOT EXISTS users (
          id TEXT PRIMARY KEY,
          nama TEXT,
          username TEXT,
          level TEXT,
          telepon TEXT,
          tanggal DATE
        );`,
        [],
        () => console.log('Tables created successfully.'),
        (_, error) => console.error('Error creating tables:', error)
      );
    });
    db.transaction(tx => {
      tx.executeSql(
        `
        CREATE TABLE IF NOT EXISTS bookmark (
          id TEXT PRIMARY KEY,
          cover TEXT,
          judul TEXT
        );`,
        [],
        () => console.log('Tables created successfully.'),
        (_, error) => console.error('Error creating tables:', error)
      );
    });
    db.transaction(tx => {
      tx.executeSql(
        `
        CREATE TABLE IF NOT EXISTS cart (
          id TEXT PRIMARY KEY,
          harga INTEGER,
          judul TEXT,
          jumlah INTEGER
        );`,
        [],
        () => console.log('Tables created successfully.'),
        (_, error) => console.error('Error creating tables:', error)
      );
    });
  }
  
  
  function insertBookmark(id, cover, judul) {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO bookmark (id, cover, judul) VALUES (?,?,?)',
        [id, cover, judul],
        () => console.log('Bookmark inserted successfully.'),
        (_, error) => console.error('Error inserting bookmark:', error)
      );
    });
  }
  
  function removeBookmark(id) {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM bookmark  where id = ?',
        [id],
        () => console.log('Bookmark deleted successfully.'),
        (_, error) => console.error('Error deleting bookmark:', error)
      );
    });
  }
  
  function selectBookmark(callback) {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM bookmark',
        [],
        (_, { rows }) => {
          const temp = [];
          for (let i = 0; i < rows.length; i++) {
            temp.push(rows.item(i));
          }
          callback(temp);
        },
        (_, error) => console.error('Error selecting bookmark:', error)
      );
    });
  }
  
  export { createTable, insertBookmark, removeBookmark, selectBookmark };  