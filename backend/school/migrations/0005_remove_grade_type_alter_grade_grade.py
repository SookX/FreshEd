# Generated by Django 5.0.3 on 2024-03-16 01:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('school', '0004_grade_holder'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='grade',
            name='type',
        ),
        migrations.AlterField(
            model_name='grade',
            name='grade',
            field=models.IntegerField(default=2),
        ),
    ]