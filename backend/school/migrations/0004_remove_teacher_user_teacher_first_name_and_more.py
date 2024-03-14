# Generated by Django 5.0.3 on 2024-03-14 23:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("school", "0003_remove_class_homeworks_remove_student_student_class_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="teacher",
            name="user",
        ),
        migrations.AddField(
            model_name="teacher",
            name="first_name",
            field=models.CharField(default="first", max_length=100),
        ),
        migrations.AddField(
            model_name="teacher",
            name="last_name",
            field=models.CharField(default="last", max_length=100),
        ),
        migrations.AlterField(
            model_name="teacher",
            name="classes",
            field=models.ManyToManyField(related_name="teachers", to="school.class"),
        ),
    ]
