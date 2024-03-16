# Generated by Django 5.0.3 on 2024-03-16 00:41

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('school', '0004_grade_holder'),
    ]

    operations = [
        migrations.AlterField(
            model_name='grade',
            name='grade',
            field=models.IntegerField(default=2),
        ),
        migrations.CreateModel(
            name='Log',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('message', models.CharField(default='', max_length=100)),
                ('test', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='school.test')),
                ('user', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='school.student')),
            ],
        ),
    ]