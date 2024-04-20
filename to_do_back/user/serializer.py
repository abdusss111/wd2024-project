from rest_framework import serializers
from user.models import User


class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=50, required=True)
    lastname = serializers.CharField(max_length=50, required=True)
    password = serializers.CharField(max_length=20, required=True)
    email = serializers.EmailField()
    isLeader = serializers.BooleanField()
    photo = serializers.ImageField()
    team_id = serializers.IntegerField()

    def create(self, validated_data):
        instance = User(name=validated_data.get('name'), lastname=validated_data.get('lastname'), password=validated_data.get('password'), email=validated_data.get('email'), isLeader=validated_data.get('isLeader'), photo=validated_data.get('photo'), team_id=validated_data.get('team_id'))
        instance.save()
        return instance

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name")
        instance.lastname = validated_data.get("lastname")
        instance.password = validated_data.get("password")
        instance.email = validated_data.get("email")
        instance.isLeader = validated_data.get("isLeader")
        instance.photo = validated_data.get("photo")
        instance.team_id = validated_data.get("team_id")
        instance.save()
        return instance


class UserSerializerModel(serializers.ModelSerializer):
    name = serializers.CharField(max_length=50, required=True)
    lastname = serializers.CharField(max_length=50, required=True)
    password = serializers.CharField(max_length=20, required=True)
    email = serializers.EmailField()
    isLeader = serializers.BooleanField()
    photo = serializers.ImageField()
    team_id = serializers.IntegerField()

    class Meta:
        model = User
        fields = ("id", "name", "lastname", "password", "email", "isLeader", "photo", "team_id")