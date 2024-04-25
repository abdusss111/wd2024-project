from django.urls import path
from notification.views import notification_list, notification_detail

urlpatterns = [
    path('notifications/', notification_list),
    path('notifications/<int:id>/', notification_detail)
]