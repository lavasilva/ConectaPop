# Generated by Django 5.1.1 on 2024-09-26 21:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Aplicacao', '0010_alter_relatar_descricao'),
    ]

    operations = [
        migrations.AlterField(
            model_name='enquetes',
            name='mensagem',
            field=models.TextField(blank=True, max_length=500, null=True),
        ),
    ]
