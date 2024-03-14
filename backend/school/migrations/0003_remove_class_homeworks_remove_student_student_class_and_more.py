# Generated by Django 5.0.3 on 2024-03-14 14:57

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('school', '0002_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveField(
            model_name='class',
            name='homeworks',
        ),
        migrations.RemoveField(
            model_name='student',
            name='student_class',
        ),
        migrations.AddField(
            model_name='class',
            name='homework',
            field=models.ManyToManyField(related_name='homework', to='school.homework'),
        ),
        migrations.AddField(
            model_name='class',
            name='students',
            field=models.ManyToManyField(related_name='classes', to='school.student'),
        ),
        migrations.AddField(
            model_name='subject',
            name='grades',
            field=models.ManyToManyField(related_name='grades', to='school.grade'),
        ),
        migrations.AlterField(
            model_name='class',
            name='class_teacher',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='school.teacher'),
        ),
        migrations.AlterField(
            model_name='class',
            name='name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='class',
            name='school',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='school.school'),
        ),
        migrations.AlterField(
            model_name='grade',
            name='comment',
            field=models.TextField(max_length=100),
        ),
        migrations.AlterField(
            model_name='grade',
            name='date',
            field=models.DateField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='grade',
            name='subject',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='school.subject'),
        ),
        migrations.AlterField(
            model_name='homework',
            name='due_date',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='homework',
            name='name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='homework',
            name='subject',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='school.subject'),
        ),
        migrations.AlterField(
            model_name='school',
            name='name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='student',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='subject',
            name='name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='teacher',
            name='classes',
            field=models.ManyToManyField(related_name='classes', to='school.class'),
        ),
        migrations.AlterField(
            model_name='teacher',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
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
        migrations.AlterField(
            model_name='class',
            name='exams',
            field=models.ManyToManyField(related_name='exams', to='school.exams'),
        ),
        migrations.DeleteModel(
            name='Exam',
        ),
        migrations.AddField(
            model_name='student',
            name='Student_Class',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='school.class'),
        ),
    ]