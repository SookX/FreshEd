from rest_framework import serializers
from .models import Test, Exercise, Answers, option_state

class CombinedSerializer(serializers.Serializer):
    tests = serializers.SerializerMethodField()

    def get_tests(self, obj):
        tests = Test.objects.all()
        serialized_tests = []
        for test in tests:
            exercises = Exercise.objects.filter(question__in=[test])
            serialized_exercises = []
            for exercise in exercises:
                answers = Answers.objects.filter(ans__in=[exercise])
                #option = exercise.objects.filter()
                serialized_answers = []
                for answer in answers:
                    serialized_answers.append({
                        'id': answer.id,
                        'name': answer.name
                    })

                #option = Exercise.optionOne
                option = option_state.objects.first()
                if option:
                    option_value = option.option_s
                else:
                    option_value = False
                serialized_exercises.append({
                    'id': exercise.id,
                    'name': exercise.name,
                    'Option': option_value,
                    'answers': serialized_answers
                })
            serialized_tests.append({   
                'id': test.id,
                'title': test.title,
                'exercises': serialized_exercises
            })
        return serialized_tests
