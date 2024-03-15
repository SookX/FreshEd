from django.urls import path 
from .views import createClass, createTeacher, combined_data
from . import views

urlpatterns = [
    path('createClass/', createClass, name = 'createClass'),
    path('createTeacher/', createTeacher, name = 'createTeacher'),
    path('addSchool/', views.addSchool),
    path('api/combined/', views.combined_data, name='combined_api'),
]