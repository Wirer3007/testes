from conectarDB import conectar

def criar():
    conexao = conectar()

    cursor = conexao.cursor

    with open("tcc_bd/database.sql", "r") as arquivo:

        sql = arquivo.read()

        cursor.executescript(sql)

        conexao.commit()

        conexao.close()
