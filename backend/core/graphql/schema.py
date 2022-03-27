from graphene import Schema

from core.graphql.subject.schema import SubjectQueries
from core.graphql.resource.schema import ResourceQueries


class Query(
    SubjectQueries,
    ResourceQueries,
):
    ...


schema = Schema(query=Query)
