from graphene_django import DjangoObjectType
from graphene import ObjectType, List, Field, UUID

from core.models import Subject, Resource, Teacher, Task
from core.graphql.resource.schema import ResourceType
from core.graphql.teacher.schema import TeacherType
from core.graphql.task.schema import TaskType


class SubjectType(DjangoObjectType):
    """
    A representation of a subject for the back-end.
    This contains the information about a subject
    such as math or programming, for example.
    """

    tasks = List(TaskType)
    resources = List(ResourceType)
    teacher = Field(TeacherType)

    def resolve_tasks(self, info):
        return Task.objects.filter(subject=self)

    def resolve_teacher(self, info):
        try:
            return Teacher.objects.get(subject=self)
        except:
            return None

    def resolve_resources(self, info):
        return Resource.objects.filter(subject=self)

    class Meta:
        model = Subject
        fields = ("id", "name", "about", "resources")


class SubjectQueries(ObjectType):
    all_subjects = List(SubjectType)
    subject = Field(SubjectType, id=UUID(required=True))

    def resolve_all_subjects(root, info):
        return Subject.objects.all()

    def resolve_subject(root, info, id):
        return Subject.objects.get(id=id)
