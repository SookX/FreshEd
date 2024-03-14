from rest_framework import serializers
from .models import Test, Exercise, Answers

class CombinedSerializer(serializers.Serializer):
    tests = serializers.SerializerMethodField()
    exercises = serializers.SerializerMethodField()
    answers = serializers.SerializerMethodField()

    def get_tests(self, obj):
        tests = Test.objects.all()
        serializer = TestSerializer(tests, many=True)
        return serializer.data

    def get_exercises(self, obj):
        exercises = Exercise.objects.all()
        serializer = ExerciseSerializer(exercises, many=True)
        return serializer.data

    def get_answers(self, obj):
        answers = Answers.objects.all()
        serializer = AnswersSerializer(answers, many=True)
        return serializer.data

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ['id', 'title']

class AnswersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answers
        fields = ['id', 'name', 'ans']

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['id', 'name', 'question']
