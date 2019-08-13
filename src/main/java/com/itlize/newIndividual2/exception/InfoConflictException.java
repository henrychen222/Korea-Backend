package com.itlize.newIndividual2.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT)
public class InfoConflictException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public InfoConflictException(String input) {
		super(input + " already existed!!!");
	}

}
