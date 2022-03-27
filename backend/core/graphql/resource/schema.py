from graphene import ObjectType, List
from graphene_django import DjangoObjectType

from core.models import Resource


class ResourceType(DjangoObjectType):
    """
    A representation of a resource for the back-end.
    This type is mainly used to manage subject resources
    such as PDFs, videos, etc.
    """

    class Meta:
        model = Resource
        fields = ("id", "title", "description", "url")


class ResourceQueries(ObjectType):
    all_resources = List(ResourceType)

    def resolve_resources(root, info):
        return Resource.objects.all()
