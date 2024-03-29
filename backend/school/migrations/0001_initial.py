# Generated by Django 5.0.3 on 2024-03-16 04:18

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(default='', max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='School',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Answers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.BooleanField(default=0)),
                ('answer', models.CharField(default='', max_length=1000)),
                ('is_True', models.BooleanField(default=0)),
                ('question', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='school.question')),
            ],
        ),
        migrations.CreateModel(
            name='Class',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(default='8A', max_length=2)),
                ('school', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='school.school')),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('email', models.EmailField(default='', max_length=100)),
                ('first_name', models.CharField(default='first', max_length=100)),
                ('last_name', models.CharField(default='last', max_length=100)),
                ('school_class', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='school.class')),
            ],
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(max_length=512)),
                ('school', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='school.school')),
            ],
        ),
        migrations.CreateModel(
            name='Grade',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('comment', models.TextField(max_length=100)),
                ('grade', models.IntegerField(default=2)),
                ('date', models.DateField(auto_now=True)),
                ('holder', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='school.student')),
                ('subject', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='school.subject')),
            ],
        ),
        migrations.CreateModel(
            name='exams',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('date', models.DateField(auto_now=True)),
                ('subject', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='school.subject')),
            ],
        ),
        migrations.AddField(
            model_name='class',
            name='subjects',
            field=models.ManyToManyField(related_name='subjects', to='school.subject'),
        ),
        migrations.CreateModel(
            name='Teacher',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=100)),
                ('first_name', models.CharField(default='first', max_length=100)),
                ('last_name', models.CharField(default='last', max_length=100)),
                ('school', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='school.school')),
                ('subject', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='school.subject')),
            ],
        ),
        migrations.CreateModel(
            name='Test',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField(default='', max_length=100)),
                ('Class', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='school.class')),
                ('subject', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='school.subject')),
                ('teacher', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='school.teacher')),
            ],
        ),
        migrations.AddField(
            model_name='question',
            name='test',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='school.test'),
        ),
        migrations.CreateModel(
            name='Log',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('message', models.CharField(default='User Alt Tabbed', max_length=100)),
                ('user', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='school.student')),
                ('test', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='school.test')),
            ],
        ),
    ]
