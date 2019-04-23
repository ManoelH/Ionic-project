import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  protected tabela:string;

  constructor(private sqlite: SQLite) {
    this.createDB();
   }

   private createDB() {
    this.getDB().then((db:SQLiteObject) => {
      db.executeSql("CREATE TABLE IF NOT EXISTS usuarios ( id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, senha TEXT, telefone TEXT)", []);
    });
  }

    /** Recupera banco de dados  */
    protected getDB() {
      return this.sqlite.create({
        name: 'songs.db',
        location: 'default'
      });
    }

      /** Insert*/
  public insert(user) {

    //let key = Object.keys(obj);
    //let values = Object.values(obj);
    //let interrogacoes = new Array(key.length).fill('?');

    this.getDB().then((db:SQLiteObject) => {
      db.executeSql("INSERT INTO usuarios (email, senha, telefone) VALUES(?, ?, ?)", [user.email, user.senha, user.telefone]);
    });
  }

  public logar(email: any, senha:any): Promise<any> {
    return this.getDB().then((db:SQLiteObject) => {
      return db.executeSql("SELECT email FROM usuarios WHERE email = ? AND senha = ?", [email, senha]).then(resultado => {
        return (resultado.rows.length > 0);
      });
    });
  }
}
