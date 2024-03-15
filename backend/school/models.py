from django.db import models
from user_profile.models import UserAccount

#FIX THIS and add homework and exams

class Grade(models.Model):
    id = models.AutoField(primary_key=True)
    HOMEWORK = 'HW'
    TEST = 'TE'
    FINAL_EXAM = 'FE'
    GRADE_TYPES = [
        (HOMEWORK, 'Homework'),
        (TEST, 'Test'),
        (FINAL_EXAM, 'Final Exam'),
    ]
    GRADE_CHOICES = [
        ('A', 'A'),
        ('B', 'B'),
        ('C', 'C'),
        ('D', 'D'),
        ('F', 'F'),
    ]
    TIME_PERIOD_CHOICES = [
        ('current', 'Current'),
        ('semester', 'Semester'),
        ('final', 'Final'),
    ]

    type = models.CharField(
        max_length=2,
        choices=GRADE_TYPES,
        default=HOMEWORK,
    )
    
    comment = models.TextField(max_length=100)
    grade = models.CharField(max_length=1, choices=GRADE_CHOICES)
    time_period = models.CharField(max_length=10, choices=TIME_PERIOD_CHOICES)
    date = models.DateField(auto_now=True)
    subject = models.ForeignKey('Subject', on_delete=models.CASCADE)
    
    
    def __str__(self):
        return self.type
    




class exams(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    date = models.DateField(auto_now=True)
    subject = models.ForeignKey('Subject', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
class Student(models.Model):
    id = models.AutoField(primary_key=True)
    
    email = models.EmailField(max_length=100)
    first_name = models.CharField(max_length=100, default='first')
    last_name = models.CharField(max_length=100 , default='last')
    school_class = models.ForeignKey('Class', on_delete=models.CASCADE)
    grades = models.ManyToManyField('Grade', related_name='grades')
    def __str__(self):
        return self.name
    
class Class(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=2, default='8A')
    subjects = models.ManyToManyField('Subject', related_name='subjects')
    school = models.ForeignKey('School', on_delete=models.CASCADE)
    
    
    def __str__(self):
        return self.name   

class Teacher(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=100)
    first_name = models.CharField(max_length=100, default='first')
    last_name = models.CharField(max_length=100 , default='last')
    subject = models.ForeignKey('Subject', on_delete=models.CASCADE)
    school = models.ForeignKey('School', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
class Subject(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=512)
    school = models.ForeignKey('School', on_delete=models.CASCADE)

    def __str__(self):
        return self.name 
    
class School(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
    
#closing


class Test(models.Model):
    title = models.TextField(max_length = 1000)

    def __str__(self):
        return self.title
    
class Exercise(models.Model):
    name = models.TextField(max_length = 1000)
    question = models.ManyToManyField(Test, related_name='question')
    #optionOne = models.BooleanField(default = False) 
    #correct_answer = models.TextField(max_length = 1000, default = "")

    def __str__(self):
        return self.name

class Answers(models.Model):
    name = models.TextField(max_length = 1000)
    ans = models.ManyToManyField(Exercise, related_name='answer')

    def __str__(self):
        return self.name
    
class option_state(models.Model):
    option_s = models.BooleanField(default = False)
    option_m = models.ManyToManyField(Exercise, related_name = 'option_m')

class correct_answer(models.Model):
    name = models.TextField(max_length = 1000)
    correct_ans = models.ManyToManyField(Exercise, related_name='correct_ans')
    
    
#for later

# class homework(models.Model):
#     id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=100)
#     due_date = models.DateField()
#     subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    
#     def __str__(self):
#         return self.name
    