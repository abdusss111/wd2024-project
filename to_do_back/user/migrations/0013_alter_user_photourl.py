# Generated by Django 5.0.4 on 2024-04-23 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0012_remove_user_photo_user_photourl'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='photoUrl',
            field=models.CharField(blank=True, max_length=5555, null=True),
        ),
    ]
