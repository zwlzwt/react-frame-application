BIN ?= node_modules/.bin

run:
	@$(BIN)/nodemon server.js
.PHONY: run

# if we have lint already
lint:
	@$(BIN)/eslint --config eslint.json src webpack.config.js server.js
.PHONY: lint

build:
	@rm -fr dist
	@$(BIN)/webpack --progress --config webpack.config.pro.js
.PHONY: build
