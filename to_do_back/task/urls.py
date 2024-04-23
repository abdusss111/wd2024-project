from django.urls import path
from .views import task_list_by_user

urlpatterns = [
    path('user/<int:user_id>/tasks', task_list_by_user)
]