from django.contrib import admin

from core.models import (
    Subject,
    Teacher,
    Resource,
    Task,
    Schedule,
)


@admin.register(Subject)
class SubjectAdmin(admin.ModelAdmin):
    list_display = ("name", "created_at", "updated_at")
    list_filter = ("created_at", "updated_at")
    search_fields = ("name",)


@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display = ("name", "created_at", "updated_at")
    list_filter = ("created_at", "updated_at")
    search_fields = ("name",)


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ("title", "subject", "due_date", "created_at", "updated_at")
    list_filter = ("created_at", "updated_at")
    search_fields = ("title",)


@admin.register(Resource)
class ResourceAdmin(admin.ModelAdmin):
    list_display = ("title", "subject", "created_at", "updated_at")
    list_filter = ("created_at", "updated_at")
    search_fields = ("title",)


@admin.register(Schedule)
class ScheduleAdmin(admin.ModelAdmin):
    list_display = ("weekday", "subject", "created_at", "updated_at")
    list_filter = ("created_at", "updated_at")
    search_fields = ("weekday",)
