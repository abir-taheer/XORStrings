PROJECT = "XORStrings"
all: help

help:
	$(info ***** INSTRUCTIONS *****)
	@echo "To encode text"
	@echo "make run ARGS=\"<human|numOut> <key-filename> <text-filename>\""


run:
	@node index.js $(ARGS)

.PHONY: run