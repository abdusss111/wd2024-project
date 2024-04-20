from django.contrib import admin
from .models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('name', 'lastname', 'email', 'team', 'isLeader', 'photo')
    list_filter = ('team', 'isLeader')
    search_fields = ('name', 'lastname', 'email')


