from graphene import Schema
from core.graphql.subject.schema import SubjectQueries


class Query(
    SubjectQueries,
):
    ...


schema = Schema(query=Query)
