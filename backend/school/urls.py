from django.urls import path 
from .views import combined_data

urlpatterns = [
    path('api/combined/', combined_data, name='combined_data'),
]