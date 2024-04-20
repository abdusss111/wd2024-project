from django.urls import path, re_path
from team.views import team_list, team_detail

urlpatterns = [
    path('teams/<int:pk>', team_detail)
]