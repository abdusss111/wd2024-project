# Generated by Django 5.0.3 on 2024-04-20 19:15

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0009_alter_user_managers'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='user',
            managers=[
            ],
        ),
        migrations.RemoveField(
            model_name='user',
            name='is_anonymous',
        ),
        migrations.RemoveField(
            model_name='user',
            name='is_authenticated',
        ),
        migrations.AddField(
            model_name='user',
            name='date_joined',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Date joined'),
        ),
        migrations.AddField(
            model_name='user',
            name='is_active',
            field=models.BooleanField(default=True, verbose_name='Is active'),
        ),
        migrations.AddField(
            model_name='user',
            name='is_staff',
            field=models.BooleanField(default=False, verbose_name='Is staff'),
        ),
        migrations.AddField(
            model_name='user',
            name='last_login',
            field=models.DateTimeField(blank=True, null=True, verbose_name='last login'),
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=254, unique=True, verbose_name='Email address'),
        ),
        migrations.AlterField(
            model_name='user',
            name='isLeader',
            field=models.BooleanField(default=False, verbose_name='Is Leader'),
        ),
        migrations.AlterField(
            model_name='user',
            name='lastname',
            field=models.CharField(blank=True, max_length=50, verbose_name='Last Name'),
        ),
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(max_length=50, verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=128, verbose_name='password'),
        ),
        migrations.AlterField(
            model_name='user',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='', verbose_name='Photo'),
        ),
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(max_length=50, unique=True, verbose_name='Username'),
        ),
    ]