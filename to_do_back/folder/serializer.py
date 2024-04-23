from rest_framework import serializers
from .models import Folder


class FolderSerializerModel(serializers.ModelSerializer):
    name = serializers.CharField(max_length=50, required=True)
    user_id = serializers.IntegerField()

    class Meta:
        model = Folder
        fields = ("id", "name", "user_id")