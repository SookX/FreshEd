from django.urls import path 
from .views import test, exercise, answer
from . import views

urlpatterns = [
    path('api/test/', test, name = 'test'),
    path('api/exercise/', exercise, name = 'exercise'),
    path('api/answer/', answer, name = 'answer'),
    # -------------------------------------------
    path('addSchool/', views.addSchool)
]