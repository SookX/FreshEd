from django.db import models
#FIX THIS and add homework and exams

class Grade(models.Model):
    id = models.AutoField(primary_key=True)
    # HOMEWORK = 'HW'
    # TEST = 'TE'
    # FINAL_EXAM = 'FE'
    # GRADE_TYPES = [
    #     (HOMEWORK, 'Homework'),
    #     (TEST, 'Test'),
    #     (FINAL_EXAM, 'Final Exam'),
    # ]

    # type = models.CharField(
    #     max_length=2,
    #     choices=GRADE_TYPES,
    #     default=HOMEWORK,
    # )
    
    comment = models.TextField(max_length=100)
    grade = models.IntegerField(default = 2, null = False)
    date = models.DateField(auto_now=True)
    subject = models.ForeignKey('Subject', on_delete=models.CASCADE)
    holder = models.ForeignKey('Student', on_delete=models.CASCADE, default = '', null = False)
    
    
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
    
    email = models.EmailField(max_length=100, default = "", null = False)
    first_name = models.CharField(max_length=100, default='first')
    last_name = models.CharField(max_length=100 , default='last')
    school_class = models.ForeignKey('Class', on_delete=models.CASCADE)
    def __str__(self):
        return self.name
    
class Log(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey('Student', on_delete=models.CASCADE, default = "", null = False)
    test = models.ForeignKey('Test', on_delete=models.CASCADE, default = "", null = False)
    message = models.CharField(max_length = 100, default = 'User Alt Tabbed', null = False)
    
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
    title = models.TextField(max_length = 100, default = "", null = False)
    subject = models.ForeignKey('Subject', on_delete=models.CASCADE, default = "", null = False)
    teacher = models.ForeignKey('Teacher', on_delete=models.CASCADE, default = "", null = False)
    Class = models.ForeignKey('Class', on_delete=models.CASCADE, default = "", null = False)

    def __str__(self):
        return self.title
    
class Question(models.Model):
    test = models.ForeignKey(Test, on_delete=models.CASCADE)
    question = models.CharField(max_length = 200, default = "", null = False)
    

    def __str__(self):
        return self.name
    

class Answers(models.Model):
    type = models.BooleanField(default=0)  
    answer = models.CharField(max_length=1000, default="") 
    is_True = models.BooleanField(default=0)
    question = models.ForeignKey('Question', on_delete=models.CASCADE, null=True)  

    def __str__(self):
        return self.name

    def __str__(self):
        return self.name
    
