from django.http.response import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User
from .serializer import UserSerializer, UserSerializerModel


@api_view(["GET", "POST"])
def user_list_by_team(request, team_id):
    if request.method == "GET":
        users_by_team = User.objects.filter(team_id=team_id)
        serializer = UserSerializer(users_by_team, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)
