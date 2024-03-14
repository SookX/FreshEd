from rest_framework import serializers
from .models import Test, Answers, Exercise

class testSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ['id', 'title']

class answersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answers
        fields = ['id', 'name', 'ans']

class exerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['id', 'name', 'question']
