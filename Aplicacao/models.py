from django.db import models

class Relatar(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.TextField(max_length=500, blank=True, null=True)
    problema = models.CharField(max_length=50)
    endereco = models.CharField(max_length=300)
    cidade = models.CharField(max_length=100)
    estado = models.CharField(max_length=100)
    cep = models.CharField(max_length=50)
    foto = models.URLField(blank=True, null=True)

class Enquetes(models.Model):
    nome = models.CharField(max_length=100, blank=True, null=True)
    idade = models.CharField(max_length=3, blank=True, null=True)
    endereco = models.CharField(max_length=300, blank=True, null=True)
    mensagem = models.TextField(max_length=500, blank=True, null=True)
    opcao1 = models.CharField(max_length=100, blank=True, null=True)
    opcao2 = models.CharField(max_length=100, blank=True, null=True)
    opcao3 = models.CharField(max_length=100, blank=True, null=True)

class Relatorio(models.Model):
    titulo = models.CharField(max_length=200)
    descricao = models.TextField()
    data = models.DateField()
    status = models.CharField(max_length=50)
    validacao = models.CharField(max_length=50)
    comentarios = models.TextField(blank=True)

    def _str_(self):
        return self.titulo

class Violacao(models.Model):
    endereco = models.CharField(max_length=300, blank=False)
    servico = models.CharField(max_length=255, blank=False)
    violacao = models.TextField()
    data_registro = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Violação em {self.endereco} - {self.servico}"

class Vaga(models.Model):
    TEMPO_VAGA_CHOICES = [
        ('1-mes', '1 Mês'),
        ('2-meses', '2 Meses'),
        ('3-meses', '3 Meses'),
        ('indeterminado', 'Indeterminado')
    ]

    NIVEL_ESCOLARIDADE_CHOICES = [
        ('ensino-fundamental', 'Ensino Fundamental'),
        ('ensino-medio', 'Ensino Médio'),
        ('ensino-superior', 'Ensino Superior'),
        ('pos-graduacao', 'Pós-Graduação'),
        ('doutorado', 'Doutorado')
    ]

    titulo_vaga = models.CharField(max_length=255)
    descricao_vaga = models.TextField()
    pretensao_salarial = models.CharField(max_length=100)
    tempo_vaga = models.CharField(max_length=50, choices=TEMPO_VAGA_CHOICES)
    nivel_escolaridade = models.CharField(max_length=100, choices=NIVEL_ESCOLARIDADE_CHOICES)
    email_contato = models.EmailField()

    def __str__(self):
        return self.titulo_vaga

