from django.urls import path, re_path
from user.views import UserDetailView
from .views import user_list_by_team, MyTokenObtainPairView, user_detail_by_username
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('users/team/<int:team_id>', user_list_by_team),
    path('login/', MyTokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
    path('user/<str:username>', UserDetailView.as_view()),


]
