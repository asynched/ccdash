# Helper variables for setting up
# the project.
MAKEFLAGS			:= --silent
PY					:= python
PIP					:= pip
DEPENDENCIES_FILE	:= requirements.txt
ROOT_FILE			:= manage.py

# Setup related

#>> Initialize a virtual environment
venv:
	$(PY) -m venv ./venv

#>> Activate the virtual environment
activate:
	source venv/bin/activate

#>> Install the dependencies
install:
	$(PIP) install -r $(DEPENDENCIES_FILE)

#>> Freeze the dependencies
freeze:
	$(PIP) freeze > $(DEPENDENCIES_FILE)

# Development related

#>> Start the application in development mode
dev:
	$(PY) $(ROOT_FILE) runserver

#>> Make the migrations for the app
migrations:
	$(PY) $(ROOT_FILE) makemigrations

#>> Migrate the database to the new version
migrate:
	$(PY) $(ROOT_FILE) migrate

#>> Dump database data to a JSON file
dump:
	$(PY) $(ROOT_FILE) dumpdata --format=json > dump.json
