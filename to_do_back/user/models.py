from django.db import models
from team.models import Team


class User(models.Model):
    name = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50, blank=True)
    password = models.CharField(max_length=20)
    email = models.EmailField()
    team = models.ForeignKey(
        Team,
        on_delete=models.CASCADE,
        related_name='users',
        null=True, blank=True
    )
    isLeader = models.BooleanField(default=False)
    photo = models.ImageField(null=True, blank=True)

    def __str__(self):
        return (
            self.name
        )



