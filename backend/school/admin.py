from django.contrib import admin
from .models import Test, Exercise, Answers

# Register your models here.
admin.site.register(Test)
admin.site.register(Exercise)
admin.site.register(Answers)