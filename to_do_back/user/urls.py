from django.urls import path
from .views import user_list_by_team

urlpatterns = [
    path('users/team/<int:team_id>', user_list_by_team)
]

SECRET_KEY = 'django-insecure-oeb+^_)a$h%qn31wp!$s#2h6=$$$5&sy6-y488t&j-3@+kkr-r'
