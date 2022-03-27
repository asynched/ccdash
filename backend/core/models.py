from uuid import uuid4
from django.db import models

from core.validators import ScheduleValidator


class Subject(models.Model):
    id = models.UUIDField(default=uuid4, primary_key=True, editable=False)
    name = models.CharField(max_length=255)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Teacher(models.Model):
    id = models.UUIDField(default=uuid4, primary_key=True, editable=False)
    name = models.CharField(max_length=255)
    profile_image = models.URLField(max_length=512)

    subject = models.ManyToManyField(Subject, related_name="teachers")

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Task(models.Model):
    id = models.UUIDField(default=uuid4, primary_key=True, editable=False)
    title = models.CharField(max_length=255)
    content = models.TextField()
    due_date = models.DateField()

    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Schedule(models.Model):
    class Weekdays(models.TextChoices):
        MONDAY = (
            "MON",
            "Monday",
        )
        TUESDAY = (
            "TUE",
            "Tuesday",
        )
        WEDNESDAY = (
            "WED",
            "Wednesday",
        )
        THURSDAY = (
            "THU",
            "Thursday",
        )
        FRIDAY = (
            "FRI",
            "Friday",
        )

    id = models.UUIDField(default=uuid4, primary_key=True, editable=False)
    weekday = models.CharField(
        max_length=3,
        choices=Weekdays.choices,
        default=Weekdays.MONDAY,
    )
    starts = models.CharField(
        max_length=5,
        validators=[ScheduleValidator.valitate_time],
    )
    ends = models.CharField(
        max_length=5,
        validators=[ScheduleValidator.valitate_time],
    )

    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Resource(models.Model):
    id = models.UUIDField(default=uuid4, primary_key=True, editable=False)
    title = models.CharField(max_length=255)
    description = models.TextField()
    url = models.URLField(max_length=512)

    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
