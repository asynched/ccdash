# Generated by Django 3.2.12 on 2022-03-27 05:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='resource',
            old_name='name',
            new_name='title',
        ),
    ]
