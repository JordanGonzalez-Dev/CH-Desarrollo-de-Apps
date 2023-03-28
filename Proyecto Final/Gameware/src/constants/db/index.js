import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("user.db");

// export const init = () => {
//   const promise = new Promise((resolve, reject) => {
//     db.transaction((tx) => {
//       tx.executeSql(
//         "DROP TABLE IF EXISTS user;",
//         [],
//         () => {
//           resolve();
//         },
//         (_, err) => {
//           reject(err);
//         }
//       );
//     });
//   });

//   return promise;
// };

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY NOT NULL, nombre TEXT NOT NULL, direccion TEXT NOT NULL, lat TEXT NOT NULL, lng TEXT NOT NULL);",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const insertAddress = (title, address, lat, lng) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO user (nombre, direccion, lat, lng) VALUES (?, ?, ?, ?);",
        [title, address, lat, lng],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const getAddress = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM user",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};
