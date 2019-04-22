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
      db.executeSql("CREATE TABLE IF NOT EXISTS usuarios( id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, senha TEXT, telefone TEXT)", []);
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
  public insert(obj: Object) {

    let key = Object.keys(obj);
    let values = Object.values(obj);
    let interrogacoes = new Array(key.length).fill('?');

    this.getDB().then((db:SQLiteObject) => {
      db.executeSql("INSERT INTO " + this.tabela + " (" + key.join(', ') + ") VALUES(" + interrogacoes.join(', ') + ")", values);
    });
  }

  public login(email:any, senha:any): Promise<any> {
    return this.getDB().then((db:SQLiteObject) => {
      return db.executeSql("SELECT * FROM " + this.tabela + " WHERE email = ? and senha = ?", [email, senha]).then(resultado => {
        if (resultado.rows.length > 0)
          return resultado.rows.item(0);
        return null;
      })
    });
  }
}
