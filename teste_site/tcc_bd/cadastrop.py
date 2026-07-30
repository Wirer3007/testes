from conectarDB import conectar

def cadastro(nome, preco, estoque, validade, lote):

    conexao = conectar()

    cursor = conexao.cursor()

    cursor.execute(

        "INSERT INTO   produtos(nome, preco, estoque, validade, lote) VALUES (?, ?, ?, ?, ?)",

        (nome, preco, estoque, validade, lote)
    )

    conexao.commit()

    conexao.close()