from django.urls import path
from .views import FolderListAPIView

urlpatterns = [
    path('folders/<int:user_id>', FolderListAPIView.as_view())
]