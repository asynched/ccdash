from graphene_django import DjangoObjectType
from graphene import ObjectType, List, Field, UUID

from core.models import Teacher


class TeacherType(DjangoObjectType):
    """
    A representation of a teacher for the back-end.
    Represents a teacher and it's info in the schema.
    """

    class Meta:
        model = Teacher
        fields = ("id", "name", "profile_image")


class TeacherQueries(ObjectType):
    all_teachers = List(TeacherType)
    teacher = Field(TeacherType, id=UUID(required=True))

    def resolve_all_teachers(root, info):
        return Teacher.objects.all()

    def resolve_teacher(root, info, id):
        return Teacher.objects.get(id=id)
