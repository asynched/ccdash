from graphene import ObjectType, List, Field, UUID
from graphene_django import DjangoObjectType

from core.models import Task


class TaskType(DjangoObjectType):
    """
    A representation of a task for the back-end.
    Represents a subject's task and it's info in the schema.
    """

    class Meta:
        model = Task
        fields = ("id", "title", "content", "due_date")


class TaskQueries(ObjectType):
    all_tasks = List(TaskType)
    task = Field(TaskType, id=UUID(required=True))

    def resolve_all_tasks(root, info):
        return Task.objects.all()

    def resolve_task(root, info, id):
        return Task.objects.get(id=id)
