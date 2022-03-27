import re as regex
from django.core.exceptions import ValidationError


class ScheduleValidator:
    def valitate_time(time: str):
        """Validates wether a given time is valid or not.

        Args:
            time (str): Time to be validated.

        Raises:
            ValidationError: Raises a validation error if the given value is not valid.
        """
        RE_TIME = r"(\d){2}:(\d){2}"

        if not regex.match(RE_TIME, time):
            raise ValidationError(
                "%(time)s is not a valid time",
                params={
                    "time": time,
                },
            )
