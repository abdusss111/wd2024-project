import json
from notification.serializers import NotificationModelSerializer
from notification.models import Notification
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status