# Generated by Django 5.0.3 on 2024-03-16 02:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('school', '0006_alter_log_message'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='student',
            name='grades',
        ),
    ]
