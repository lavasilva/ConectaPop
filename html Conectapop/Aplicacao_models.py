from django.db import models

class Relatar(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.TextField(blank=True, null=True)
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
    mensagem = models.TextField(max_length=1000, blank=True, null=True)
    opcao1 = models.CharField(max_length=100, blank=True, null=True)
    opcao2 = models.CharField(max_length=100, blank=True, null=True)
    opcao3 = models.CharField(max_length=100, blank=True, null=True)
