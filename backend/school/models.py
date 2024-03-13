from django.db import models

# Create your models here.
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