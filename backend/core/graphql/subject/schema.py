from graphene_django import DjangoObjectType
from graphene import ObjectType, List, Field, UUID

from core.models import Subject, Resource
from core.graphql.resource.schema import ResourceType


class SubjectType(DjangoObjectType):
    """
    A representation of a subject for the back-end.
    This contains the information about a subject
    such as math or programming, for example.
    """

    resources = List(ResourceType)

    def resolve_resources(self, info):
        return Resource.objects.filter(subject=self)

    class Meta:
        model = Subject
        fields = ("id", "name", "resources")


class SubjectQueries(ObjectType):
    all_subjects = List(SubjectType)
    subject = Field(SubjectType, id=UUID(required=True))

    def resolve_all_subjects(root, info):
        return Subject.objects.all()

    def resolve_subject(root, info, id):
        return Subject.objects.get(id=id)
