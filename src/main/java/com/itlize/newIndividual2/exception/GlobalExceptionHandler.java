package com.itlize.newIndividual2.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.itlize.newIndividual2.domain.ErrorResponse;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(UserNotFoundException.class)
	public ResponseEntity<ErrorResponse> userException(Exception ex){
		ErrorResponse error = new ErrorResponse();
        error.setErrorCode(404);
        error.setMessage(ex.getMessage());
        return new ResponseEntity<ErrorResponse>(error, HttpStatus.NOT_FOUND);
	}

}
