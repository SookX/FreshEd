#from rest_framework import serializers
#from .models import Test, Question, Answers
#
#class CombinedSerializer(serializers.Serializer):
#    tests = serializers.SerializerMethodField()
#
#    def get_tests(self, obj):
#        tests = Test.objects.all()
#        serialized_tests = []
#        for test in tests:
#            exercises = Question.objects.filter(question__in=[test])
#            serialized_exercises = []
#            for exercise in exercises:
#                answers = Answers.objects.filter(ans__in=[exercise])
#                #option = exercise.objects.filter()
#                serialized_answers = []
#                for answer in answers:
#                    serialized_answers.append({
#                        'id': answer.id,
#                        'name': answer.name
#                    })
#
#                #option = Exercise.optionOne
#                option = option_state.objects.filter(option_m=exercise.id).first()
#                if option:
#                    option_value = option.option_s
#                else:
#                    option_value = False
#                serialized_exercises.append({
#                    'id': exercise.id,
#                    'name': exercise.name,
#                    'Option': option_value,
#                    'answers': serialized_answers
#                })
#            serialized_tests.append({   
#                'id': test.id,
#                'title': test.title,
#                'exercises': serialized_exercises
#            })
#        return serialized_tests
#
from rest_framework import serializers
from .models import Test, Question, Answers


class testSerializer(serializers.Serializer):
    tests = serializers.SerializerMethodField()

    def get_tests(self, obj):
        tests = Test.objects.all()
        serialized_tests = []
        print("TESTS")
        for test in tests:
            exercises = Question.objects.filter(test=test)
            serialized_exercises = []
            for exercise in exercises:
                answers = Answers.objects.filter(question=exercise)
                serialized_answers = []
                for answer in answers:
                    serialized_answers.append({
                        'id': answer.id,
                        'answer': answer.answer,
                        'is_True': answer.is_True
                    })

                serialized_exercises.append({
                    'id': exercise.id,
                    'question': exercise.question,
                    'answers': serialized_answers
                })
            serialized_tests.append({
                'id': test.id,
                'title': test.title,
                'exercises': serialized_exercises
            })
        return serialized_tests
