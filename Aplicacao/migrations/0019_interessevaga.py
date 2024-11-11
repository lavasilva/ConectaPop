# Generated by Django 5.1.1 on 2024-11-11 12:01

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Aplicacao', '0018_rename_comentarios_avaliacaoreforma_justificativa_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='InteresseVaga',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('vaga', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Aplicacao.vaga')),
            ],
        ),
    ]