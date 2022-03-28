from graphene import Schema

from core.graphql.task.schema import TaskQueries
from core.graphql.teacher.schema import TeacherQueries
from core.graphql.subject.schema import SubjectQueries
from core.graphql.resource.schema import ResourceQueries


class Query(
    SubjectQueries,
    ResourceQueries,
    TeacherQueries,
    TaskQueries,
):
    """
    Root query for the GraphQL schema.
    """

    pass


schema = Schema(query=Query)
