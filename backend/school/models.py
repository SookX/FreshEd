from django.db import models
from user_profile.models import UserAccount

#FIX THIS and add homework and exams

# class Grade(models.Model):
#     id = models.AutoField(primary_key=True)
#     HOMEWORK = 'HW'
#     TEST = 'TE'
#     FINAL_EXAM = 'FE'
#     GRADE_TYPES = [
#         (HOMEWORK, 'Homework'),
#         (TEST, 'Test'),
#         (FINAL_EXAM, 'Final Exam'),
#     ]

#     type = models.CharField(
#         max_length=2,
#         choices=GRADE_TYPES,
#         default=HOMEWORK,
#     )
    
#     comment = models.TextField(max_length=100)
#     grade = models.Choices('A', 'B', 'C', 'D', 'F')
#     time_preiod = models.Choices('current', 'semester', 'final')
#     date = models.DateField(auto_now=True)
#     Subject = models.ForeignKey('Subject', on_delete=models.CASCADE)
    
#     def __str__(self):
#         return self.type
    
# class Teacher(models.Model):
#     id = models.AutoField(primary_key=True)
#     user = models.OneToOneField('User', on_delete=models.CASCADE)
#     classes = models.ManyToManyField('Class', related_name='classes')

#     def __str__(self):
#         return self.name

# class Subject(models.Model):
#     id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=100)
#     description = models.TextField()
#     teachers = models.ManyToManyField(Teacher, related_name='subjects')
#     grades = models.ManyToManyField(Grade, related_name='grades')

#     def __str__(self):
#         return self.name

# class Student(models.Model):
#     id = models.AutoField(primary_key=True)
#     user = models.OneToOneField(UserAccount, on_delete=models.CASCADE)
#     subjects = models.ManyToManyField(Subject, related_name='students')
#     exams = models.ManyToManyField('Exams', related_name='exams')
#     homework = models.ManyToManyField('Homework', related_name='homework')
#     Student_Class = models.ForeignKey('Class', on_delete = models.CASCADE)
    
    
    
#     def __str__(self):
#         return self.name
    
# class Class(models.Model):
#     id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=100)
#     class_teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
#     students = models.ManyToManyField(Student, related_name='classes')
#     subjects = models.ManyToManyField(Subject, related_name='classes')
#     exams = models.ManyToManyField('Exams', related_name='exams')
#     homework = models.ManyToManyField('Homework', related_name='homework')
#     school = models.ForeignKey('School', on_delete=models.CASCADE)  
    
#     def __str__(self):
#         return self.name    
    
# class School(models.Model):
#     id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=100)
    
#     def __str__(self):
#         return self.name
    
#closing


class Test(models.Model):
    title = models.TextField(max_length = 1000)

    def __str__(self):
        return self.title
    
class Exercise(models.Model):
    name = models.TextField(max_length = 1000)
    question = models.ManyToManyField(Test, related_name='question')

    def __str__(self):
        return self.name

class Answers(models.Model):
    name = models.TextField(max_length = 1000)
    ans = models.ManyToManyField(Exercise, related_name='answer')

    def __str__(self):
        return self.name