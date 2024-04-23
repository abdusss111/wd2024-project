from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import TaskSerializer
from .models import Task


@api_view(["GET", "POST"])
def task_list_by_user(request, user_id):
    if request.method == "GET":
        tasks = Task.objects.filter(created_by=user_id)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)  # Changed status
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


