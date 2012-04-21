test:
	@./node_modules/.bin/mocha -w --reporter list --require tobi should --globals encoding --timeout 10000

.PHONY: test
