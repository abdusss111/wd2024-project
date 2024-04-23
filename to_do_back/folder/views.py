from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Folder
from .serializer import FolderSerializerModel


class FolderListAPIView(APIView):

    queryset = Folder.objects.all()
    serializer_class = FolderSerializerModel

    def get(self, request, user_id):
        folders = Folder.objects.filter(id=user_id)
        serializer = FolderSerializerModel(folders, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = FolderSerializerModel(data=request.data)
        if serializer.is_valid():
            serializer.save()  # insert into ...
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)
