CREATE TABLE imovel (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    tipo  VARCHAR(50) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    quartos INT NOT NULL,
    metragem DECIMAL(8, 2) NOT NULL,
    bairro VARCHAR(150) NOT NULL
);