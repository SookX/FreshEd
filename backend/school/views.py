from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CombinedSerializer
from .serializers import Test, Exercise, Answers

@api_view(['GET'])
def combined_data(request, *args, **kwargs):
    combined_data = {
        'tests': Test.objects.all(),
        'exercises': Exercise.objects.all(),
        'answers': Answers.objects.all()
    }
    serializer = CombinedSerializer(combined_data)
    return Response(serializer.data)
