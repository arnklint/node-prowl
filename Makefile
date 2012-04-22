test:
	@./node_modules/.bin/mocha -w --reporter list --require should --globals encoding --timeout 10000

publish:
	@npm publish .

.PHONY: test
